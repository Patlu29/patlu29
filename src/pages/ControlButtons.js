import React from "react"; 
import "./ControlButtons.css"; 
export default function ControlButtons(props) { 
const StartButton = ( 
<div className="btn btn-one btn-start" 
onClick={props.handleStart}> 
<img src="https://icon-library.com/images/start-icon-png/start-icon-png-13.jpg" alt="start" className="startimg"/>
</div> 
); 
const ActiveButtons = ( 
<div className="btn-grp"> 
<div className="btn btn-two" 
onClick={props.handleReset}> 
<img src="http://clipart-library.com/new_gallery/214-2140034_computer-icons-reset-button-download-symbol-refresh-clipart.png" alt="Reset" className="resetimg" />
</div> 
<h1>--</h1>
<div className="btn btn-one" 
onClick={props.handlePauseResume}> 
{props.isPaused ? <img src="https://cdn2.iconfinder.com/data/icons/internet-33/65/29-512.png" alt="Resume" className="pauseresume"/> : <img src="http://www.pngall.com/wp-content/uploads/5/Pause-Button-PNG-Image.png" alt="Pause" className="pauseresume"/>} 
</div> 
</div> 
); 
return ( 
<div className="Control-Buttons"> 
<div>{props.active ? ActiveButtons : StartButton}</div> 
</div> 
); 
}