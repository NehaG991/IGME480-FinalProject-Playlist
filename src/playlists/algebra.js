const Alg = {
    // necessary base functions here
    /*functionName: (playlist) => ({
      _tag: 'FunctionName',
      playlist
    }),*/
    addPlaylists: (...playlists) => ({
      _tag:'AddP',
      playlists
    }),
    sortPlaylist: (playlist, filter) => ({
      _tag: 'sortP',
      playlist
    }),
    pure: (value) => ({
      _tag: 'Pure',
      value
    }),
    ap: (functionTile, domainTile) => ({
      _tag: 'Ap',
      functionTile,
      domainTile
    }),
  };
  
  export {
    Alg
  };