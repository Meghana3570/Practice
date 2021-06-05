import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/Forms';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DeptactivitiesComponent } from './deptactivities/deptactivities.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { CseactivitiesComponent } from './cseactivities/cseactivities.component';
import { ItactivitiesComponent } from './itactivities/itactivities.component';
import { CsefirstyearComponent } from './csefirstyear/csefirstyear.component';
import { CsesecondyearComponent } from './csesecondyear/csesecondyear.component';
import { EcefirstyearComponent } from './ecefirstyear/ecefirstyear.component';
import { EcesecondyearComponent } from './ecesecondyear/ecesecondyear.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JsComponent } from './js/js.component';
import { TsComponent } from './ts/ts.component';
import { BsComponent } from './bs/bs.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    DeptactivitiesComponent,
    CseComponent,
    EceComponent,
    CseactivitiesComponent,
    ItactivitiesComponent,
    CsefirstyearComponent,
    CsesecondyearComponent,
    EcefirstyearComponent,
    EcesecondyearComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    TechnologiesComponent,
    JsComponent,
    TsComponent,
    BsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
