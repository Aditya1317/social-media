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
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password';
      return;
    }

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
          localStorage.setItem('token', token); // Store JWT token
          alert('Login Successful'); 
          this.router.navigate(['/user-details']); 
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid username or password';
        },
      });
  }
}
