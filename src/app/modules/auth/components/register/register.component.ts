import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    
  }

}
