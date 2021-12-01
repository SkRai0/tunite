import React from "react";
import { activeSong } from "../utiil";

const LibrarySong = ({id, setCurrentSong, song, audioRef, isPlaying, songs, setSongs}) =>{
    const selectSongHandler = () =>{
        setCurrentSong(song);

        const newSong = songs.map((currSong) =>{
            if(currSong.id === id){
                return{
                    ...currSong,
                    active: true
                }
            }
            else
            {
                return{
                    ...currSong,
                    active: false
                }
            }
        })
        setSongs(newSong);

        activeSong(isPlaying, audioRef);
    }

    return(
        <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img alt={song.name} src={song.cover} />
            <div className="song-info">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;