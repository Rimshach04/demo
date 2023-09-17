import React,{useState} from "react";
function Form(){
    const[user, setuser]=useState("");
     function getFormData(e){      //this function is use for prevent the form reload
       e.preventDefult()
    }
    function handle(e){
        let item=e.target.value;
       if(item.length<3){
        console.log("invalid");
       }
             console.log(e.target.value.length)
    }
    return(
        <div>
            <br />
            <br />
            <form  onSubmit={getFormData}>
            name: 
         < input type="text"  placeholder="enter name"  onChange={handle}/>
         <br />
         <br />
         <select >
         <option >SELECT NAME</option>
         <option >USE</option>
         <option >PAK</option>
         </select>
         <br />
         <br />
         <input type="checkbox" />
         <br />
         <br />
       <button type="submit">submit</button>
       <br /><br />
       <button type="clear">clear</button>
       </form>
        </div>
       
    )
  
}
export default Form;