import React, { Component } from "react";
class CDM extends Component{
    constructor(){
        super();
        console.log("constructor");
    }
    componentDidMount(){
        console.log("didmount")
    }
    render(){
        console.log("rendder")
        return(
            <div>
                <h1>jjjnjdjcdjcf</h1>
            </div>
        )
    }
}
export default CDM;