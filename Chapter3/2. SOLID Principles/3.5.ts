interface DataBase {
    connect(db: string, collections: string[]);
    movies: any;
}

declare var DataBase: DataBase;

module Listing3_5 {

    class Movie {
        private db: DataBase;

        constructor(private title: string, private year: number) {
            this.db = DataBase.connect('user:pw@mydb', ['movies']);
        }

        getTitle() {
            return this.title + ' (' + this.year + ')';
        }

        save() {
            this.db.movies.save({ title: this.title, year: this.year });
        }
    }

}