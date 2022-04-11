import {MusicalGenres} from './MusicalGenres';

export interface MusicalGenresManage {
  getGenres(): MusicalGenres[];
  setGenres(MusicalGenress: MusicalGenres[]): void;
  addGenre(MusicalGenres: MusicalGenres): void;
  removeGenre(MusicalGenres: string): void;
}
