import {Injectable, EventEmitter } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

   // getActiveUsers = new EventEmitter<string[]>();
   // getInactiveUsers = new EventEmitter<string[]>();

    constructor(private counterService: CounterService) {
        // this.getActiveUsers.emit(this.activeUsers);
        // this.getInactiveUsers.emit(this.inactiveUsers);
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        // this.getActiveUsers.emit(this.activeUsers);
        // this.getInactiveUsers.emit(this.inactiveUsers);
        this.counterService.addItem();
      }

      setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        // this.getActiveUsers.emit(this.activeUsers);
        // this.getInactiveUsers.emit(this.inactiveUsers);
        this.counterService.addItem();
      }

}
