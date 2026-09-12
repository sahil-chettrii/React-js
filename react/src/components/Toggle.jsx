import { useState } from 'react'
 

  const Toggle = () => {
    const[display , setDisplay]=useState(false)
  return (
    <div>
        <h1>Toggle in React</h1>
              <button onClick={()=> setDisplay(!display)}>Toggle</button>


      {
        display?<h1>Sahil Chettri</h1>:null
      }
    </div>
  )
}

export default Toggle