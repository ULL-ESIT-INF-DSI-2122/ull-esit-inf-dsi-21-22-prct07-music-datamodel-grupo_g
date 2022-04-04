import {Artists} from './Artists';
import {MusicalGenres} from './MusicalGenres';
/**
 * Song class decribes a song.
 */
export class Song {
  constructor(private name: string,
              private artist: Artists,
              private duration: string,
              private genre: MusicalGenres) {}
  /**
   * getName() returns the name of the song.
   * @returns the name of the song
   */
  getName(): string {
    return this.name;
  }
  /**
   * setName() sets the name of the song.
   * @param name the name of the song
   */
  setName(name: string): void {
    this.name = name;
  }
  /**
   * getArtist() returns the artist of the song.
   * @returns the artist of the song
   */
  getArtist(): Artists {
    return this.artist;
  }
  /**
   * setArtist() sets the artist of the song.
   * @param artist the artist of the song
   */
  setArtist(artist: Artists): void {
    this.artist = artist;
  }
  /**
   * getDuration() returns the duration of the song.
   * @returns the duration of the song
   */
  getDuration(): string {
    return this.duration;
  }
  /**
   * setDuration() sets the duration of the song.
   * @param duration the duration of the song
   */
  setDuration(duration: string): void {
    this.duration = duration;
  }
  /**
   * getGenre() returns the genre of the song.
   * @returns the genre of the song
   */
  getGenre(): MusicalGenres {
    return this.genre;
  }
  /**
   * setGenre() sets the genre of the song.
   * @param genre the genre of the song
   */
  setGenre(genre: MusicalGenres): void {
    this.genre = genre;
  }
  /**
   * printInfo() prints the song.
   */
  printInfo(): void {
    console.log(`Song: ${this.name}`);
    console.log(`Artist: ${this.artist.getName()}`);
    console.log(`Duration: ${this.duration}`);
    console.log(`Genre: ${this.genre.getName()}`);
  }
}