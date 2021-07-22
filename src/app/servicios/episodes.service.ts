import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { 
    console.log("servicio ok");
  }

  getEpisodes(){
    this.http.get('https://rickandmortyapi.com/api/episode').subscribe(data=> {console.log(data)})
  }
}
