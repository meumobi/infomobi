import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'polls',
  templateUrl: 'polls.html'
})
export class PollsComponent implements OnInit {
  @Input ("item") item;
  result: Array<Object>;

  constructor() {
    console.log('Hello PollsComponent Component');
  }

  ngOnInit() {
    this.item["total"] = 5;
    this.item["status"] = "voted";
    this.result = [
      {
        "label": "Não",
        "myVote": true,
        "ratio": "66%"
      },
      {
        "label": "Sim",
        "myVote": false,
        "ratio": "34%"
      }
    ]
    console.log(this.item);
  }
}
