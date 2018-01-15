import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPassword = false;
  clicks = [];

  changePasswordDisplayAndAddLog() {
    this.showPassword = !this.showPassword;
    this.clicks.push(this.clicks.length + 1 + ' - ' + new Date().toLocaleDateString() + ' ' +   new Date().toLocaleTimeString() );
  }

  getBackgroundColor(click: HTMLElement) {
    console.log(click);
    return this.clicks.length >= 5 ? 'blue' : 'none';
  }

  whiteColorActive() {
    return this.clicks.length >= 5;
  }

}
