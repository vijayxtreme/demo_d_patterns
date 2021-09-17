import { concatAndOutput } from "../util";

class MusicPlayer {
  constructor() {
    this.index = 0;
    //music can come from an API call
    this.stations = [1, 2, 3, 4];
  }
  rewind() {
    console.log(`--rewind!`);
    this.index = 0;
  }
  nextSong() {
    if (this.hasNextSong() || this.index === this.stations.length - 1) {
      return this.stations[this.index++];
    }
    if (this.index > this.stations.length - 1) {
      this.rewind();
      return this.stations[this.index++];
    }
  }
  hasNextSong() {
    return this.stations[this.index + 1];
  }
}

const comments = `/* Used often for working with data; rather than 
having data mapped in several areas, you can hold it in a central 
iterator and provide methods (like next and previous) to 
return information as needed (keeps data in a central area) */`;

const output = concatAndOutput(comments, MusicPlayer);

export default output;
