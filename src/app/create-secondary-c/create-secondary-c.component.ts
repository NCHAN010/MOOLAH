import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { secondarycom } from 'src/secondarycom';
import { primaryCom } from 'primarycom';

@Component({
  selector: 'app-create-secondary-c',
  templateUrl: './create-secondary-c.component.html',
  styleUrls: ['./create-secondary-c.component.css']
})
export class CreateSecondaryCComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: UserService , private router: Router) { }


  userId: string;
  orgId:string;
  nextlocation:String;
  secondaryC :secondarycom = new secondarycom();
  primaryC : primaryCom= new primaryCom();
  response:any;
  OD:boolean;

  submitted = false;
  ngOnInit() {
   
      this.submitted=false;
      this.secondaryC = new secondarycom;
      this.orgId=this.route.snapshot.params['orgId'];
      console.log("this org id : ",this.orgId);
      if(this.orgId!=null){
      this.OD=true;}
      else
      {
        this.OD=false;
      }
      this.userId=this.route.snapshot.params['id'];
      console.log("UserID: ",this.userId);
      this.service.getPrimaryComByOrgId(this.orgId).subscribe(data => {
        
        this.primaryC = data;
        console.log("PrimaryORG ID: ",this.primaryC.orgId);
      }, error => console.log(error));



  }


   onSubmit() {
    this.submitted = true;
    this.save();    
  }

  save() {
    if (this.OD==true)
    {
   //console.log("Secondary Title: ",this.secondaryC.moolahTitle);
  // console.log("OD: ",this.OD);
   //console.log("UserID: ",this.id);
   this.secondaryC.orgId=this.orgId;
   this.secondaryC.userId=this.userId;
  
  // console.log("limit",this.secondaryC.limits);
  // console.log("secondaryComORGID: " ,this.secondaryC.orgId);

  this.service.incrementSC(this.orgId).subscribe(data=>
    {
      
    });
  console.log("this serverice has incremented",this.orgId);
  this.service.create_secondaryComponent(this.orgId, this.userId,this.secondaryC).subscribe(data =>
    {
      console.log(data);
      this.secondaryC = new secondarycom();
     // this.router.navigate(['create_SC', this.userId,this.orgId]);
      
    },
    error => console.log(error));
  }
  else
  {
    console.log("Secondary Title: ",this.secondaryC.moolahTitle);
    console.log("OD: ",this.OD);
     console.log("limit",this.secondaryC.limit);
    this.secondaryC.userId=this.userId;
    this.service.create_secondaryComponent2(this.userId,this.secondaryC).subscribe(data=>
      {
        console.log(data);
        this.secondaryC = new secondarycom();

      },
      error => console.log(error));


  }
}

 list_userhomepage()
      {//userHomePg/:userId
    this.router.navigate(['userHomePg',this.userId ]);
       // this.nextlocation="homepage"
      }
    

      list_createSecondaryCom()
  {
    
    if (this.OD==true)
    {
       console.log("OD: ",this.OD);
       console.log("userId: ",this.userId);
       console.log("orgId: ",this.orgId);
       this.submitted=false;
          this.router.navigate(['create_SC', this.userId,this.orgId]);
      
    }
    else
    {
       console.log("OD: ",this.OD);
       this.submitted=false;
           this.router.navigate(['create_SC2',this.userId]);
      
    }
  }
    
    }

 