import React from "react";

const LibrarySong = ({id, setCurrentSong, song, audioRef, isPlaying, songs, setSongs}) =>{
    const selectSongHandler = async () =>{
        await setCurrentSong(song);

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
        if(isPlaying) audioRef.current.play();
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