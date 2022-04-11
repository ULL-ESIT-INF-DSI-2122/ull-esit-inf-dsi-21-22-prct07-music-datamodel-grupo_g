import {Artist} from '../Artist/Artist';
import {Group} from '../Group/Group';
import {MusicalGenres} from '../MusicalGenres/MusicalGenres';
import {Album} from '../Album/Album';
import {Song} from '../Song/Song';
import {Playlist} from '../Playlist/Playlist';
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Artist
const johnLenon = new Artist('John Lennon', [], [], [], [], 8692252);
const paulMcCartney = new Artist('Paul McCartney', [], [], [], [], 10474115);
const georgeHarrison = new Artist('George Harrison', [], [], [], [], 6679285);
const ringoStarr = new Artist('Ringo Starr', [], [], [], [], 1303575);
const michaelJackson = new Artist('Michael Jackson', [], [], [], [], 28223624);
const elvisPresley = new Artist('Elvis Presley', [], [], [], [], 12790222);
const freddieMercury = new Artist('Freddie Mercury', [], [], [], [], 2556872);
const brianMay = new Artist('Brian May', [], [], [], [], 327029);
const johnDeacon = new Artist('John Deacon', [], [], [], [], 1290);
const rogerTaylor = new Artist('Roger Taylor', [], [], [], [], 171801);
const mickJagger = new Artist('Mick Jagger', [], [], [], [], 1663073);
const keithRichards = new Artist('Keith Richards', [], [], [], [], 423634);
const brianJohnson = new Artist('Brian Johnson', [], [], [], [], 724734);
const billWyman = new Artist('Bill Wyman', [], [], [], [], 70063);
const charlieWatts = new Artist('Charlie Watts', [], [], [], [], 32418);
const victoriaBeckham = new Artist('Victoria Beckham', [], [], [], [], 47300);
const melanieChisholm = new Artist('Melanie Chisholm', [], [], [], [], 24);
const geriHalliwell = new Artist('Geri Halliwell', [], [], [], [], 735363);
const melB = new Artist('Mel B', [], [], [], [], 58592);
const emmaBunton = new Artist('Emma Bunton', [], [], [], [], 280777);
const agnethaFaltskog = new Artist('Agnetha Fältskog', [], [], [], [], 347775);
const anniFridLyngstad = new Artist('Anni-Frid Lyngstad', [], [], [], [], 213398);
const bjornUlvaeus = new Artist('Björn Ulvaeus', [], [], [], [], 313103);
const bennyAndersson = new Artist('Benny Andersson', [], [], [], [], 523773);
const eminem = new Artist('Eminem', [], [], [], [], 52865425);
const zatu = new Artist('Zatu', [], [], [], [], 8326);
const accionSanchez = new Artist('Acción Sánchez', [], [], [], [], 126267);
const kaseO = new Artist('Kase O', [], [], [], [], 922177);
const residente = new Artist('Residente', [], [], [], [], 8465441);
const georgeBenson = new Artist('George Benson', [], [], [], [], 3501238);
const milesDavis = new Artist('Miles Davis', [], [], [], [], 2047335);
const johnColtrane = new Artist('John Coltrane', [], [], [], [], 2159268);
const alexTurner = new Artist('Alex Turner', [], [], [], [], 1202258);
const mattHelders = new Artist('Matt Helders', [], [], [], [], 12098);
const JamieCook = new Artist('Jamie Cook', [], [], [], [], 2308);
const nickOMalley = new Artist('Nick O\'Malley', [], [], [], [], 9824);
const andyNicholson = new Artist('Andy Nicholson', [], [], [], [], 11032);
const bobMarley = new Artist('Bob Marley', [], [], [], [], 13577790);
const peterTosh = new Artist('Peter Tosh', [], [], [], [], 1259421);
const dennisBrown = new Artist('Dennis Brown', [], [], [], [], 674278);
const skrillex = new Artist('Skrillex', [], [], [], [], 20183037);
const calvinHarris = new Artist('Calvin Harris', [], [], [], [], 37755620);
const gaspardAuge = new Artist('Gaspard Augé', [], [], [], [], 166532);
const xavierDeRosnay = new Artist('Xavier De Rosnay', [], [], [], [], 74);
const dollyParton = new Artist('Dolly Parton', [], [], [], [], 10148245);
const johnnyCash = new Artist('Johnny Cash', [], [], [], [], 10204322);
const willieNelson = new Artist('Willie Nelson', [], [], [], [], 5922543);
const jisoo = new Artist('Jisoo', [], [], [], [], 14695);
const jennie = new Artist('Jennie', [], [], [], [], 3002542);
const rose = new Artist('Rosé', [], [], [], [], 3352950);
const lisa = new Artist('Lisa', [], [], [], [], 13445163);
const allArtists = [johnLenon, paulMcCartney, georgeHarrison, ringoStarr, michaelJackson, elvisPresley, freddieMercury, brianMay, johnDeacon, rogerTaylor, mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts, victoriaBeckham, melanieChisholm, geriHalliwell, melB, emmaBunton, agnethaFaltskog, anniFridLyngstad, bjornUlvaeus, bennyAndersson, eminem, zatu, accionSanchez, kaseO, residente, georgeBenson, milesDavis, johnColtrane, alexTurner, mattHelders, JamieCook, nickOMalley, andyNicholson, bobMarley, peterTosh, dennisBrown, skrillex, calvinHarris, gaspardAuge, xavierDeRosnay, dollyParton, johnnyCash, willieNelson, jisoo, jennie, rose, lisa];
// Groups
const theBeatles = new Group('The Beatles', [johnLenon, paulMcCartney, georgeHarrison, ringoStarr], 1960, [], [], 25157822);
const queen = new Group('Queen', [freddieMercury, brianMay, johnDeacon, rogerTaylor], 1970, [], [], 37276204);
const theRollingStones = new Group('The Rolling Stones', [mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts], 1962, [], [], 19745741);
const spiceGirls = new Group('Spice Girls', [victoriaBeckham, melanieChisholm, geriHalliwell, melB, emmaBunton], 1994, [], [], 8614262);
const abba = new Group('ABBA', [agnethaFaltskog, anniFridLyngstad, bjornUlvaeus, bennyAndersson], 1972, [], [], 18021401);
const sfdk = new Group('SFDK', [zatu, accionSanchez], 1993, [], [], 877370);
const articMonkeys = new Group('Artic Monkeys', [alexTurner, mattHelders, JamieCook, nickOMalley, andyNicholson], 2002, [], [], 25291395);
const justice = new Group('Justice', [gaspardAuge, xavierDeRosnay], 2003, [], [], 2233879);
const blackpink = new Group('Blackpink', [jisoo, jennie, rose, lisa], 2016, [], [], 13843448);
const allGroups = [theBeatles, queen, theRollingStones, spiceGirls, abba, sfdk, articMonkeys, justice, blackpink];
for (const group of allGroups) {
  for (const artist of group.getArtist()) {
    artist.addGroup(group);
  }
}
// Genres
const rock = new MusicalGenres('Rock', [johnLenon, paulMcCartney, georgeHarrison, ringoStarr, elvisPresley, freddieMercury, brianMay, johnDeacon, rogerTaylor, mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts], [theBeatles, queen, theRollingStones], [], []);
const pop = new MusicalGenres('Pop', [michaelJackson, elvisPresley, victoriaBeckham, melanieChisholm, geriHalliwell, melB, emmaBunton, agnethaFaltskog, anniFridLyngstad, bjornUlvaeus, bennyAndersson], [spiceGirls, abba], [], []);
const rap = new MusicalGenres('Rap', [eminem, zatu, accionSanchez, kaseO, residente], [sfdk], [], []);
const heavyMetal = new MusicalGenres('Heavy Metal', [mickJagger, keithRichards, brianJohnson, billWyman, charlieWatts], [theRollingStones], [], []);
const jazz = new MusicalGenres('Jazz', [georgeBenson, milesDavis, johnColtrane], [], [], []);
const indie = new MusicalGenres('Indie', [alexTurner, mattHelders, JamieCook, nickOMalley, andyNicholson], [articMonkeys], [], []);
const reggae = new MusicalGenres('Reggae', [bobMarley, peterTosh, dennisBrown], [], [], []);
const electro = new MusicalGenres('Electro', [skrillex, calvinHarris, gaspardAuge, xavierDeRosnay], [justice], [], []);
const country = new MusicalGenres('Country', [dollyParton, johnnyCash, willieNelson], [], [], []);
const kpop = new MusicalGenres('KPOP', [jisoo, jennie, rose, lisa], [blackpink], [], []);
const allGenres = [rock, pop, rap, heavyMetal, jazz, indie, reggae, electro, country, kpop];
for (const genre of allGenres) {
  for (const artist of genre.getArtist()) {
    artist.addGenre(genre);
  }
  for (const group of genre.getGroup()) {
    group.addGenre(genre);
  }
}
// Albums
const abbeyRoad = new Album('Abbey Road', theBeatles, 1969, [rock], []);
const offTheWall = new Album('Off the Wall', michaelJackson, 1979, [pop], []);
const theEminemShow = new Album('The Eminem Show', eminem, 2001, [rap], []);
const aftermath = new Album('Aftermath', theRollingStones, 1996, [heavyMetal], []);
const sunShip = new Album('Sun Ship', johnColtrane, 1971, [jazz], []);
const am = new Album('AM', articMonkeys, 2013, [indie], []);
const live = new Album('Live!', bobMarley, 1975, [reggae], []);
const recess = new Album('Recess', skrillex, 2013, [electro], []);
const rainbow = new Album('Rainbow', johnnyCash, 1985, [country], []);
const theAlbum = new Album('The Album', blackpink, 2020, [kpop], []);
const allAlbums = [abbeyRoad, offTheWall, theEminemShow, aftermath, sunShip, am, live, recess, rainbow, theAlbum];
for (const album of allAlbums) {
  if (album.getAuthor() instanceof Group) {
    album.getAuthor().addAlbum(album);
  } else if (album.getAuthor() instanceof Artist) {
    album.getAuthor().addAlbum(album);
  }
  for (const genre of album.getGenre()) {
    genre.addAlbum(album);
  }
}

// Songs
// theBeatles - Abbey Road
const comeTogether = new Song('Come Together', theBeatles, '4:19', [rock], false, 499684022);
const something = new Song('Something', theBeatles, '3:02', [rock], false, 197189221);
const maxwellsSilverHammer = new Song('Maxwell\'s Silver Hammer', theBeatles, '3:27', [rock], false, 38375251);
const ohDarling = new Song('Oh! Darling', theBeatles, '3:27', [rock], false, 98398321);
const octopussGarden = new Song('Octopus\'s Garden', theBeatles, '2:50', [rock], false, 57472485);
const iWantYou = new Song('I Want You', theBeatles, '7:47', [rock], false, 53042945);
const hereComesTheSun = new Song('Here Comes the Sun', theBeatles, '3:05', [rock], false, 795808675);
const because = new Song('Because', theBeatles, '2:45', [rock], false, 40615158);
const youNeverGiveMeYourMoney = new Song('You Never Give Me Your Money', theBeatles, '4:02', [rock], false, 36883929);
const sunKing = new Song('Sun King', theBeatles, '2:26', [rock], false, 28387201);
const meanMrMustard = new Song('Mean Mr. Mustard', theBeatles, '1:06', [rock], false, 24175553);
const polythenePam = new Song('Polythene Pam', theBeatles, '1:12', [rock], false, 23628092);
const sheCameInThroughTheBathroomWindow = new Song('She Came In Through the Bathroom Window', theBeatles, '1:58', [rock], false, 31640379);
const goldenSlumbers = new Song('Golden Slumbers', theBeatles, '1:31', [rock], false, 68501524);
const carryThatWeight = new Song('Carry That Weight', theBeatles, '1:36', [rock], false, 46272727);
const theEnd = new Song('The End', theBeatles, '2:21', [rock], false, 30732219);
const herMajesty = new Song('Her Majesty', theBeatles, '0:25', [rock], false, 210266);
const abbeyRoadSongs = [comeTogether, something, maxwellsSilverHammer, ohDarling, octopussGarden, iWantYou, hereComesTheSun, because, youNeverGiveMeYourMoney, sunKing, meanMrMustard, polythenePam, sheCameInThroughTheBathroomWindow, goldenSlumbers, carryThatWeight, theEnd, herMajesty];
abbeyRoad.setSongs(abbeyRoadSongs);
// michaelJackson - Off the Wall
const dontStopTillYouGetEnough = new Song('Don\'t Stop \'Till You Get Enough', michaelJackson, '6:05', [pop], false, 330767961);
const rockWithYou = new Song('Rock With You', michaelJackson, '3:40', [pop], false, 283300363);
const workinDayAndNight = new Song('Workin\' Day and Night', michaelJackson, '5:13', [pop], false, 57983665);
const getOnTheFloor = new Song('Get On the Floor', michaelJackson, '4:37', [pop], false, 14393189);
const offTheWall_ = new Song('Off the Wall', michaelJackson, '4:06', [pop], false, 57983665);
const girlfriend = new Song('Girlfriend', michaelJackson, '3:04', [pop], false, 11757577);
const shesOutOfMyLife = new Song('She\'s Out of My Life', michaelJackson, '3:38', [pop], false, 40367243);
const iCantHelpIt = new Song('I Can\'t Help It', michaelJackson, '4:29', [pop], false, 31791128);
const itsTheFallingInLove = new Song('It\'s the Falling in Love', michaelJackson, '3:47', [pop], false, 9222024);
const burnThisDiscoOut = new Song('Burn This Disco Out', michaelJackson, '3:41', [pop], false, 9821140);
const offTheWallSongs = [dontStopTillYouGetEnough, rockWithYou, workinDayAndNight, getOnTheFloor, offTheWall_, girlfriend, shesOutOfMyLife, iCantHelpIt, itsTheFallingInLove, burnThisDiscoOut];
offTheWall.setSongs(offTheWallSongs);
// eminem - The Eminem Show
const whiteAmerica = new Song('White America', eminem, '5:24', [rap], false, 122212600);
const business = new Song('Business', eminem, '4:11', [rap], false, 94415451);
const cleaninOutMyCloset = new Song('Cleanin\' Out My Closet', eminem, '4:57', [rap], false, 257169039);
const squareDance = new Song('Square Dance', eminem, '5:23', [rap], false, 51848759);
const soldier = new Song('Soldier', eminem, '3:46', [rap], false, 70844056);
const sayGoogbyeHollywood = new Song('Say Goodbye, Hollywood', eminem, '4:32', [rap], false, 42288908);
const drips = new Song('Drips', eminem, '4:45', [rap], false, 30861929);
const withoutMe = new Song('Without Me', eminem, '4:50', [rap], false, 1104021888);
const singForTheMoment = new Song('Sing For the Moment', eminem, '5:39', [rap], false, 278130971);
const superman = new Song('Superman', eminem, '5:50', [rap], false, 258389371);
const hailiesSong = new Song('Hailie\s Song', eminem, '5:20', [rap], false, 92165080);
const whenTheMusicStops = new Song('When the Music Stops', eminem, '4:29', [rap], false, 54160291);
const sayWhatYouSay = new Song('Say What You Say', eminem, '5:09', [rap], false, 34567943);
const tillICollapse = new Song('Till I Collapse', eminem, '4:57', [rap], false, 1299871362);
const myDadsGoneCrazy = new Song('My Dad\'s Gone Crazy', eminem, '4:27', [rap], false, 58933709);
const curtainsClose = new Song('Curtains Close', eminem, '1:01', [rap], false, 13694116);
const theEminemShowSongs = [whiteAmerica, business, cleaninOutMyCloset, squareDance, soldier, sayGoogbyeHollywood, drips, withoutMe, singForTheMoment, superman, hailiesSong, whenTheMusicStops, sayWhatYouSay, tillICollapse, myDadsGoneCrazy, curtainsClose];
theEminemShow.setSongs(theEminemShowSongs);
// theRollingStones - aftermath
const paintItBlack = new Song('Paint It, Black', theRollingStones, '3:22', [rock, heavyMetal], false, 701109314);
const stupidGirl = new Song('Stupid Girl', theRollingStones, '2:55', [rock, heavyMetal], false, 3948391);
const ladyJane = new Song('Lady Jane', theRollingStones, '3:08', [rock, heavyMetal], false, 9845668);
const underMyThumb = new Song('Under My Thumb', theRollingStones, '3:41', [rock, heavyMetal], false, 92526334);
const donchaBotherMe = new Song('Don\'cha Bother Me', theRollingStones, '2:41', [rock, heavyMetal], false, 2213339);
const think = new Song('Think', theRollingStones, '3:09', [rock, heavyMetal], false, 1804491);
const flight505 = new Song('Flight 505', theRollingStones, '3:27', [rock, heavyMetal], false, 1805650);
const highAndDry = new Song('High and Dry', theRollingStones, '3:08', [rock, heavyMetal], false, 1675198);
const itsNotEasy = new Song('It\'s Not Easy', theRollingStones, '2:56', [rock, heavyMetal], false, 1612630);
const iAmWaiting = new Song('I Am Waiting', theRollingStones, '3:10', [rock, heavyMetal], false, 3898177);
const goingHome = new Song('Going Home', theRollingStones, '11:13', [rock, heavyMetal], false, 1674217);
const aftermathSongs = [paintItBlack, stupidGirl, ladyJane, underMyThumb, donchaBotherMe, think, flight505, highAndDry, itsNotEasy, iAmWaiting, goingHome];
aftermath.setSongs(aftermathSongs);
// John Coltrane - Sun Ship
const sunShip_ = new Song('Sun Ship', johnColtrane, '6:15', [jazz], false, 148782);
const dearlyBeloved = new Song('Dearly Beloved', johnColtrane, '6:29', [jazz], false, 115834);
const amen = new Song('Amen', johnColtrane, '8:20', [jazz], false, 103714);
const attaining = new Song('Attaining', johnColtrane, '11:24', [jazz], false, 75867);
const ascent = new Song('Ascent', johnColtrane, '10:04', [jazz], false, 68639);
const theSunShipSongs = [sunShip_, dearlyBeloved, amen, attaining, ascent];
sunShip.setSongs(theSunShipSongs);
// Artic Monkeys - AM
const doIWannaKnow = new Song('Do I Wanna Know?', articMonkeys, '4:32', [indie], false, 1294178938);
const rUMine = new Song('R U Mine?', articMonkeys, '3:21', [indie], false, 614752561);
const oneForTheRoad = new Song('One For The Road', articMonkeys, '3:26', [indie], false, 167704340);
const arabella = new Song('Arabella', articMonkeys, '3:27', [indie], false, 344336959);
const iWantItAll = new Song('I Want It All', articMonkeys, '3:05', [indie], false, 94932450);
const no1PartyAnthem = new Song('No.1 Party Anthem', articMonkeys, '4:03', [indie], false, 140247469);
const madSounds = new Song('Mad Sounds', articMonkeys, '3:35', [indie], false, 93969381);
const fireside = new Song('Fireside', articMonkeys, '3:01', [indie], false, 96085559);
const whydYouOnlyCallMeWhenYoureHigh = new Song('Whyd You Only Call Me When You\'re High?', articMonkeys, '2:41', [indie], false, 797381100);
const snapOutOfIt = new Song('Snap Out Of It', articMonkeys, '3:13', [indie], false, 290186010);
const kneeSocks = new Song('Knee Socks', articMonkeys, '4:17', [indie], false, 207755813);
const iWannaBeYours = new Song('I Wanna Be Yours', articMonkeys, '3:03', [indie], false, 436289298);
const amSongs = [doIWannaKnow, rUMine, oneForTheRoad, arabella, iWantItAll, no1PartyAnthem, madSounds, fireside, whydYouOnlyCallMeWhenYoureHigh, snapOutOfIt, kneeSocks, iWannaBeYours];
am.setSongs(amSongs);
// Bob Marley - Live
const trenchtownRock = new Song('Trenchtown Rock', bobMarley, '4:23', [reggae], false, 1956668);
const burninAndLootin = new Song('Burnin\' and Lootin\'', bobMarley, '5:11', [reggae], false, 1117635);
const themBellyFull = new Song('Them Belly Full', bobMarley, '4:36', [reggae], false, 1132081);
const livelyUpYourself = new Song('Lively Up Yourself', bobMarley, '4:33', [reggae], false, 1203783);
const noWomanNoCry = new Song('No Woman, No Cry', bobMarley, '7:07', [reggae], false, 235166315);
const iShotTheSheriff = new Song('I Shot The Sheriff', bobMarley, '5:18', [reggae], false, 3855175);
const getUpStandUp = new Song('Get Up, Stand Up', bobMarley, '6:28', [reggae], false, 1697497);
const kinkyReggae = new Song('Kinky Reggae', bobMarley, '7:35', [reggae], false, 988325);
const liveSongs = [trenchtownRock, burninAndLootin, themBellyFull, livelyUpYourself, noWomanNoCry, iShotTheSheriff, getUpStandUp, kinkyReggae];
live.setSongs(liveSongs);
// Skrillex - Recess
const allIsFairInLoveAndBrostep = new Song('All Is Fair In Love and Brostep', skrillex, '4:09', [electro], false, 35152975);
const recess_ = new Song('Recess', skrillex, '3:57', [electro], false, 107628928);
const stranger = new Song('Stranger', skrillex, '4:49', [electro], false, 25673560);
const tryItOut = new Song('Try It Out', skrillex, '3:49', [electro], false, 49722837);
const coastIsClear = new Song('Coast Is Clear', skrillex, '4:03', [electro], false, 16835477);
const dirtyVibe = new Song('Dirty Vibe', skrillex, '3:26', [electro], false, 33277144);
const raggaBomb = new Song('Raggabomb', skrillex, '4:18', [electro], false, 44187187);
const doompyPoomp = new Song('Doompy Poomp', skrillex, '3:25', [electro], false, 10609619);
const fuckThat = new Song('Fuck That', skrillex, '3:52', [electro], false, 16044735);
const easeMyMind = new Song('Ease My Mind', skrillex, '5:02', [electro], false, 36618895);
const fireAway = new Song('Fire Away', skrillex, '5:41', [electro], false, 13637125);
const recessSongs = [allIsFairInLoveAndBrostep, recess_, stranger, tryItOut, coastIsClear, dirtyVibe, raggaBomb, doompyPoomp, fuckThat, easeMyMind, fireAway];
recess.setSongs(recessSongs);
// Johnny Cash - Rainbow
const imLeavingNow = new Song('I\'m Leaving Now', johnnyCash, '2:16', [country], false, 165828);
const hereComesThatRainbowAgain = new Song('Here Comes That Rainbow Again', johnnyCash, '2:49', [country], false, 110965);
const theyreAllTheSame = new Song('They\'re All The Same', johnnyCash, '3:09', [country], false, 55109);
const easyStreet = new Song('Easy Street', johnnyCash, '2:46', [country], false, 46174);
const haveYouEverSeenTheRain = new Song('Have You Ever Seen The Rain', johnnyCash, '2:30', [country], false, 438444);
const youBeatAllIEverSaw = new Song('You Beat All I Ever Saw', johnnyCash, '2:56', [country], false, 45224);
const unwedFathers = new Song('Unwed Fathers', johnnyCash, '3:13', [country], false, 62387);
const loveMeLikeYouUsedTo = new Song('Love Me Like You Used To', johnnyCash, '2:42', [country], false, 54102);
const caseysLastRide = new Song('Casey\'s Last Ride', johnnyCash, '3:19', [country], false, 67193);
const borderline = new Song('Borderline', johnnyCash, '2:59', [country], false, 48393);
const rainbowSongs = [imLeavingNow, hereComesThatRainbowAgain, theyreAllTheSame, easyStreet, haveYouEverSeenTheRain, youBeatAllIEverSaw, unwedFathers, loveMeLikeYouUsedTo, caseysLastRide, borderline];
rainbow.setSongs(rainbowSongs);
// Blackpink - The Album
const howYouLikeThat = new Song('How You Like That', blackpink, '3:02', [kpop], false, 605864888);
const iceCream = new Song('Ice Cream', blackpink, '2:57', [kpop], false, 408673491);
const prettySavage = new Song('Pretty Savage', blackpink, '3:21', [kpop], false, 229225729);
const betYouWanna = new Song('Bet You Wanna', blackpink, '2:41', [kpop], false, 136593529);
const lovesickGirls = new Song('Lovesick Girls', blackpink, '3:14', [kpop], false, 323866065);
const crazyOverYou = new Song('Crazy Over You', blackpink, '2:43', [kpop], false, 119879579);
const loveToHateMe = new Song('Love To Hate Me', blackpink, '2:51', [kpop], false, 138009042);
const youNeverKnow = new Song('You Never Know', blackpink, '3:51', [kpop], false, 99302936);
const theAlbumSongs = [howYouLikeThat, iceCream, prettySavage, betYouWanna, lovesickGirls, crazyOverYou, loveToHateMe, youNeverKnow];
theAlbum.setSongs(theAlbumSongs);
// Singles
const rene = new Song('René', residente, '7:37', [rap], true, 94054084);
const elGordoQueLaPisaBien = new Song('El Gordo Que La Pisa Bien', kaseO, '4:48', [rap], true, 363462);
const oneLove = new Song('One Love', bobMarley, '3:35', [reggae], true, 502213);
const littleThings = new Song('Little Things', abba, '3:08', [pop], true, 514093);
const whoWantsToLiveForever = new Song('Who Wants To Live Forever', queen, '4:03', [rock], true, 2213791);
const wannabe = new Song('Wannabe', spiceGirls, '2:56', [pop], true, 712136798);
const money = new Song('Money', lisa, '2:48', [kpop], true, 426332264);
const belladone = new Song('Belladone', justice, '4:16', [electro], true, 884359);
const onTheGroud = new Song('On The Ground', rose, '2:48', [kpop], true, 199598287);
const gone = new Song('Gone', rose, '3:27', [kpop], true, 141975115);
const strangeGame = new Song('Strange Game', mickJagger, '3:33', [heavyMetal, rock], true, 69950);

const allSongs = [rene, elGordoQueLaPisaBien, oneLove, littleThings, whoWantsToLiveForever, wannabe, money, belladone, onTheGroud, gone, strangeGame];
for (let i = 0; i < abbeyRoadSongs.length; i++) {
  allSongs.push(abbeyRoadSongs[i]);
}
for (let i = 0; i < offTheWallSongs.length; i++) {
  allSongs.push(offTheWallSongs[i]);
}
for (let i = 0; i < theEminemShowSongs.length; i++) {
  allSongs.push(theEminemShowSongs[i]);
}
for (let i = 0; i < aftermathSongs.length; i++) {
  allSongs.push(aftermathSongs[i]);
}
for (let i = 0; i < theSunShipSongs.length; i++) {
  allSongs.push(theSunShipSongs[i]);
}
for (let i = 0; i < amSongs.length; i++) {
  allSongs.push(amSongs[i]);
}
for (let i = 0; i < liveSongs.length; i++) {
  allSongs.push(liveSongs[i]);
}
for (let i = 0; i < recessSongs.length; i++) {
  allSongs.push(recessSongs[i]);
}
for (let i = 0; i < rainbowSongs.length; i++) {
  allSongs.push(rainbowSongs[i]);
}
for (let i = 0; i < theAlbumSongs.length; i++) {
  allSongs.push(theAlbumSongs[i]);
}

for (let i = 0; i < allSongs.length; i++) {
  const author = allSongs[i].getAuthor();
  const genres = allSongs[i].getGenre();
  if (author instanceof Artist) {
    author.addSong(allSongs[i]);
  }
  for (const genre of genres) {
    genre.addSong(allSongs[i]);
  }
}

// PlayLists
// Rolitas Chidas
const rolitasChidas = new Playlist('Rolitas Chidas',
    [whiteAmerica, girlfriend, theEnd, because, fireAway, borderline, rockWithYou, soldier, money, easyStreet, fuckThat, rUMine, superman, withoutMe, getOnTheFloor, madSounds, crazyOverYou],
    '01:05:46',
    [rap, pop, rock, electro, country, kpop, indie]);
// Perfect
const perfect = new Playlist('Perfect',
    [iWantYou, herMajesty, ladyJane, kneeSocks, raggaBomb, loveToHateMe, gone, arabella, noWomanNoCry, tryItOut, imLeavingNow, oneLove, themBellyFull, stranger, ascent, amen, drips, business],
    '01:23:12',
    [rock, heavyMetal, indie, electro, kpop, reggae, country, jazz, rap]);
// Chillin in the goth club from the matrix
const chillin = new Playlist('Chillin in the goth club from the matrix',
    [youNeverKnow, iWantItAll, sunShip_, squareDance, sunKing, ohDarling, dirtyVibe, howYouLikeThat, rene, curtainsClose, goingHome, snapOutOfIt, no1PartyAnthem, easeMyMind, prettySavage, elGordoQueLaPisaBien],
    '01:11:13',
    [kpop, indie, jazz, rap, rock, electro, heavyMetal, indie]);
const allPlaylists = [rolitasChidas, perfect, chillin];


// Database
const adapter = new FileSync('src/db.json');
const db = low(adapter);

db.defaults({
  artists: [],
  groups: [],
  genres: [],
  albums: [],
  songs: [],
  playlists: []
}).write();

for (let i = 0; i < allArtists.length; i++) {
  const artistJSON = {
    name: allArtists[i].getName(),
    groups: allArtists[i].getGroup().map((group) => group.getName()),
    genres: allArtists[i].getGenres().map((genre) => genre.getName()),
    albums: allArtists[i].getAlbums().map((album) => album.getName()),
    songs: allArtists[i].getSongs().map((song) => song.getName()),
    numFollowers: allArtists[i].getNumFollowers()
  };
  db.get('artists').push(artistJSON).write();
}

for (let i = 0; i < allGroups.length; i++) {
  const groupJSON = {
    name: allGroups[i].getName(),
    artists: allGroups[i].getArtist().map((artist) => artist.getName()),
    creationYear: allGroups[i].getCreationYear(),
    genres: allGroups[i].getGenres().map((genre) => genre.getName()),
    albums: allGroups[i].getAlbums().map((album) => album.getName()),
    numFollowers: allGroups[i].getNumFollowers()
  };
  db.get('groups').push(groupJSON).write();
}

for (let i = 0; i < allGenres.length; i++) {
  const genreJSON = {
    name: allGenres[i].getName(),
    artists: allGenres[i].getArtist().map((artist) => artist.getName()),
    groups: allGenres[i].getGroup().map((group) => group.getName()),
    albums: allGenres[i].getAlbums().map((album) => album.getName()),
    songs: allGenres[i].getSong().map((song) => song.getName()),
  };
  db.get('genres').push(genreJSON).write();
}

for (let i = 0; i < allAlbums.length; i++) {
  const albumJSON = {
    name: allAlbums[i].getName(),
    author: allAlbums[i].getAuthor().getName(),
    year: allAlbums[i].getYear(),
    genres: allAlbums[i].getGenre().map((genre) => genre.getName()),
    songs: allAlbums[i].getSongs().map((song) => song.getName())
  };
  db.get('albums').push(albumJSON).write();
}

for (let i = 0; i < allSongs.length; i++) {
  const songJSON = {
    name: allSongs[i].getName(),
    author: allSongs[i].getAuthor().getName(),
    duration: allSongs[i].getDuration(),
    genres: allSongs[i].getGenre().map((genre) => genre.getName()),
    isSingle: allSongs[i].isSingle(),
    numRep: allSongs[i].getNumRep()
  };
  db.get('songs').push(songJSON).write();
}

for (let i = 0; i < allPlaylists.length; i++) {
  const playlistJSON = {
    name: allPlaylists[i].getName(),
    songs: allPlaylists[i].getSongs().map((song) => song.getName()),
    duration: allPlaylists[i].getDuration(),
    genres: allPlaylists[i].getGenres().map((genre) => genre.getName())
  };
  db.get('playlists').push(playlistJSON).write();
}