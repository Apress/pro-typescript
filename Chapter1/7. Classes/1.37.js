var Listing1_37;
(function (Listing1_37) {
    var Song = (function () {
        function Song(artist, title) {
            this.artist = artist;
            this.title = title;
        }
        Song.prototype.play = function () {
            console.log('Playing ' + this.title + ' by ' + this.artist);
        };
        return Song;
    })();

    var Jukebox = (function () {
        function Jukebox(songs) {
            this.songs = songs;
        }
        Jukebox.prototype.play = function () {
            var song = this.getRandomSong();
            song.play();
        };

        Jukebox.prototype.getRandomSong = function () {
            var songCount = this.songs.length;
            var songIndex = Math.floor(Math.random() * songCount);

            return this.songs[songIndex];
        };
        return Jukebox;
    })();

    var songs = [
        new Song('Bushbaby', 'Megaphone'),
        new Song('Delays', 'One More Lie In'),
        new Song('Goober Gun', 'Stereo'),
        new Song('Sohnee', 'Shatter'),
        new Song('Get Amped', 'Celebrity')
    ];

    var jukebox = new Jukebox(songs);

    jukebox.play();
})(Listing1_37 || (Listing1_37 = {}));
