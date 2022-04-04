import {Groups} from './Groups';
import {Artists} from './Artists';
import {Album} from './Album';
import {Song} from './Song';

/**
 * Musical genres descibes the musical genres of the music library.
 */
export class MusicalGenres {
  constructor(private name: string,
              private gArtist: Artists|Groups[],
              private albums: Album[],
              private song: Song[]) {}
  /**
   * getName() returns the name of the genre.
   * @returns the name of the genre
   */
  getName(): string {
    return this.name;
  }
  /**
   * setName() sets the name of the genre.
   * @param name the name of the genre
   */
  setName(name: string): void {
    this.name = name;
  }
  /**
   * getGArtist() returns the artist or group of the genre.
   * @returns the group or artist of the genre
   */
  getGArtist(): Artists|Groups[] {
    return this.gArtist;
  }
  /**
   * getAlbums() returns the albums of the genre.
   * @returns the name of the genre
   */
  getAlbums(): Album[] {
    return this.albums;
  }
  /**
   * addAlbum() adds an album to the genre.
   * @param album album to be added
   */
  addAlbum(album: Album): void {
    this.albums.push(album);
  }
  /**
   * removeAlbum() removes an album from the genre.
   * @param indexOf the index of the album to be removed
   */
  removeAlbum(indexOf: number): void {
    this.albums.splice(indexOf, 1);
  }
  /**
   * getSong() returns the song of the genre.
   * @returns the number of songs in the genre
   */
  getSong(): Song[] {
    return this.song;
  }
  /**
   * addSong() adds a song to the genre.
   * @param song song to be added
   */
  addSong(song: Song): void {
    this.song.push(song);
  }
  /**
   * printInfo() prints the information of the genre.
   */
  printInfo(): void {
    console.log(`Genre: ${this.name}`);
    console.log(`Artist: ${this.gArtist.getName()}`);
    console.log(`Albums: // falta implementar la funcion getName() de albumes`);
    // for (let i = 0; i < this.albums.length; i++) {
    //   console.log(`${i + 1}. ${this.albums[i].getName()}`);
    // }
    console.log(`Songs:`);
    for (let i = 0; i < this.song.length; i++) {
      console.log(`${i + 1}. ${this.song[i].getName()}`);
    }
  }
}