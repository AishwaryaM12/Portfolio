import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'protfolio';
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
