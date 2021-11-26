import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PotoflioComponent } from './potoflio/potoflio.component';

const routes: Routes = [
  {path:'PORTFOLIO',component:PotoflioComponent},
  {path:'ABOUT',component:AboutComponent},
  {path:'CONTACT',component:ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
