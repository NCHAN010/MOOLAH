import { Component, OnInit } from '@angular/core';
import { moolahUser } from 'src/moolahuser';
import { Observable } from 'rxjs/internal/Observable';
import { JwtClientService } from '../jwt-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincontrol2',
  templateUrl: './admincontrol2.component.html',
  styleUrls: ['./admincontrol2.component.css']
})
export class Admincontrol2Component implements OnInit {
moolahusers: Observable<moolahUser[]>;
  constructor( private service:JwtClientService , private router: Router) {}

  ngOnInit() {
      this.reloadData();
  }
  reloadData() {
   this.moolahusers = this.service.getmoolahUserList();
      //let resp=this.service.getmoolahUserList();
 //  resp.subscribe(data=>this.moolahusers=JSON.parse(data));
  }

  delete_moolahUser(id: String) {
    this.service.delete_moolahUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  moolahUserDetails(id: String){
    this.router.navigate(['details', id]);
  }

}
