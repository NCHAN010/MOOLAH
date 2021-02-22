import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { Router } from '@angular/router';

import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  user:any=
  {
    "userName" :"moolah",
    "password":"password"
  };

  
  response:any;
  constructor(private service:JwtClientService , private router: Router  ) { }

  
  ngOnInit() {
    this.getAccessToken(this.user);
  }

  public getAccessToken(user)
  {
let resp=this.service.generateToken(user);
 resp.subscribe(data=>this.accessApi(data)); }

 public accessApi(token)
 {
   let resp=this.service.welcome(token);
   resp.subscribe(data=>this.response=data);

 }

 



}
