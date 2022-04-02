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
  
  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getGroups(): Groups[] {
    return this.groups;
  }

  setGroups(groups: Groups[]): void {
    this.groups = groups;
  }

  addGroup(group: Groups): void {
    this.groups.push(group);
  }

  getGenres(): MusicalGenres[] {
    return this.genres;
  }

  setGenres(genres: MusicalGenres[]): void {
    this.genres = genres;
  }

  addGenre(genre: MusicalGenres): void {
    this.genres.push(genre);
  }

  getAlbums(): Album[] {
    return this.albums;
  }

  setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  getSongs(): Song[] {
    return this.songs;
  }

  setSongs(songs: Song[]): void {
    this.songs = songs;
  }

  addSong(song: Song): void {
    this.songs.push(song);
  }

  getNumFollowers(): number {
    for (let i = 0; i < this.groups.length; i++) 
      this.numFollowers += this.groups[i].getNumFollowers();
    return this.numFollowers;
  }

  setNumFollowers(numFollowers: number): void {
    this.numFollowers = numFollowers;
  }
}