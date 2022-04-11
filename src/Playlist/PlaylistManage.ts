import {Playlist} from './Playlist';

export interface PlaylistManage {
  getPlaylists(): Playlist[];
  setPlaylists(Playlists: Playlist[]): void;
  addPlaylist(Playlist: Playlist): void;
  removePlaylist(Playlist: string): void;
}
