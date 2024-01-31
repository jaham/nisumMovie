import { IGenre, IMovie } from "./imovie";

export class Movie implements IMovie {


    public directors: string[]
    public genres: IGenre[]
    public imdbId: string
    public originalTitle: string
    public title: string
    public tmdbId: number
    public type: string
    public year: number

    constructor({
        directors,
        genres,
        imdbId,
        originalTitle,
        title,
        tmdbId,
        type,
        year,
    }: IMovie) {
        this.directors = directors
        this.genres = genres
        this.imdbId = imdbId
        this.originalTitle = originalTitle
        this.title = title
        this.tmdbId = tmdbId
        this.type = type
        this.year = year
    }
}

export class Genre implements IGenre {
    public id: number
    public name: string

    constructor({
        id,
        name
    }: IGenre) {
        this.id = id
        this.name = name
    }
}