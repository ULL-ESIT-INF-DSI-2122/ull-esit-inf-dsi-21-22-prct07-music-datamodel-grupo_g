import 'mocha';
import {expect} from 'chai';
import {Song} from '../src/Song';
import {Artists} from '../src/Artists';
import {Album} from '../src/Album';
import {Groups} from '../src/Groups';
import {MusicalGenres} from '../src/MusicalGenres';

describe('MusicalGenres class - Tests', () => {
  // Objects to test
  const beyonce = new Artists('Beyonce', [], [], [], [], 0);
  const genre1 = new MusicalGenres('Pop', [beyonce], [], [], []);

  it('getName() returns the name of the genre', () => {
    expect(genre1.getName()).to.be.equal('Pop');
  });

  it('getArtists() returns the artists of the genre', () => {
    expect(genre1.getArtists()).to.be.deep.equal([beyonce]);
  });

  it('getAlbums() returns the albums of the genre', () => {
    expect(genre1.getAlbums()).to.be.empty;
  });

  it('getGroups() returns the groups of the genre', () => {
    expect(genre1.getGroups()).to.be.empty;
  });
});