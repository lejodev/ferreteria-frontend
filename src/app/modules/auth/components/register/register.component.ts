import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private registerService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: [4, [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value).subscribe(result => {
        console.log(result);
        this.router.navigate(['/auth/login'])

      })
      console.log('Form submitted successfully');
    } else {
      console.log('Form is invalid');
    }

  }

}
