import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay , faAngleLeft , faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"

const Player = ({setSongs, setCurrentSong, songs, currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo}) => {

    useEffect(() => {
        const newSong = songs.map((currSong) =>{
            if(currSong.id === currentSong.id){
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong])

    const songPlayHandler = () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const timeModifier = (time) =>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    const dragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime : e.target.value})
    }

    const skipHandler = async (direction) =>{
        let currentIndex = songs.findIndex((so) => so.id === currentSong.id);
        if(direction === "next")
        {
            await setCurrentSong(songs[(currentIndex+1) % songs.length]);
        }
        if(direction === "prev")
        {
            if(((currentIndex-1) % songs.length) === -1)
            {
                await setCurrentSong(songs[songs.length - 1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex-1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
    }

    return(
        <div className="player">
            <div className="time-controller">
                <p>{timeModifier(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" name="song-timing"/>
                <p>{timeModifier(songInfo.duration || 0)}</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon onClick={() => skipHandler("prev")} name="prev" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={songPlayHandler} name="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipHandler("next")} name="next" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default Player;