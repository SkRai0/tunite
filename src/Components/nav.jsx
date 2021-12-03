import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import logo from './Tunite-Logo.png';

const NavBar = ({libVis, setLibVis}) =>{
    return(
        <div className="nav">
            <div className="logo-brand">
                <img className="logo" src={logo} alt="" srcset="" />
                <h2>Tunite</h2>
            </div>
            <button onClick={() => setLibVis(!libVis)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </div>
    )
}

export default NavBar;