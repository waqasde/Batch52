var Album = /** @class */ (function () {
    function Album(artist, title, tracks) {
        this.artist = artist;
        this.title = title;
        this.tracks = tracks;
    }
    return Album;
}());
function make_album(artist, title, tracks) {
    return new Album(artist, title, tracks);
}
// Making albums with the function
var album1 = make_album('Linkin Park', 'Numb');
var album2 = make_album('Subh', 'Checks');
var album3 = make_album('Sonu', 'Dil', 10); // Including number of tracks
console.log(album1);
console.log(album2);
console.log(album3);
