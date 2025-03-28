import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanitizerPipe } from '../../pipes/sanitizer.pipe';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-video',
  imports: [SanitizerPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {

  idVideo: any | null = null;
  infosVideo: any | null = null;

  url: string = 'https://www.youtube.com/embed/' + this.idVideo;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly youtubeService: YoutubeService = inject(YoutubeService);

  ngOnInit(): void {
    this.idVideo = this.route.snapshot.paramMap.get('videoId');
  
      this.youtubeService.getVideoDetails(this.idVideo).subscribe({
        next: (response) => {
          this.infosVideo = response.items;
          alert('Video récupérée avec succès');
        },
        error: (erreur) => {
          console.error(erreur);
          alert(erreur);
        }
      });
    }
}
