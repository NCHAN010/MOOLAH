import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { constantcom } from '../constantcom';
import { JwtClientService } from '../jwt-client.service';
import { moolahUser } from 'src/moolahuser';

@Component({
  selector: 'app-create-constant-c',
  templateUrl: './create-constant-c.component.html',
  styleUrls: ['./create-constant-c.component.css']
})
export class CreateConstantCComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: JwtClientService ,private User_service:UserService, private router: Router) { }
 current_state = [
       'Active',
       'Inactive',
       ];
  id: string;
  yearArr;
  monthArr;
  dayArr;
  constantC : constantcom= new constantcom();
  moolahuser : moolahUser = new moolahUser();
 current_OrgId :string;
 current_title:string;
 
  response:any;
myDuration;
    submitted = false;
 ngOnInit() {
   this.submitted = false;
    this.constantC = new constantcom;
  
    this.id = this.route.snapshot.params['id'];
    this.yearArr = Array(40).fill(0).map((x,i)=>i+0); 
    this.monthArr=Array(12).fill(0).map((x,i)=>i+0);
    this.dayArr=Array(50).fill(0).map((x,i)=>i+0); 
    
          
    this.service.get_moolahUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.moolahuser = data;
      }, error => console.log(error));



  }


      onSubmit() {
        console.log("this current component",this.constantC.currAmt);
    this.submitted = true;
    this.save();    
  }
 list_userhomepage()
      {
    this.router.navigate(['login', this.moolahuser.userName, this.moolahuser.password]);
       // this.nextlocation="homepage"
      }
   save() {
   
    this.constantC.userId=this.id;
  console.log("this current comterteponent",this.constantC.currAmt);
      this.User_service.create_constantComponent(this.id,this.constantC).subscribe(data=>
        {
          console.log(data);
          this.constantC= new constantcom();
          
        });


}
}