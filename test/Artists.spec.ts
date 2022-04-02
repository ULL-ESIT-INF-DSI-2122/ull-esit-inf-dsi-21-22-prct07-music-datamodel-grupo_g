import 'mocha';
import { expect } from 'chai';
import { Artists } from '../src/Artists';
import { Groups } from '../src/Groups';
import { MusicalGenres } from '../src/MusicalGenres';
import { Album } from '../src/Album';
import { Song } from '../src/Song';


describe('Tests de la clase Artists', () => {
  var artists: Artists;
  beforeEach(() => {
    artists = new Artists('', [], [], [], [], 0);
  });
  it('Existe un método getName()', () => {
    expect(artists.getName).to.exist;
    expect(artists.getName).to.be.a('function');
    expect(artists.getName()).to.be.equal('');
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
    expect(artists.getGroups()).to.be.deep.equal([]);
  });
  it('Existe un método setGroups()', () => {
    expect(artists.setGroups).to.exist;
    expect(artists.setGroups).to.be.a('function');
    artists.setGroups([new Groups('', [], 0, [], [], 0)]);
    expect(artists.getGroups()).to.be.deep.equal([new Groups('', [], 0, [], [], 0)]);
  });
  it('Existe un método addGroup()', () => {
    expect(artists.addGroup).to.exist;
    expect(artists.addGroup).to.be.a('function');
    artists.addGroup(new Groups('', [], 0, [], [], 0));
    expect(artists.getGroups()).to.be.deep.equal([new Groups('', [], 0, [], [], 0)]);
    expect(artists.getGroups().length).to.be.equal(1);
  });
  it('Existe un método getGenres()', () => {
    expect(artists.getGenres).to.exist;
    expect(artists.getGenres).to.be.a('function');
    expect(artists.getGenres()).to.be.deep.equal([]);
  });
  it('Existe un método setGenres()', () => {
    expect(artists.setGenres).to.exist;
    expect(artists.setGenres).to.be.a('function');
    artists.setGenres([new MusicalGenres('')]);
    expect(artists.getGenres()).to.be.deep.equal([new MusicalGenres('')]);
  });
  it('Existe un método addGenre()', () => {
    expect(artists.addGenre).to.exist;
    expect(artists.addGenre).to.be.a('function');
    artists.addGenre(new MusicalGenres(''));
    expect(artists.getGenres()).to.be.deep.equal([new MusicalGenres('')]);
    expect(artists.getGenres().length).to.be.equal(1);
  });
  it('Existe un método getAlbums()', () => {
    expect(artists.getAlbums).to.exist;
    expect(artists.getAlbums).to.be.a('function');
    expect(artists.getAlbums()).to.be.deep.equal([]);
  });
  it('Existe un método setAlbums()', () => {
    expect(artists.setAlbums).to.exist;
    expect(artists.setAlbums).to.be.a('function');
    artists.setAlbums([new Album('')]);
    expect(artists.getAlbums()).to.be.deep.equal([new Album('')]);
  });
  it('Existe un método addAlbum()', () => {
    expect(artists.addAlbum).to.exist;
    expect(artists.addAlbum).to.be.a('function');
    artists.addAlbum(new Album(''));
    expect(artists.getAlbums()).to.be.deep.equal([new Album('')]);
    expect(artists.getAlbums().length).to.be.equal(1);
  });
  it('Existe un método getSongs()', () => {
    expect(artists.getSongs).to.exist;
    expect(artists.getSongs).to.be.a('function');
    expect(artists.getSongs()).to.be.deep.equal([]);
  });
  it('Existe un método setSongs()', () => {
    expect(artists.setSongs).to.exist;
    expect(artists.setSongs).to.be.a('function');
    artists.setSongs([new Song('')]);
    expect(artists.getSongs()).to.be.deep.equal([new Song('')]);
  });
  it('Existe un método addSong()', () => {
    expect(artists.addSong).to.exist;
    expect(artists.addSong).to.be.a('function');
    artists.addSong(new Song(''));
    expect(artists.getSongs()).to.be.deep.equal([new Song('')]);
    expect(artists.getSongs().length).to.be.equal(1);
  });
  it('Existe un método getNumFollowers()', () => {
    expect(artists.getNumFollowers).to.exist;
    expect(artists.getNumFollowers).to.be.a('function');
    expect(artists.getNumFollowers()).to.be.equal(0);
  });
  it('Existe un método setNumFollowers()', () => {
    expect(artists.setNumFollowers).to.exist;
    expect(artists.setNumFollowers).to.be.a('function');
    artists.setNumFollowers(1);
    expect(artists.getNumFollowers()).to.be.equal(1);
  });
});