import {Groups} from './Groups';
import {Artists} from './Artists';
import {Song} from './Song';
import {MusicalGenres} from './MusicalGenres';
/**
 * Album class
 */
export class Album {
  constructor(private name: string,
              private by: Artists | Groups,
              private year: number,
              private genre: MusicalGenres[],
              private songs: Song[]) {}
  /**
   * Getter of the private attribute "name"
   * @returns {string} Name of the album
   */
  getName(): string {
    return this.name;
  }

  /**
   * Setter: modify the private attribute
   * @param {string} name New name of the album
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Getter that indicates if the album was published by artist or by group
   * @returns {Artists | Groups} Return the type of author
   */
  getBy(): Artists | Groups {
    return this.by;
  }

  /**
   * Setter: modify the type of author published the album
   * @param {Artists | Groups} artistsGroups Object of type Artist or Group
   */
  setBy(artistsGroups: (Artists | Groups)): void {
    this.by = artistsGroups;
  }

  /**
   * Getter of the year of the album
   * @returns {number} Year of the album
   */
  getYear(): number {
    return this.year;
  }

  /**
   * Setter: modify the private attribute
   * @param {number} newYear New year of the album
   */
  setYear(newYear: number): void {
    this.year = newYear;
  }

  /**
   * Getter of genres of the album
   * @returns {MusicalGenres[]}
   */
  getGenre(): MusicalGenres[] {
    return this.genre;
  }

  /**
   * Setter: modify the genres of the album
   * @param {MusicalGenres[]} newGenre New genre of the album
   */
  setGenre(newGenre: MusicalGenres[]): void {
    this.genre = newGenre;
  }

  /**
   * Adds a genre in the album
   * @param {MusicalGenres} newGenre New genre
   */
  addGenre(newGenre: MusicalGenres): void {
    this.genre.push(newGenre);
  }

  /**
   * Removes a genre in the album
   * @param {string} genre Genre to be removed
   */
  removeGenre(genre: string): void {
    for (let i = 0; i < this.genre.length; i++) {
      if (this.genre[i].getName() === genre) {
        this.genre.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Getter of the list of songs of the album
   * @returns {Song[]} Current songs list
   */
  getSongs(): Song[] {
    return this.songs;
  }

  /**
   * Setter: modify the list songs of the album
   * @param {Song[]} newSong New songs list
   */
  setSongs(newSong: Song[]): void {
    this.songs = newSong;
  }

  /**
   * Adds a song in the list of songs of the album
   * @param {Song} newSong New song
   */
  addSongs(newSong: Song): void {
    this.songs.push(newSong);
  }

  /**
   * Revomes a song in the list of songs of the album
   * @param {string} songs Song to be removed
   */
  removeSongs(songs: string): void {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songs) {
        this.songs.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Prints album information
   */
  printInfo(): void {
    console.log('Name: ' + this.name);
    if (this.by instanceof Artists) {
      console.log('By artists: ' + this.by.getName());
    } else if (this.by instanceof Groups) {
      console.log('By groups: ' + this.by.getName());
    } else {
      console.log('Error. Which type is it: by groups or by artists?');
    }
    console.log('Year: ' + this.year);
    console.log('Genres: ');
    for (let genres of this.genre) {
      console.log(genres.getName());
    }
    console.log('Songs: ');
    for (let song of this.songs) {
      console.log(song.getName());
    }
  }
}