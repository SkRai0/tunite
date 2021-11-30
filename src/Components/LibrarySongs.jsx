import React from "react";

const LibrarySong = ({setCurrentSong, song, audioRef, isPlaying}) =>{
    const selectSongHandler = () =>{
        setCurrentSong(song);
        if(isPlaying)
        {
            console.log("Yes Playing");
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined)
            {
                console.log("I am in");
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }

    return(
        <div onClick={selectSongHandler} className="library-song">
            <img alt={song.name} src={song.cover} />
            <div className="song-info">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;