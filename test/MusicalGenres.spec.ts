import 'mocha';
import {expect} from 'chai';
import {Song} from '../src/Song';
import {Artists} from '../src/Artists';
import {Albums} from '../src/Albums';
import {Groups} from '../src/Groups';
import {MusicalGenres} from '../src/MusicalGenres';

describe('MusicalGenres class - Tests', () => {
  // Objects to test
  const beyonce = new Artists('Beyonce');
  const genre1 = new MusicalGenres('Pop', new Artists('Beyonce', [], [], [], [], 0), [], []);

  it('getName() returns the name of the genre', () => {
    expect(genre1.getName()).to.be.equal('Pop');
  });

  it('getArtist() returns the artist of the genre', () => {
    expect(genre1.getGArtist()).to.be.equal('Beyonce');
  });

  it('getAlbums() returns the albums of the genre', () => {
    expect(genre1.getAlbums()).to.be.empty;
  });

  it('getGroups() returns the groups of the genre', () => {
    expect(genre1.getGroups()).to.be.empty;
  }
});