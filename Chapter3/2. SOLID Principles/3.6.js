var Movie = (function () {
    function Movie(title, year) {
        this.title = title;
        this.year = year;
    }
    Movie.prototype.getTitle = function () {
        return this.title + ' (' + this.year + ')';
    };
    return Movie;
})();

var MovieRepository = (function () {
    function MovieRepository() {
        this.db = DataBase.connect('user:pw@mydb', ['movies']);
    }
    MovieRepository.prototype.save = function (movie) {
        this.db.movies.save(JSON.stringify(movie));
    };
    return MovieRepository;
})();

// Movie
var movie = new Movie('The Internship', 2013);

// MovieRepository
var movieRepository = new MovieRepository();

movieRepository.save(movie);
