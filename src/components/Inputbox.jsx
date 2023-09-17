import React ,{useState}from "react";
function Inputbox(){
    const [data,setData]=useState()
    // const [print,setprint]=useState(false)
    function getData(val){
        console.log(val.target.value)
        setData(val.target.value)
    }
    return(
        <div className="app">
   {/* { 
             print?
      <h1>{data}</h1>
     :null
    } */}
    <h1>{data}</h1>
           <input type="text" onChange={getData}></input> 
            {/* // <button onClick={()=>setprint(true)}> printdata</button> */}
        </div>
    )
}
export default Inputbox;