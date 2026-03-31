import { useState } from "react";
import "./ToggleButton.css"

function ToggleButton({onClick}) {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        onClick && onClick()
        setActive(!active)
    }

    return ( 
        <>
            <button className="toggle-container" onClick={handleClick}>
                <div style={{left: active ? "50%" : "0px"}} className="toggle-circle"></div>
            </button>
        </> 
    );
}

export default ToggleButton;