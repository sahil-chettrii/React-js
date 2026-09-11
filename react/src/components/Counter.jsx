import { useState } from "react";

const Counter = ()=> {
  const[update, setupdate]=useState(0)
  const[rupdate , setrupdate] = useState(10)
    return(
        <div>
            <h1>Counter:{update}</h1>
            <h2>r counter : {rupdate}</h2>
            <button onClick={()=>setupdate(update + 1)}>Update Counter</button>
                        <button onClick={()=> setrupdate(rupdate - 1)}> Reverse Counter</button>

        </div>
    )
} 

export default Counter;