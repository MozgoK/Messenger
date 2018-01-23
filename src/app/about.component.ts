import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './guards/exit.about.guard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'about-comp',
  template: `about
    <button (click)="save()">Save</button>
    <a routerLink="">Main</a>`
})

export class AboutComponent implements ComponentCanDeactivate {
  constructor() { }
  saved: boolean = false;
  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    return !this.saved
            ? confirm('Покинуть?')
            : true;
  }
}
