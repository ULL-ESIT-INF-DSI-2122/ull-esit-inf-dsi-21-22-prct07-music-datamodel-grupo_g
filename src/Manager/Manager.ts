
import {Playlist} from '../Playlist/Playlist';

export class Manager {
  constructor(private playlists: Playlist[]) {}

  getPlaylists(): Playlist[] {
    return this.playlists;
  }

  showPlaylists(): void {
    for (const playlist of this.playlists) {
      playlist.printInfo();
    }
  }

  navegatePlaylists(order: string): void {
    this.showPlaylists();
    for (let i = 0; i < this.playlists.length; i++) {
      if (order === 'name asc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => a.getName().localeCompare(b.getName())));
      } else if (order === 'name desc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => b.getName().localeCompare(a.getName())));
      } else if (order === 'artist asc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => a.getAuthor().getName().localeCompare(b.getAuthor().getName())));
      } else if (order === 'artist desc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => b.getAuthor().getName().localeCompare(a.getAuthor().getName())));
      } else if (order === 'duration asc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => a.getDuration().localeCompare(b.getDuration())));
      } else if (order === 'duration desc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => b.getDuration().localeCompare(a.getDuration())));
      } else if (order === 'genre asc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => a.getGenre()[i].getName().localeCompare(b.getGenre()[i].getName())));
      } else if (order === 'genre desc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => b.getGenre()[i].getName().localeCompare(a.getGenre()[i].getName())));
      } else if (order === 'num rep asc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => a.getNumRep() - b.getNumRep()));
      } else if (order === 'num rep desc') {
        console.log(this.playlists[i].getSongs().sort((a, b) => b.getNumRep() - a.getNumRep()));
      } else {
        console.log(this.playlists[i].getSongs().sort((a, b) => a.getName().localeCompare(b.getName())));
      }
    }
  }

  createPlaylist(name: string, type: string): void {
    if (type === 'existing') {
      if (this.playlists.find((playlist) => playlist.getName() === name)) {
        console.log('Playlist already exists');
      } else {
        // this.playlists.push(new Playlist(name));
      }
    }
    if (type === 'personalized') {
      // this.playlists.push(new Playlist(name));
    }
  }
}
