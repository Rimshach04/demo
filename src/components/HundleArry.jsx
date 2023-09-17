//we cannot use loops to print array because retune method not heandle it we use map functin
import React from "react";
import {Table} from 'react-bootstrap'
function HundleArry(){
    //const students=["sana", "fatima","iqra","sania" ];
    const students=[
        {name:"sana",phn:"xxx",Email:"sana.com", addres:[
            {hn:"a",city: 'hasilpur', country:'pakistan'},
            {hn:"a",city: 'hasilpur', country:'pakistan'},
            {hn:"a",city: 'hasilpur', country:'pakistan'}
        ]},
        {name:"fatima",phn:"yyy",Email:"fatima.com" , addres:[
            {hn:"a",city: 'hasilpur', country:'pakistan'},
            {hn:"a",city: 'hasilpur', country:'pakistan'},
            {hn:"a",city: 'hasilpur', country:'pakistan'}
    ]},
        {name:"iqra",phn:"aaa",Email:"iqra.com"},
        {name:"sania",phn:"zzz",Email:"sania.com"}
    ]
    return(
        <div>
      <h1>hundle arry with list</h1>
      <Table border={4}  align="center" striped variant="dark" >
      <tbody>
          <tr>
          <th>name </th>
          <th>phn </th>
          <th>Email</th>
          <th>Addres</th>
      </tr>
     
      {
         students.map((item,i)=>
        //  <h1>name is: {data} </h1>
       
        <tr key={i}>
        <td>{item.name}</td>
        <td> {item.phn}</td>
        <td>{item.Email}</td>  
       <td>
            {
                item.addres.map((data)=>
                <tr>
                    <td>{data.hn}</td>
                    <td>{data.city}</td>
                </tr>

                )
            }
        </td>
    </tr>
      
         )
      }
      </tbody>
       </Table>
        </div>
    )
}
export default HundleArry;