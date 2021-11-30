import React, { useState } from "react";
import './styles/App.scss';
import Song from "./Components/Song";
import Player from "./Components/Player";
import songList from "./util";

function App() {

  const [songs, setSong] = useState(songList());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
