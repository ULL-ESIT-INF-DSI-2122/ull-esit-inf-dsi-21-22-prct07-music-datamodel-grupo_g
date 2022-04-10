import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import {Artist} from './Artist';
import {Group} from './Group';
import {MusicalGenres} from './MusicalGenres';
import {Album} from './Album';
import {Song} from './Song';
import {Playlist} from './Playlist';

// type schemaType = {
//   artist: {name: string; groups: string[]; genres: string[]; albums: string[]; songs: string[]; numFollowers: number};
//   group: {name: string; artists: string[]; creationYear: number; genres: string[]; albums: string[]; numFollowers: number};
//   musicalGenre: {name: string; artists: string[]; groups: string[]; albums: string[]; songs: string[]};
//   album: {name: string; author: string; year: number; genre: string[]; songs: string[]};
//   song: {name: string; author: string; duration: number; genre: string; isSingle: boolean; numRep: number};
//   playlist: {name: string; songs: string[], duration: number, genres: string[]};
// };

const adapter = new FileSync('db.json');
const db = lowdb(adapter);

db.defaults({
  artist: [],
  group: [],
  musicalGenre: [],
  album: [],
  song: [],
  playlist: []
}).write();

