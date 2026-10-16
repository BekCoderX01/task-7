class Video {
  constructor(title) {
    this.title = title;
    this.isPlaying = false;
  }
 
  play() {
    this.isPlaying = true;
  }
 
  pause() {
    this.isPlaying = false;
  }
}
 
const video = new Video("JavaScript darsi");
console.log(video.title); // "JavaScript darsi"
console.log(video.isPlaying); // false
 
video.play();
console.log(video.isPlaying); // true
 
video.pause();
console.log(video.isPlaying); // false
 