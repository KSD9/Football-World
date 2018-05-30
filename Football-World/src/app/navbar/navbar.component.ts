import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }
 isLoggedUser(){
  if(this.authService.isLogged() != true){
    return false;
}
else {
    
    return true;
   
 }

}
logout(){
  sessionStorage.clear()
}
}
