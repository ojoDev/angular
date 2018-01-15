import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  @Input() users: string[] = ['Max', 'Anna'];

  constructor(private userService: UserService) {
    this.users = this.userService.activeUsers;
    // this.userService.getActiveUsers.subscribe(
    //   (newUsers: string[]) => this.users = newUsers
    // );
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
 // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);

    // this.userSetToInactive.emit(id);
  }
}
