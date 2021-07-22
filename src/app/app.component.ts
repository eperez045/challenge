import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  episodes: any[] = [];

  itemsPerPage: number = 10;
  allPages!: number;


  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/episode').subscribe((data: any)=> {
      console.log(data.results)
      this.episodes = data.results})
}
onPageChange(page: number = 1): void {
  const startItem = (page - 1) * this.itemsPerPage;
  const endItem = page * this.itemsPerPage;
  this.episodes = this.episodes.slice(startItem, endItem);
}


  title = 'prueba';
}
