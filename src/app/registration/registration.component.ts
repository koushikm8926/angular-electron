import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.username && this.email && this.password) {
      // Implement registration logic here (e.g., call a backend API)
      console.log('User registered:', { username: this.username, email: this.email });
      
      // Navigate to login after registration
      this.router.navigate(['/login']);
    } else {
      alert('Please fill in all fields.');
    }
  }
}
