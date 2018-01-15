import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CounterService {

    count = 0;

    countUpdated = new EventEmitter<number>();

    addItem()
    {
        this.count++;
        this.countUpdated.emit(this.count);
    }


}