import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = {
      name: this.username,
      password: this.password,
    };

    this.http
      .post('http://localhost:8080/api/user/login', loginData, {
        responseType: 'text',
      })
      .subscribe({
        next: (token: string) => {
          localStorage.setItem('token', token); // Store the JWT token
          this.router.navigate(['/create-user']); // Redirect after login
        },
        error: () => {
          this.errorMessage = 'Invalid username or password';
        },
      });
  }

  onsubmit() {
    alert("Login Successful");
  }
}
