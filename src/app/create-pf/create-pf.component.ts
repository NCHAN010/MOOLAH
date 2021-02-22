import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-pf',
  templateUrl: './create-pf.component.html',
  styleUrls: ['./create-pf.component.css']
})
export class CreatePfComponent implements OnInit {

  id:String;

  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
  }

  create_primaryComponent()
   {
     //this.router.navigate(['create_PF',id]);
     this.router.navigate(['create_PC',this.id]);
   }
   create_secondaryComponent()
   {
     //this.router.navigate(['create_PF',id]);
     this.router.navigate(['create_SC2',this.id]);
   }
    create_constantComponent()
   {
     //this.router.navigate(['create_PF',id]);
    
     this.router.navigate(['create_CC',this.id]);
   }

}
