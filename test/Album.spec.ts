import 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
import {Album} from '../src/Album';
import {Groups} from '../src/Groups';
import {Artists} from '../src/Artists';
import {Song} from '../src/Song';
import {MusicalGenres} from '../src/MusicalGenres';

describe('Album class - Test', () => {
  const log = console.log;
  before(() => {
    sinon.stub(console, 'log').callsFake(() => {});
  });
  after(() => {
    console.log = log;
  });

  let theWeeknd: Artists;

  let danwFM: Album;

  let song1: Song;
  let sacrifice: Song;
  let outOfTime: Song;

  let group1: Groups;

  let musicalGenreRB: MusicalGenres;
  let musicalGenre01: MusicalGenres;

  beforeEach(() => {
    group1 = new Groups('Group1', [], 2022, [], [], 10);
    sacrifice = new Song('Sacrifice', theWeeknd, '3.08', [musicalGenreRB], false, 148302453);
    outOfTime = new Song('Out Of Time', theWeeknd, '3.34', [musicalGenreRB], false, 6100242);
    song1 = new Song('song1', theWeeknd, '0.00', [musicalGenre01], true, 8908);
    musicalGenreRB = new MusicalGenres('rb', [theWeeknd], [], [danwFM], [sacrifice, outOfTime]);
    musicalGenre01 = new MusicalGenres('rock', [], [], [], []);
    danwFM = new Album('Danw FM', theWeeknd, 2022, [musicalGenreRB], [sacrifice, outOfTime]);
    theWeeknd = new Artists('Theweeknd', [], [musicalGenreRB], [danwFM], [sacrifice], 77841866);
  });

  it('getName() return the name of the album', () => {
    expect(danwFM.getName).to.exist;
    expect(danwFM.getName).to.be.a('function');
    expect(danwFM.getName()).to.be.equal('Danw FM');
  });

  it('setName() modify the name of the album', () => {
    expect(danwFM.setName).to.exist;
    expect(danwFM.setName).to.be.a('function');
    danwFM.setName('After Hours');
    expect(danwFM.getName()).to.be.equal('After Hours');
  });

  it('getBy() return if the album was published by artist or by group', () => {
    expect(danwFM.getBy).to.exist;
    expect(danwFM.getBy).to.be.a('function');
    expect(danwFM.getBy()).to.be.instanceOf(Artists);
  });

  it('setBy() modify the album was published by artist or by group', () => {
    expect(danwFM.setBy).to.exist;
    expect(danwFM.setBy).to.be.a('function');
    danwFM.setBy(group1);
    expect(danwFM.getBy()).to.be.instanceOf(Groups);
  });

  it('getYear() return the published year of the album', () => {
    expect(danwFM.getYear).to.exist;
    expect(danwFM.getYear).to.be.a('function');
    expect(danwFM.getYear()).to.be.equal(2022);
  });

  it('setYear() modify the published year of the album', () => {
    expect(danwFM.setYear).to.exist;
    expect(danwFM.setYear).to.be.a('function');
    danwFM.setYear(2020);
    expect(danwFM.getYear()).to.be.equal(2020);
  });

  it('getGenre() return genres list of the album', () => {
    expect(danwFM.getGenre).to.exist;
    expect(danwFM.getGenre).to.be.a('function');
    expect(danwFM.getGenre()).to.deep.equal([musicalGenreRB]);
  });

  it('setGenre() modified genre in album genre list', () => {
    expect(danwFM.setGenre).to.exist;
    expect(danwFM.setGenre).to.be.a('function');
    danwFM.setGenre([musicalGenre01]);
    expect(danwFM.getGenre()).to.deep.equal([musicalGenre01]);
  });

  it('addGenre() genre added on album', () => {
    const musicalGenrePop: MusicalGenres = new MusicalGenres('pop', [theWeeknd], [], [danwFM], [sacrifice, outOfTime]);
    expect(danwFM.addGenre).to.exist;
    expect(danwFM.addGenre).to.be.a('function');
    danwFM.addGenre(musicalGenrePop);
    expect(danwFM.getGenre()).to.deep.equal([musicalGenreRB, musicalGenrePop]);
    expect(danwFM.getGenre().length).to.be.equal(2);
  });

  it('removeGenre() genre removed on album', () => {
    const danwFM2: Album = new Album('Danw FM', group1, 2022, [musicalGenreRB], []);
    expect(danwFM.removeGenre).to.exist;
    expect(danwFM2.removeGenre).to.exist;
    expect(danwFM.removeGenre).to.be.a('function');
    expect(danwFM2.removeGenre).to.be.a('function');
    danwFM.removeGenre('rb');
    danwFM2.removeGenre('pop');
    expect(danwFM.getGenre()).to.deep.equal([]);
    expect(danwFM2.getGenre()).to.deep.equal([musicalGenreRB]);
    expect(danwFM.getGenre().length).to.be.equal(0);
    expect(danwFM2.getGenre().length).to.be.equal(1);
  });

  it('getSongs() return the songs of the album', () => {
    expect(danwFM.getSongs).to.exist;
    expect(danwFM.getSongs).to.be.a('function');
    expect(danwFM.getSongs()).to.deep.equal([sacrifice, outOfTime]);
  });

  it('setSongs() modified song list', () => {
    expect(danwFM.setSongs).to.exist;
    expect(danwFM.setSongs).to.be.a('function');
    danwFM.setSongs([song1]);
    expect(danwFM.getSongs()).to.deep.equal([song1]);
  });

  it('addSongs() added song in song list', () => {
    const song2: Song = new Song('song2', theWeeknd, '2.00', [], true, 90);
    expect(danwFM.addSongs).to.exist;
    expect(danwFM.addSongs).to.be.a('function');
    danwFM.addSongs(song2);
    expect(danwFM.getSongs()).to.deep.equal([sacrifice, outOfTime, song2]);
    expect(danwFM.getSongs().length).to.be.equal(3);
  });

  it('removeSongs() removed song in song list', () => {
    const danwFM2: Album = new Album('Danw FM', group1, 2022, [], [sacrifice, outOfTime]);
    expect(danwFM.removeSongs).to.exist;
    expect(danwFM2.removeSongs).to.exist;
    expect(danwFM.removeSongs).to.be.a('function');
    expect(danwFM2.removeSongs).to.be.a('function');
    danwFM.removeSongs('Sacrifice');
    danwFM2.removeSongs('song1');
    expect(danwFM.getSongs()).to.deep.equal([outOfTime]);
    expect(danwFM2.getSongs()).to.deep.equal([sacrifice, outOfTime]);
    expect(danwFM.getSongs().length).to.be.equal(1);
    expect(danwFM2.getSongs().length).to.be.equal(2);
  });

  it('printInfo() prints album information', () => {
    const danwFM2: Album = new Album('Danw FM', group1, 2022, [], []);
    expect(danwFM.printInfo).to.exist;
    expect(danwFM2.printInfo).to.exist;
    expect(danwFM.printInfo).to.be.a('function');
    expect(danwFM2.printInfo).to.be.a('function');
    expect(() => danwFM.printInfo()).to.not.throw();
  });
});
