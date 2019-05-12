class Helper {
    playPauseAndUpdate (song = player.currentlyPlaying) {
      player.playPause(song);
      console.log(song);
      $('#time-control .total-time').text( player.prettyTime (song.duration) );
    }
  }
var helper = new Helper();
