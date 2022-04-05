import {Song} from './Song';
import {MusicalGenres} from './MusicalGenres';

export class Playlist {
  constructor(private name: string,
              private songs: Song[],
              private duration: string,
              private genres: MusicalGenres[]) {}
}