import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      contactNo: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.userService.createUser(this.userForm.value).subscribe({
      next: (res) => alert('User created successfully!'),
      error: (err) => alert('Error creating user!'),
    });
  }
}
