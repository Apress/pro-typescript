class Movie {
    constructor(private title: string, private year: number) {
    }

    getTitle() {
        return this.title + ' (' + this.year + ')';
    }
}

class MovieRepository {
    private db: DataBase;

    constructor() {
        this.db = DataBase.connect('user:pw@mydb', ['movies']);
    }

    save(movie: Movie) {
        this.db.movies.save(JSON.stringify(movie));
    }
}

// Movie
var movie = new Movie('The Internship', 2013);

// MovieRepository
var movieRepository = new MovieRepository();

movieRepository.save(movie);
 