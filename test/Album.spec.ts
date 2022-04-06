import 'mocha';
import {expect} from 'chai';
import {Album} from '../src/Album';
import {Groups} from '../src/Groups';
import {Artists} from '../src/Artists';
import {Song} from '../src/Song';
import {MusicalGenres} from '../src/MusicalGenres';

describe('Test of class Albums', () => {
  let theWeeknd: Artists;
  // let artist2: Artists;
  let danwFM: Album;
  // let album2: Album;
  let sacrifice: Song;
  let outOfTime: Song;
  // let song3: Song;
  // let song4: Song;
  // let song5: Song;
  // let group1: Groups;
  // let group2: Groups;
  let musicalGenreRB: MusicalGenres;
  beforeEach(() => {
    sacrifice = new Song('Sacrifice', theWeeknd, '3.08', [musicalGenreRB], false, 148302453);
    outOfTime = new Song('Out Of Time', theWeeknd, '3.34', [musicalGenreRB], false, 6100242);
    musicalGenreRB = new MusicalGenres('rb', [theWeeknd], [], [danwFM], [sacrifice, outOfTime]);
    danwFM = new Album('Danw FM', theWeeknd, 2022, [musicalGenreRB], [sacrifice, outOfTime]);
    theWeeknd = new Artists('Theweeknd', [], [musicalGenreRB], [danwFM], [sacrifice], 77841866);
  });
});