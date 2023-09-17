// wht is state 
// states is a object which is use for store the data like veriable
// why we note use veriable instead of state
// vwhen we use veriable our components not update when we use state it update the component
import { useState } from "react";

function Statefunction(){
    const[data,setdata]=useState("rimsha")
  function updata(){
    setdata("choudhary")
  }
    return(
        <div>
           <h1>state in function</h1>
           <h1>{data}</h1>
           <button onClick={updata}>upDate</button>
        </div>
    )
      
    
}
export default Statefunction;