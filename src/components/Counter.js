import React , {useState , useEffect}from "react";

function Counter(){
    const initialValue = 0;
    const [value , setValue] = useState(initialValue)
    useEffect(()=>{
        // document.title= value
    })

    return(
        <div>
            <button type="button" className="btn mx-2 my-2 btn-primary" onClick={()=>setValue(value + 1)}>Count {value}</button>
            <button  className="btn mx-2 my-2 btn-primary" onClick={()=>setValue(initialValue)}>Reset</button>
            <button className="btn  mx-2 my-2 btn-primary" onClick={()=>setValue(value - 1)}>Decrement</button>
        </div>
    )
}
export default Counter