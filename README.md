<br>

<div align="center">

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/tests.yml)
[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/coveralls.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g)

</div>

# Práctica 7: Digitalizando la colección de música de los abuelos.
## [Git pages]()
## ÍNDICE
- [INTRODUCCIÓN](#INTRODUCCIÓN).
- [DESARROLLO](#DESARROLLO).
    - [Clase **_MusicalGenres_**](#Clase-**_MusicalGenres_**).
    - [Clase **_Song_**](#Clase-**_Song_**).
    - [Clase **_Album_**](#Clase-**_Album_**).
    - [Clase **_Groups_**](#Clase-**_Groups_**).
    - [Clase **_Artists_**](#Clase-**_Artists_**).
    - [Clase **_Playlist_**](Clase-**_Playlist_**).
    - [Clase **_Manager_**](Clase-**_Manager_**).
    - [Interfaz **_Operation_**](Interfaz-**_Operation_**).
- [CONCLUSIÓN](#CONCLUSIÓN).
- [INTEGRANTES](#INTEGRANTES).
# INTRODUCCIÓN 




# DESARROLLO


## Clase **_MusicalGenres_**

La clase *MusicalGenres* representa un grupo musical y almacena la siguiente información:
- *Nombre del género musical*: tipo *string*  
- *Grupos que producen música de ese género*: tipo *lista de grupos musicales*  
- *Artistas que producen música de ese género*: tipo *lista de artistas* 
- *Álbumes que hay dentro de la biblioteca relacionados con este género*: tipo *lista de álbumes*
- *Canciones que hay dentro de la biblioteca de ese género*: tipo *lista de canciones* 

A continuación se muestra el código desarrollado de la clase en cuestión.

```typescript
import {Groups} from './Groups';
import {Artists} from './Artists';
import {Album} from './Album';
import {Song} from './Song';

/**
 * Musical genres descibes the musical genres of the music library.
 */
export class MusicalGenres {
  constructor(private name: string,
              private artists: Artists[],
              private groups: Groups[],
              private albums: Album[],
              private song: Song[]) {}
  /**
   * getName() returns the name of the genre.
   * @returns the name of the genre
   */
  getName(): string {
    return this.name;
  }

  /**
   * setName() sets the name of the genre.
   * @param name the name of the genre
   */
  setName(name: string): void {
    this.name = name;
  }
  /**
   * getArtists() returns the artists of the genre.
   * @returns the number of artists in the genre
   */
  getArtists(): Artists[] {
    return this.artists;
  }
  /**
  * setArtists() sets the artists of the genre.
  * @param artists the artists of the genre
  */
  setArtists(artists: Artists[]): void {
    this.artists = artists;
  }

  /**
   * addArtist() adds an artist to the genre.
   * @param artist the artist to be searched
   */
  addArtist(artist: Artists): void {
    this.artists.push(artist);
  }

  /**
   * removeArtist() removes an artist from the genre.
   * @param artist the artist to be removed
   */
  removeArtist(artist: string): void {
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === artist) {
        this.artists.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getGArtist() returns the artist or group of the genre.
   * @returns the group or artist of the genre
   */
  getGroups(): Groups[] {
    return this.groups;
  }

  /**
   * setGroups() sets the groups of the genre.
   * @param groups the groups of the genre
   */
  setGroups(groups: Groups[]): void {
    this.groups = groups;
  }

  /**
   * addGenre() adds a genre to the genre.
   * @param group the group to be searched
   */
  addGroup(group: Groups): void {
    this.groups.push(group);
  }

  /**
   * removeGroup() removes a group from the genre.
   * @param group the group to be searched
   */
  removeGroup(group: string): void {
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].getName() === group) {
        this.groups.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getAlbums() returns the albums of the genre.
   * @returns the name of the albums
   */
  getAlbums(): Album[] {
    return this.albums;
  }

  /**
   * setAlbums() sets the albums of the genre.
   * @param albums albums to be modified
   */
  setAlbums(albums: Album[]): void {
    this.albums = albums;
  }

  /**
   * addAlbum() adds an album to the genre.
   * @param album album to be added
   */
  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  /**
   * removeGenre() removes the genre from the library.
   * @param album album to be removed
   */
  removeAlbum(album: string): void {
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].getName() === album) {
        this.albums.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getSong() returns the song of the genre.
   * @returns the number of songs in the genre
   */
  getSong(): Song[] {
    return this.song;
  }

  /**
   * setSong() sets the song of the genre.
   * @param songs songs to be modified
   */
  setSongs(songs: Song[]): void {
    this.song = songs;
  }

  /**
   * addSong() adds a song to the genre.
   * @param song song to be added
   */
  addSong(song: Song): void {
    this.song.push(song);
  }

  /**
   * removeSong() removes a song from the genre.
   * @param song song to be removed
   */
  removeSong(song: string): void {
    for (let i = 0; i < this.song.length; i++) {
      if (this.song[i].getName() === song) {
        this.song.splice(i, 1);
        break;
      }
    }
  }

  /**
   * printInfo() prints the information of the genre.
   */
  printInfo(): void {
    console.log(`Genre: ${this.name}`);
    console.log(`Artists: `);
    for (let i = 0; i < this.artists.length; i++) {
      console.log(`${i + 1}. ${this.artists[i].getName()}`);
    }
    console.log(`Groups: `);
    for (let i = 0; i < this.groups.length; i++) {
      console.log(`${i + 1}. ${this.groups[i].getName()}`);
    }
    console.log(`Albums: `);
    for (let i = 0; i < this.albums.length; i++) {
      console.log(`${i + 1}. ${this.albums[i].getName()}`);
    }
    console.log(`Songs:`);
    for (let i = 0; i < this.song.length; i++) {
      console.log(`${i + 1}. ${this.song[i].getName()}`);
    }
  }
}
```
Para poder crear la clase *MusicalGenres*, necesitamos crear una clase que represente a los artistas, grupos y albums (se explicará con más detalles su creación en apartados posteriores).

Los métodos desarrollados en la clase *MusicalGenres* son, como se puede apreciar en el bloque de código, los siguientes:
- *getName()*: devuelve el nombre del género musical.
- *setName()*: recibe como parámetro un nombre de tipo ```string``` y modifica el nombre del género musical.
- *getArtists()*: devuelve los artistas del género musical en cuestión.
- *setArtists()*: recibe como parámetro un array de tipo ```Artists``` y modifica los artistas del género musical.
- *addArtist()*: recibe como parámetro una variable de tipo ```Artists``` y añade un artista al género musical.
- *removeArtist()*: recibe como parámetro una variable de tipo ```string``` que representaría el nombre del artista y lo elimina del género musical.
- *getGroups()*: devuelve los grupos del género musical.
- *setGroups()*: recibe como parámetro un array de tipo ```Artists``` modifica los grupos del género musical.
- *addGroup()*: recibe como parámetro una variable de tipo ```Groups``` y añade un grupo al género musical.
- *removeGroup()*: recibe como parámetro una variable de tipo ```string``` que representaría el nombre del Grupo y lo elimina del género musical.
- *getAlbums()*: devuelve los albums del género musical.
- *setAlbums()*: modifica los albums del género musical.
- *addAlbum()*: recibe como parámetro una variable de tipo ```Album``` y añade un album al género musical.
- *removeAlbum()*: elimina un album del género musical recibiendo el nombre del album como parámetro.
- *getSong()*: devuelve las canciones del género musical.
- *setSong()*: modifica las canciones del género musical recibiendo como parámetro una variable de tipo ```Song```.
- *addSong()*: recibe como parámetro una variable de tipo ```Song``` y añade una canción al género musical.
- *removeSong()*: elimina una canción del género musical recibiendo como parámetro una variable de tipo ```string``` que representaría el nombre de la canción.
- *printInfo()*: imprime la información del género musical.
## Clase **_Song_**
La clase *Song* representa a las canciones de la biblioteca y almacena la siguiente información:
- *Nombre de la canción*: tipo ```string```
- *Artista* de la canción: tipo ```Artists```
- *Duración en minutos y segundos*: tipo ```string```
- *Género* al que pertenece: tipo ```list``` de tipo ```MusicalGenres```
- *Single*: tipo ```boolean```(determina si la canción fue lanzada como un single o no)
- *Número de reproducciones*: tipo ```number```

A continuación se muestra el código desarrollado de la clase en cuestión.

```typescript
import {Artists} from './Artists';
import {MusicalGenres} from './MusicalGenres';
/**
 * Song class decribes a song.
 */
export class Song {
  constructor(private name: string,
              private artist: Artists,
              private duration: string,
              private genre: MusicalGenres[],
              private single: boolean,
              private numRep: number) {}
  /**
   * getName() returns the name of the song.
   * @returns {string} the name of the song
   */
  getName(): string {
    return this.name;
  }

  /**
   * setName() sets the name of the song.
   * @param name the name of the song
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * getArtist() returns the artist of the song.
   * @returns {Artists} the artist of the song
   */
  getArtist(): Artists {
    return this.artist;
  }

  /**
   * setArtist() sets the artist of the song.
   * @param artist the artist of the song
   */
  setArtist(artist: Artists): void {
    this.artist = artist;
  }

  /**
   * getDuration() returns the duration of the song.
   * @returns {string} the duration of the song
   */
  getDuration(): string {
    return this.duration;
  }

  /**
   * setDuration() sets the duration of the song.
   * @param duration the duration of the song
   */
  setDuration(duration: string): void {
    this.duration = duration;
  }

  /**
   * getGenre() returns the genre of the song.
   * @returns {MusicalGenres[]} the genre of the song
   */
  getGenre(): MusicalGenres[] {
    return this.genre;
  }

  /**
   * setGenre() sets the genre of the song.
   * @param genre the genre of the song
   */
  setGenre(genre: MusicalGenres[]): void {
    this.genre = genre;
  }

  /**
   * addGenre() adds a genre to the song.
   * @param genre genre to be added
   */
  addGenre(genre: MusicalGenres): void {
    this.genre.push(genre);
  }

  /**
   * removeGenre() removes a genre from the song.
   * @param genre genre to be removed
   */
  removeGenre(genre: string): void {
    for (let i = 0; i < this.genre.length; i++) {
      if (this.genre[i].getName() === genre) {
        this.genre.splice(i, 1);
        break;
      }
    }
  }

  /**
   * getSingle() returns if the song is a single or not.
   * @returns {boolean} tif the song is a single or not
   */
  getSingle(): boolean {
    return this.single;
  }

  /**
   * setSingle() sets if the song is a single or not.
   * @param single if the song is a single or not
   */
  setSingle(single: boolean): void {
    this.single = single;
  }

  /**
   * getNumRep() returns the number of times the song has been repeated.
   * @returns {number} the number of times the song has been repeated
   */
  getNumRep(): number {
    return this.numRep;
  }

  /**
   * setNumRep() sets the number of times the song has been repeated.
   * @param numRep the number of times the song has been repeated
   */
  setNumRep(numRep: number): void {
    this.numRep = numRep;
  }

  /**
   * printInfo() prints song's info.
   */
  printInfo(): void {
    console.log(`Song: ${this.name}`);
    console.log(`Artist: ${this.artist.getName()}`);
    console.log(`Duration: ${this.duration}`);
    console.log(`Genres: `);
    for (const genre of this.genre) {
      console.log(`${genre.getName()}`);
    }
    console.log(`Single: ${this.single}`);
    console.log(`Number of repetitions: ${this.numRep}`);
  }
}
```
Los métodos de la clase *Song* incluidos son los siguientes:
- *getName()*: devuelve el nombre de la canción.
- *setName()*: modifica el nombre de la canción recibiendo como parámetro una variable de tipo ```string```.
- *getArtist()*: devuelve el artista de la canción.
- *setArtist()*: modifica el artista de la canción recibiendo como parámetro una variable de tipo ```Artists```.
- *getDuration()*: devuelve la duración de la canción.
- *setDuration()*: modifica la duración de la canción recibiendo como parámetro una variable de tipo ```string```.
- *getGenre()*: devuelve el género de la canción.
- *setGenre()*: modifica el género de la canción recibiendo como parámetro una variable de tipo ```MusicalGenres[]```.
- *addGenre()*: añade un género a la canción recibiendo como parámetro una variable de tipo ```MusicalGenres```.
- *removeGenre()*: elimina un género de la canción recibiendo como parámetro una variable de tipo ```string```.
- *getSingle()*: devuelve si la canción es un single o no.
- *setSingle()*: modifica si la canción es un single o no recibiendo como parámetro una variable de tipo ```boolean```.
- *getNumRep()*: devuelve el número de veces que la canción ha sido reproducida.
- *setNumRep()*: modifica el número de veces que la canción ha sido reproducida recibiendo como parámetro una variable de tipo ```number```.
- *printInfo()*: imprime la información de la canción.

## Clase **_Album_**

Se define la clase **Album** para el almacenamiento de información de un disco. Dicha información son: las canciones, año de publicación, nombre del albúm, nombre del artista o grupo que lo publica y los géneros al que pertence.

A contuación se muestra la clase en typescript.

[Album.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/3fb4e0b7caeb407b7536634cc6b762173972bcea/src/Album.ts)
```typescript
import {Groups} from './Groups';
import {Artists} from './Artists';
import {Song} from './Song';
import {MusicalGenres} from './MusicalGenres';
/**
 * Album class
 */
export class Album {
  constructor(private name: string,
              private by: Artists | Groups,
              private year: number,
              private genre: MusicalGenres[],
              private songs: Song[]) {}
  /**
   * Getter of the private attribute "name"
   * @returns {string} Name of the album
   */
  getName(): string {
    return this.name;
  }

  /**
   * Setter: modify the private attribute
   * @param {string} name New name of the album
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Getter that indicates if the album was published by artist or by group
   * @returns {Artists | Groups} Return the type of author
   */
  getBy(): Artists | Groups {
    return this.by;
  }

  /**
   * Setter: modify the type of author published the album
   * @param {Artists | Groups} artistsGroups Object of type Artist or Group
   */
  setBy(artistsGroups: (Artists | Groups)): void {
    this.by = artistsGroups;
  }

  /**
   * Getter of the year of the album
   * @returns {number} Year of the album
   */
  getYear(): number {
    return this.year;
  }

  /**
   * Setter: modify the private attribute
   * @param {number} newYear New year of the album
   */
  setYear(newYear: number): void {
    this.year = newYear;
  }

  /**
   * Getter of genres of the album
   * @returns {MusicalGenres[]}
   */
  getGenre(): MusicalGenres[] {
    return this.genre;
  }

  /**
   * Setter: modify the genres of the album
   * @param {MusicalGenres[]} newGenre New genre of the album
   */
  setGenre(newGenre: MusicalGenres[]): void {
    this.genre = newGenre;
  }

  /**
   * Adds a genre in the album
   * @param {MusicalGenres} newGenre New genre
   */
  addGenre(newGenre: MusicalGenres): void {
    this.genre.push(newGenre);
  }

  /**
   * Removes a genre in the album
   * @param {string} genre Genre to be removed
   */
  removeGenre(genre: string): void {
    for (let i = 0; i < this.genre.length; i++) {
      if (this.genre[i].getName() === genre) {
        this.genre.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Getter of the list of songs of the album
   * @returns {Song[]} Current songs list
   */
  getSongs(): Song[] {
    return this.songs;
  }

  /**
   * Setter: modify the list songs of the album
   * @param {Song[]} newSong New songs list
   */
  setSongs(newSong: Song[]): void {
    this.songs = newSong;
  }

  /**
   * Adds a song in the list of songs of the album
   * @param {Song} newSong New song
   */
  addSongs(newSong: Song): void {
    this.songs.push(newSong);
  }

  /**
   * Revomes a song in the list of songs of the album
   * @param {string} songs Song to be removed
   */
  removeSongs(songs: string): void {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songs) {
        this.songs.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Prints album information
   */
  printInfo(): void {
    console.log('Name: ' + this.name);
    if (this.by instanceof Artists) {
      console.log('By artists: ' + this.by.getName());
    }
    if (this.by instanceof Groups) {
      console.log('By groups: ' + this.by.getName());
    }
    console.log('Year: ' + this.year);
    console.log('Genres: ');
    for (const genres of this.genre) {
      console.log(genres.getName());
    }
    console.log('Songs: ');
    for (const song of this.songs) {
      console.log(song.getName());
    }
  }
}
```

En la clase _Album_ se ha implementado los métodos necesarios:
  * _getName_: Retorna el nombre del álbum.
  * _setName_: Modifica el nombre del álbum.
  * _getBy_: Retorna un objeto de tipo artista (Artists) o grupo (Groups). Este método indica que el álbum fue publicado por un artista o grupo.
  * _setBy_: Modifica el tipo de objeto del autor que publica el albúm.
  * _getYear_: Retorna el año de publicación del albúm.
  * _setYear_: Modifica el año de publicación.
  * _getGenre_: Retorna una lista de los géneros que está relaciona el albúm.
  * _setGenre_: Modifica la lista de géneros del albúm.
  * _addGenre_: Añade un género pasado por parámetro a la lista de géneros.
  * _removeGenre_: Elimina un género en específico de la lista de géneros.
  * _getSongs_: Retorna la lista de canciones que contiene el albúm.
  * _setSongs_: Modifica la lista actual de canciones por otra nueva.
  * _addSongs_: Añade una canción a la lista de canciones.
  * _removeSongs_: Elimina una canción del albúm.
  * _printInfo_: Se muestra por consola la información almacenada del albúm.

## Clase **_Groups_**


## Clase **_Artists_**


## Clase **_Playlist_**

La clase **Playlist** funcionará como una lista de reproducción de música. En ella, contendrá: el nombre de la playlist, las canciones, la duración total de todas las canaciones y los géneros musicales al que pertenece.

A contuación se muestra la clase en typescript.

[Playlist.ts](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/3fb4e0b7caeb407b7536634cc6b762173972bcea/src/Playlist.ts)

```typescript
import {Song} from './Song';
import {MusicalGenres} from './MusicalGenres';
/**
 * Playlist class
 */
export class Playlist {
  constructor(private name: string,
              private songs: Song[],
              private duration: string,
              private genres: MusicalGenres[]) {}
  /**
   * Getter of the private attribute "name"
   * @returns {string} Name of the playlist
   */
  getName(): string {
    return this.name;
  }

  /**
   * Setter: modify the private attribute
   * @param {string} newName New name of the playlist
   */
  setName(newName: string): void {
    this.name = newName;
  }

  /**
   * Getter of the private attribute "songs"
   * @returns {Song[]} Songs of playlist
   */
  getSongs(): Song[] {
    return this.songs;
  }

  /**
   * Setter: modify the list of songs in the playlist
   * @param {Song[]} newSongs New list of songs
   */
  setSongs(newSongs: Song[]): void {
    this.songs = newSongs;
  }

  /**
   * Adds a song in the list of songs in the playlist
   * @param {Song} newSong New song
   */
  addSong(newSong: Song): void {
    this.songs.push(newSong);
  }

  /**
   * Revomes a song in the list of songs in the playlist
   * @param {string} songs Song to be removed
   */
  removeSongs(songs: string): void {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songs) {
        this.songs.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Getter of the private attribute "duration"
   * @returns {string} Duration of the all songs on the playlist
   */
  getDuration(): string {
    return this.duration;
  }

  /**
   * Setter: modify the durations of th all songs on the playlist
   * @param {string} newDuration New Duration
   */
  setDuration(newDuration: string): void {
    this.duration = newDuration;
  }

  /**
   * Getter of genres of the playlist
   * @returns {MusicalGenres[]} Current genres of the playlist
   */
  getGenres(): MusicalGenres[] {
    return this.genres;
  }

  /**
   * Setter: modify de current genres
   * @param {MusicalGenres[]} newGenres New genres of the playlist
   */
  setGenres(newGenres: MusicalGenres[]): void {
    this.genres = newGenres;
  }

  /**
   * Adds a genre in the list of genres in the playlist
   * @param {MusicalGenres} newGenre New genre
   */

  addGenres(newGenre: MusicalGenres): void {
    this.genres.push(newGenre);
  }

  /**
   * Removes a genre in the list of genres in the playlist
   * @param {string} genre Genre to be removed
   */
  removeGenres(genre: string): void {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genre) {
        this.genres.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Prints playlist information
   */
  printInfo(): void {
    console.log('Name:' + this.name);
    console.log('Songs: ');
    for (const song of this.songs) {
      console.log(song.getName());
    }
    console.log('Duration: ' + this.duration);
    console.log('Genres: ');
    for (const genre of this.genres) {
      console.log(genre.getName());
    }
  }
}
```

En la clase _Playlist_ se ha implementado los siguientes métodos:
* _getName_: Retorna el nombre de la playlist.
* _setName_: Modifica el nombre actual de la lista de reproducción por uno nuevo.
*  _getSongs_: Devuelve la lista de canciones almacenadas en la playlist.
* _setSongs_: Cambia la lista de canciones por una nueva lista pasada por parámetro.
* _addSong_: Añade una canción a la lista de canciones.
* _removeSongs_: Elimina una canción específica de la lista de canciones.
* _getDuration_: Retorna la duración de la playlist.
* _setDuration_: Modifica la duración de la lista de reproducción.
* _getGenres_: Devuelve la lista de géneros musicales que pertenece la playlist.
* _setGenres_: Cambia la lista actual de géneros musicales por uno nuevo.
* _addGenres_: Añade un género musical a la lista de géneros musicales.
* _removeGenres_: Elimina un género musical de la lista de géneros mucicales al que pertenece la playlist.
* _printInfo_: Muestra la información de la playlist.

## Clase **_Manager_**


## Interfaz **_Operation_**



# CONCLUSIÓN




### INTEGRANTES

- **Gabriel Alberto Luis Freitas:** alu0101348421
- **Dana Belen Choque Zárate:** alu0101328348
- **Daniele Vitale:** alu0101329017
- **Roxana Mihaela Baba:** alu0101339887
