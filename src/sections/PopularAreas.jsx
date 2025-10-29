import React,{useEffect} from 'react'
import { DarkModeProvider,useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import area1 from '../assets/images/area1.jpg'
const PopularAreas = () => {
        useEffect(()=>{
            AOS.init({
                offset:200,
                duration:800,
                easing:'ease-in-sine',
                delay:100,
            });
        },[])
        const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <div className={`${darkMode === "dark" ? 'dark bg-black' : 'bg-white'}`}>
        <section className={`${darkMode === "dark" ? 'dark bg-gray-800' : 'bg-red-100'} 
        lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center 
      flex-col items-center lg:px-20 px-6 py-20 gap-20`}>
              <div id="top" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
                  <div>
                      <h1 data-aos="zoom-in" data-aos-delay="300" className='dark:text-white text-gray-800 font-semibold text-2xl'>Explore</h1>
                      <h1 data-aos="zoom-in" data-aos-delay="300" className='dark:text-white text-gray-800 font-semibold text-2xl'>Popular Areas</h1>
                  </div>
                  <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
                      <div data-aos='zoom-in' data-aos-delay="400" style={{ backgroundImage: `url(${area1})` }}
                          className='h-[400px] bg-cover bg-center rounded-xl'>
                      </div>
                      <div data-aos='zoom-in' data-aos-delay="400" style={{ backgroundImage: `url(${area1})` }}
                          className='h-[400px] bg-cover bg-center rounded-xl'>
                      </div>
                      <div data-aos='zoom-in' data-aos-delay="400" style={{ backgroundImage: `url(${area1})` }}
                          className='h-[400px] bg-cover bg-center rounded-xl'>
                      </div>
                  </div>
              </div>
              <div id="bottom">
                {/* data-aos="slide-up" */}
              </div>
      </section>
    </div>
  )
}

export default PopularAreas