import { Component, OnInit } from '@angular/core';
import { GoldDataService } from '../gold-data.service';

@Component({
  selector: 'app-comone',
  templateUrl: './comone.component.html',
  styleUrls: ['./comone.component.css']
})
export class ComoneComponent implements OnInit {
  constructor(private _goldDataService: GoldDataService) { }
  
  goFarm(){ this._goldDataService.farm(); };
  goCave(){ this._goldDataService.cave(); };
  goCasino(){ this._goldDataService.casino(); };
  goHouse(){ this._goldDataService.house(); };
  
  ngOnInit() { }
}
