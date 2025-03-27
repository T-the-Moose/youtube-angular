import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  formulaireEnregistrement: FormGroup = new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl('', Validators.minLength(4)),
    pseudo: new FormControl('', Validators.required),
    cityCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  })

  onSubmit() {
    console.log(this.formulaireEnregistrement.value);

    if (this.formulaireEnregistrement.valid) {
      this.authService.register(this.formulaireEnregistrement.value).subscribe({
        next: (response) => {
          alert('Enregistrement réussi !')
          this.router.navigate(['/login']);
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
