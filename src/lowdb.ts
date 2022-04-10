// import * as inquirer from 'inquirer';
// import * as low from 'lowdb';
import {Artists} from './Artists';
import {Groups} from './Groups';
import {MusicalGenres} from './MusicalGenres';
// import {Album} from './Album';
// import {Song} from './Song';
// import {Playlist} from './Playlist';

// Artist
const johnLenon = new Artists('John Lennon', [], [], [], [], 8692252);
const paulMcCartney = new Artists('Paul McCartney', [], [], [], [], 10474115);
const georgeHarrison = new Artists('George Harrison', [], [], [], [], 6679285);
const ringoStarr = new Artists('Ringo Starr', [], [], [], [], 1303575);
const michaelJackson = new Artists('Michael Jackson', [], [], [], [], 28223624);
const elvisPresley = new Artists('Elvis Presley', [], [], [], [], 12790222);
const freddieMercury = new Artists('Freddie Mercury', [], [], [], [], 2556872);
const brianMay = new Artists('Brian May', [], [], [], [], 327029);
const johnDeacon = new Artists('John Deacon', [], [], [], [], 1290);
const rogerTaylor = new Artists('Roger Taylor', [], [], [], [], 171801);
const mickJagger = new Artists('Mick Jagger', [], [], [], [], 1663073);
const keithRichards = new Artists('Keith Richards', [], [], [], [], 423634);
const brianJohnson = new Artists('Brian Johnson', [], [], [], [], 724734);
const billWyman = new Artists('Bill Wyman', [], [], [], [], 70063);
const charlieWatts = new Artists('Charlie Watts', [], [], [], [], 32418);
const victoriaBeckham = new Artists('Victoria Beckham', [], [], [], [], 47300);
const melanieChisholm = new Artists('Melanie Chisholm', [], [], [], [], 24);
const geriHalliwell = new Artists('Geri Halliwell', [], [], [], [], 735363);
const melB = new Artists('Mel B', [], [], [], [], 58592);
const emmaBunton = new Artists('Emma Bunton', [], [], [], [], 280777);
const agnethaFaltskog = new Artists('Agnetha Fältskog', [], [], [], [], 347775);
const anniFridLyngstad = new Artists('Anni-Frid Lyngstad', [], [], [], [], 213398);
const bjornUlvaeus = new Artists('Björn Ulvaeus', [], [], [], [], 313103);
const bennyAndersson = new Artists('Benny Andersson', [], [], [], [], 523773);
const eminem = new Artists('Eminem', [], [], [], [], 52865425);
const zatu = new Artists('Zatu', [], [], [], [], 8326);
const accionSanchez = new Artists('Acción Sánchez', [], [], [], [], 126267);
const kaseO = new Artists('Kase O', [], [], [], [], 922177);
const residente = new Artists('Residente', [], [], [], [], 8465441);
const georgeBenson = new Artists('George Benson', [], [], [], [], 3501238);
const milesDavis = new Artists('Miles Davis', [], [], [], [], 2047335);
const johnColtrane = new Artists('John Coltrane', [], [], [], [], 2159268);
const alexTurner = new Artists('Alex Turner', [], [], [], [], 1202258);
const mattHelders = new Artists('Matt Helders', [], [], [], [], 12098);
const JamieCook = new Artists('Jamie Cook', [], [], [], [], 2308);
const nickOMalley = new Artists('Nick O\'Malley', [], [], [], [], 9824);
const andyNicholson = new Artists('Andy Nicholson', [], [], [], [], 11032);
const bobMarley = new Artists('Bob Marley', [], [], [], [], 13577790);
const peterTosh = new Artists('Peter Tosh', [], [], [], [], 1259421);
const dennisBrown = new Artists('Dennis Brown', [], [], [], [], 674278);
const skrillex = new Artists('Skrillex', [], [], [], [], 20183037);
const calvinHarris = new Artists('Calvin Harris', [], [], [], [], 37755620);
const gaspardAuge = new Artists('Gaspard Augé', [], [], [], [], 166532);
const xavierDeRosnay = new Artists('Xavier De Rosnay', [], [], [], [], 74);
const dollyParton = new Artists('Dolly Parton', [], [], [], [], 10148245);
const johnnyCash = new Artists('Johnny Cash', [], [], [], [], 10204322);
const willieNelson = new Artists('Willie Nelson', [], [], [], [], 5922543);
const jisoo = new Artists('Jisoo', [], [], [], [], 14695);
const jennie = new Artists('Jennie', [], [], [], [], 3002542);
const rose = new Artists('Rosé', [], [], [], [], 3352950);
const lisa = new Artists('Lisa', [], [], [], [], 13445163);
// const artists = [johnLenon, paulMcCartney, georgeHarrison, ringoStarr, michaelJackson, elvisPresley, freddieMercury, brianMay, johnDeacon, rogerTaylor, mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts, victoriaBeckham, melanieChisholm, geriHalliwell, melB, emmaBunton, agnethaFaltskog, anniFridLyngstad, bjornUlvaeus, bennyAndersson, eminem, zatu, accionSanchez, kaseO, residente, georgeBenson, milesDavis, johnColtrane, alexTurner, mattHelders, JamieCook, nickOMalley, andyNicholson, bobMarley, peterTosh, dennisBrown, skrillex, calvinHarris, gaspardAuge, xavierDeRosnay, dollyParton, johnnyCash, willieNelson, jisoo, jennie, rose, lisa];
// Groups
const theBeattles = new Groups('The Beatles', [johnLenon, paulMcCartney, georgeHarrison, ringoStarr], 1960, [], [], 25157822);
const queen = new Groups('Queen', [freddieMercury, brianMay, johnDeacon, rogerTaylor], 1970, [], [], 37276204);
const theRollingStones = new Groups('The Rolling Stones', [mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts], 1962, [], [], 19745741);
const spiceGirls = new Groups('Spice Girls', [victoriaBeckham, melanieChisholm, geriHalliwell, melB, emmaBunton], 1994, [], [], 8614262);
const abba = new Groups('ABBA', [agnethaFaltskog, anniFridLyngstad, bjornUlvaeus, bennyAndersson], 1972, [], [], 18021401);
const sfdk = new Groups('SFDK', [zatu, accionSanchez], 1993, [], [], 877370);
const articMonkeys = new Groups('Artic Monkeys', [alexTurner, mattHelders, JamieCook, nickOMalley, andyNicholson], 2002, [], [], 25291395);
const justice = new Groups('Justice', [gaspardAuge, xavierDeRosnay], 2003, [], [], 2233879);
const blackpink = new Groups('Blackpink', [jisoo, jennie, rose, lisa], 2016, [], [], 13843448);
const groups = [theBeattles, queen, theRollingStones, spiceGirls, abba, sfdk, articMonkeys, justice, blackpink];
for (const group of groups) {
  for (const artist of group.getArtists()) {
    artist.addGroup(group);
  }
}
// Genres
const rock = new MusicalGenres('Rock', [johnLenon, paulMcCartney, georgeHarrison, ringoStarr, elvisPresley, freddieMercury, brianMay, johnDeacon, rogerTaylor, mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts], [theBeattles, queen, theRollingStones], [], []);
const pop = new MusicalGenres('Pop', [michaelJackson, elvisPresley, victoriaBeckham, melanieChisholm, geriHalliwell, melB, emmaBunton, agnethaFaltskog, anniFridLyngstad, bjornUlvaeus, bennyAndersson], [spiceGirls, abba], [], []);
const rap = new MusicalGenres('Genre', [eminem, zatu, accionSanchez, kaseO, residente], [sfdk], [], []);
const heavyMetal = new MusicalGenres('Genre', [mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts], [theRollingStones], [], []);
const jazz = new MusicalGenres('Genre', [georgeBenson, milesDavis, johnColtrane], [], [], []);
const indie = new MusicalGenres('Genre', [alexTurner, mattHelders, JamieCook, nickOMalley, andyNicholson], [articMonkeys], [], []);
const reggae = new MusicalGenres('Genre', [bobMarley, peterTosh, dennisBrown], [], [], []);
const electro = new MusicalGenres('Genre', [skrillex, calvinHarris, gaspardAuge, xavierDeRosnay], [justice], [], []);
const country = new MusicalGenres('Genre', [dollyParton, johnnyCash, willieNelson], [], [], []);
const kpop = new MusicalGenres('Genre', [jisoo, jennie, rose, lisa], [blackpink], [], []);
const genres = [rock, pop, rap, heavyMetal, jazz, indie, reggae, electro, country, kpop];
for (const genre of genres) {
  for (const artist of genre.getArtists()) {
    artist.addGenre(genre);
  }
  for (const group of genre.getGroups()) {
    group.addGenre(genre);
  }
}
