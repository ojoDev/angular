import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   defaultValue = 'pet';
   answer = '';
   genders = ['male', 'female'];
   user = {
     username: '',
     email: '',
     secretQuestion: '',
     answer: '',
     gender: ''
   };

   submited= false;

  @ViewChild('f') form: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
   this.submited = true;
   this.user.username = this.form.value.userData.username;
   this.user.email = this.form.value.userData.email;
   this.user.secretQuestion = this.form.value.secret;
   this.user.answer = this.form.value.questionAnswer;
   this.user.gender = this.form.value.gender;

   this.form.reset();
  }
}
