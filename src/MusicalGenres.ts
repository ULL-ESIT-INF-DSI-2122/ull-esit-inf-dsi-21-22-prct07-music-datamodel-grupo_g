import {Groups} from './Groups';
import {Artists} from './Artists';
import {Album} from './Album';
import {Song} from './Song';

/**
 * Musical genres descibes the musical genres of the music library.
 */
export class MusicalGenres {
  constructor(private name: string,
              private artists: Artists[],
              private groups: Groups[],
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

  getArtists(): Artists[] {
    return this.artists;
  }

  setArtists(artists: Artists[]): void {
    this.artists = artists;
  }

  addArtist(artist: Artists): void {
    this.artists.push(artist);
  }

  removeArtist(artist: string): void {
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === artist) {
        this.artists.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getGArtist() returns the artist or group of the genre.
   * @returns the group or artist of the genre
   */
  getGroups(): Groups[] {
    return this.groups;
  }

  setGroups(groups: Groups[]): void {
    this.groups = groups;
  }

  addGroup(group: Groups): void {
    this.groups.push(group);
  }
  
  removeGroup(group: string): void {
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].getName() === group) {
        this.groups.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getAlbums() returns the albums of the genre.
   * @returns the name of the genre
   */
  getAlbums(): Album[] {
    return this.albums;
  }

  setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  /**
   * addAlbum() adds an album to the genre.
   * @param album album to be added
   */
  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  removeAlbum(album: string): void {
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].getName() === album) {
        this.albums.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getSong() returns the song of the genre.
   * @returns the number of songs in the genre
   */
  getSong(): Song[] {
    return this.song;
  }

  setSongs(songs: Song[]): void {
    this.song = songs;
  }

  /**
   * addSong() adds a song to the genre.
   * @param song song to be added
   */
  addSong(song: Song): void {
    this.song.push(song);
  }

  removeSong(song: string): void {
    for (let i = 0; i < this.song.length; i++) {
      if (this.song[i].getName() === song) {
        this.song.splice(i, 1);
        break;
      }
    }
  }

  /**
   * printInfo() prints the information of the genre.
   */
  printInfo(): void {
    console.log(`Genre: ${this.name}`);
    console.log(`Artists: `);
    for (let i = 0; i < this.artists.length; i++) 
      console.log(`${i + 1}. ${this.artists[i].getName()}`);
    console.log(`Groups: `);
    for (let i = 0; i < this.groups.length; i++) 
      console.log(`${i + 1}. ${this.groups[i].getName()}`);
    console.log(`Albums: `); 
    for (let i = 0; i < this.albums.length; i++) 
      console.log(`${i + 1}. ${this.albums[i].getName()}`);
    console.log(`Songs:`);
    for (let i = 0; i < this.song.length; i++)
      console.log(`${i + 1}. ${this.song[i].getName()}`);
  }
}