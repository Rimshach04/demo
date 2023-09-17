import React from "react";
export default function Click(){
    var data="rsha";
    function apple(){
        // var data="jbche" jb ye comemt khatm kray gy to alert mn ye value nazr ay gi
        alert(data);
        // alert("function called")
    }
    return(
      <div>
        <br />
        <br />
         <h1>{data}</h1> 
       <button onClick={apple}>Click me</button>
       </div>
    )
}