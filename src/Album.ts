import {Groups} from './Groups';
import {Artists} from './Artists';
import {Song} from './Song';
import {MusicalGenres} from './MusicalGenres';

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
}