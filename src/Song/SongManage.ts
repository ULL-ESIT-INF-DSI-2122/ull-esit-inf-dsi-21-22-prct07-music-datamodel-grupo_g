import {Song} from './Song';

export interface SongManage {
  getSongs(): Song[];
  setSongs(Songs: Song[]): void;
  addSong(Song: Song): void;
  removeSong(Song: string): void;
}
