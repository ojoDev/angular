import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      proyectName: new FormControl(null, Validators.required, this.proyectNameNotValid),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('stable')
    }
  )
  }

  proyectNameNotValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {  // Timeout para similar que se espera uan respuesta
          if (control.value === 'Test') {
            resolve({'proyectNameNotValid': true});
          } else {
            resolve(null);
          }
        }, 2000);
      }
    );
    return promise;
  }

  onSubmit() {
    console.log(this.form);
  }

  
}
