import { useState } from "react";
import { Link } from "react-router";
import "./Header.css"

import Navbar from "../Navbar/Navbar.jsx"
import ToggleButton from "../ToggleButton/ToggleButton.jsx";


function Header() {
    const [currentPage, setCurrentPage] = useState()

    return ( 
        <header>
            <h2>RAZATOVO Soen</h2>
            <Navbar/>
            <ToggleButton onClick={()=>{console.log("Hello World !")}}/>
        </header>
     );
}

export default Header;