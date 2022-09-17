const ItemListContainer=(props)=>{
    return(
        <div style={{border:"solid black 4px", borderRadius:"1rem", width:"75%", height:"300px", margin:"auto", display:"flex", justifyContent:"start", alignItems:"start", fontSize:"3rem", padding:"2rem"}}>
            <p style={{padding:"1rem", backgroundColor:"black", color:"white", fontWeight:"bold", borderRadius:"1rem"}}>{props.greeting}</p>
        </div>
    )
}
export default ItemListContainer