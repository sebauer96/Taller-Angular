import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = {
    email: '',
    password: ''
  }
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.email === 'sbauer@practia.global' && this.user.password === '123456') {
      localStorage.setItem("email", this.user.email);
      this.route.navigateByUrl("/dashboard")
    }
  }

}
