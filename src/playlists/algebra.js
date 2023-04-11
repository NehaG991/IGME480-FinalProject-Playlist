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
    })
  };
  
  export {
    Alg
  };