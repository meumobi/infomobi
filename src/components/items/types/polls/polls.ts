import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from '@providers/api';
import { MeuToastService } from '@shared/meu-toast.service';

@Component({
  selector: 'polls',
  templateUrl: 'polls.html'
})
export class PollsComponent implements OnInit {
  @Input ("item") item;
  polls = {};
  statuses = {
    open: 'open',
    closed: 'closed',
    voted: 'voted'
  }
  
  constructor(
    private storage: Storage,
    private apiService: ApiService,
    public meutToastService: MeuToastService
  ) {
    console.log('Hello PollsComponent Component');
  }
  
  ngOnInit() {
    if (this.item) {
      this.getPolls()
      .then(
        () => {
          let status = this.getStatus();
          if (status == this.statuses.voted && !!this.polls[this.item._id]) {
            this.item = this.polls[this.item._id];
            console.log('Poll loaded from localStorage');
          } else {
            this.item.status = status;
            this.item.total = this.totalVotes();
          }
          if (this.item.status !== this.statuses.open) {
            this.item.results = this.computeResults();
          }
        }
      )
      this.item["total"] = 5;
      this.item["status"] = "voted";
      console.log(this.item);
    }
  }
  
  getPolls() {
    return this.storage.get("polls")
    .then(
      (data) => {
        this.polls = data;
      }
    )
  }
  
  
  addPoll() {
    this.polls[this.item._id] = this.item;
    this.storage.set('polls', this.polls);
  }
  
  hasExpired() {
    const date = this.item.end_date;
    const now = Date.now();
    const end_date = date * 1000; // convert sec. to ms
    const hasExpired = (now - end_date) > 0;
    return hasExpired;   
  }
  
  hasVoted() {
    let hasVoted = this.item.voted !== null || !!this.polls[this.item._id];
    console.log('Poll is voted [Object]' + (this.item.voted !== null));
    console.log('Poll is voted [locaStorage]' + !!this.polls[this.item._id]);
    console.log('Has voted ? ' + hasVoted);
    return hasVoted;
  }
  
  computeResults() {
    const results = [];
    let result = {};
    const total = this.totalVotes();
    console.log('Total votes: ' + total);
    for (var x in this.item.results) {
      if (!isNaN(this.item.results[x].value)) {
        result = this.item.results[x];
        result["myVote"] = (this.item.voted !== null) ? this.item.voted.values.hasOwnProperty(x) : false;
        result["label"] = this.item.options[result["value"]];
        result["ratio"] = (total !== 0) ? (parseInt(this.item.results[x].votes) / total) * 100 + '%' : '0%';
        results.push(result);
      }
    }
    return results;
  }
  
  totalVotes() {
    let total = 0;
    for (var x in this.item.results) {
      console.log(x);
      total += this.item.results[x].values;
    }
    return total;
  }
  
  getStatus() {
    const statuses = this.statuses;    
    let status = statuses.open;
    if (this.hasExpired()) {
      status = statuses.closed;
    } else if (this.hasVoted()) {
      status = statuses.voted;
    }    
    console.log('Get Status: ' + status);
    return status;
  }
  
  vote() {
    this.apiService.vote(this.item)
    .then(
      (data) => {
        console.log(data);
        this.meutToastService.present(data);
        this.item.status = this.statuses.voted;
        this.item.total = this.totalVotes();
        this.item.results = this.computeResults();
        this.item.voted = data.data.voted;
        this.item.status = this.statuses.voted;
        this.addPoll();
      }
    )
    .catch(
      (data) => {
        this.meutToastService.present(data);
        console.log(data);
      }
    )
  }
}
