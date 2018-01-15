import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) {
  }
  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => {
        this.user1Activated = (id === 1);
        this.user2Activated = (id === 2);
      }
    );
  }
}
