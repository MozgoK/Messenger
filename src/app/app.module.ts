import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExitAboutComponent } from './guards/exit.about.guard';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input.component';

const appRoutes: Routes = [
  { path: '', component: InputComponent},
  { path: 'about', component: AboutComponent, canDeactivate: [ExitAboutComponent]}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExitAboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
