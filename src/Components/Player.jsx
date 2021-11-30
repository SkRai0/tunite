import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay , faAngleLeft , faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo}) => {

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

    return(
        <div className="player">
            <div className="time-controller">
                <p>{timeModifier(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" name="song-timing"/>
                <p>{timeModifier(songInfo.duration)}</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon name="prev" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={songPlayHandler} name="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon name="next" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default Player;