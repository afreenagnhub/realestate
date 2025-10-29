import React,{useEffect} from 'react'
import { DarkModeProvider,useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { property as allProperties} from '../components/export'
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera, FaHeart } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom'
const Properties = ({propertyList}) => {
            useEffect(()=>{
                AOS.init({
                    offset:200,
                    duration:800,
                    easing:'ease-in-sine',
                    delay:100,
                });
            },[])
            const {darkMode} = useDarkMode();
            const properties = propertyList && propertyList.length > 0 ? propertyList : allProperties;
  return (
    <div className={`${darkMode === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <section id="property" 
      className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col justify-center items-start gap-4 '>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>PROPERTIES</h1>
          <h1 data-aos="zoom-in" className='text-black text-4xl font-semibold dark:text-white'>EXPLORE</h1>
        </div>
        <div id="grid-box" className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {
            properties.map((item, index)=>(
              <Link to={`/property/${item.id}`} key={index} className='block'>
              <div data-aos="zoom-in" data-aos-delay="200" key={index} 
              className='bg-white dark:bg-gray-800 rounded-xl w-full'>
                <div id="image-box"
                  className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end'
                  style={{ backgroundImage: `url(${item.images})` }}>
                  <div id='top' className='flex justify-between items-end w-full'>
                    <div>
                      <button className='text-red-600 hover:bg-white hover:text-black text-[13px]
                       bg-gray-200 rounded-xl p-3 text-bold'>Features</button>
                    </div>
                    <div className='flex justify-center items-end w-full gap-8'>
                      <button className='text-red-600 hover:bg-white hover:text-black text-[13px]
                       bg-gray-200 rounded-xl p-3 text-bold'>Sales</button>
                      <button className='text-red-600 hover:bg-white hover:text-black text-[13px]
                       bg-gray-200 rounded-xl p-3 text-bold'>Active</button>
                    </div>
                  </div>


                  <div id='bottom' className='flex justify-between items-end w-full'>
                    <div className='flex justify-center items-end gap-4'>
                      <FaMapMarkerAlt className='size-5 text-white' />
                      <h1 className='text-white'>{item.address}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                      <FaCamera className='size-5 text-white' />
                      <FaVideo className='size-5 text-white' />
                    </div>
                  </div>

                </div>


                <div className='px-6 py-3 justify-center items-start flex flex-col gap-2 w-full '>
                  <h1 className='text-xl text-black font-semibold dark:text-white'>{item.name}</h1>
                  <h1 className='text-xl text-black font-semibold dark:text-white'>{item.price}</h1>
                  <p className='dark:text-white'>{item.about}</p>
                  <div className='flex justify-center items-start gap-4 w-full'>
                    <div className='flex justify-center items-end gap-2'>
                      <FaBath className='text-red-600 size-5' />
                      <h1 className='dark:text-white'>{item.bath}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                      <FaBed className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.bed}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                      <MdSpaceDashboard className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.area}</h1>
                    </div>

                  </div>
                </div>

                <div className='w-full h-[1px] bg-gray-200 mt-8'></div>

                  <div id="owner-info" className='flex justify-between items-center w-full mt-2'>
                    <div className='flex justify-center items-center gap-2'>
                      <FaUserCircle className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.owner}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                      <div className='p-2 border-2 border-gray-200 hover:bg-black 
                      cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaShareAlt className='size-4 text-red-400' />
                      </div>
                      <div className='p-2 border-2 border-gray-200 hover:bg-black 
                      cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaHeart className='size-4 text-red-400' />
                      </div>
                      <div className='p-2 border-2 border-gray-200 hover:bg-black 
                      cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaPlus className='size-4 text-red-400' />
                      </div>
                    </div>
                  </div>
              </div>
              </Link>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Properties