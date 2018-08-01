import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LookUpService {
  constructor(private _httplink: HttpClient) { }

  findUser = function(user) {
    return this._httplink.get(`https://api.github.com/users/${user}`);
  };
}
