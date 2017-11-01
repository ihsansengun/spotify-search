import { Component } from '@angular/core';
import {SpotifyService} from './services/spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[SpotifyService]
})


export class AppComponent {


  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.authorize().subscribe(res => {
      console.log(res);
    });
  }
}




