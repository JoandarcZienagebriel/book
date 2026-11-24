import { useEffect, useState } from "react";
import axios from "axios";
export default function Available(){
const [available, setAvailable]= useState([]);


useEffect(()=>{
axios.
get('http://127.0.0.1:8000/api/book/available')
.then((response)=>{
  setAvailable(response.data);

})
.catch((error)=>{
console.error(error);
})
}, [])
    return(
    <div>
       <ul>
        {available.map((item)=>(

    <li>{item.day}</li>


       ) )}
       </ul>
    </div>
    )
}