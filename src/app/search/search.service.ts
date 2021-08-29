import { Injectable } from '@angular/core';
/**import {Http} from '@angular/http';**/

import { Observable } from 'rxjs';
/**import 'rxjs/add/operator/map'**/
import {HttpClient} from '@angular/common/http'
@Injectable()
export class SearchService {
  private clientId: string = 'af58841396084e54a1b39b90fbf82d03';
  private artistsUrl: string ='https://api.spotify.com/v1/search?type=artist&limit=10&client_id='+this.clientId+'&q=';
  private albumsUrl: string ='https://api.spotify.com/v1/search?type=album&limit=10&client_id='+this.clientId+'&q=';
  private playlistsUrl: string ='https://api.spotify.com/v1/search?type=playlist&limit=10&client_id='+this.clientId+'&q=';
  private tracksUrl: string ='https://api.spotify.com/v1/search?type=playlist&limit=10&client_id='+this.clientId+'&q=';

  

  /**searchArtists(searchTerm: string) {
    let url = this.artistsUrl + searchTerm;
    return this.http.get(url).map(res => res.json());
  
}
searchAlbums(searchTerm: string) {
  let url = this.albumsUrl + searchTerm;
  return this.http.get(url).map(res => res.json());

}
playlists(searchTerm: string) {
  let url = this.playlistsUrl + searchTerm;
  return this.http.get(url).map(res => res.json());

}
tracks(searchTerm: string) {
  let url = this.tracksUrl + searchTerm;
  return this.http.get(url).map(res => res.json());

}**/
}

