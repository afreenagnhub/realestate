import React,{useEffect} from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from "aos";
import "aos/dist/aos.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const ContactDetail = () => {
    const {darkMode} = useDarkMode();
    useEffect(()=>{
        AOS.init({
            offset:200,
            duration:800,
            easing: "ease-in-sine",
            delay: 100,
            once: true,
        });
    },[])
  return (
    <div className={`${darkMode === "dark" ? "bg-black text-white" : "bg-gray-50 text-black"}
    min-h-screen`}>
        {/* Hero section */}
        <section className='w-full h-[300px] bg-red-600 flex justify-center items-center text-center'>
            <h1 className='text-4xl font-bold text-white'>Contact Us</h1>
        </section>
        {/* Contact form */}
        <section id="contact" 
        className={`${darkMode === "dark" ? "bg-gray-800" : "bg-red-100"}
        lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1
        justify-center items-center lg:px-20 px-6 py-20 gap-10 mt-10`}>
            <div
            data-aos="zoom-in"
            className='bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>
                <h1 className='text-2xl text-black font-semibold dark:text-white'>Send Us A Message</h1>
                <input 
                type="text" 
                placeholder='Enter your full name'
                className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl dark:text-white'/>
                <input 
                type="email" 
                placeholder='Enter your email'
                className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl dark:text-white'/>
                <input 
                type="number" 
                placeholder='Enter your phone number'
                className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl dark:text-white'/>
                <textarea 
                cols="30" rows="5" placeholder='Enter your message....'
                className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl dark:text-white'></textarea>
                <button className='bg-red-600 w-full text-md px-8 py-3 text-white font-semibold 
                rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer dark:text-white'>SEND EMAIL</button>
            </div>
            {/* Details */}
            <div className='flex flex-col justify-center items-start gap-8 lg:p-10 p-6'>
                <h1 data-aos="zoom-in" data-aos-delay="200" className='text-red-500 dark:text-white'>Reach Us</h1>
                <h2 data-aos="zoom-in" data-aos-delay="400" className='text-black text-[32px] font-semibold leading-10 dark:text-white'>We're here to help</h2>
                <p data-aos="zoom-in" data-aos-delay="600" className="text-lg text-gray-600 text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam blanditiis, ad ex fuga perspiciatis?</p>
            </div>

            <div className='flex flex-col gap-4 text-lg'>
                <p>
                    <FaMapMarkerAlt className='text-red-600 dark:text-white text-xl'/>
                    <span className='font-semibold'>
                      Address.................... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, molestias!
                    </span>
                </p>
            </div>
        </section>
        {/* Map */}
        <section className='w-[95%] mx-auto mt-10 rounded-xl overflow-hidden'>
            <iframe 
            title="Goggle Map"
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d56935.68922563445!2d75.7447243!3d26.8882392!3m2!1i1024!2i768!4f13.1!2m1!1sbrown%20sugar%20bakery%20jaipur!5e0!3m2!1sen!2sin!4v1759122923992!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading='lazy'></iframe>
        </section>
    </div>
  )
}

export default ContactDetail