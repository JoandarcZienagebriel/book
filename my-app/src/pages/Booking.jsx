import { Link, useNavigate } from 'react-router-dom';
import ServiceForm from '../components/booking/service';
import TimeForm from '../components/booking/time';
import Username from '../components/username';
import Email from '../components/email';
import Description from '../components/text';
import Tel from '../components/tel';
import toast, { Toaster } from 'react-hot-toast';
import { MyDatePicker } from '../components/booking/date';
import { useState, useEffect } from 'react';
export default function Services() {
 const[service, setService] = useState('');
  const[date, setDate]= useState('');
  const[time, setTime]=useState('');
  const[bookedTime, setBookedTime]= useState([])
  const [username, setUsername]=useState();
  const[email, setEmail]=useState();
  const[address, setAddress]=useState();
  const[phone, setPhone]= useState();
  const[key, setkey]=useState();
  const navigate= useNavigate()
const API_URL = import.meta.env.VITE_API_URL;
useEffect(() => {
    if (!service || !date) {
      setBookedTime([]);
      return;
    }

    const getBookedTimes = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/booked-times/?service=${service}&date=${date}`
        );

        const data = await response.json();

        if (response.ok) {
          setBookedTime(data);
        } else {
          console.log("Error:", data);
        }

      } catch (error) {
        console.log("Error fetching booked times:", error);
      }
    };

    getBookedTimes();
  }, [service, date]);



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // CHECK WHAT YOU HAVE
    console.log("SERVICE:", service);
    console.log("DATE:", date);
    console.log("TIME:", time);
const formattedDate = date.toISOString().split("T")[0];
    const [response, response1] = await Promise.all([
      fetch(`${API_URL}/api/book/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          service: service,
          date: formattedDate,
          time: time,
        }),
      }),

      fetch(`${API_URL}/api/info/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          address: address,
          phone: phone,
        }),
      }),
    ], []);

    if (!response.ok || !response1.ok) {
    toast.error("This time slot is unavailable. Please select another time.");
    return;
    }

    const data = await response.json();
    const data1 = await response1.json();

    console.log("First response:", data);
    console.log("Second response:", data1);

    // Clear form fields after successful submission
    setService("");
    setDate("");
    setTime("");
    const uniqueId=data.id;
      navigate(`/ordersuccess/${uniqueId}`);

  } catch (error) {
    console.error("Submission failed:", error);
  }
};

  return (
         <div className='h-[94rem] lg:h-[50rem] lg:mb-[8rem]'>
         <h2 className="font-heading text-3xl text-center mt-[4rem] md:text-4xl font-semibold text-[#000] m-[2rem]">
      Book An Appointment
          </h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
       
            <Toaster position='top-right'/>
          {/* Form */}
          <form className="flex flex-col items-center mx-auto space-y-4">
            <h2 className="uppercase tracking-wider font-medium border-b border-platinum pb-3 mb-1">
              Delivery Information
            </h2>
            <ul className='flex flex-col gap-4 w-[15rem]'>
              <li>  Username:  <Username value={username} onChange={setUsername} /></li>
              <li>  Email:  <Email value={email} onChange={setEmail}/></li>
              <li>Phone: <Description value={phone} onChange={setPhone} /></li>
           <li > Address: <Tel value={address} onChange={setAddress}/>
    </li>
            </ul>
          </form>

    <form className='flex flex-col space-betweeen h-[36rem] items-center'>
      <h2 className="uppercase tracking-wider font-medium border-b border-platinum pb-3 mb-3">
              Delivery Information
            </h2>
      <ServiceForm value={service} onChange={setService}/>
      <TimeForm value={time} onChange={setTime} bookedTime={bookedTime}/>
      

      <button  className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-3 mt-4 text-[.9rem] hover:-translate-y-1 transition-all duration-300"
        type='submit' onClick={handleSubmit} disabled={!service || !date || !time}>Book</button>

      </form>
      <form className='flex flex-col space-betweeen h-[36rem] items-center'>
<MyDatePicker selected={date} onSelect={setDate}/>

      </form>

      </div>
         </div>
      )}