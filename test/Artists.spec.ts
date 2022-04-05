import 'mocha';
import { expect } from 'chai';
import { Artists } from '../src/Artists';
import { Groups } from '../src/Groups';
import { MusicalGenres } from '../src/MusicalGenres';
import { Album } from '../src/Album';
import { Song } from '../src/Song';


describe('Tests de la clase Artists', () => {
  var artists: Artists;
  var group1: Groups;
  var musicalGenre: MusicalGenres;

  var album1: Album;
  var album2: Album;
  var albums: Album[];

  var song1: Song;
  var song2: Song;
  var song3: Song;
  var songs: Song[];
  beforeEach(() => {
    musicalGenre = new MusicalGenres('Pop', [artists], [group1], albums, songs);
    group1 = new Groups('G1', [artists], 2000, [musicalGenre], [album1], 5000);
    album1 = new Album('A1', group1, 2000, [musicalGenre], [song1, song2]);
    album2 = new Album('A2', artists, 2015, [musicalGenre], [song3]);
    albums = [album1, album2];
    song1 = new Song('S1', artists, '3:00', [musicalGenre], false, 1000);
    song2 = new Song('S2', artists, '2:50', [musicalGenre], true, 5000);
    song3 = new Song('S3', artists, '3:12', [musicalGenre], false, 3000);
    songs = [song1, song2, song3];
    artists = new Artists('Beyonce', [group1], [musicalGenre], albums, songs, 50000);
  });
  it('Existe un método getName()', () => {
    expect(artists.getName).to.exist;
    expect(artists.getName).to.be.a('function');
    expect(artists.getName()).to.be.equal('Beyonce');
  });
  it('Existe un método setName()', () => {
    expect(artists.setName).to.exist;
    expect(artists.setName).to.be.a('function');
    artists.setName('test');
    expect(artists.getName()).to.be.equal('test');
  });
  it('Existe un método getGroups()', () => {
    expect(artists.getGroups).to.exist;
    expect(artists.getGroups).to.be.a('function');
    expect(artists.getGroups()).to.be.deep.equal([group1]);
  });
  it('Existe un método setGroups()', () => {
    expect(artists.setGroups).to.exist;
    expect(artists.setGroups).to.be.a('function');
    artists.setGroups([new Groups('', [], 0, [], [], 0)]);
    expect(artists.getGroups()).to.be.deep.equal([new Groups('', [], 0, [], [], 0)]);
  });
  it('Existe un método addGroup()', () => {
    var group = new Groups("Destiny's child", [], 0, [], [], 0);
    expect(artists.addGroup).to.exist;
    expect(artists.addGroup).to.be.a('function');
    artists.addGroup(group);
    expect(artists.getGroups()).to.be.deep.equal([group1, group]);
    expect(artists.getGroups().length).to.be.equal(2);
  });
  it('Existe un método getGenres()', () => {
    expect(artists.getGenres).to.exist;
    expect(artists.getGenres).to.be.a('function');
    expect(artists.getGenres()).to.be.deep.equal([musicalGenre]);
  });
  it('Existe un método setGenres()', () => {
    var genre = new MusicalGenres('Rock', [], [], [], []);
    expect(artists.setGenres).to.exist;
    expect(artists.setGenres).to.be.a('function');
    artists.setGenres([genre]);
    expect(artists.getGenres()).to.be.deep.equal([genre]);
  });
  it('Existe un método addGenre()', () => {
    var genre = new MusicalGenres('Rock', [], [], [], []);
    expect(artists.addGenre).to.exist;
    expect(artists.addGenre).to.be.a('function');
    artists.addGenre(genre);
    expect(artists.getGenres()).to.be.deep.equal([musicalGenre, genre]);
    expect(artists.getGenres().length).to.be.equal(2);
  });
  it('Existe un método getAlbums()', () => {
    expect(artists.getAlbums).to.exist;
    expect(artists.getAlbums).to.be.a('function');
    expect(artists.getAlbums()).to.be.deep.equal([albums[0], albums[1]]);
  });
  it('Existe un método setAlbums()', () => {
    var album = new Album('Album3', new Groups('', [], 0, [], [], 0), 0, [], []);
    expect(artists.setAlbums).to.exist;
    expect(artists.setAlbums).to.be.a('function');
    artists.setAlbums([album]);
    expect(artists.getAlbums()).to.be.deep.equal([album]);
  });
  it('Existe un método addAlbum()', () => {
    var album = new Album('Album3', new Groups('', [], 0, [], [], 0), 0, [], []);
    expect(artists.addAlbum).to.exist;
    expect(artists.addAlbum).to.be.a('function');
    artists.addAlbum(album);
    expect(artists.getAlbums()).to.be.deep.equal([albums[0], albums[1], album]);
    expect(artists.getAlbums().length).to.be.equal(3);
  });
  it('Existe un método getSongs()', () => {
    expect(artists.getSongs).to.exist;
    expect(artists.getSongs).to.be.a('function');
    expect(artists.getSongs()).to.be.deep.equal([songs[0], songs[1], songs[2]]);
  });
  it('Existe un método setSongs()', () => {
    var song = new Song('Song4', new Artists('', [], [], [], [], 0), '', [], false, 0);
    expect(artists.setSongs).to.exist;
    expect(artists.setSongs).to.be.a('function');
    artists.setSongs([song]);
    expect(artists.getSongs()).to.be.deep.equal([song]);
  });
  it('Existe un método addSong()', () => {
    var song = new Song('Song4', new Artists('', [], [], [], [], 0), '', [], false, 0);
    expect(artists.addSong).to.exist;
    expect(artists.addSong).to.be.a('function');
    artists.addSong(song);
    expect(artists.getSongs()).to.be.deep.equal([songs[0], songs[1], songs[2], song]);
    expect(artists.getSongs().length).to.be.equal(4);
  });
  it('Existe un método getNumFollowers()', () => {
    expect(artists.getNumFollowers).to.exist;
    expect(artists.getNumFollowers).to.be.a('function');
    expect(artists.getNumFollowers()).to.be.equal(55000);
  });
  it('Existe un método setNumFollowers()', () => {
    expect(artists.setNumFollowers).to.exist;
    expect(artists.setNumFollowers).to.be.a('function');
    artists.setNumFollowers(1);
    expect(artists.getNumFollowers()).to.be.equal(5001);
  });
});