import React,{useState} from "react";
function  Try(){
    const[data, setdata]=useState(null)
    const[print,setprint]=useState(false)
     function getdata(val){
     console.warn(val.target.value)
         setdata(val.target.value)
    }
    return(
        <div>
            <br /><br /><br />
            {
                print?<h1>{data}</h1>:null
            }
        {/* <h1>{data}</h1> */}
       <h1> name:  <input type="text" onChange={getdata} /> </h1> 
      <button onClick={()=>setprint(true)}>print</button>
        </div>
    )
}
export default Try;