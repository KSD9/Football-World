import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../core/services/Auth/auth.service';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.register(email, password);
this.route.navigate(['/home']);
}}
