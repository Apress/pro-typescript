module Listing1_38 {

    class Song {

        private artist: string;
        private title: string;

        constructor(artist: string, title: string) {
            this.artist = artist;
            this.title = title;
        }

        play() {
            console.log('Playing ' + this.title + ' by ' + this.artist);
        }
    }

} 