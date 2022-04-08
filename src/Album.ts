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

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getBy(): Artists | Groups {
    return this.by;
  }

  setBy(artistsGroups: (Artists | Groups)): void {
    this.by = artistsGroups;
  }

  getYear(): number {
    return this.year;
  }

  setYear(newYear: number): void {
    this.year = newYear;
  }

  getGenre(): MusicalGenres[] {
    return this.genre;
  }

  setGenre(newGenre: MusicalGenres[]): void {
    this.genre = newGenre;
  }

  addGenre(newGenre: MusicalGenres): void {
    this.genre.push(newGenre);
  }

  removeGenre(genre: string): void {
    for (let i = 0; i < this.genre.length; i++) {
      if (this.genre[i].getName() === genre) {
        this.genre.splice(i, 1);
        break;
      }
    }
  }

  getSongs(): Song[] {
    return this.songs;
  }

  setSongs(newSong: Song[]): void {
    this.songs = newSong;
  }

  addSongs(newSong: Song): void {
    this.songs.push(newSong);
  }

  removeSongs(songs: string): void {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songs) {
        this.songs.splice(i, 1);
        break;
      }
    }
  }

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
    for (const value of this.genre) {
      console.log(value.getName());
    }
    console.log('Songs: ');
    for (const value of this.songs) {
      console.log(value.getName());
    }
  }
}