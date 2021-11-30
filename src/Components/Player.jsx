import React, {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay , faAngleLeft , faAngleRight} from "@fortawesome/free-solid-svg-icons"

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null);

    const songPlayHandler = () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    return(
        <div className="player">
            <div className="time-controller">
                <p>Start Time</p>
                <input type="range" name="song-timing"/>
                <p>End Time</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon name="prev" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={songPlayHandler} name="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon name="next" size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;