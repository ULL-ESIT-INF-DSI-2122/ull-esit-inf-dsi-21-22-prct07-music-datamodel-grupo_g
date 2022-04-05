import 'mocha';
import { expect } from 'chai';
import { Groups } from "../src/Groups";
import { Artists } from "../src/Artists";
import { MusicalGenres } from "../src/MusicalGenres";
import { Album } from "../src/Album";
import { Song } from '../src/Song';


describe('Tests de la clase Groups', () => {
  var groups: Groups;
  var artists_: Artists;
  var musicalGenre: MusicalGenres;
  var album1: Album;
  var album2: Album;
  var albums: Album[];
  var song1: Song;
  var song2: Song;
  var song3: Song;
  var songs: Song[];
  beforeEach(() => {
    musicalGenre = new MusicalGenres('Pop', [artists_], [groups], albums, songs);
    album1 = new Album('A1', groups, 2000, [musicalGenre], [song1, song2]);
    album2 = new Album('A2', artists_, 2015, [musicalGenre], [song3]);
    albums = [album1, album2];
    song1 = new Song('S1', artists_, '3:00', [musicalGenre], false, 1000);
    song2 = new Song('S2', artists_, '2:50', [musicalGenre], true, 5000);
    song3 = new Song('S3', artists_, '3:12', [musicalGenre], false, 3000);
    songs = [song1, song2, song3];
    artists_ = new Artists('Beyonce', [groups], [musicalGenre], albums, songs, 50000);
    groups = new Groups('G1', [artists_], 2000, [musicalGenre], albums, 5000);
  });
  it('Existe un método getName()', () => {
    expect(groups.getName).to.exist;
    expect(groups.getName).to.be.a('function');
    expect(groups.getName()).to.be.equal('G1');
  });
  it('Existe un método setName()', () => {
    expect(groups.setName).to.exist;
    expect(groups.setName).to.be.a('function');
    groups.setName('test');
    expect(groups.getName()).to.be.equal('test');
  });
  it('Existe un método getArtists()', () => {
    expect(groups.getArtists).to.exist;
    expect(groups.getArtists).to.be.a('function');
    expect(groups.getArtists()).to.be.deep.equal([artists_]);
  });
  it('Existe un método setArtists()', () => {
    var artist = new Artists('Rihanna', [], [], [], [], 0);
    expect(groups.setArtists).to.exist;
    expect(groups.setArtists).to.be.a('function');
    groups.setArtists([artist]);
    expect(groups.getArtists()).to.be.deep.equal([artist]);
  });
  it('Existe un método addArtist()', () => {
    var artist = new Artists('Rihanna', [], [], [], [], 0);
    expect(groups.addArtist).to.exist;
    expect(groups.addArtist).to.be.a('function');
    groups.addArtist(artist);
    expect(groups.getArtists()).to.be.deep.equal([artists_, artist]);
    expect(groups.getArtists().length).to.be.equal(2);
  });
  it('Existe un método removeArtist()', () => {
    expect(groups.removeArtist).to.exist;
    expect(groups.removeArtist).to.be.a('function');
    groups.removeArtist('Beyonce');
    expect(groups.getArtists()).to.be.deep.equal([]);
    expect(groups.getArtists().length).to.be.equal(0);
  });
  it('Existe un método getCreationYear()', () => {
    expect(groups.getCreationYear).to.exist;
    expect(groups.getCreationYear).to.be.a('function');
    expect(groups.getCreationYear()).to.be.equal(2000);
  });
  it('Existe un método setCreationYear()', () => {
    expect(groups.setCreationYear).to.exist;
    expect(groups.setCreationYear).to.be.a('function');
    groups.setCreationYear(2001);
    expect(groups.getCreationYear()).to.be.equal(2001);
  });
  it('Existe un método getGenres()', () => {
    expect(groups.getGenres).to.exist;
    expect(groups.getGenres).to.be.a('function');
    expect(groups.getGenres()).to.be.deep.equal([musicalGenre]);
  });
  it('Existe un método setGenres()', () => {
    var genre = new MusicalGenres('Rock', [], [], [], []);
    expect(groups.setGenres).to.exist;
    expect(groups.setGenres).to.be.a('function');
    groups.setGenres([genre]);
    expect(groups.getGenres()).to.be.deep.equal([genre]);
  });
  it('Existe un método addGenre()', () => {
    var genre = new MusicalGenres('Rock', [], [], [], []);
    expect(groups.addGenre).to.exist;
    expect(groups.addGenre).to.be.a('function');
    groups.addGenre(genre);
    expect(groups.getGenres()).to.be.deep.equal([musicalGenre, genre]);
    expect(groups.getGenres().length).to.be.equal(2);
  });
  it('Existe un método removeGenre()', () => {
    expect(groups.removeGenre).to.exist;
    expect(groups.removeGenre).to.be.a('function');
    groups.removeGenre('Pop');
    expect(groups.getGenres()).to.be.deep.equal([]);
    expect(groups.getGenres().length).to.be.equal(0);
  });
  it('Existe un método getAlbums()', () => {
    expect(groups.getAlbums).to.exist;
    expect(groups.getAlbums).to.be.a('function');
    expect(groups.getAlbums()).to.be.deep.equal([albums[0], albums[1]]);
  });
  it('Existe un método setAlbums()', () => {
    var album = new Album('Album3', artists_, 2000, [musicalGenre], [song1, song2]);
    expect(groups.setAlbums).to.exist;
    expect(groups.setAlbums).to.be.a('function');
    groups.setAlbums([album]);
    expect(groups.getAlbums()).to.be.deep.equal([album]);
  });
  it('Existe un método addAlbum()', () => {
    var album = new Album('Album3', artists_, 2000, [musicalGenre], [song1, song2]);
    expect(groups.addAlbum).to.exist;
    expect(groups.addAlbum).to.be.a('function');
    groups.addAlbum(album);
    expect(groups.getAlbums()).to.be.deep.equal([albums[0], albums[1], album]);
    expect(groups.getAlbums().length).to.be.equal(3);
  });
  it('Existe un método removeAlbum()', () => {
    expect(groups.removeAlbum).to.exist;
    expect(groups.removeAlbum).to.be.a('function');
    groups.removeAlbum('A1');
    expect(groups.getAlbums()).to.be.deep.equal([albums[0]]);
    expect(groups.getAlbums().length).to.be.equal(1);
  });
  it('Existe un método getNumFollowers()', () => {
    expect(groups.getNumFollowers).to.exist;
    expect(groups.getNumFollowers).to.be.a('function');
    expect(groups.getNumFollowers()).to.be.equal(5000);
  });
  it('Existe un método setNumFollowers()', () => {
    expect(groups.setNumFollowers).to.exist;
    expect(groups.setNumFollowers).to.be.a('function');
    groups.setNumFollowers(2000);
    expect(groups.getNumFollowers()).to.be.equal(2000);
  });
  // it('Existe un método printInfo())', () => {
  //   expect(groups.printInfo).to.exist;
  //   expect(groups.printInfo).to.be.a('function');
  //   expect(groups.printInfo()).not.to.throw;
  // });
});