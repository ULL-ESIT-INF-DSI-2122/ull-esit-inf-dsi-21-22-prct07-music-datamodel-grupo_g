const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
import {Artist} from './Artist';
import {Group} from './Group';
import {MusicalGenres} from './MusicalGenres';
import {Album} from './Album';
import {Song} from './Song';
import {Playlist} from './Playlist';

const adapter = new FileSync('src/db.json');
const db = low(adapter);

// Singleton class for database management
export class DB {
  private static instance: DB;
  private constructor() {
    db.defaults({
      artists: [],
      groups: [],
      genres: [],
      albums: [],
      songs: [],
      playlists: []
    }).write();
  }

  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }

  public getDB(): any {
    return db;
  }

  public getArtists(): [{name: string, groups: string[], genres: string[], albums: string[], songs: string[], numFollowers: number}] {
    return db.get('artists').value();
  }

  public getGroups(): [{name: string, artists: string[], creationYear: number, genres: string[], albums: string[], numFollowers: number}] {
    return db.get('groups').value();
  }

  public getGenres(): [{name: string, artists: string[], groups: string[], albums: string[], songs: string[]}] {
    return db.get('genres').value();
  }

  public getAlbums(): [{name: string, author: string, year: number, genres: string[], songs: string[]}] {
    return db.get('albums').value();
  }

  public getSongs(): [{name: string, author: string, duration: number, genres: string[], isSingle: boolean, numRep: number}] {
    return db.get('songs').value();
  }

  public getPlaylists(): [{name: string, songs: string[], duration: number, genres: string[]}] {
    return db.get('playlists').value();
  }

  public addArtist(artist: Artist): void {
    const JSON = {
      name: artist.getName(),
      groups: artist.getGroup().map((group: Group) => group.getName()),
      genres: artist.getGenres().map((genre: MusicalGenres) => genre.getName()),
      albums: artist.getAlbums().map((album: Album) => album.getName()),
      songs: artist.getSongs().map((song: Song) => song.getName()),
      numFollowers: artist.getNumFollowers()
    };
    db.get('artists').push(JSON).write();
  }

  public addGroup(group: Group): void {
    const JSON = {
      name: group.getName(),
      artists: group.getArtist().map((artist: Artist) => artist.getName()),
      creationYear: group.getCreationYear(),
      genres: group.getGenres().map((genre: MusicalGenres) => genre.getName()),
      albums: group.getAlbums().map((album: Album) => album.getName()),
      numFollowers: group.getNumFollowers()
    };
    db.get('groups').push(JSON).write();
  }

  public addGenre(genre: MusicalGenres): void {
    const JSON = {
      name: genre.getName(),
      artists: genre.getArtist().map((artist: Artist) => artist.getName()),
      groups: genre.getGroup().map((group: Group) => group.getName()),
      albums: genre.getAlbums().map((album: Album) => album.getName()),
      songs: genre.getSong().map((song: Song) => song.getName())
    };
    db.get('genres').push(JSON).write();
  }

  public addAlbum(album: Album): void {
    const JSON = {
      name: album.getName(),
      author: album.getAuthor().getName(),
      year: album.getYear(),
      genres: album.getGenre().map((genre: MusicalGenres) => genre.getName()),
      songs: album.getSongs().map((song: Song) => song.getName())
    };
    db.get('albums').push(JSON).write();
  }

  public addSong(song: Song): void {
    const JSON = {
      name: song.getName(),
      author: song.getAuthor().getName(),
      duration: song.getDuration(),
      genres: song.getGenre().map((genre: MusicalGenres) => genre.getName()),
      isSingle: song.isSingle(),
      numRep: song.getNumRep(),
    };
    db.get('songs').push(JSON).write();
  }

  public addPlaylist(playlist: Playlist): void {
    const JSON = {
      name: playlist.getName(),
      songs: playlist.getSongs().map((song: Song) => song.getName()),
      duration: playlist.getDuration(),
      genres: playlist.getGenres().map((genre: MusicalGenres) => genre.getName())
    };
    db.get('playlists').push(JSON).write();
  }
}