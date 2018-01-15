import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id;
  total = 0;
  @Output() play = new EventEmitter<{}>();

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStart() {
    console.log('Start');
    this.total = 0;
    this.id = setInterval( () => { 
     this.onGameEvent();
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.id);
    console.log('Stop');
  }

  onGameEvent() {
    this.total++;
    console.log('onGameEvent ' + this.total );
    if (this.total % 2 === 0) {
      this.evenNumbers.push(this.total);
    }else {
      this.oddNumbers.push(this.total);
    }
  }

}
