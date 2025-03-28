import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  isLogged: boolean = false;
  logOut = this.authService.logout()

  ngOnInit(): void {

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLogged = loggedIn;
      
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
