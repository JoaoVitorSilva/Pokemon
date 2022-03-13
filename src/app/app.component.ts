import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  cssDarkMode = true;

  changeMode(){

   this.cssDarkMode = !this.cssDarkMode;

  }
}
