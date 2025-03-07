import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  userData: any = {}; // Holds user data

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    // const userId = localStorage.getItem('userId');
    const userId=3;

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found. Please login.');
      this.router.navigate(['/login']);
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get(`http://localhost:8080/api/user/getdetails/${userId}`, { headers })
      .subscribe(
        (response: any) => {
          this.userData = response.data; // Assign response to userData
        },
        (error) => {
          console.error('Error fetching user details:', error);
          if (error.status === 401) {
            alert('Session expired. Please login again.');
            this.router.navigate(['/login']);
          }
        }
      );
  }

  updateUser() {
    this.router.navigate(['/update-user'], { state: { user: this.userData } });
  }

  goToProfile() {
    this.router.navigate(['/profile-details']);
  }
}
