import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
 // @Input() users: string[];
 // @Output() userSetToActive = new EventEmitter<number>();

 @Input() users: string[];

  constructor(private userService: UserService) {
    // this.userService.getInactiveUsers.subscribe(
    //   (newUsers: string[]) => this.users = newUsers
    // );
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
    // this.userSetToActive.emit(id);
  }
}
