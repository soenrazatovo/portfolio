import { useState, useContext } from "react";
import { Link } from "react-router";
import "./Header.css"

import Navbar from "../Navbar/Navbar.jsx"
import ToggleButton from "../ToggleButton/ToggleButton.jsx";

import { PageContext } from '../Context/PageContext.jsx';


function Header() {
    const { currentPath, setCurrentPath } = useContext(PageContext)
    
    return ( 
        <header>
            <Link className="navbar-link" onClick={()=>{setCurrentPath("/")}} to={"/"}>
                <h2>RAZATOVO Soen</h2>
            </Link>
            <Navbar/>
            <ToggleButton onClick={()=>{console.log("Hello World !")}}/>
        </header>
     );
}

export default Header;