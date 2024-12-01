import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule here for ngModel
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
      alert('Thank you for registering!');
      console.log('User registered:', { username: this.username, email: this.email });
      this.router.navigate(['/login']);
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  navigateToLogin(): void {
    this.router.navigate(['/login']); // Navigate to the register page
  }
}
