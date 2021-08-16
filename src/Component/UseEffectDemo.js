import React, { useEffect, useState } from "react";
import App from "../App";
 
function UseEffectDemo() {
    const[count,setCount]=useState(0);
    const[compName,setCompName]=useState("Capgemini");
    const[X,setX]=useState(0);
    const[Y,setY]=useState(0);
    useEffect(()=>{
        console.log("useeffect call from demo"/*+props.fn*/);
        document.title=`You Clicked Me ${count} times`
        window.addEventListener("mousemove",logMousePositon)
        return ()=>{
            console.log("this is component clean code at the time");
            window.removeEventListener("mousemove",logMousePositon)
        }
    },[count]);

    const logMousePositon=(event)=>{
        console.log("move event triggered");
        setX(event.clientX)
        setY(event.clientY)
    }
    return (
    <div>
        CompName:<input type="text" value={compName}
        onChange={(event)=>setCompName(event.target.value)}/><br/>
        <button onClick={()=>{setCount(count+1)}}>Button Clicked {count} Times</button>
        <hr/>
        Hooks -x:{X} -Y:{Y} </div>
        );
}
export default UseEffectDemo;