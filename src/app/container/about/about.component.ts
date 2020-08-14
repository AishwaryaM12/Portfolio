import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	hidden=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClickEmail(){
  	if(!this.hidden){
          	document.getElementById("e").innerHTML="aishwar.maurya@gmail.com";
          	document.getElementById("e1").innerHTML="aishwarya17100@iiitnr.edu.in";
        	this.hidden= true;
        }
    else
    {
    		document.getElementById("e").innerHTML="";
          	document.getElementById("e1").innerHTML="";
        	this.hidden= false;
    }
    }
}
