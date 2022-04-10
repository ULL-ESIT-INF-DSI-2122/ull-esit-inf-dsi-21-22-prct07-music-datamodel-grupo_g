import {Artist} from './Artist';
import {MusicalGenres} from './MusicalGenres';
import {Album} from './Album';

/**
 * Groups class describes a group of artists.
 */
export class Group {
  constructor(private name: string,
              private artists: Artist[],
              private creationYear: number,
              private genres: MusicalGenres[],
              private albums: Album[],
              private numFollowers: number) {}

  /**
   * getName() returns the name of the group
   * @returns {string} the name of the group
   */
  getName(): string {
    return this.name;
  }

  /**
   * setName() sets the name of the group
   * @param name {string} name of the group
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * getArtist() returns the artists of the group
   * @returns {string} the artists of the group
   */
  getArtist(): Artist[] {
    return this.artists;
  }

  /**
   * setArtist() sets the artists of the group
   * @param artists {Artist[]} array of artists
   */
  setArtist(artists: Artist[]): void {
    this.artists = artists;
  }

  /**
   * addArtist() adds an artist to the group
   * @param artist artist to be added
   */
  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  /**
   * removeArtist() removes an artist from the group
   * @param artist name of the artist to be removed
   */
  removeArtist(artist: string): void {
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === artist) {
        this.artists.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getCreationYear() returns the creation year of the group
   * @returns {number} the creation year of the group
   */
  getCreationYear(): number {
    return this.creationYear;
  }

  /**
   * setCreationYear() sets the creation year of the group
   * @param creationYear {number} creation year of the group
   */
  setCreationYear(creationYear: number): void {
    this.creationYear = creationYear;
  }

  /**
   * getGenres() returns the genres of the group
   * @returns {MusicalGenres[]} the genres of the group
   */
  getGenres(): MusicalGenres[] {
    return this.genres;
  }

  /**
   * setGenres() sets the genres of the group
   * @param genres {MusicalGenres[]} genres of the group
   * @returns {void}
   */
  setGenres(genres: MusicalGenres[]): void {
    this.genres = genres;
  }

  /**
   * addGenre() adds a genre to the group
   * @param genre {MusicalGenres} genre to be added
   * @returns {void}
   */
  addGenre(genre: MusicalGenres): void {
    this.genres.push(genre);
  }

  /**
   * removeGenre() removes a genre from the group
   * @param genre {string} name of the genre to be removed
   * @returns {void}
   */
  removeGenre(genre: string): void {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genre) {
        this.genres.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getAlbums() returns the albums of the group
   * @returns {Album[]} the albums of the group
   */
  getAlbums(): Album[] {
    return this.albums;
  }

  /**
   * setAlbums() sets the albums of the group
   * @param albums {Album[]} albums of the group
   * @returns {void}
   */
  setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  /**
   * addAlbum() adds an album to the group
   * @param album {Album} album to be added
   * @returns {void}
   */
  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  /**
   * removeAlbum() removes an album from the group
   * @param album {string} name of the album to be removed
   * @returns {void}
   */
  removeAlbum(album: string): void {
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].getName() === album) {
        this.albums.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getNumFollowers() returns the number of followers of the group
   * @returns {number} the number of followers of the group
   */
  getNumFollowers(): number {
    return this.numFollowers;
  }

  /**
   * setNumFollowers() sets the number of followers of the group
   * @param numFollowers {number} number of followers of the group
   * @returns {void}
   */
  setNumFollowers(numFollowers: number): void {
    this.numFollowers = numFollowers;
  }

  /**
   * printInfo() prints the information of the group
   * @returns {void}
   */
  printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Creation year: ${this.creationYear}`);
    console.log(`Number of followers: ${this.numFollowers}`);
    console.log(`Genres: `);
    for (const genre of this.genres) {
      console.log(genre.getName());
    }
    console.log(`Artist: `);
    for (const artist of this.artists) {
      console.log(artist.getName());
    }
    console.log(`Albums: `);
    for (const album of this.albums) {
      console.log(album.getName());
    }
  }
}