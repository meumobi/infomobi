import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from '@providers/api';
import { MeuToastService } from '@shared/meu-toast.service';
import { TranslateService } from '@ngx-translate/core';

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
  myVote: string;
  
  constructor(
    private storage: Storage,
    private apiService: ApiService,
    public meutToastService: MeuToastService,
    private translateService: TranslateService,
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

            this.item = this.polls[this.item._id];
            console.log('Poll loaded from localStorage');
          } else {
            this.item.status = status;
            this.item.total = this.totalVotes(this.item);
          }
          if (this.item.status !== this.statuses.open) {
            this.item.results = this.computeResults(this.item);
          }
        }
      )
      console.log(this.item);
    }
  }
  
  getPolls() {
    return this.storage.get("polls")
    .then(
      (data) => {
        if (data) {
          this.polls = data;
        }
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
    console.log(now + " " + end_date);
    const hasExpired = (now - end_date) > 0;
    return hasExpired;   
  }
  
  hasVoted() {
    console.log(this.item);
    let hasVoted = this.item.voted !== null || !!this.polls[this.item._id];
    console.log('Poll is voted [Object]: ' + (this.item.voted !== null));
    console.log('Poll is voted [locaStorage]: ' + !!this.polls[this.item._id]);
    console.log('Has voted ? ' + hasVoted);
    return hasVoted;
  }
  
  computeResults(item) {
    const results = [];
    let result = {};
    const total = this.totalVotes(item);
    console.log('Total votes: ' + total);
    for (var x in item.results) {
      if (!isNaN(item.results[x].value)) {
        result = item.results[x];
        result["myVote"] = (item.voted !== null) ? item.voted.values.hasOwnProperty(x) : false;
        result["label"] = item.options[result["value"]];
        result["ratio"] = (total !== 0) ? ((item.results[x].votes / total) * 100).toFixed(2) + '%' : '0%';
        results.push(result);
      }
    }
    return results;
  }
  
  totalVotes(item) {
    let total = 0;
    for (var x in item.results) {
      console.log(x);
      total += item.results[x].votes;
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
      //TODO clear ionicstorage
    }    
    console.log('Get Status: ' + status);
    return status;
  }

  paramify() {
    const value = {};
    value[this.myVote] = 1;
    let obj = {
      id: this.item._id,
      params: {
        value: value
      }
    }
    return obj;
  }
  
  vote() {
    this.apiService.vote(this.paramify())
    .then(
      (data) => {
        this.meutToastService.present(this.translateService.instant('Successfully voted'));
        this.item.status = this.statuses.voted;
        this.item.total = this.totalVotes(data);
        this.item.results = this.computeResults(data);
        this.item.voted = data.voted;
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
