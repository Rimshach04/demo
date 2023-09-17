import React, { Component } from "react";
class Shouldcdm extends Component{
    constructor(){
        super();
        console.log("constructor");
        this.state={
          //name:"rim"
          data:0
        }
    }
    shouldComponentUpdate(){
        console.log(this.state.data)
        if(this.state.data>5 && this.state.data<10){
            return true;
        }
    }
    render(){
      
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
export default Shouldcdm;