import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LookUpService } from '../look-up.service';

@Component({
  selector: 'app-find-component',
  templateUrl: './find-component.component.html',
  styleUrls: ['./find-component.component.css']
})
export class FindComponentComponent implements OnInit {
  constructor(private _lookUp: LookUpService) { }
  ngOnInit() { }
  
  errors = false;
  user: '';
  user_score: 0;

  goGetem(e: Event, field: NgForm){
    e.preventDefault();
    this._lookUp
      .findUser(this.user)
        .subscribe((response) => {
            this.user_score = response['public_repos']+response['followers'];
          },
          (err) =>{ this.errors = true; console.log(err); }
        );
    this.errors = false;
    field.reset();
  }
}
