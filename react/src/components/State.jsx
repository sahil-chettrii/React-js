import { useState } from "react";
import Counter from "./Counter";



function State(){
    const[StudentName , setStudentName] = useState("Sahil with skills issue")
    const handleStudent = ()=>{
        setStudentName("Elon Musk")
    }

    return(
        <div>
       <h1>{StudentName}</h1>
       <button onClick={handleStudent}>Change student name</button>
       <Counter/>
        </div>
    )
}

export default State;