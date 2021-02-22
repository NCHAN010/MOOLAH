import { Component, OnInit } from '@angular/core';
import { moolahUser } from 'src/moolahuser';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
constructor(private service: JwtClientService , private router: Router) { }

  user:any=
    {
      "userName" :"ADMIN",
      "password":"password123"
      };
  moolahuser: moolahUser = new moolahUser();
response:any;
  submitted = false;
  colors = [
       'Pink',
       'Blue',
        'Yellow',
       'Blue',

     ];
 ngOnInit() {
  }new_moolahUser(): void {
    this.submitted = false;
    this.moolahuser = new moolahUser();
  }

    
   
    
        gotoList() {
    this.router.navigate(['/']);
  }
 
 


 list()
      {
      this.router.navigate(['/']);
      }
      onSubmit() {
    this.submitted = true;
    this.save();    
  }

  save() {
    this.service
    .create_moolahUser(this.moolahuser).subscribe(data => {
         console.log(data);
         this.moolahuser = new moolahUser();
         this.gotoList(); },
      error => console.log(error));


    }

    

 

    
 

}