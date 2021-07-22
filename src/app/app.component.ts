import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  episodes: any[] = [];



  constructor(private http: HttpClient){

    
    this.http.get('https://rickandmortyapi.com/api/episode').subscribe((data: any)=> {
                      console.log(data.results)
                      this.episodes = data.results})
  }



  title = 'prueba';
}
