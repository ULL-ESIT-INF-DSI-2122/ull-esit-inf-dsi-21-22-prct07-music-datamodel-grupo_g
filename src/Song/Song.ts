import {Artist} from '../Artist/Artist';
import {Group} from '../Group/Group';
import {MusicalGenres} from '../MusicalGenres/MusicalGenres';
/**
 * Song class describes a song.
 */
export class Song {
  constructor(private name: string,
              private author: Artist | Group,
              private duration: string,
              private genre: MusicalGenres[],
              private single: boolean,
              private numRep: number) {}
  /**
   * getName() returns the name of the song.
   * @returns {string} the name of the song
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
   * getAuthor() returns the author of the song.
   * @returns {Artist | Group} the author of the song
   */
  getAuthor(): Artist | Group {
    return this.author;
  }

  /**
   * setAuthor() sets the author of the song.
   * @param author the author of the song
   */
  setAuthor(author: Artist | Group): void {
    this.author = author;
  }

  /**
   * getDuration() returns the duration of the song.
   * @returns {string} the duration of the song
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
   * @returns {MusicalGenres[]} the genre of the song
   */
  getGenre(): MusicalGenres[] {
    return this.genre;
  }

  /**
   * setGenre() sets the genre of the song.
   * @param genre the genre of the song
   */
  setGenre(genre: MusicalGenres[]): void {
    this.genre = genre;
  }

  /**
   * addGenre() adds a genre to the song.
   * @param genre genre to be added
   */
  addGenre(genre: MusicalGenres): void {
    this.genre.push(genre);
  }

  /**
   * removeGenre() removes a genre from the song.
   * @param genre genre to be removed
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
   * isSingle() returns if the song is a single or not.
   * @returns {boolean} tif the song is a single or not
   */
  isSingle(): boolean {
    return this.single;
  }

  /**
   * setSingle() sets if the song is a single or not.
   * @param single if the song is a single or not
   */
  setSingle(single: boolean): void {
    this.single = single;
  }

  /**
   * getNumRep() returns the number of times the song has been repeated.
   * @returns {number} the number of times the song has been repeated
   */
  getNumRep(): number {
    return this.numRep;
  }

  /**
   * setNumRep() sets the number of times the song has been repeated.
   * @param numRep the number of times the song has been repeated
   */
  setNumRep(numRep: number): void {
    this.numRep = numRep;
  }

  /**
   * printInfo() prints song's info.
   */
  printInfo(): void {
    console.log(`Song: ${this.name}`);
    if (this.author instanceof Artist) {
      console.log(`Artist: ${this.author.getName()}`);
    }
    if (this.author instanceof Group) {
      console.log(`Group: ${this.author.getName()}`);
    }
    console.log(`Duration: ${this.duration}`);
    console.log(`Genres: `);
    for (const genre of this.genre) {
      console.log(`${genre.getName()}`);
    }
    console.log(`Single: ${this.single}`);
    console.log(`Number of repetitions: ${this.numRep}`);
  }
}