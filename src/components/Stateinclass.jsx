import React, { Component } from "react";
class Stateinclass extends Component{
//     constructor(){
//         super();
//         this.state={
//             data:"rimsha"
//         }
//     }
//    render(){
//     return(
//         <div>
//             <h1>{this.state.data}</h1>
//         </div>
//     )
//    }

//    update

constructor(){
    super();
    this.state={
        data:0
    }
}

 up(){
    this.setState({data:this.state.data+1})
}
render(){
    return(
        <div>
            <h1>state in class </h1>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.up()}>update</button>
        </div>
    )
}
}
export default Stateinclass;