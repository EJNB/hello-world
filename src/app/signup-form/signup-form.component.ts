import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
      UsernameValidators.shouldBeUnique
    ),
    password : new FormControl('', Validators.required)
  });

  get username(){
    return this.form.get('username');
  }

  loggin(){
    this.form.setErrors({
      invalidLogin: true
    });
    /* let isValid = authService.login(this.form.value );
    if(isValid){
      this.form.setErrors({
        invalidLogin: true
      })
    } */
  }
}
