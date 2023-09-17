import React,{useState} from "react";
function Ternary(){
   // const[login,setlogin]=useState(false) 
     const[login, setlogin]=useState(2)
    return(
        <div>
     
           {/* {login?<h1>wellcome</h1>:<h1>not wellcome</h1>} 
        */}
       
        {login==1?<h1>wellcome</h1>:login==2?<h1>not wellcome</h1>:<h1>nothing</h1>} 
      
        </div>
    )
}
export default Ternary;