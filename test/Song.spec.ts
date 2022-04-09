import 'mocha';
import {expect} from 'chai';
import {Song} from '../src/Song';
import {Artists} from '../src/Artists';
import {Album} from '../src/Album';
import {Groups} from '../src/Groups';
import {MusicalGenres} from '../src/MusicalGenres';

describe('Song class - Tests', () => {
  // Objects to test
  let song1: Song;
  let song2: Song;
  let song3: Song;

  let artist1: Artists;
  let artist2: Artists;
  let artist3: Artists;

  let album1: Album;
  let album2: Album;
  let album3: Album;

  let group1: Groups;
  let group2: Groups;

  let genre1: MusicalGenres;
  let genre2: MusicalGenres;

  beforeEach(() => {
    // Objects to test
    song1 = new Song('song1', artist1, '3:00', [genre1, genre2], false, 1000);
    song2 = new Song('song2', artist1, '2:50', [genre1], true, 5000);
    song3 = new Song('song3', artist1, '3:12', [genre1], false, 3000);

    artist1 = new Artists('artist1', [group1], [genre1], [album1], [song1, song2], 50000);
    artist2 = new Artists('artist2', [group2], [genre2], [album2], [song3], 50000);
    artist3 = new Artists('artist3', [group1], [genre1], [album3], [song1, song2], 50000);

    album1 = new Album('album1', group1, 2000, [genre1], [song1, song2]);
    album2 = new Album('album2', group2, 2015, [genre2], [song3]);
    album3 = new Album('album3', group1, 2000, [genre1], [song1, song2]);

    group1 = new Groups('group1', [artist1, artist3], 2000, [genre1], [album1, album3], 5000);
    group2 = new Groups('group2', [artist2], 2015, [genre2], [album2], 5000);

    genre1 = new MusicalGenres('genre1', [artist1, artist3], [group1], [album1, album3], [song1, song2]);
    genre2 = new MusicalGenres('genre2', [artist2], [group2], [album2], [song3]);
  });

  it('getName() returns the name of the song', () => {
    expect(song1.getName()).to.be.equal('song1');
    expect(song2.getName()).to.be.equal('song2');
    expect(song1.getName()).to.not.be.equal('song2');
  });

  it('setName() sets the name of the song', () => {
    song1.setName('song2');
    expect(song1.getName()).to.be.equal('song2');
    expect(song1.getName()).to.not.be.equal('song1');
  });

  it('getArtist() returns the artists of the song', () => {
    expect(song1.getArtist()).not.to.be.null;
  });

  it('setArtist() sets the artists of the song', () => {
    song1.setArtist(artist2);
    expect(song1.getArtist()).not.to.be.null;
  });

  it('getDuration() returns the duration of the song', () => {
    expect(song1.getDuration()).to.be.equal('3:00');
    expect(song2.getDuration()).to.be.equal('2:50');
    expect(song1.getDuration()).to.not.be.equal('3:12');
  });

  it('setDuration() sets the duration of the song', () => {
    song1.setDuration('3:12');
    expect(song1.getDuration()).to.be.equal('3:12');
    expect(song1.getDuration()).to.not.be.equal('3:00');
  });

  it('getGenres() returns the genres of the song', () => {
    expect(song1.getGenre()).not.to.be.null;
    expect(song1.getGenre()).to.be.an('array');
  });

  it('setGenres() sets the genres of the song', () => {
    song1.setGenre([genre2]);
    expect(song1.getGenre()).not.to.be.null;
    expect(song1.getGenre()).to.be.an('array');
    expect(song1.getGenre()).to.have.lengthOf(1);
  });

  it('addGenre() adds a genre to the song', () => {
    song1.addGenre(genre2);
    expect(song1.getGenre()).not.to.be.null;
    expect(song1.getGenre()).to.be.an('array');
    expect(song1.getGenre()).to.have.lengthOf(3);
  });

  it('removeGenre() removes a genre from the song', () => {
    song1.removeGenre(genre2.getName());
    expect(song1.getGenre()).not.to.be.null;
    expect(song1.getGenre()).to.be.an('array');
    expect(song1.getGenre()).to.have.lengthOf(1);
  });

  it('getSingles() returns the singles of the song', () => {
    expect(song1.getSingle()).to.be.false;
    expect(song2.getSingle()).to.be.true;
    expect(song1.getSingle()).to.not.be.true;
  });

  it('setSingle() sets the singles of the song', () => {
    song1.setSingle(true);
    expect(song1.getSingle()).to.be.true;
    expect(song1.getSingle()).to.not.be.false;
  });

  it('getNumRep() returns the number of plays of the song', () => {
    expect(song1.getNumRep()).to.be.equal(1000);
    expect(song2.getNumRep()).to.be.equal(5000);
    expect(song1.getNumRep()).to.not.be.equal(3000);
  });

  it('setNumRep() sets the number of plays of the song', () => {
    song1.setNumRep(3000);
    expect(song1.getNumRep()).to.be.equal(3000);
    expect(song1.getNumRep()).to.not.be.equal(5000);
  });

  it('printInfo() prints the information of the song', () => {
    expect(song1.printInfo());
    expect('printInfo' in song1).to.be.true;
    expect(song2.printInfo());
    expect('printInfo' in song2).to.be.true;
  });
});