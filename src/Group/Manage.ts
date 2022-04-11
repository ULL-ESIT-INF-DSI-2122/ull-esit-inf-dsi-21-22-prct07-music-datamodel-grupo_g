import {Nameable} from '../Nameable/Nameable';
import {MusicalGenresManage} from '../MusicalGenres/MusicalGenresManage';
import {ArtistManage} from '../Artist/ArtistManage';
import {AlbumManage} from '../Album/AlbumManage';


export interface Manage extends Nameable, MusicalGenresManage, ArtistManage, AlbumManage {}
