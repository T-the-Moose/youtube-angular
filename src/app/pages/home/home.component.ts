import { Component, inject } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  // tableau pour stocker les videos
  videos: any[] = [];

  isLogged: boolean = false;

  private readonly youtubeService: YoutubeService = inject(YoutubeService);
  private readonly authService: AuthService = inject(AuthService);

  ngOnInit(): void {

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLogged = loggedIn;
    });

    this.youtubeService.rechercheVideos('Angular').subscribe({
      next: (response) => {
        // Stocke les vidéos dans le tableau
        this.videos = response.items; 
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des vidéos :', err);
      }
    });
  }

}
