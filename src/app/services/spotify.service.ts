import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class SpotifyService {

    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    private token: string;
    private client_id = 'fa9c552e96864f0f87f3504d401d5529';
    private client_secret = '31329030847e42cdbb8c82f4e18bd45c';
    private redirect_uri = 'https://ihsansengun.github.io/spotify-search/';
    private responseType = 'code';


  constructor(private _http: Http) {

  }


  authorize(){
    return this._http
      .get('https://accounts.spotify.com/authorize?client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&redirect_uri=' + this.redirect_uri )
      .map(res => res.json());
  }



  searchMusic(str: string, type = 'artist') {


        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl)
            .map(res => res.json());

    }

    getArtist(id: string) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl)
            .map(res => res.json());

    }

    getAlbums(artistId:string){
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' +artistId+'/albums';
        return this._http.get(this.albumsUrl)
            .map(res => res.json());
    }

    getAlbum(id:string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/' +id;
        return this._http.get(this.albumUrl)
            .map(res => res.json());
    }

}
