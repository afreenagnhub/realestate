import React, {useEffect} from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import aboutimg from '../assets/images/about.jpg'
// import bannerimg from '../assets/images/banner1.jpg'
import AOS from "aos"
import 'aos/dist/aos.css'
import { coreValues } from '../components/export'
import { Link } from 'react-router-dom'
const Aboutp = () => {
            useEffect(() => {
                AOS.init({
                    offset: 200,
                    duration: 800,
                    easing: 'ease-in-sine',
                    delay: 100,
                });
            }, [])
            const {darkMode} = useDarkMode()
  return (
    <div className={`${darkMode === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <section className='relative w-full h-[400px] flex justify-center items-center' 
        style={{
            backgroundImage:`url(${aboutimg})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
        }}>
            {/* text on banner */}
            <div className='relative z-10 text-center px-6'>
                <h1 className='text-4xl lg:text-6xl font-bold uppercase text-white drop-shadow-lg'>
                    About Us
                </h1>
                <p className='mt-4 text-lg font-medium text-gray-300 drop-shadow-md'>
                    Get to know who we are & what we do 
                </p>
            </div>
        </section>

        <section className='w-full m-auto lg:px-40 px-8 py-20 grid lg:grid-cols-2 grid-cols-1 gap-12'>
              <div>
                  <img src={aboutimg}
                      alt="aboutimg" 
                      className='rounded-2xl lg:w-[500px] lg:h-[600px] object-cover shadow-xl'
                  />
              </div>
              <div className='flex flex-col justify-center gap-6'>
                  <h2
                      data-aos="fade-up"
                      className="text-lg font-bold uppercase text-red-600"
                  >
                      Who We Are
                  </h2>

                  <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="text-3xl lg:text-4xl font-semibold leading-[45px]"
                  >
                      Building Dreams, Creating Homes for a Better Tomorrow
                  </h1>

                  <p
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="text-lg text-gray-600 dark:text-gray-300 text-justify"
                  >
                      At <span className="font-bold">Our Real Estate Hub</span>, we do more
                      than sell properties—we help you discover a space where life truly
                      happens. With years of expertise and strong partnerships, we bring
                      you modern designs, prime locations, and quality living.
                  </p>

                  <p
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="text-lg text-gray-600 dark:text-gray-300 text-justify"
                  >
                      Our focus is on trust, transparency, and customer satisfaction.
                      Whether it’s buying your dream home, investing smartly, or selling
                      with confidence—we’re here at every step.
                  </p>
              </div>
        </section>
          <section className="w-full lg:px-40 px-8 py-20">
              <h2
                  data-aos="zoom-in"
                  className="text-3xl font-bold text-center mb-12 uppercase"
              >
                  Our Core Values
              </h2>

              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                  {coreValues.map((value, idx) => (
                      <div
                          key={idx}
                          data-aos="fade-up"
                          data-aos-delay="200"
                          className="p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300"
                      >
                          <h3 className="text-xl font-bold mb-2 text-red-600">
                              {value.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
                      </div>
                  ))}
              </div>
          </section>

                {/* Call To Action */}
      <section className="w-full py-16 flex flex-col justify-center items-center text-center bg-red-600 text-white">
        <h2 data-aos="zoom-in" className="text-3xl font-bold mb-4">
          Ready to Find Your Dream Home?
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mb-6 text-lg max-w-2xl"
        >
          Whether you're buying, selling, or investing, we’re here to make the
          process simple, transparent, and rewarding.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition"
        >
         <Link to="/contact">Contact Us</Link> 
        </button>
      </section>
          </div>
  )
}

export default Aboutp