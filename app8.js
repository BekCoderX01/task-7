class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }
 
  addSong(title) {
    this.songs.push(title);
  }
 
  count() {
    return this.songs.length;
  }
}
 
const playlist = new Playlist("Coding time");
const otherPlaylist = new Playlist("Dam olish");
 
console.log(playlist.count()); // 0
playlist.addSong("Lo-fi beat");
playlist.addSong("Night drive");
 
console.log(playlist.songs); // ["Lo-fi beat", "Night drive"]
console.log(playlist.count()); // 2
console.log(otherPlaylist.count()); // 0
 