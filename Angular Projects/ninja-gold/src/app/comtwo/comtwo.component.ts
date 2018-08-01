import { Component, OnInit } from '@angular/core';
import { GoldDataService } from '../gold-data.service';

@Component({
  selector: 'app-comtwo',
  templateUrl: './comtwo.component.html',
  styleUrls: ['./comtwo.component.css']
})
export class ComtwoComponent implements OnInit {
  messages = [];
  constructor(private _goldDataService: GoldDataService) { }
  ngOnInit() { this._goldDataService.message.subscribe((message) => { this.messages.push(message); }) }
  clearMessages(){ this.messages = []; }
}
