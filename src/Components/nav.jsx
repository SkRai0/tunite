import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({libVis, setLibVis}) =>{
    return(
        <div className="nav">
            <h2>Tunite</h2>
            <button onClick={() => setLibVis(!libVis)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </div>
    )
}

export default NavBar;