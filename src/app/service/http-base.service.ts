import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { IMovie } from '../models/movie/imovie';

@Injectable({
    providedIn: 'root'
})
export class HttpBaseService {

    private URL = 'https://streaming-availability.p.rapidapi.com/search/filters'
    private headers = new HttpHeaders({
        'X-RapidAPI-Key': 'e386fed8b4msh609fb75066b18d2p1615eajsncabc1dedf428',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    })

    constructor(private http: HttpClient) { }

    public get(params: string): Observable<IMovie[]> {
        return this.http.get(
            this.URL,
            {
                headers: this.headers,
                params: new HttpParams().appendAll({
                    services: 'netflix',
                    country: 'us',
                    output_language: 'en',
                    order_by: 'original_title',
                    genres_relation: 'and',
                    show_type: 'all'
                })
            }
        ).pipe(map((data: any) => {
            const transformedData: IMovie[] = data.result.map((dataMovie: IMovie) => {
                return {
                    directors: dataMovie.directors,
                    genres: dataMovie.genres,
                    imdbId: dataMovie.imdbId,
                    originalTitle: dataMovie.originalTitle,
                    title: dataMovie.title,
                    tmdbId: dataMovie.tmdbId,
                    type: dataMovie.type,
                    year: dataMovie.year,
                }
            })

            return transformedData;
        }
        ))
    }
}
