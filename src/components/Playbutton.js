import { useState } from "react";

function Playbutton({message,children,onPlay,onPause}){
    // let playing = false; //dont use this approch we will learn state and hooks for that
    
    let [playings, setPlaying] = useState(false);
    function play(e){
    // console.log(e);

    
    e.stopPropagation(); //THat will prevent the Event Bubbling
    if(playings) onPause(); 
    else onPlay();

    setPlaying(!playings);
    }

    return(
        <button onClick={play}>{children}:{playings?'▶️' : '⏯️' }</button>
    )
}

export default Playbutton;