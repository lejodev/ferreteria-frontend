import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  formControls: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }


  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token); // Save token to local storage
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Login failed. Please check your credentials and try again.');
      },
    });
  }

  navigateToRegister() {
    return this.router.navigate(['/auth/register'])
  }
}