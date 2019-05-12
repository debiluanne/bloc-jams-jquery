class Helper {
    playPauseAndUpdate (song) {
      player.playPause(song);
      console.log(song);
      $('#time-control .total-time').text( player.prettyTime (player.getDuration () ) );
    }
  }
var helper = new Helper();
