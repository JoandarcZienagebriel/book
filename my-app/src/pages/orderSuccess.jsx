import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess(){
   const[appointment, setAppointment] = useState(null);
   const navigate=useNavigate()
const {pk}= useParams();
const API_URL = import.meta.env.VITE_API_URL;
useEffect(()=>{
         axios.get(`${API_URL}/api/book/${pk}`)
         .then((response)=>{
          console.log('data received:', response.data)
          setAppointment(response.data)
         })
        

    .catch((error)=>{
    console.error(error);
})
}, [pk])


const deleteBooking = async () => {
  try {
    await axios.delete(
      `${API_URL}/api/book/${pk}/`
    );
    navigate('/cancel')
  } catch (error) {
    console.error(error);
  }
};

return (

<div className="min-h-screen flex items-center justify-center">

<div className="text-center">

<h1 className="text-4xl font-bold">Booked Successfully 🎉
</h1>


{appointment &&(<ul className="flex flex-col">
    <li>Service:{appointment.service_name}</li>
    <li>Date: {appointment.date}</li>
    <li>Time: {appointment.time}</li>
</ul>)}
<button onClick={deleteBooking} className="border border-surface rounded-[6rem] bg-accent text-[#000] px-6 py-2.5 md:px-4 py-3 lg:px-6 py-3 md:text-sm xl:text-[1rem] font-medium hover:bg-primary hover:text-[#fff] hover:rounded-3xl transition-colors">Cancel Booking</button>




</div>

</div>

);

}