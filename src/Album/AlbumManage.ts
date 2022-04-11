import {Album} from './Album';

export interface AlbumManage {
  getAlbums(): Album[];
  setAlbums(albums: Album[]): void;
  addAlbum(album: Album): void;
  removeAlbum(album: string): void;
}
