import { Artists } from "./Artists";
import { MusicalGenres } from "./MusicalGenres";
import { Album } from "./Album";

export class Groups {
  constructor(private name: string,
              private artists: Artists[],
              private creationYear: number,
              private genres: MusicalGenres[],
              private albums: Album[],
              private numFollowers: number) {}
  
  getName(): string {
    return this.name;
  }

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

  getCreationYear(): number {
    return this.creationYear;
  }

  setCreationYear(creationYear: number): void {
    this.creationYear = creationYear;
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

  getNumFollowers(): number {
    return this.numFollowers;
  }

  setNumFollowers(numFollowers: number): void {
    this.numFollowers = numFollowers;
  }
}