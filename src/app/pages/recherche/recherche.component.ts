import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { YoutubeService } from '../../services/youtube.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recherche',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.scss'
})
export class RechercheComponent {

  private readonly youtubeService: YoutubeService = inject(YoutubeService);

  requeteRecherche: string = '';
  videos: any[] = [];
  idVideoPlaylist: string | null = null; 

  playlists: any[] = [];

  deleteVideo: string ='assets/cross.png';

  rechercheForm: FormGroup = new FormGroup({
    recherche: new FormControl('')
  });

ajouterPlayList(titreVideo: string): void {
  // Vérifie si la vidéo est déjà dans la playlist
  const existeDeja = this.playlists.some((video) => video === titreVideo);

  if (!existeDeja) {
    this.playlists.push(titreVideo); 
  } 
}

  supprimerVideo(titreVideo: string): void {
    this.playlists = this.playlists.filter((video) => video.snippet.title!== titreVideo);
  }

  onSubmit() {
    const query = this.rechercheForm.get('recherche')?.value.trim();
    if (query) {
      this.youtubeService.getVideoDetails(query).subscribe({
        next: (response) => {
          this.videos = response.items; 
          console.log(response.items);
        },
        error: (err) => {
        }
      });
    }
  }

}
