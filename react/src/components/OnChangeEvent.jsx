import { useState } from "react";

function OnChangEvent(){
    const[val ,setVal]=useState("Sahil Chettri")
    return(
        <div>
            <h1>Get a input field</h1>
            <input type="text"value={val} onChange={(event)=>setVal(event.target.value)}placeholder="Enter your username..." />
            <h1>{val}</h1>
            <button onClick={()=>setVal("")}>Clear value</button>
        </div>
    )
}

export default OnChangEvent;