import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  formulaireLogin: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
  })

  onSubmit() {
    if (this.formulaireLogin.valid) {
      this.authService.login(this.formulaireLogin.value).subscribe({
        next: (response) => {

          if (response.code === "200") {
            alert(response.message)
            this.router.navigate(['/home']);

          } else {
            alert(response.message)
          }
        },
        error: (error) => {

          console.error(error);
          alert('Email ou mot de passe incorrect.');
          
        }
      });
    }
  }
}
