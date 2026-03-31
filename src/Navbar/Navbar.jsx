import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import "./Navbar.css"

function Navbar() {

    const links = [
        {name : "Acceuil", path: "/"},
        {name : "Mes Projets", path: "/projects"},
        {name : "Mes Certifications", path: "/certifications"},
    ]

    const [idHoverLink, setIdHoverLink] = useState()
    const [idActiveLink, setIdActiveLink] = useState()

    function styleNavbarComp(id){
        return {
            width: `${100/links.length}%`, 
            left: `${100/links.length*id}%`
        }
    }

    useEffect(()=>{
        links.forEach((link,index) => {
            if(link.path.slice(1) == window.location.hash.slice(2)){
                setIdActiveLink(index)
                setIdHoverLink(index)
            }
        })
    },[])


    return ( 
        <>
            <div className="navbar-container">
                
                {idHoverLink != undefined && idActiveLink != undefined &&
                    <>
                        <div className="navbar-active" style={styleNavbarComp(idActiveLink)}></div>
                        <div className="navbar-hover" style={styleNavbarComp(idHoverLink)}></div>
                    </>  
                }

                {links.map((link, index) => (
                    <Link className="navbar-link" 
                    key={index} 
                    onMouseEnter={()=>{setIdHoverLink(index)}} 
                    onMouseLeave={()=>{setIdHoverLink(idActiveLink)}}
                    onClick={()=>{setIdActiveLink(index);}} 
                    to={link.path}>{link.name}</Link>
                    )
                )}

            </div>
        </> 
    );
}

export default Navbar;