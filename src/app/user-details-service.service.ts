import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsServiceService {

  constructor() { }
  userData = {
    name: '',
    surname: '',
    email: '',
    town: '',
    suburb: '',
    street: '',
    code: '',
    password: '',
    confirmPassword: '',
    phone: ''
  };
}
