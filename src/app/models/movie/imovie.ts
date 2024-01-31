export interface IMovie {
    directors: string[],
    genres: IGenre[],
    imdbId: string,
    originalTitle: string
    title: string,
    tmdbId: number,
    type: string,
    year: number
}

export interface IGenre {
    id: number,
    name: string
}

