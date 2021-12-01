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

  const songEndHandler = async() =>{
    let currentIndex = songs.findIndex((so) => so.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex+1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }

  return (
    <div className={`App ${libVis ? "library-active" : ""}`}>
      <NavBar libVis={libVis} setLibVis={setLibVis} />
      <Song currentSong={currentSong}/>
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef}  isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library libVis={libVis} setLibVis={setLibVis} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} songs={songs} />
      <audio onEnded={songEndHandler} onLoadedMetadata={timeChangeHandler} onTimeUpdate={timeChangeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
