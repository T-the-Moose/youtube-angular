import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

    private readonly apiKeyYoutube = environment.apiYoutube;
    private readonly apiUrlYoutube = environment.apiUrlYoutube;
    private readonly maxResults = 14;

    private readonly httpClient: HttpClient = inject(HttpClient);

    rechercheVideos(requete: string): Observable<any> {
      const url = `${this.apiUrlYoutube}/search?part=snippet&type=video&maxResults=${this.maxResults}&q=${requete}&key=${this.apiKeyYoutube}`;
      return this.httpClient.get(url);
    }
}
