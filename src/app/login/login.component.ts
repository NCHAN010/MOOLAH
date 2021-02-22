import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { moolahUser } from 'src/moolahuser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService , private router: Router) { }
  moolahuser: moolahUser = new moolahUser();

  submitted = false;


  new_moolahUser(): void {
    this.submitted = false;
    this.moolahuser = new moolahUser();
  }

  ngOnInit() {
  }
   login_moolahUser(username: string, password: string) {
          
          


             this.router.navigate(['login', username, password]);
          }
         

}
