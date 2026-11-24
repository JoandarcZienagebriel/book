import { useState, useEffect } from "react";
import axios from "axios";
export default function ServiceForm({value, onChange}) {

const[list, setList] = useState([]);
useEffect(()=>{
axios.
get('http://127.0.0.1:8000/api/')
.then((response)=>{
  setList(response.data);

})
.catch((error)=>{
console.error(error);
})
}, [])


  return (
  <div>
 
  <select id='service' value={value} className='px-[1rem] py-[1rem] bg-surface border border-2' onChange={(e)=>onChange(Number(e.target.value))}>
    <option value="">Select a service</option>

    {list.map((service)=>(
    <option key={service.id} value={service.id} className="text-base font-medium rounded-md
                 text-[#000] border border-red rounded-4
                  hover:bg-accent hover:border-accent hover:text-[#fff]" >
      {service.name}-{service.id}
    </option>
    ))}
  </select>
  </div>
  )
}


