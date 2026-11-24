import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import ServiceForm from '../components/booking/service';
import TimeForm from '../components/booking/time';
import DateForm from '../components/booking/date';
import { useState } from 'react';
export default function Services() {
 const[service, setService] = useState('');
  const[date, setDate]= useState('');
  const[time, setTime]=useState('');
  const handleSubmit = async(e)=> {
    e.preventDefault();
      // CHECK WHAT YOU HAVE
    console.log("SERVICE:", service); 
    console.log("DATE:", date);
    console.log("TIME:", time);
    const response = await fetch("http://127.0.0.1:8000/api/book/", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        service:service,
        date: date,
        time: time,
     } ),
      });
      const data = await response.json();
if(response.ok){
  setService('');
  setDate('');
  setTime('');
}
  else{
    console.log('something went wrong', data);
  }
}
  return (
    <div>
       <section className="py-4 pt-24 left-0 right-0 md:pt-16 bg-header md:mt-[-1rem]">
              
              <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                 
                  <h1 className ="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#fff] mb-4">
                    WHAT WE OFFER
                  </h1>
                   <div className="inline-flex flex-col items-center justify-center mx-auto mt-2">
<Link
          to="/booking"
          className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-3 text-[.9rem] hover:-translate-y-1 transition-all duration-300"
        >
          Book Appointment
        </Link>
         <p className='flex justify-center items-center gap-2 py-2 text-[.8rem]'>
          or 
          <a
          href="tel:09336495034"
          className="flex items-center gap-2 md:text-sm xl:text-[1rem] font-medium transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
        +251 936495034
        </a>
        </p>
                               </div>
                </motion.div>
              </div>
            </section>
    <form onSubmit={handleSubmit}>
      <ServiceForm value={service} onChange={setService}/>
      <TimeForm value={time} onChange={setTime}/>
      <DateForm value={date} onChange={setDate}/>
      <button type='submit' disabled={!service || !date || !time}>Book</button>
      </form>
      </div>
      )}