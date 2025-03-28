import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { YoutubeService } from '../../services/youtube.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-recherche',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.scss'
})
export class RechercheComponent {

  private readonly youtubeService: YoutubeService = inject(YoutubeService);

  requeteRecherche: string = '';
  videos: any[] = [];
  idVideoSelectionne: string | null = null; 

  // Stocker les videos en fav
  playlist: any[] = [];
  videoFav: boolean = false;

  deleteVideo: string ='assets/cross.png';

  rechercheForm: FormGroup = new FormGroup({
    recherche: new FormControl('')
  });

ajouterPlayList(titreVideo: string): void {
  // Vérifie si la vidéo est déjà dans la playlist
  const existeDeja = this.playlist.some((video) => video === titreVideo);
  
  if (!existeDeja) {
    this.playlist.push(titreVideo); 
  } 
}

  supprimerVideo(titreVideo: string): void {
    this.playlist = this.playlist.filter((video) => video.snippet.title!== titreVideo);
  }

  onSubmit() {
    const query = this.rechercheForm.get('recherche')?.value.trim();
    if (query) {
      console.log('Recherche envoyée :', query); 
      this.youtubeService.rechercheVideos(query).subscribe({
        next: (response) => {
          console.log('Réponse de l\'API YouTube :', response); 
          this.videos = response.items; 
        },
        error: (err) => {
          console.error('Erreur lors de l\'appel API :', err); 
        }
      });
    }
  }

  // playVideo(idVideo: string): void {
  //   this.idVideoSelectionne = idVideo;
  // }
}
