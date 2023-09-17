 //state are the object is use to store data in function states are use by hooks
import { useState } from "react";
export default function Stateinfun(){
    //const[data,setdata]=useState(0)           //  for intiger
    const[data,setdata]=useState("rim")             //for string
    function update(){
       // setdata(data+1)
        setdata("ch")
    }
    return(
        <div>
           <h1>{data}</h1>
           <button onClick={update}>update</button>
        </div>
    )
}