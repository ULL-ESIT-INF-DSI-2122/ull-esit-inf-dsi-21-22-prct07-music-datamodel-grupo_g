import 'mocha';
import {expect} from 'chai';
import {Song} from '../src/Song';
import {Artists} from '../src/Artists';
import {MusicalGenres} from '../src/MusicalGenres';

describe ('Song class - Tests', () => {
  // Objects to test
  const beyonce = new Artists('Beyonce', [], [], [], [], 0);
  const song1 = new Song('These Days', beyonce, '3:00', [], false, 1000);
  const song2 = new Song('Halo', beyonce, '2:50', [], true, 5000);

  it('getName() returns the name of the song', () => {
    expect(song1.getName()).to.be.equal('These Days');
    expect(song2.getName()).to.be.equal('Halo');
  });

  it('getArtist() returns the artist of the song', () => {
    expect(song1.getArtist()).to.be.equal(beyonce);
    expect(song2.getArtist()).to.be.equal(beyonce);
  });

  it('getDuration() returns the duration of the song', () => {
    expect(song1.getDuration()).to.be.equal('3:00');
    expect(song2.getDuration()).to.be.equal('2:50');
  });

  it('getGenre() returns the genre of the song', () => {
    expect(song1.getGenre()).to.deep.equal([]);
    expect(song2.getGenre()).to.deep.equal([]);
  });

  it('setName() sets the name of the song', () => {
    song1.setName('HaloTest');
    expect(song1.getName()).to.be.equal('HaloTest');
    song2.setName('These Days Test');
    expect(song2.getName()).to.be.equal('These Days Test');
  });

  it('setDuration() sets the duration of the song', () => {
    song1.setDuration('1:20');
    expect(song1.getDuration()).to.be.equal('1:20');
    song2.setDuration('14:02');
    expect(song2.getDuration()).to.be.equal('14:02');
  });

  it('setArtist() sets the artist of the song', () => {
    const newArtist = new Artists('Test', [], [], [], [], 0);
    song1.setArtist(newArtist);
    expect(song1.getArtist()).to.be.equal(newArtist);
    song2.setArtist(newArtist);
    expect(song2.getArtist()).to.be.equal(newArtist);
  });
});