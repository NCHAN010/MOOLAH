import { Component, OnInit } from '@angular/core';
import { moolahUser } from 'src/moolahuser';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-moolahuserdetails',
  templateUrl: './moolahuserdetails.component.html',
  styleUrls: ['./moolahuserdetails.component.css']
})
export class MoolahuserdetailsComponent implements OnInit {



  id: String;
  moolahuser: moolahUser;

  constructor(private route: ActivatedRoute, private router: Router,private service:JwtClientService) { }

  ngOnInit() {
    this.moolahuser = new moolahUser();
    this.id = this.route.snapshot.params['id'];




    this.service.get_moolahUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.moolahuser = data;
      }, error => console.log(error));
  }

      list()
      {
      this.router.navigate(['moolahusers']);
      }

  

}
