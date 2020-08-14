import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(public router: Router,
  	public route: ActivatedRoute) { }

  ngOnInit(): void {
  	console.log(this.route.snapshot['_routerState'])
  }
  
  openNav() {
    document.getElementById('mySidenav').style.width = '200px';
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

}
