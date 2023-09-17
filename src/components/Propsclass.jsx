import React, { Component } from "react";
export default class Propsclass extends Component{

   // update name on click
    // constructor(){
    //     super();
    //     this.state={
    //        name:"rims"
    //     }
    // }
    render(){
        return(
            <div>
                <h1>PROPS in class</h1>
                  <h1> {this.props.name}</h1>
                <h1> {this.props.Email}</h1>  
                {/* <button onClick={()=>this.setState({name:"choudhary"})}>update name</button> */}

            </div>
        )
    }
}