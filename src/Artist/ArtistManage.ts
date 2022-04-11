import {Artist} from './Artist';

export interface ArtistManage {
  getArtists(): Artist[];
  setArtists(Artists: Artist[]): void;
  addArtist(Artist: Artist): void;
  removeArtist(Artist: string): void;
}
