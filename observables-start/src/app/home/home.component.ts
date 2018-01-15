import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  
  constructor() { }

  ngOnInit() {

     const myNumbers = Observable.interval(1000);
    
    
    this.numbersObsSubscription = myNumbers.subscribe(
       (number: number) => {
         console.log(number);
       }
     );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout( () => {
          observer.next('first package'); // Emite un paquete de datos normal
        }
          , 2000);
         setTimeout( () => {
          observer.next('second package'); // Emite un paquete de datos normal
        }
          , 4000);
          setTimeout( () => {
            observer.error('ERROR!'); // Emite un error
          }
            , 5000);

            setTimeout( () => {
              observer.complete(); // Finaliza la ejecución
            }
              , 6000);

              setTimeout( () => {
                observer.error('ERROR!'); // Este nunca se ejecutará
              }
                , 7000);
      });

      myObservable.subscribe(
        (data: string) => { console.log(data); }, // Captura datos normales
        (error: string) => { console.log(error); }, // Captura errores
        () => {console.log('completed'); }// Completado. No se emite
      );

    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
  }

}
