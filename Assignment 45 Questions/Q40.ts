class Album {
    artist: string;
    title: string;
    tracks?: number;

    constructor(artist: string, title: string, tracks?: number) {
        this.artist = artist;
        this.title = title;
        this.tracks = tracks;
    }
}

function make_album(artist: string, title: string, tracks?: number): Album {
    return new Album(artist, title, tracks);
}

// Making albums with the function
let album1 = make_album('Linkin Park', 'Numb');
let album2 = make_album('Subh', 'Checks');
let album3 = make_album('Sonu', 'Dil', 10); // Including number of tracks

console.log(album1);
console.log(album2);
console.log(album3);
