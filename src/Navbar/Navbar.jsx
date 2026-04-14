import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';

import { PageContext } from '../Context/PageContext.jsx';

import "./Navbar.css"

function Navbar() {
    const { currentPath, setCurrentPath } = useContext(PageContext)
    const [ hoverPath, setHoverPath ] = useState(currentPath)

    useEffect(()=>{
        setHoverPath(currentPath)
    },[currentPath])

    console.log(currentPath)
    
    const pages = {
        "/": "Acceuil",
        "/projects": "Mes Projets",
        "/certifications": "Mes Certifications"
    }
    

    function styleNavbarComp(path){
        return {
            width: `${100/Object.keys(pages).length}%`, 
            left: `${100/Object.keys(pages).length*Object.keys(pages).indexOf(path)}%`
        }
    }

    return ( 
        <>
            <div className="navbar-container">
                
                <>
                    <div className="navbar-active" style={styleNavbarComp(currentPath)}></div>
                    <div className="navbar-hover" style={styleNavbarComp(hoverPath)}></div>
                </>  
                
                {Object.entries(pages).map(([path, name], index) => (
                    <Link className="navbar-link" 
                    key={index} 
                    onMouseEnter={()=>{setHoverPath(path)}} 
                    onMouseLeave={()=>{setHoverPath(currentPath)}}
                    onClick={()=>{setCurrentPath(path)}} 
                    to={path}>{name}</Link>
                    )
                )}

            </div>
        </> 
    );
}

export default Navbar;