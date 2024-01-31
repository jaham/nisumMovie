import { Component, OnInit } from '@angular/core';
import { HttpBaseService } from './service/http-base.service';
import { IGenre, IMovie } from './models/movie/imovie';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie';

  public movies: IMovie[] = [];

  displayedColumns: string[] = ['id', 'Titulo', 'Generos', 'Directores', 'año', 'borrar'];
  dataSource = ELEMENT_DATA;

  constructor(private server: HttpBaseService) { }

  ngOnInit() {
    this.server.get('').subscribe(data => {
      this.movies = data
    })
  }

  concatenarGeneros(element: IGenre[]) {
    return element.map(data => data.name).join(', ')
  }

  delete(row: IMovie) {

    const index = this.movies.indexOf(row);

    if (index !== -1) {
      this.movies?.splice(index, 1);
    }
    this.movies = [...this.movies];
  }
}
