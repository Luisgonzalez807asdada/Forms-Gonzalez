import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userModel: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userModel = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: [''],

    });
} 
submitForm(){
    console.log(this.userModel);
  }
}
