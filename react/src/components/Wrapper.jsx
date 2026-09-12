function Wrapper({children}){
    return(
        <div style={{color:"cyan", border:"5px solid cyan", width:"300px",margin:"10px"}}>
            {children}
        </div>
    )
}

export default Wrapper;