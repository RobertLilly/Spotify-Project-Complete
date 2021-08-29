import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {datamodel} from '../model/datamodel'
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
  get(data:datamodel) {
    return this.http.get(`https://api.spotify.com/v1/search?q=${data.q}&type=${data.type}&limit=${data.limit}&offset=${data.offset}`);
  }
}
