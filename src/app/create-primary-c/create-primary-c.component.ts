

      import { Component, OnInit } from '@angular/core';

      import { Router, ActivatedRoute } from '@angular/router';
      import { JwtClientService } from '../jwt-client.service';
      import { moolahUser } from 'src/moolahuser';
      import { primaryCom } from 'primarycom';
      import { UserService } from '../user.service';
      import { MatFormFieldModule } from '@angular/material/form-field';
      import { MatInputModule } from '@angular/material/input';
      import {NgbCalendar, NgbDate} from "@ng-bootstrap/ng-bootstrap";
  import { range } from 'rxjs';
      @Component({
        selector: 'app-create-primary-c',
        templateUrl: './create-primary-c.component.html',
        styleUrls: ['./create-primary-c.component.css']
      })
      export class CreatePrimaryCComponent implements OnInit {


        constructor(private route: ActivatedRoute,private service: JwtClientService ,private User_service:UserService, private router: Router) { 
        }

        id: string;
        nextlocation:string;
        primaryC : primaryCom= new primaryCom();
        moolahuser : moolahUser = new moolahUser();
      current_OrgId :string;
      current_title:string;
      tmp_dateCreated :NgbDate; 
      yearArr;
      monthArr;
      dYear:number;
      dMonth:number;
    

        response:any;
    
          submitted = false;
        ngOnInit() {
      this.submitted = false;
          this.primaryC = new primaryCom;
          this.nextlocation="";
          this.id = this.route.snapshot.params['id'];
          this.yearArr = Array(40).fill(0).map((x,i)=>i+0); 
          this.monthArr=Array(12).fill(0).map((x,i)=>i+0);
    
          
          this.service.get_moolahUser(this.id)
            .subscribe(data => {
              console.log(data)
              this.moolahuser = data;
            }, error => console.log(error));
    
        }



      list_userhomepage()
            {
          this.router.navigate(['login', this.moolahuser.userName, this.moolahuser.password]);
            // this.nextlocation="homepage"
            }
        list_createSecondaryCom()
        {
          this.User_service.getOrgIdFromTitle_primaryC(this.current_title, this.id).subscribe(data=>
            {
              console.log("data: ",data);
            this.current_OrgId=data;
            console.log("Current ID: ",this.current_OrgId);
            this.router.navigate(['create_SC', this.moolahuser.userId,this.current_OrgId]);
            }, error => console.log(error));
        
          
        // this.nextlocation = "secondary_com" ;

        }
            onSubmit() {
          this.submitted = true;
          this.save();    
        }

        save() {
        
          this.primaryC.userId=this.id;
          this.current_title=this.primaryC.moolahTitle;
        this.primaryC.date_created =new Date(
            this.tmp_dateCreated.year,
            this.tmp_dateCreated.month,
            this.tmp_dateCreated.day
          );
      this.primaryC.endgoal_date = new Date(
            this.tmp_dateCreated.year+Math.trunc(this.dYear),
            this.tmp_dateCreated.month+Math.trunc(this.dMonth),
            this.tmp_dateCreated.day
          );
      this.primaryC.endgoal_date.setMonth(this.primaryC.endgoal_date.getMonth()-this.dMonth);
        console.log("date created: ",this.primaryC.date_created);
        console.log("date ended  XXX",this.primaryC.endgoal_date);
          
          console.log("moolahTitle: ",this.current_title);
            this.service.create_primaryComponent(this.id, this.primaryC).subscribe(data =>
            {
              console.log(data);
              this.primaryC = new primaryCom();
            
            // this.gotoList();

            },
            error => console.log(error)
        );

      }


      }
