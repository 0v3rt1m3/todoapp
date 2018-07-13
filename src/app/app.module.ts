import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
// import { SayHelloDirective } from './say-hello.directive';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
// import { TaskComponent } from './task/task.component';


const appRoutes : Routes = [
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'task',component:TaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
