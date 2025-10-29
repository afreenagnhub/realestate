import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { service } from '../components/export'
import { FaCheckCircle } from 'react-icons/fa'
const ServiceDetail = () => {
    const{id} = useParams();
    const serviceData = service[id - 1];

    if(!serviceData){
        return(
            <div className='flex flex-col justify-center h-screen'>
                <h1 className='text-3xl font-bold text-red-600'>Services Not Found</h1>
                <Link to="/services"
                className='mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700'>Back to services</Link>
            </div>
        )
    }
  return (
    <div className='w-full'>
        {/* Hero section */}
        <div className='relative w-full h-[300px] bg-gradient-to-r from-red-600 to-red-400 
        flex flex-col justify-center items-center text-white'>
            <h1 className='text-4xl lg:text-5xl font-bold'>{serviceData.title}</h1>
            <p className='mt-2 text-lg opacity-90'>{serviceData.desc}</p>
        </div>


        {/* Main Content */}

        <div className='max-w-6xl mx-auto px-6 lg:px-20 py-16'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
                {/* left */}
                <div>
                    <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white'>
                        About the services</h2>
                    <p className='text-lg text-gray-600 dark:text-fray-300 leading-relaxed mb-6'>
                        Our<span className='font-semibold text-red-600 dark:text-gray-300 '>{serviceData.title}</span>
                        services is designed to provide Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tenetur.
                    </p> 
                                    <ul className='space-y-4'>
                    <li className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                        <FaCheckCircle className='text-red-600'/>High quality services deliver
                    </li>
                                        <li className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                        <FaCheckCircle className='text-red-600'/>High quality services deliver
                    </li>
                                        <li className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                        <FaCheckCircle className='text-red-600'/>High quality services deliver
                    </li>
                                        <li className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                        <FaCheckCircle className='text-red-600'/>High quality services deliver
                    </li>
                </ul>   
                </div>

                {/* right */}
                <div className='flex justify-center items-center'>
                    <div className='bg-red-100 rounded-2xl p-12 shado-lg'>
                        <serviceData.icon className='text-red-600 size-32'/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ServiceDetail