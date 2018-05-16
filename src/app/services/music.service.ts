import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Music } from '../model/music';

@Injectable()
export class MusicService {
  private http: HttpClient
  
  constructor() {}

  getMusics(filtro: String) {
    return this.http.get<Music[]>(this.baseUrl + "?filtro=" + filtro);
  }

  private baseUrl: string = "https://intense-ocean-93206.herokuapp.com/api/musicas/";
}
