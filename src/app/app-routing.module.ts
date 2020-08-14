import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './container/home/home.component';
import {AboutComponent} from './container/about/about.component';
import {ProjectsComponent} from './container/projects/projects.component';
import {ContactComponent} from './container/contact/contact.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
  	path: 'home',
  	component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
  	path: 'project',
  	component: ProjectsComponent,
  },
  {
  	path: 'contact',
  	component: ContactComponent,
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
