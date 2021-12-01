import React, { useState , useRef } from "react";
import './styles/App.scss';
import Song from "./Components/Song";
import Player from "./Components/Player";
import songList from "./data";
import Library from "./Components/Library";
import NavBar from "./Components/nav";

function App() {

  const audioRef = useRef(null);

  const [libVis, setLibVis] = useState(false);
  const [songs, setSongs] = useState(songList());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0
  })

  const timeChangeHandler = (e) =>{
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime:current , duration})
  }

  return (
    <div className="App">
      <NavBar libVis={libVis} setLibVis={setLibVis} />
      <Song currentSong={currentSong}/>
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef}  isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library libVis={libVis} setLibVis={setLibVis} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} songs={songs} />
      <audio onLoadedMetadata={timeChangeHandler} onTimeUpdate={timeChangeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
