import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms'; // Import FormsModule here for ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule] ,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add your login logic here
  }
}
