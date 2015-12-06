/// <reference path="../../typings/angular2/angular2.d.ts" />
/*
 * Angular 2 decorators and services
 */
import {Component, bootstrap, View} from "angular2/angular2";
// Annotation section
@Component({
  selector: 'my-app'
})

@View({
  template: '<h1>Hello {{ name }}</h1>'
})

// Component controller
export class App {
  name: string;
  constructor() {
    this.name = 'Alice';
  }
}