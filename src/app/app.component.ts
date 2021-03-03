import { Component } from '@angular/core';
import { User } from './domain/user';
import { GetTokenService } from './services/get-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tronicMaintenances';
  public user:User;


  constructor( private getTokenService:GetTokenService ){}

  ngOnInit(): void {
    this.user = new User("admin","password");
    this.getTokenService.loginUser(this.user).subscribe(data => localStorage.setItem("token", data.token))
  }

  
   
 

}
