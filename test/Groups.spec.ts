import 'mocha';
import { expect } from 'chai';
import { Groups } from "../src/Groups";
import { Artists } from "../src/Artists";
import { MusicalGenres } from "../src/MusicalGenres";
import { Album } from "../src/Album";
import { Song } from "../src/Song";


describe('Tests de la clase Groups', () => {
  var groups: Groups;
  beforeEach(() => {
    groups = new Groups('', [], 0, [], [], 0);
  });
  it('Existe un método getName()', () => {
    expect(groups.getName).to.exist;
    expect(groups.getName).to.be.a('function');
    expect(groups.getName()).to.be.equal('');
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
    expect(groups.getArtists()).to.be.deep.equal([]);
  });
  it('Existe un método setArtists()', () => {
    expect(groups.setArtists).to.exist;
    expect(groups.setArtists).to.be.a('function');
    groups.setArtists([new Artists('', [], [], [], [], 0)]);
    expect(groups.getArtists()).to.be.deep.equal([new Artists('', [], [], [], [], 0)]);
  });
  it('Existe un método addArtist()', () => {
    expect(groups.addArtist).to.exist;
    expect(groups.addArtist).to.be.a('function');
    groups.addArtist(new Artists('', [], [], [], [], 0));
    expect(groups.getArtists()).to.be.deep.equal([new Artists('', [], [], [], [], 0)]);
    expect(groups.getArtists().length).to.be.equal(1);
  });
  it('Existe un método getCreationYear()', () => {
    expect(groups.getCreationYear).to.exist;
    expect(groups.getCreationYear).to.be.a('function');
    expect(groups.getCreationYear()).to.be.equal(0);
  });
  it('Existe un método setCreationYear()', () => {
    expect(groups.setCreationYear).to.exist;
    expect(groups.setCreationYear).to.be.a('function');
    groups.setCreationYear(2000);
    expect(groups.getCreationYear()).to.be.equal(2000);
  });
  it('Existe un método getGenres()', () => {
    expect(groups.getGenres).to.exist;
    expect(groups.getGenres).to.be.a('function');
    expect(groups.getGenres()).to.be.deep.equal([]);
  });
  it('Existe un método setGenres()', () => {
    expect(groups.setGenres).to.exist;
    expect(groups.setGenres).to.be.a('function');
    groups.setGenres([new MusicalGenres('')]);
    expect(groups.getGenres()).to.be.deep.equal([new MusicalGenres('')]);
  });
  it('Existe un método addGenre()', () => {
    expect(groups.addGenre).to.exist;
    expect(groups.addGenre).to.be.a('function');
    groups.addGenre(new MusicalGenres(''));
    expect(groups.getGenres()).to.be.deep.equal([new MusicalGenres('')]);
    expect(groups.getGenres().length).to.be.equal(1);
  });
  it('Existe un método getAlbums()', () => {
    expect(groups.getAlbums).to.exist;
    expect(groups.getAlbums).to.be.a('function');
    expect(groups.getAlbums()).to.be.deep.equal([]);
  });
  it('Existe un método setAlbums()', () => {
    expect(groups.setAlbums).to.exist;
    expect(groups.setAlbums).to.be.a('function');
    groups.setAlbums([new Album('')]);
    expect(groups.getAlbums()).to.be.deep.equal([new Album('')]);
  });
  it('Existe un método addAlbum()', () => {
    expect(groups.addAlbum).to.exist;
    expect(groups.addAlbum).to.be.a('function');
    groups.addAlbum(new Album(''));
    expect(groups.getAlbums()).to.be.deep.equal([new Album('')]);
    expect(groups.getAlbums().length).to.be.equal(1);
  });
  it('Existe un método getNumFollowers()', () => {
    expect(groups.getNumFollowers).to.exist;
    expect(groups.getNumFollowers).to.be.a('function');
    expect(groups.getNumFollowers()).to.be.equal(0);
  });
  it('Existe un método setNumFollowers()', () => {
    expect(groups.setNumFollowers).to.exist;
    expect(groups.setNumFollowers).to.be.a('function');
    groups.setNumFollowers(2000);
    expect(groups.getNumFollowers()).to.be.equal(2000);
  });
});