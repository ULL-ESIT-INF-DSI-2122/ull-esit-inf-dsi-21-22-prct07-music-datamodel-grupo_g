import {DB} from '../LowDB/DB';
import * as Inquirer from 'inquirer';

// Singleton class for database management
export class Manager {
  private db: DB;
  private inquirer: Inquirer.Inquirer;
  private username: string;
  private playlists: {name: string, songs: string[], duration: number, genres: string[], creator: string}[];

  constructor() {
    this.db = DB.getInstance();
    this.inquirer = Inquirer;
    this.username = '';
    this.playlists = [];
  }

  public async start(): Promise<void> {
    process.stdout.write('\x1Bc');
    const menu = await this.inquirer.prompt([
      {
        type: 'Input',
        name: 'username',
        message: 'What is your username?'
      }
    ]);
    console.log(`Welcome ${menu.username}`);
    this.username = menu.username;
    this.showMenu();
  }

  public async showMenu(): Promise<void> {
    process.stdout.write('\x1Bc');
    const menu = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'What do you want to do?',
        choices: [
          'Preview all the playlists in the database',
          'Add a new playlist',
          'Remove a playlist',
          'Save a playlist',
          'Sign out',
          'Exit'
        ]
      }
    ]);

    switch (menu.menu) {
      case 'Preview all the playlists in the database':
        this.showPlaylists();
        break;
      case 'Add a new playlist':
        this.addPlaylist();
        break;
      case 'Remove a playlist':
        this.removePlaylist();
        break;
      case 'Save a playlist':
        this.savePlaylist();
        break;
      case 'Sign out':
        this.start();
        break;
      case 'Exit':
        break;
    }
  }

  public async showPlaylists(): Promise<void> {
    process.stdout.write('\x1Bc');
    const playlists = await this.db.getPlaylists();
    console.log(`Playlists in the database:`);
    playlists.forEach((playlist: {name: string, songs: string[], duration: number, genres: string[]}) => {
      console.log('\x1b[032m' + `${playlist.name}` + '\x1b[0m');
      playlist.songs.forEach((song: string) => {
        console.log(`\t${song}`);
      }
      );
      console.log('\x1b[032m' + '\tDuration:' + '\x1b[0m' + `${playlist.duration}`);
      console.log('\x1b[032m' + '\tGenres:' + '\x1b[0m' + `${playlist.genres}\n`);
    });
    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue'
      }
    ]);
    this.showMenu();
  }

  public async addPlaylist(): Promise<void> {
    process.stdout.write('\x1Bc');
    const name = await this.inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the playlist?'
      }
    ]);
    const allSongs = this.db.getSongs();
    const songsNames = allSongs.map((song: {name: string, duration: number, genres: string[]}) => {
      return song.name;
    });
    const songs = await this.inquirer.prompt([
      {
        type: 'checkbox',
        name: 'songs',
        message: 'What songs do you want to add?',
        choices: songsNames
      }
    ]);
    const duration = allSongs.filter((song: {name: string, duration: number, genres: string[]}) => {
      return songs.songs.includes(song.name);
    }
    ).reduce((acc: number, song: {name: string, duration: number, genres: string[]}) => {
      return acc + song.duration;
    }
    , 0);
    const genres = allSongs.filter((song: {name: string, duration: number, genres: string[]}) => {
      return songs.songs.includes(song.name);
    }
    ).reduce((acc: string[], song: {name: string, duration: number, genres: string[]}) => {
      return acc.concat(song.genres);
    }
    , []);

    const JSON = {
      name: name.name,
      songs: songs.songs,
      duration: duration,
      genres: genres,
      creator: this.username
    };
    this.playlists.push(JSON);

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue'
      }
    ]);
    this.showMenu();
  }

  public async removePlaylist(): Promise<void> {
    process.stdout.write('\x1Bc');
    const playlists = await this.db.getPlaylists();
    const creators = playlists.map((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      return playlist.creator;
    });
    const availablePlaylists = playlists.filter((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      return creators.includes(this.username);
    });
    const choices = await this.inquirer.prompt([
      {
        type: 'checkbox',
        name: 'playlists',
        message: 'What playlists do you want to remove?',
        choices: availablePlaylists.map((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
          return playlist.name;
        })
      }
    ]);
    const playlistsToRemove = availablePlaylists.filter((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      return choices.playlists.includes(playlist.name);
    });
    playlistsToRemove.forEach((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      this.db.removePlaylist(playlist.name);
    });
    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue'
      }
    ]);
    this.showMenu();
  }

  public async savePlaylist(): Promise<void> {
    process.stdout.write('\x1Bc');
    const playlists = await this.db.getPlaylists();
    const creators = playlists.map((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      return playlist.creator;
    });
    const availablePlaylists = playlists.filter((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      return creators.includes(this.username);
    });
    const choices = await this.inquirer.prompt([
      {
        type: 'checkbox',
        name: 'playlists',
        message: 'What playlists do you want to save?',
        choices: availablePlaylists.map((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
          return playlist.name;
        })
      }
    ]);
    const playlistsToSave = availablePlaylists.filter((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      return choices.playlists.includes(playlist.name);
    });
    playlistsToSave.forEach((playlist: {name: string, songs: string[], duration: number, genres: string[], creator: string}) => {
      this.db.addPlaylist(playlist);
    });
    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press enter to continue'
      }
    ]);
    this.showMenu();
  }
}

const manager = new Manager();
manager.start();

// Errores en eliminar y guardar - Corregir
// Comentar