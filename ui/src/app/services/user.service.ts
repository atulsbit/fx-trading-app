import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { backendUrl } from '../constants';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  register(user: User) {
    return this.httpClient.post(backendUrl.authService.register, user) as any;
  }

}




