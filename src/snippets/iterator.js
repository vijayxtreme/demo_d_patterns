import { concatAndOutput } from "../util";

const MusicPlayer = `class MusicPlayer {
  constructor() {
    this.index = 0;
    //music can come from an API call
    this.stations = [1, 2, 3, 4];
    this.incrementIndex = this.incrementIndex.bind(this);
  }
  rewind() {
    console.log('--rewind!');
    this.index = 0;
  }
  playSong(cb) {
    console.log(this.stations[this.index]);
    cb();
    return;
  }
  atlastSong() {
    return this.index === this.stations.length - 1;
  }
  outOfBounds() {
    return this.index >= this.stations.length;
  }
  incrementIndex() {
    this.index++;
  }
  nextSong() {
    if (this.hasNextSong() || this.atlastSong()) {
      this.playSong(this.incrementIndex);
      return;
    }
    if (this.outOfBounds()) {
      this.rewind();
      this.playSong(this.incrementIndex);
      return;
    }
  }
  hasNextSong() {
    return this.stations[this.index + 1];
  }
}`;

const example = `const mp = new MusicPlayer()
mp.nextSong()`;

const comments = `/* Used often for working with data; rather than 
having data mapped in several areas, you can hold it in a central 
iterator and provide methods (like next and previous) to 
return information as needed (keeps data in a central area) */`;

const output = concatAndOutput(comments, MusicPlayer, example);

export default output;
