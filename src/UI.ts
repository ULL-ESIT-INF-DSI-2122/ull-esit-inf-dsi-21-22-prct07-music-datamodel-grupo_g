import {DB} from './DB';
import * as Inquirer from 'inquirer';

export class UI {
  private db: DB;
  private inquirer: Inquirer.Inquirer;

  constructor() {
    this.db = DB.getInstance();
    this.inquirer = Inquirer;
  }

  public async showMenu(): Promise<void> {
    process.stdout.write('\x1Bc');
    const menu = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'What do you want to do?',
        choices: [
          'Show songs alphabetically',
          'Show albums alphabetically',
          'Show playlists alphabetically',
          'Show albums by year',
          'Show songs by number of plays',
          'Show only singles',
          'Exit'
        ]
      }
    ]);

    switch (menu.menu) {
      case 'Show songs alphabetically':
        this.showSongsAlphabetically();
        break;
      case 'Show albums alphabetically':
        this.showAlbumsAlphabetically();
        break;
      case 'Show playlists alphabetically':
        this.showPlaylistsAlphabetically();
        break;
      case 'Show albums by year':
        this.showAlbumsByYear();
        break;
      case 'Show songs by number of plays':
        this.showSongsByNumberOfPlays();
        break;
      case 'Show only singles':
        this.showSingles();
        break;
      case 'Exit':
        break;
    }
  }

  private async showSongsAlphabetically(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show songs in ascendent order?',
        choices: ['Yes', 'No']
      }
    ]);

    const songs = this.db.getSongs();
    if (ascendent.ascendent === 'Yes') {
      songs.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      songs.sort((a, b) => b.name.localeCompare(a.name));
    }

    songs.map((song: any) => console.log(song.name));

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue'
      }
    ]);

    this.showMenu();
  }

  private async showAlbumsAlphabetically(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show albums in ascendent order?',
        choices: ['Yes', 'No']
      }
    ]);

    const albums = this.db.getAlbums();
    if (ascendent.ascendent === 'Yes') {
      albums.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      albums.sort((a, b) => b.name.localeCompare(a.name));
    }

    albums.map((album: any) => console.log(album.name));

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue'
      }
    ]);

    this.showMenu();
  }

  private async showPlaylistsAlphabetically(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show playlists in ascendent order?',
        choices: ['Yes', 'No']
      }
    ]);

    const playlists = this.db.getPlaylists();
    if (ascendent.ascendent === 'Yes') {
      playlists.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      playlists.sort((a, b) => b.name.localeCompare(a.name));
    }

    playlists.map((playlist: any) => console.log(playlist.name));

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue'
      }
    ]);

    this.showMenu();
  }

  private async showAlbumsByYear(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show albums in ascendent order?',
        choices: ['Yes', 'No']
      }
    ]);

    const albums = this.db.getAlbums();
    if (ascendent.ascendent === 'Yes') {
      albums.sort((a, b) => a.year - b.year);
    } else {
      albums.sort((a, b) => b.year - a.year);
    }

    albums.map((album: any) => console.log(album.name));

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue'
      }
    ]);

    this.showMenu();
  }

  private async showSongsByNumberOfPlays(): Promise<void> {
    const ascendent = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'ascendent',
        message: 'Do you want to show songs in ascendent order?',
        choices: ['Yes', 'No']
      }
    ]);

    const songs = this.db.getSongs();
    if (ascendent.ascendent === 'Yes') {
      songs.sort((a, b) => a.numRep - b.numRep);
    } else {
      songs.sort((a, b) => b.numRep - a.numRep);
    }

    songs.map((song: any) => console.log(song.name));

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue'
      }
    ]);

    this.showMenu();
  }

  private async showSingles(): Promise<void> {
    const singles = this.db.getSongs().filter((song: any) => song.isSingle);
    singles.map((song: any) => console.log(song.name));

    await this.inquirer.prompt([
      {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue'
      }
    ]);

    this.showMenu();
  }
}

const ui = new UI();
ui.showMenu();