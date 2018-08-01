import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class GoldDataService {
  ninja_gold: BehaviorSubject<number> = new BehaviorSubject(0);
  message: BehaviorSubject<string> = new BehaviorSubject('');

  farm(){
    let sum = Math.floor(Math.random() * 5) + 2;
    let message = `You made ${sum} gold from the Farm`;
    this.ninja_gold.next(sum);
    this.message.next(message);
  }
  cave(){
    let sum = Math.floor(Math.random() * 10) + 5;
    let message = `You made ${sum} gold from the Cave`;
    this.ninja_gold.next(sum);
    this.message.next(message);
  }
  casino(){
    let sum = Math.floor(Math.random() * 100) - 100;
    let message = sum > 0? `You made ${sum} gold from the Casino` : `You lost ${sum} old from the Casino`;
    this.ninja_gold.next(sum);
    this.message.next(message);
  }
  house(){
    let sum = Math.floor(Math.random() * 15) + 7;
    let message = `You made ${sum} gold from the House`;
    this.ninja_gold.next(sum);
    this.message.next(message);
  }
  reset(gold){
  }
  constructor() { }
}
