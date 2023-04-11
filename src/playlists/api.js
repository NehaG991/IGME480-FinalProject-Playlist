import {Alg} from './algebra.js';

// all possible functions that can be applied to playlists
const API = {
  addPlaylists: (...playlists) => Alg.addPlaylists(...playlists),
  sortPlaylist: (playlist, filter) => Alg.sortPlaylist(playlist, filter),
  sortByDate: (playlist) => sortPlaylist(playlist, filter),

  // Somewhat more advanced features of the API, used occasionally
  // above to concisely implement some tricky features. We'll cover
  // (some) of what and why these things are in the future  
  map: (f) => (playlist) => (
    API.ap(API.pure(f))(playlist)
  ),
  pure: (value) => Alg.pure(value),
  ap: (functionTile) => (domainTile) => (
    Alg.ap(functionTile, domainTile)
  ),

  // Exists to import existing images into a tile
  fromImage: (img) => (
    Alg.fromImage(img)
  )
};

export {
  API as Tile
}