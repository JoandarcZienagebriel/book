
import { Link } from 'react-router-dom';
export default function Cancel(){

return (

<div className="min-h-screen flex flex-col items-center justify-center">



<h1 className="text-4xl font-bold">Booking deleted successfully.
</h1>
<Link to='/booking' className="border border-surface rounded-[6rem] bg-accent text-[#000] px-6 py-2.5 md:px-4 py-3 lg:px-6 py-3 md:text-sm xl:text-[1rem] font-medium hover:bg-primary hover:text-[#fff] hover:rounded-3xl transition-colors">
Back to Booking</Link>





</div>

);

}