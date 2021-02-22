import { Component, OnInit } from '@angular/core';
import { moolahUser } from 'src/moolahuser';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-moolahuserhomepage',
  templateUrl: './moolahuserhomepage.component.html',
  styleUrls: ['./moolahuserhomepage.component.css']
})
export class MoolahuserhomepageComponent implements OnInit {

   
  username: string;
   password: string;
   userId:string;
 // id:string;
  moolahuser: moolahUser;
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) {}

  ngOnInit() {

   
    this.moolahuser = new moolahUser();
    this.username = this.route.snapshot.params['username'];
    this.password = this.route.snapshot.params['password'];
    this.userId = this.route.snapshot.params['userId'];
    if(this.username!= null)
    {
    this.service.login_moolahUser(this.username,this.password)
    .subscribe(data => {
        console.log(data);
        this.moolahuser = data;
       // this.id= this.moolahuser.userId;
      }, error => console.log(error));

    }
    else{
      this.service.getUserHomePageById(this.userId).subscribe(data=>
        {
          console.log(data);
          this.moolahuser =data;
        },
        error => console.log(error))
    }
  }
   create_portfolio(id:string)
   {
     this.router.navigate(['create_PF',id]);
     
   }

}
