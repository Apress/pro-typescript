var Listing3_5;
(function (Listing3_5) {
    var Movie = (function () {
        function Movie(title, year) {
            this.title = title;
            this.year = year;
            this.db = DataBase.connect('user:pw@mydb', ['movies']);
        }
        Movie.prototype.getTitle = function () {
            return this.title + ' (' + this.year + ')';
        };

        Movie.prototype.save = function () {
            this.db.movies.save({ title: this.title, year: this.year });
        };
        return Movie;
    })();
})(Listing3_5 || (Listing3_5 = {}));
