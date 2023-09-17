import React, { Component } from "react";
class CDupdate extends Component{
    constructor(){
        super();
        console.log("constructor");
        this.state={
          //name:"rim"
          data:0
        }
    }
    componentDidUpdate(){
        console.log("didmountupdate")
    }
    render(){
        console.log("rendder")
        return(
            <div>
                {/* <h1>{this.state.name}</h1> */}
                <h1>{this.state.data}</h1>
                {/* <button onClick={()=>{this.setState({name:"ch"})}}>update</button> */}
                <button onClick={()=>{this.setState({data:this.state.data+1})}}>update</button>
            </div>
        )
    }
}
export default CDupdate;