import {Component} from 'angular2/core';


@Component({
  selector: 'nb-web-app',
  providers: [],
  templateUrl: 'app/nb-web.html',
  directives: [],
  pipes: []
})
export class NbWebApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
