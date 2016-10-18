module Listing1_39 {

    class Song {
        constructor(private artist: string, private title: string) {

        }

        play() {
            console.log('Playing ' + this.title + ' by ' + this.artist);
        }
    }

    class Playlist {

        private songs: Song[] = [];

        static maxSongCount: number = 30;

        constructor(public name: string) {
        }

        addSong(song: Song) {
            if (this.songs.length >= Playlist.maxSongCount) {
                throw new Error('Playlist is full');
            }

            this.songs.push(song);
        }
    }

    // Creating a new instance
    var playlist = new Playlist('My Playlist');

    // Accessing a public instance property
    var name = playlist.name;

    // Calling a public instance method
    playlist.addSong(new Song('Therapy?', 'Crooked Timber'));

    // Accessing a public static property
    var maxSongs = Playlist.maxSongCount;

} 