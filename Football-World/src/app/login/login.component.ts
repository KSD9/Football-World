import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService , private route: Router) { }

  ngOnInit() {
  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
this.authService.login(email, password);
this.route.navigate(['/home']);
}
}
