import React,{useEffect} from 'react'
import { service } from '../components/export'
import { DarkModeProvider,useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
const Services = () => {
                useEffect(()=>{
                    AOS.init({
                        offset:200,
                        duration:800,
                        easing:'ease-in-sine',
                        delay:100,
                    });
                },[])
                const {darkMode} = useDarkMode();
  return (
    <div className={`${darkMode === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <section className={`${darkMode === "dark" ? "bg-gray-800" : "bg-red-300"} 
        w-full lg:w-[95%] m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}>
            <div className='flex flex-col justify-center items-start gap-4'>
                <h1 data-aos="zoom-in" className='dark:text-white text-black'>OUR SERVICES</h1>
                <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Top real Estate
                    <br/>services available
                </h1>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
                {
                    service.map((item , index)=>(
                        <Link to={`/service/${index +1}`} key={index} data-aos="zoom-in">
                        <div data-aos="fade-up" data-aos-delay="200" 
                        className='bg-white dark:bg-white h-[350px] px-8 py-16 flex flex-col 
              justify-center items-start gap-4 rounded-xl border-b-[5px]
               border-red-600 hover:bg-red-300 hover:text-white cursor-pointer' key={index}>
                <div className='p-6 rounded-full bg-red-200'>
                    <item.icon className='text-red-600 size-10 transform
                   hover:scale-110 transition-transform duration-300 cursor-pointer'/>
                </div>
                <h1 className='text-black text-[22px] font-semibold dark:text-black'>{item.title}</h1>
                <p className='text-lg text-slate-700 dark:text-black'>{item.desc}</p>
                {/* <button className='border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-black'>READ MORE</button>
                 */}
                 <Link to={`/services/${item.id}`}
                 className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-black">READ MORE</Link>
               </div>
               </Link>
                    ))
                    
                }
            </div>
        </section>
    </div>
  )
}

export default Services