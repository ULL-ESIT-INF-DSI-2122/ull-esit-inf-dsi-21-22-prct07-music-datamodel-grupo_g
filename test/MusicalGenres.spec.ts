import 'mocha';
import {expect} from 'chai';
import {Song} from '../src/Song';
import {Artists} from '../src/Artists';
import {Album} from '../src/Album';
import {Groups} from '../src/Groups';
import {MusicalGenres} from '../src/MusicalGenres';

describe('MusicalGenres class - Tests', () => {
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
    song1 = new Song('song1', artist1, '3:00', [genre1], false, 1000);
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

  it('getName() returns the name of the genre', () => {
    expect(genre1.getName()).to.be.equal('genre1');
    expect(genre2.getName()).to.be.equal('genre2');
    expect(genre1.getName()).to.not.be.equal('genre2');
  });

  it('getArtists() returns the artists of the genre for genre1', () => {
    expect(genre1.getArtists()).to.deep.equal([artist1, artist3]);
    expect(genre1.getArtists()).to.not.deep.equal([artist2]);
  });

  it('getGroups() returns the groups of the genre for genre1', () => {
    expect(genre1.getGroups()).to.deep.equal([group1]);
    expect(genre1.getGroups()).to.not.deep.equal([group2]);
  });

  it('addArtist() adds an artist to the genre', () => {
    genre1.addArtist(artist2);
    expect(genre1.getArtists()).to.deep.equal([artist1, artist3, artist2]);
    expect(genre1.getArtists()).to.not.deep.equal([artist2]);
  });

  it('removeArtist() removes an artist from the genre', () => {
    genre1.removeArtist(artist1.getName());
    expect(genre1.getArtists()).to.deep.equal([artist3]);
    expect(genre1.getArtists()).to.not.deep.equal([artist1]);
  });

  it('getAlbums() returns the albums of the genre for genre1', () => {
    expect(genre1.getAlbums()).to.deep.equal([album1, album3]);
    expect(genre1.getAlbums()).to.not.deep.equal([album2]);
  });

  it('addAlbum() adds an album to the genre', () => {
    genre1.addAlbum(album2);
    expect(genre1.getAlbums()).to.deep.equal([album1, album3, album2]);
    expect(genre1.getAlbums()).to.not.deep.equal([album2]);
  });

  it('removeAlbum() removes an album from the genre', () => {
    genre1.removeAlbum(album1.getName());
    expect(genre1.getAlbums()).to.deep.equal([album3]);
    expect(genre1.getAlbums()).to.not.deep.equal([album1]);
  });

  it('getSongs() returns the songs of the genre for genre1', () => {
    expect(genre1.getSong()).to.deep.equal([song1, song2]);
    expect(genre1.getSong()).to.not.deep.equal([song3]);
  });

  it('addSong() adds a song to the genre', () => {
    genre1.addSong(song3);
    expect(genre1.getSong()).to.deep.equal([song1, song2, song3]);
    expect(genre1.getSong()).to.not.deep.equal([song3]);
  });

  it('removeSong() removes a song from the genre', () => {
    genre1.removeSong(song1.getName());
    expect(genre1.getSong()).to.deep.equal([song2]);
    expect(genre1.getSong()).to.not.deep.equal([song1]);
  });
});