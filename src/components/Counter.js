import { useState } from "react";
import "./Counter.css";

function Counter(){
    console.log("rendered")

    //     Set, Setter
    const [number, setNumber] = useState(0);
    // whenever we want to update number we have to call setNumber
    function handleClick(e){
        e.stopPropagation();
        // number++;
        
        // it will update asynchronousluy like pela function chali jaay pachi  react decide kare state update krvanu 
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        setNumber(number=>number+1);

        // setTimeout(() => {
        //     // setNumber(number+1) //it will not print the multiple time based on your click
        //     setNumber(number=>number + 1); //it will  print the multiple time based on your click
        // }, 300);
        // This is just for demo purpose
        console.log(number)
    }
    
    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>ADD</button>
        </>
    )
}

export default Counter;