import { Component, OnInit } from '@angular/core';
import { GoldDataService } from '../gold-data.service';
import { ComtwoComponent } from '../comtwo/comtwo.component';

@Component({
  selector: 'app-comzero',
  templateUrl: './comzero.component.html',
  styleUrls: ['./comzero.component.css']
})
export class ComzeroComponent implements OnInit {
  gold:number = 0;
  constructor(private _goldDataService: GoldDataService) { }
  ngOnInit() { this._goldDataService.ninja_gold.subscribe((gold) => { this.gold += gold; }); }
  goReset(){ 
    this.gold = 0; 
    //ComtwoComponent.prototype.clearMessages(); this was very amusing, I know maybe I shouldnt
    // be calling another components functions from this component, 
  }
}
