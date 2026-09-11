function Call(){
    alert("function called")


    
const Fruit= (name)=>{
    alert(name)
}

    return (
        <div>
            <h1>Event and Function Call</h1>
            <button onClick={()=> Fruit("Apple")}>Apple</button>
                        <button onClick={()=> Fruit("orange")}>orange</button>

        </div>
    )
}


export default Call;