import React from "react";
function ClickEvent(){
    const here=()=>{
      alert("i am here");
    }
    return(
        <>
        <h1 onClick={here}>click here</h1>
        </>
    )
}
export default ClickEvent;