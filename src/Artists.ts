import { Groups } from "./Groups";
import { MusicalGenres } from "./MusicalGenres";
import { Album } from "./Album";
import { Song } from "./Song";

export class Artists {
  constructor(private name: string, 
              private groups: Groups[], 
              private genres: MusicalGenres[],
              private albums: Album[],
              private songs: Song[],
              private numFollowers: number) {}
  
  /**
   * getName() returns the name of the artist
   * @returns {string} name of the artist
   */
  getName(): string {
    return this.name;
  }

  /**
   * setName() sets the name of the artist
   * @param name {string} name of the artist
   * @returns {void}
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * getGroups() returns the groups of the artist
   * @returns {Groups[]} groups of the artist
   */
  getGroups(): Groups[] {
    return this.groups;
  }

  /**
   * setGroups() sets the groups of the artist
   * @param groups {Groups[]} groups of the artist
   * @returns {void}
   */
  setGroups(groups: Groups[]): void {
    this.groups = groups;
  }

  /**
   * addGroup() adds a group to the artist
   * @param group {Groups} group to be added
   * @returns {void}
   */
  addGroup(group: Groups): void {
    this.groups.push(group);
  }

  /**
   * removeGroup() removes a group from the artist
   * @param group {string} name of the group to be removed
   * @returns {void}
   */
  removeGroup(group: string): void {
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].getName() === group) {
        this.groups.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getGenres() returns the genres of the artist
   * @returns {MusicalGenres[]} genres of the artist
   */
  getGenres(): MusicalGenres[] {
    return this.genres;
  }

  /**
   * setGenres() sets the genres of the artist
   * @param genres {MusicalGenres[]} genres of the artist
   * @returns {void}
   */
  setGenres(genres: MusicalGenres[]): void {
    this.genres = genres;
  }

  /**
   * addGenre() adds a genre to the artist
   * @param genre {MusicalGenres} genre to be added
   * @returns {void}
   */
  addGenre(genre: MusicalGenres): void {
    this.genres.push(genre);
  }

  /**
   * removeGenre() removes a genre from the artist
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
   * getAlbums() returns the albums of the artist
   * @returns {Album[]} albums of the artist
   */
  getAlbums(): Album[] {
    return this.albums;
  }

  /**
   * setAlbums() sets the albums of the artist
   * @param albums {Album[]} albums of the artist
   * @returns {void}
   */
  setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  /**
   * addAlbum() adds a album to the artist
   * @param album {Album} album to be added
   * @returns {void}
   */
  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  /**
   * removeAlbum() removes a album from the artist
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
   * getSongs() returns the songs of the artist
   * @returns {Song[]} songs of the artist
   */
  getSongs(): Song[] {
    return this.songs;
  }

  /**
   * setSongs() sets the songs of the artist
   * @param songs {Song[]} songs of the artist
   * @returns {void}
   */
  setSongs(songs: Song[]): void {
    this.songs = songs;
  }

  /**
   * addSong() adds a song to the artist
   * @param song {Song} song to be added
   * @returns {void}
   */
  addSong(song: Song): void {
    this.songs.push(song);
  }

  /**
   * removeSong() removes a song from the artist
   * @param song {string} name of the song to be removed
   * @returns {void}
   */
  removeSong(song: string): void {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === song) {
        this.songs.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getNumFollowers() returns the number of followers of the artist
   * @returns {number} number of followers of the artist
   */
  getNumFollowers(): number {
    for (let i = 0; i < this.groups.length; i++) 
      this.numFollowers += this.groups[i].getNumFollowers();
    return this.numFollowers;
  }

  /**
   * setNumFollowers() sets the number of followers of the artist
   * @param numFollowers {number} number of followers of the artist
   * @returns {void}
   */
  setNumFollowers(numFollowers: number): void {
    this.numFollowers = numFollowers;
  }

  /**
   * printInfo() prints the information of the artist
   * @returns {void}
   */
  printInfo(): void {
    console.log("Name: " + this.name);
    console.log("Groups: ");
    for (let i = 0; i < this.groups.length; i++) 
      console.log(this.groups[i].getName());
    console.log("Genres: ");
    for (let i = 0; i < this.genres.length; i++) 
      console.log(this.genres[i].getName());
    console.log("Albums: ");
    for (let i = 0; i < this.albums.length; i++) 
      console.log(this.albums[i].getName());
    console.log("Songs: ");
    for (let i = 0; i < this.songs.length; i++) 
      console.log(this.songs[i].getName());
    console.log("Followers: " + this.getNumFollowers());
  }
}