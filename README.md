<br>

<div align="center">

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/tests.yml)[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/coveralls.yml)[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g)

</div>

# ÍNDICE

- [INTRODUCCIÓN](#id1).
- [CLASES](#id2).
    - [Clase Album](#id3).
    - [Clase Artist](#id4).
    - [Clase Group](#id5).
    - [Clase Manager](#id6).
    - [Clase MusicalGenres](#id7).
    - [Clase Playlist](#id8).
    - [Clase Song](#id9).
- [INTERFACES](#id10).
    - [Interfaces implementadas por la clases](#id11).
        - [Interfaz AlbumManage](#id12).
        - [Interfaz ArtistManage](#id13).
        - [Interfaz GroupManage](#id14).
        - [Interfaz MusicalGenresManage](#id15).
        - [Interfaz Nameable](#id16).
        - [Interfaz PlaylistManage](#id17).
        - [Interfaz SongManage](#id18).
    - [Interfaz UI](#id19).
- [BASE DE DATOS](#id20).
- [CONCLUSIÓN](#id21).
- [INTEGRANTES](#id22).

# INTRODUCCIÓN<a name="id1"></a>

En esta práctica se tendrá que crear un modelo de datos de un sistema de información que permita almacenar una biblioteca de música. El sistema de información deberá permitir la gestión de las canciones, los artistas, los álbumes, los grupos, las playlists y los géneros. Además, el sistema deberá permitir que el usuario interactúe con la base de datos para realizar las siguientes operaciones: 

  * Crear nuevas playlists
  * Añadir canciones a una playlist
  * Eliminar canciones de una playlist
  * Guardar y/o eliminar una playlist
  * Realizar búsquedas
  * Mostrar la información de una canción, artistas, etc.

El código fuente de la práctica se organizará en distintos directorios dentro de la carpeta ```/src```, donde se encontrarán las clases que implementan las funcionalidades del sistema. También se creará la documentación, de forma automática, de todos los ejercicios que hayamos realizado haciendo uso de TypeDoc. Podremos consultar la documentación pulsando sobre el siguiente [_enlace_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/tree/main/docs) que le llevará al fichero o accediendo manualmente al directorio ```/docs```.

Por otro lado, comentar que se seguirá un control continuo haciendo uso de **git** y de algunas **Git Actions**, para que el código se pueda mantener en un estado consistente y que se pueda realizar un seguimiento de los cambios que se hagan en el código. Además, se hará uso de otras herramientas como por ejemplo:

  * Coveralls
  * Istanbul
  * Sonar Cloud
  * LowDB
  * TypeDoc
  * Inquirer

Para acceder a la página web del informe podrá hacer pulsando sobre este [_enlace_](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/).

# CLASES<a name="id2"></a>

## **Clase Album**<a name="id3"></a>
Se define la clase **Album**, definida en el fichero [**_Album.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/3fb4e0b7caeb407b7536634cc6b762173972bcea/src/Album/Album.ts), para el almacenamiento de información de un disco:

- **Nombre del álbum**: ```string```
- **Autor del álbum**: ```Artist``` o ```Group```
- **Año de creación del álbum**: ```number```
- **Géneros al que pertenece el álbum**: ```MusicalGenres[]```
- **Canciones del álbum**: ```Song[]```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

```typescript
export class Album implements Manage {
  constructor(private name: string,
              private author: Artist | Group,
              private year: number,
              private genre: MusicalGenres[],
              private songs: Song[]) {}
  // code goes here ...
}
```

En la clase _Album_ se ha implementado los métodos necesarios:

* **Obtener y modificar los atributos**
  * *Nombre*
    - _getName_: Retorna el nombre del álbum.

    ```typescript
    getName(): string { return this.name; }
    ```

    - _setName_: Modifica el nombre del álbum.

    ```typescript
    setName(name: string): void { this.name = name; }
    ```

  * *Autor*
    - _getAuthor_: Retorna un objeto de tipo artista (Artist) o grupo (Group). Este método indica que el álbum fue publicado por un artista o grupo.

    ```typescript
    getAuthor(): Artists | Groups { return this.author; }
    ```

    - _setAuthor_: Modifica el tipo de objeto del autor que publica el álbum.

    ```typescript
    setAuthor(artistsGroups: (Artists | Groups)): void { this.author = artistsGroup; }
    ```

  * *Año*
    - _getYear_: Retorna el año de publicación del álbum.

    ```typescript
    getYear(): number { return this.year; }
    ```

    - _setYear_: Modifica el año de publicación.

    ```typescript
    setYear(newYear: number): void { this.year = newYear; }
    ```

  * *Género musicales*
    - _getGenres_: Retorna una lista de los géneros que está relaciona el álbum.

    ```typescript
    getGenres(): MusicalGenres[] { return this.genre; }
    ```

    - _setGenres_: Modifica la lista de géneros del álbum.

    ```typescript
    setGenres(newGenre: MusicalGenres[]): void { this.genre = newGenre; }
    ```

  * *Canciones*
    - _getSongs_: Retorna la lista de canciones que contiene el álbum.

    ```typescript
    getSongs(): Song[] { return this.songs; }
    ```

    - _setSongs_: Modifica la lista actual de canciones por otra nueva.

    ```typescript
    setSongs(newSong: Song[]): void { this.songs = newSong; }
    ```

* **Añadir y eliminar**
  * *Género musicales*
    - _addGenre_: Añade un género pasado por parámetro a la lista de géneros.

    ```typescript
    addGenre(newGenre: MusicalGenres): void { this.genre.push(newGenre); }
    ```

    - _removeGenre_: Elimina un género en específico de la lista de géneros.

    ```typescript
    removeGenre(genre: string): void {
      for (let i = 0; i < this.genre.length; i++) {
        if (this.genre[i].getName() === genre) {
          this.genre.splice(i, 1);
          break;
        }
      }
    }
    ```

  * *Canciones*
    - _addSong_: Añade una canción a la lista de canciones.

    ```typescript
    addSong(newSong: Song): void { this.songs.push(newSong); }
    ```

    - _removeSong_: Elimina una canción del álbum.

    ```typescript
    removeSong(songs: string): void {
      for (let i = 0; i < this.songs.length; i++) {
        if (this.songs[i].getName() === songs) {
          this.songs.splice(i, 1);
          break;
        }
      }
    }
    ```

## **Clase Artist**<a name="id4"></a>

La clase **Artist**, definida en el fichero [_**Artist.ts**_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Artist/Artist.ts), se encargará de almacenar toda la información de cada uno de los artistas:

  - **Nombre del artista**: ```string```
  - **Grupos a los que pertenece el artista**: ```Group[]```
  - **Géneros al que pertenece el artista**: ```MusicalGenres[]```
  - **Discos del artista**: ```Album[]```
  - **Canciones del artista**: ```Song[]```
  - **Número de oyentes mensuales del artista**: ```number```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

``` typescript
export class Artist implements Manage {
  constructor(private name: string,
              private groups: Group[],
              private genres: MusicalGenres[],
              private albums: Album[],
              private songs: Song[],
              private numFollowers: number) {}
  // code goes here ...
}
```

Para poder manejar la información de los artistas, se tendrá que crear un conjunto de métodos que permitan realizar acciones como las siguientes:

  * **Obtener y modificar los atributos**
    * *Nombre*
      - *getName*: devuelve el nombre del género musical.

      ```typescript
        getName(): string { return this.name; }
      ```

      - *setName*: recibe como parámetro un nombre de tipo ```string``` y modifica el nombre del género musical.

      ```typescript
        setName(name: string): void { this.name = name; }
      ``` 

    * *Número de oyentes*
      - *getNumFollowers*: devuelve el número de oyentes que tenga el grupo.
       
        ``` typescript
        getNumFollowers(): number {
          for (const group of this.groups) {
            this.numFollowers += group.getNumFollowers();
          }
          return this.numFollowers;
        }
        ```

      - *setNumFollowers*: asigna al grupo un nuevo número de oyentes.

        ``` typescript
        setNumFollowers(numFollowers: number): void { this.numFollowers = numFollowers; }
        ```

        >> Como se puede observar, el número de oyentes de un artista dependerá de sus propios oyentes además de los oyentes de los grupos a los que pertenece. 

    * *Grupos* 
      - *getGroups*: devuelve los grupos a los que pertenece el artista.

        ``` typescript
        getGroups(): Group[] { return this.groups; }
        ```

      - *setGroups*: asigna los grupos a los que pertenece el artista.
      
        ```typescript
        setGroups(groups: Group[]): void { this.groups = groups; }
        ```

    * *Géneros musicales*
      - *getGenres*: devuelve los géneros musicales del grupo.
        
        ``` typescript
        getGenres(): MusicalGenres[] { return this.genres; }
        ```

      - *setGenres*: asigna los géneros musicales al grupo.

        ``` typescript
        setGenres(genres: MusicalGenres[]): void { this.genres = genres; }
        ```
        
    * *Álbumes*
      - *getAlbums*: devuelve los álbumes del grupo.
          
        ``` typescript
        getAlbums(): Album[] { return this.albums; }
        ```

      - *setAlbums*: asigna álbumes al grupo.

        ``` typescript
        setAlbums(albums: Album[]): void { this.albums = albums; }
        ```

    * *Canciones*
      - *getSongs*: devuelve las canciones del grupo.
          
        ``` typescript
        getSongs(): Song[] { return this.songs; }
        ```

      - *setSongs*: asigna canciones al grupo.

        ``` typescript
        setSongs(songs: Song[]): void { this.songs = songs; }
        ```

  * **Añadir y eliminar** 
    * *Grupos* 
      - *addGroup*: añade un nuevo grupo al que pertenece el artista.
      
        ``` typescript
        addGroup(group: Group): void { this.groups.push(group); }
        ```

      - *removeGroup*: elimina uno de los grupos al que pertenece el artista.

        ```typescript
        removeGroup(group: string): void {
          for (let i = 0; i < this.groups.length; i++) {
            if (this.groups[i].getName() === group) {
              this.groups.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Géneros musicales*
      - *addGenre*: añade al grupo un nuevo género.
        
        ``` typescript
        addGenre(genre: MusicalGenres): void { this.genres.push(genre); }
        ```

      - *removeGenre*: elimina del grupo un género musical.

        ``` typescript
        removeGenre(genre: string): void {
          for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genre) {
              this.genres.splice(i, 1);
              break;
            }
          }
        }
        ```
        
    * *Álbumes* 
      - *addAlbum*: añade al grupo un nuevo género.
          
        ``` typescript
        addAlbum(album: Album): void { this.albums.push(album); }
        ```

      - *removeAlbum*: elimina del grupo un nuevo género.

        ```typescript
        removeAlbum(album: string): void {
          for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].getName() === album) {
              this.albums.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Canciones*
      - *addSong*: añade al grupo una nueva canción.
          
        ``` typescript
        addSong(song: Song): void { this.songs.push(song); }
        ```

      - *removeSong*: elimina del grupo una canción.

        ```typescript
        removeSong(song: string): void {
          for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === song) {
              this.songs.splice(i, 1);
              break;
            }
          }
        }
        ```

## **Clase Group**<a name="id5"></a>

La clase **Group**, definida en el fichero [_**Group.ts**_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Group/Group.ts), se encargará de almacenar toda la información de cada uno de los grupos:

  - **Nombre del grupo**: ```string```
  - **Integrantes del grupo**: ```Artist[]```
  - **Año de creación del grupo**: ```number```
  - **Géneros al que pertenece el grupo**: ```MusicalGenres[]```
  - **Discos del grupo**: ```Album[]```
  - **Número de oyentes mensuales del grupo**: ```number```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

``` typescript
export class Group implements Manage {
  constructor(private name: string,
              private artists: Artist[],
              private creationYear: number,
              private genres: MusicalGenres[],
              private albums: Album[],
              private numFollowers: number) {}
  // code goes here ...
}
```

Al igual que en las clases anteriores, para poder manejar la información de los grupos, se tendrá que crear un conjunto de métodos que permitan realizar ciertas acciones como por ejemplo: 

  * **Obtener y modificar los atributos**
    * *Nombre*
      - *getName*: devuelve el nombre del género musical.

      ```typescript
        getName(): string { return this.name; }
      ```

      - *setName*: recibe como parámetro un nombre de tipo ```string``` y modifica el nombre del género musical.

      ```typescript
        setName(name: string): void { this.name = name; }
      ``` 

    * *Número de oyentes*
      - *getNumFollowers*: devuelve el número de oyentes que tenga el grupo.
       
        ``` typescript
        getNumFollowers(): number { return this.numFollowers; }
        ```

      - *setNumFollowers*: asigna al grupo un nuevo número de oyentes.

        ``` typescript
        setNumFollowers(numFollowers: number): void { this.numFollowers = numFollowers; }
        ```
        
    * *Año de creación* 
      - *getCreationYear*: devuelve el año de creación del grupo.

        ``` typescript
        getCreationYear(): number { return this.creationYear; }
        ```

      - *setCreationYear*: asigna al grupo un nuevo año de creación de este.

        ``` typescript
        setCreationYear(creationYear: number): void { this.creationYear = creationYear; }
        ```

    * *Artistas*
      - *getArtists*: devuelve los artistas que componen el grupo.
      
        ``` typescript
        getArtists(): Artist[] { return this.artists; }
        ```

      - *setArtists*: asigna al grupo nuevos integrantes.

        ``` typescript
        setArtists(artists: Artist[]): void { this.artists = artists; }
        ```

    * *Géneros musicales*
      - *getGenres*: devuelve los géneros musicales del grupo.
        
        ``` typescript
        getGenres(): MusicalGenres[] { return this.genres; }
        ```

      - *setGenres*: asigna los géneros musicales al grupo.

        ``` typescript
        setGenres(genres: MusicalGenres[]): void { this.genres = genres; }
        ```
        
    * *Álbumes*
      - *getAlbums*: devuelve los álbumes del grupo.
          
        ``` typescript
        getAlbums(): Album[] { return this.albums; }
        ```

      - *setAlbums*: asigna álbumes al grupo.

        ``` typescript
        setAlbums(albums: Album[]): void { this.albums = albums; }
        ```

    * *Canciones*
      - *getSongs*: devuelve las canciones del grupo.
          
        ``` typescript
        getSongs(): Song[] { return this.songs; }
        ```

      - *setSongs*: asigna canciones al grupo.

        ``` typescript
        setSongs(songs: Song[]): void { this.songs = songs; }
        ```

  * **Añadir y eliminar** 
    * *Artistas*
      - *addArtist*: añade al grupo nuevos integrantes.
      
        ``` typescript
        addArtist(artist: Artist): void { this.artists.push(artist); }
        ```

      - *removeArtist*: elimina integrantes del grupo.

        ``` typescript
        removeArtist(artist: string): void {
          for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === artist) {
              this.artists.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Géneros musicales*
      - *addGenre*: añade al grupo un nuevo género.
        
        ``` typescript
        addGenre(genre: MusicalGenres): void { this.genres.push(genre); }
        ```

      - *removeGenre*: elimina del grupo un género musical.

        ``` typescript
        removeGenre(genre: string): void {
          for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genre) {
              this.genres.splice(i, 1);
              break;
            }
          }
        }
        ```
  
    * *Álbumes* 
      - *addAlbum*: añade al grupo un nuevo género.
          
        ``` typescript
        addAlbum(album: Album): void { this.albums.push(album); }
        ```

      - *removeAlbum*: elimina del grupo un nuevo género.

        ```typescript
        removeAlbum(album: string): void {
          for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].getName() === album) {
              this.albums.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Canciones*
      - *addSong*: añade al grupo una nueva canción.
          
        ``` typescript
        addSong(song: Song): void { this.songs.push(song); }
        ```

      - *removeSong*: elimina del grupo una canción.

        ```typescript
        removeSong(song: string): void {
          for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === song) {
              this.songs.splice(i, 1);
              break;
            }
          }
        }
        ```

## **Clase Manager**<a name="id6"></a>


## **Clase MusicalGenres**<a name="id7"></a>

La clase *MusicalGenres*, definida en el fichero [**_MusicalGenres.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/MusicalGenres/MusicalGenres.ts), representa un grupo musical y se encarga de almacenar la siguiente información:

  - **Nombre del género musical**: ```string```  
  - **Artistas que producen música de ese género**: ```Artist[]```
  - **Grupos que producen música de ese género**: ```Group[]```
  - **Álbumes que hay dentro de la biblioteca relacionados con este género**: ```Album[]```
  - **Canciones que hay dentro de la biblioteca de ese género**: ```Song[]```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

```typescript
export class MusicalGenres implements Manage {
  constructor(private name: string,
              private artists: Artists[],
              private groups: Groups[],
              private albums: Album[],
              private song: Song[]) {}
  
  // code goes here...
}
```
Para poder crear la clase **_MusicalGenres*_**, necesitamos crear una clase que represente a los artistas, grupos y albums (se explicará con más detalles la creación de cada uno de ellos en los apartados posteriores).

Los métodos desarrollados en la clase **_MusicalGenres_** se encargan de realizar las operaciones necesarias para manipular la clase tal y como se propone en el enunciado:

* **Obtener y modificar los atributos**
  * *Nombre*
    - *getName*: devuelve el nombre del género musical.

    ```typescript
      getName(): string { return this.name; }
    ```

    - *setName*: recibe como parámetro un nombre de tipo ```string``` y modifica el nombre del género musical.

    ```typescript
      setName(name: string): void { this.name = name; }
    ```

  * *Artistas*
    - *getArtists*: devuelve los artistas del género musical en cuestión.

    ```typescript
      getArtists(): Artists[] { return this.artists; }
    ```

    - *setArtists*: recibe como parámetro un array de tipo ```Artists``` y modifica los artistas del género musical.

    ```typescript
      setArtists(artists: Artists[]): void { this.artists = artists; }
    ```

  * *Grupos*
    - *getGroups*: devuelve los grupos del género musical.

    ```typescript
      getGroups(): Groups[] { return this.groups; }
    ```

    - *setGroups*: recibe como parámetro un array de tipo ```Artists``` modifica los grupos del género musical.
    
    ```typescript
      setGroups(groups: Groups[]): void { this.groups = groups; }
    ```

  * *Álbumes*
    - *getAlbums*: devuelve los albums del género musical.
    
    ```typescript
      getAlbums(): Album[] { return this.albums; }
    ```

    - *setAlbums*: modifica los albums del género musical.
    
    ```typescript
      setAlbums(albums: Album[]): void { this.albums = albums; }
    ```

  * *Canciones*
    - *getSongs*: devuelve las canciones del género musical.
    
    ```typescript
      getSongs(): Song[] { return this.song; }
    ```

    - *setSongs*: modifica las canciones del género musical recibiendo como parámetro una variable de tipo ```Song```.
    
    ```typescript
      setSongs(song: Song[]): void { this.song = song; }
    ```

* **Añadir y eliminar**
  * *Artistas*
    - *addArtist*: recibe como parámetro una variable de tipo ```Artists``` y añade un artista al género musical.
    
    ```typescript
      addArtist(artist: Artists): void { this.artists.push(artist); }
    ```

    - *removeArtist*: recibe como parámetro una variable de tipo ```string``` que representaría el nombre del artista y lo elimina del género musical.
    
    ```typescript
      removeArtist(artist: string): void {
        for (let i = 0; i < this.artists.length; i++) {
          if (this.artists[i].getName() === artist) {
            this.artists.splice(i, 1);
            break;
          }
        }
      }
    ```

  * *Grupos*
    - *addGroup*: recibe como parámetro una variable de tipo ```Groups``` y añade un grupo al género musical.
    
    ```typescript
      addGroup(group: Groups): void { this.groups.push(group); }
    ```

    - *removeGroup*: recibe como parámetro una variable de tipo ```string``` que representaría el nombre del Grupo y lo elimina del género musical.
    
    ```typescript
      removeGroup(group: string): void {
        for (let i = 0; i < this.groups.length; i++) {
          if (this.groups[i].getName() === group) {
            this.groups.splice(i, 1);
            break;
          }
        }
      }
    ```

  * *Álbumes*
    - *addAlbum*: recibe como parámetro una variable de tipo ```Album``` y añade un album al género musical.
    
    ```typescript
      addAlbum(album: Album): void { this.albums.push(album); }
    ```

    - *removeAlbum*: elimina un album del género musical recibiendo el nombre del album como parámetro.
    
    ```typescript
      removeAlbum(album: string): void {
        for (let i = 0; i < this.albums.length; i++) {
          if (this.albums[i].getName() === album) {
            this.albums.splice(i, 1);
            break;
          }
        }
      }
    ```

  * *Canciones*
    - *addSong*: recibe como parámetro una variable de tipo ```Song``` y añade una canción al género musical.
    
    ```typescript
      addSong(song: Song): void { this.song.push(song); }
    ```

    - *removeSong*: elimina una canción del género musical recibiendo como parámetro una variable de tipo ```string``` que representaría el nombre de la canción.
    
    ```typescript
      removeSong(song: string): void {
        for (let i = 0; i < this.song.length; i++) {
          if (this.song[i].getName() === song) {
            this.song.splice(i, 1);
            break;
          }
        }
      }
    ```

## **Clase Playlist**<a name="id8"></a>

La clase **Playlist**, definida en el fichero [**_Playlist.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/3fb4e0b7caeb407b7536634cc6b762173972bcea/src/Playlist/Playlist.ts), funcionará como una lista de reproducción de música que contendrá ña siguiente información:

  - **Nombre de la playlist**: ```string```
  - **Canciones de la playlist**: ```Song[]```
  - **Duración de la playlist**: ```string```
  - **Géneros a los que pertenece la playlist**: ```MusicalGenres[]```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

``` typescript
export class Playlist implements Manage {
  constructor(private name: string,
              private songs: Song[],
              private duration: string,
              private genres: MusicalGenres[]) {}
  // code goes here ...
}
```

Para poder manejar la información de las playlists, se tendrá que crear un conjunto de métodos que permitan realizar acciones como las siguientes:

* **Obtener y modificar los atributos**
  * *Nombre*
    - _getName_: Retorna el nombre de la playlist.

      ```typescript
      getName(): string { return this.name; }
      ```

    - _setName_: Modifica el nombre actual de la lista de reproducción por uno nuevo.

      ```typescript
      setName(newName: string): void { this.name = newName; }
      ```

  * *Canciones*
    -  _getSongs_: Devuelve la lista de canciones almacenadas en la playlist.

      ```typescript
      getSongs(): Song[] { return this.songs; }
      ```

    - _setSongs_: Cambia la lista de canciones por una nueva lista pasada por parámetro.

      ```typescript
      setSongs(newSongs: Song[]): void { this.songs = newSongs; }
      ```

  * *Duración*
    - _getDuration_: Retorna la duración de la playlist.

      ```typescript
      getDuration(): string { return this.duration; }
      ```

    - _setDuration_: Modifica la duración de la lista de reproducción.

      ```typescript
      setDuration(newDuration: string): void { this.duration = newDuration; }
      ```

  * *Géneros musicales*
    - _getGenres_: Devuelve la lista de géneros musicales que pertenece la playlist.

      ```typescript
      getGenres(): MusicalGenres[] { return this.genres; }
      ```

    - _setGenres_: Cambia la lista actual de géneros musicales por uno nuevo.

      ```typescript
      setGenres(newGenres: MusicalGenres[]): void { this.genres = newGenres; }
      ```

* **Añadir y eliminar** 
  * *Géneros musicales*
    - _addGenre_: Añade un género musical a la lista de géneros musicales.

      ```typescript
      addGenre(newGenre: MusicalGenres): void { this.genres.push(newGenre); }
      ```

    - _removeGenre_: Elimina un género musical de la lista de géneros musicales al que pertenece la playlist.

      ```typescript
      removeGenre(genre: string): void {
        for (let i = 0; i < this.genres.length; i++) {
          if (this.genres[i].getName() === genre) {
            this.genres.splice(i, 1);
            break;
          }
        }
      }
      ```

  * *Canciones*
    - _addSong_: Añade una canción a la lista de canciones.

      ```typescript
      addSong(newSong: Song): void { this.songs.push(newSong); }
      ```

    - _removeSong_: Elimina una canción específica de la lista de canciones.

      ```typescript
      removeSongs(songs: string): void {
        for (let i = 0; i < this.songs.length; i++) {
          if (this.songs[i].getName() === songs) {
            this.songs.splice(i, 1);
            break;
          }
        }
      }
      ```

## **Clase Song** <a name="id9"></a>

La clase *Song*, definida en el fichero [**_Song.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/Song/Song.ts), representa a las canciones de la biblioteca y tiene la función de almacenar la siguiente información:

- **Nombre de la canción**: ```string```
- **Autor de la canción**: ```Artist``` o ```Group```
- **Duración en minutos y segundos**: ```string```
- **Género al que pertenece**: ```MusicalGenres[]```
- **Single**: tipo ```boolean``` *(determina si la canción fue lanzada como un single o no)*
- **Número de reproducciones**: ```number```

A continuación se muestra el código desarrollado de la clase en cuestión.

```typescript
export class Song implements Manage {
  constructor(private name: string,
              private author: Artists | Groups,
              private duration: string,
              private genre: MusicalGenres[],
              private single: boolean,
              private numRep: number) {}
  
  // code goes here ...
}
```
Los métodos de la clase **Song** necesarios para manipular la clase son los siguientes:

* **Obtener y modificar los atributos**
  * *Nombre*
    - *getName*: devuelve el nombre de la canción.

    ```typescript
      getName(): string { return this.name; }
    ```

    - *setName*: modifica el nombre de la canción recibiendo como parámetro una variable de tipo ```string```.

    ```typescript
      setName(name: string): void { this.name = name; }
    ```

  * *Author*
    - *getArtist*: devuelve el author de la canción.

    ```typescript
      getAuthor(): Artist | Group { return this.author; }
    ```

    - *setArtist*: modifica el artista de la canción recibiendo como parámetro una variable de tipo ```Artists```.

    ```typescript
      setAuthor(author: Artists): void { this.author = author; }
    ```

  * *Duración*
    - *getDuration*: devuelve la duración de la canción.

    ```typescript
      getDuration(): string { return this.duration; }
    ```

    - *setDuration*: modifica la duración de la canción recibiendo como parámetro una variable de tipo ```string```.

    ```typescript
      setDuration(duration: string): void { this.duration = duration; }
    ```

  * *Género*
    - *getGenres*: devuelve el género de la canción.

    ```typescript
      getGenres(): MusicalGenres[] { return this.genre; }
    ```
    - *setGenres*: modifica el género de la canción recibiendo como parámetro una variable de tipo ```MusicalGenres[]```.

    ```typescript
      setGenres(genre: MusicalGenres[]): void { this.genre = genre; }
    ```

  * *Single*
    - *isSingle*: devuelve si la canción es un single o no.

    ```typescript
      isSingle(): boolean { return this.single; }
    ```

    - *setSingle*: modifica si la canción es un single o no recibiendo como parámetro una variable de tipo ```boolean```.

    ```typescript
      setSingle(single: boolean): void { this.single = single; }
    ```

  * *Reproducción*
    - *getNumRep*: devuelve el número de veces que la canción ha sido reproducida.

    ```typescript
      getNumRep(): number { return this.numRep; }
    ```

    - *setNumRep*: modifica el número de veces que la canción ha sido reproducida recibiendo como parámetro una variable de tipo ```number```.

    ```typescript
      setNumRep(numRep: number): void { this.numRep = numRep; }
    ```

* **Añadir y eliminar**
  * *Género*
    - *addGenre*: añade un género a la canción recibiendo como parámetro una variable de tipo ```MusicalGenres```.

    ```typescript
      addGenre(genre: MusicalGenres): void { this.genre.push(genre); }
    ```

    - *removeGenre*: elimina un género de la canción recibiendo como parámetro una variable de tipo ```string```.

    ```typescript
      removeGenre(genre: string): void {
        for (let i = 0; i < this.genre.length; i++) {
          if (this.genre[i].getName() === genre) {
            this.genre.splice(i, 1);
            break;
          }
        }
      }
    ```

# INTERFACES<a name="id10"></a>

## **Interfaces implementadas por la clases**<a name="id11"></a>

A la hora de realizar la definición de las clases, tal y como se ha podido observar el los puntos explicados anteriormente,  se ha implementado la interfaz **Manage** que contiene los métodos necesarios para manipular la clase. Es importante comentar que cada una de las clases tendrá su interfaz **Manage** correspondiente ubicada en la misma carpeta que la clase. 

```typescript
export interface Manage extends ... {}
```

Además, cada una de estas interfaces extenderán de otras interfaces según el caso de cada clase y que se ubicarán en la misma carpeta que la clase correspondiente. 

### **Interfaz AlbumManage**<a name="id12"></a>

[**_AlbumManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/Album/AlbumManage.ts)

```typescript
export interface AlbumManage {
  getAlbums(): Album[];
  setAlbums(albums: Album[]): void;
  addAlbum(album: Album): void;
  removeAlbum(album: string): void;
}
```

### **Interfaz ArtistManage**<a name="id13"></a>

[**_ArtistManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/Artist/ArtistManage.ts)

```typescript
export interface ArtistManage {
  getArtists(): Artist[];
  setArtists(Artists: Artist[]): void;
  addArtist(Artist: Artist): void;
  removeArtist(Artist: string): void;
}
```

### **Interfaz GroupManage**<a name="id14"></a>

[**_GroupManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/Group/GroupManage.ts)

```typescript
export interface GroupManage {
  getGroups(): Group[];
  setGroups(Groups: Group[]): void;
  addGroup(Group: Group): void;
  removeGroup(Group: string): void;
}
```

### **Interfaz MusicalGenresManage**<a name="id15"></a>

[**_MusicalGenresManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/MusicalGenres/MusicalGenresManage.ts)

```typescript
export interface MusicalGenresManage {
  getGenres(): MusicalGenres[];
  setGenres(MusicalGenress: MusicalGenres[]): void;
  addGenre(MusicalGenres: MusicalGenres): void;
  removeGenre(MusicalGenres: string): void;
}
```

### **Interfaz Nameable**<a name="id16"></a>

[**_Nameable.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/Nameable/Nameable.ts)

```typescript
export interface Nameable {
  getName(): string;
  setName(name: string): void;
}
```

### **Interfaz Playlist**<a name="id17"></a>

[**_PlaylistManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/Playlist/PlaylistManage.ts)

```typescript
export interface PlaylistManage {
  getPlaylists(): Playlist[];
  setPlaylists(Playlists: Playlist[]): void;
  addPlaylist(Playlist: Playlist): void;
  removePlaylist(Playlist: string): void;
}
```

### **Interfaz SongManage**<a name="id18"></a>

[**_SongManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/cf855c43040a4e4901aebfd62b8b55da2c0bf87b/src/Song/SongManage.ts)

```typescript
export interface SongManage {
  getSongs(): Song[];
  setSongs(Songs: Song[]): void;
  addSong(Song: Song): void;
  removeSong(Song: string): void;
}
```

## **Interfaz UI**<a name="id19"></a>





# BASE DE DATOS<a name="id20"></a>



# CONCLUSIÓN<a name="id21"></a>




### INTEGRANTES<a name="id22"></a>

- **Gabriel Alberto Luis Freitas:** alu0101348421
- **Dana Belen Choque Zárate:** alu0101328348
- **Daniele Vitale:** alu0101329017
- **Roxana Mihaela Baba:** alu0101339887
