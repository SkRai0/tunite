import React from "react";
import LibrarySong from "./LibrarySongs";


const Library = ({libVis, setLibVis, setCurrentSong, songs, audioRef, isPlaying, setSongs}) =>{
    return(
        <div className={`library ${libVis ? 'visible' : ''}`}>
            <h2>Library</h2>
                <div className="library-songs">
                    {songs.map((song) => (
                        <LibrarySong id = {song.id} songs={songs} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} key = {song.id} setCurrentSong={setCurrentSong}  song = {song} />
                    ))}
                </div>
        </div>
    )
}

export default Library