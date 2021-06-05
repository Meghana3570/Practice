import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsComponent } from './bs/bs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CseComponent } from './cse/cse.component';
import { CseactivitiesComponent } from './cseactivities/cseactivities.component';
import { CsefirstyearComponent } from './csefirstyear/csefirstyear.component';
import { CsesecondyearComponent } from './csesecondyear/csesecondyear.component';
import { DeptactivitiesComponent } from './deptactivities/deptactivities.component';
import { EceComponent } from './ece/ece.component';
import { EcefirstyearComponent } from './ecefirstyear/ecefirstyear.component';
import { EcesecondyearComponent } from './ecesecondyear/ecesecondyear.component';
import { HomeComponent } from './home/home.component';
import { ItactivitiesComponent } from './itactivities/itactivities.component';
import { JsComponent } from './js/js.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TsComponent } from './ts/ts.component';

const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"technologies",component:TechnologiesComponent,children:[{path:"ts",component:TsComponent},
                                                                 {path:"js",component:JsComponent},
                                                                 {path:"bs",component:BsComponent}] },
  { path: 'test1', loadChildren: () => import('./test1/test1.module').then(m => m.Test1Module) },
  { path: 'test2', loadChildren: () => import('./test2/test2.module').then(m => m.Test2Module) },
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
