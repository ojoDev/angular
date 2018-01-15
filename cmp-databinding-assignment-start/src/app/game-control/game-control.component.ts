import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() start = new EventEmitter<{}>();
  @Output() stop = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.start.emit();
  }

  stopGame() {
    this.stop.emit();
  }

}
