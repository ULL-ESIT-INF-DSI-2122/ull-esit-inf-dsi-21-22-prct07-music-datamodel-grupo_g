import {Nameable} from '../Nameable/Nameable';
import {MusicalGenresManage} from '../MusicalGenres/MusicalGenresManage';
import {SongManage} from '../Song/SongManage';


export interface Manage extends Nameable, MusicalGenresManage, SongManage {}
