import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import React from "react";
export default function HideAndShow(){
    const[data,setdata]=React.useState(false)
    return(
        <div>{
                data?
                <h1>hello word</h1>
                :null
                }
           <button onClick={()=>setdata(true)}>show</button>
        <button onClick={()=>setdata(false)}>hide</button>
        </div>
    )
}