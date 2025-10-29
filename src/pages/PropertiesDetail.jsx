import React,{useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera, FaHeart } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md';
const PropertiesDetail = ({properties}) => {
    const{id} =useParams();
    const property = properties.find((p)=>p.id === parseInt(id));

    // like state
    const[liked, setLiked] = useState(false);
    const[added, setAdded] = useState(false);

    if(!property){
        return(
            <div className='py-20 text-center'>
                <h1 className='text-2xl font-semibold text-red-500 '>Property not found</h1>
                <Link to="/"
                className='mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded-lg'>
                    Back to Home</Link>
            </div>
        );
    }

    const handleShare = ()=>{
        const shareData = {
            title:property.name,
            text:property.about,
            url: window.location.href,
        }
    if(navigator.share){
        navigator 
        .share(shareData)
        .then(()=>console.log("Shared Successfullly"))
        .catch((err)=>console.error("Shared failed:", err));
    }else{
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard");
    }
    };


    // like 
    const handleLike = () =>{
        setLiked(!liked)
    };

    // add data
    const handleAdd = ()=>{
        setAdded(true);
        alert("Property added to your saved list!");
    }


    const currentIndex = properties.findIndex((p)=>p.id === property.id);
  const prevProperty = currentIndex > 0 ? properties[currentIndex - 1] : null;
  const nextProperty =
  currentIndex < properties.length - 1 ? properties[currentIndex + 1] : null;

  return (
    <div className='lg:w-[80%] m-auto lg:px-20 px-6 py-20'>
        <div className='flex flex-col gap-6'>
            <img 
            src={property.images}
            alt={property.name}
            className='w-full h-[400px] object-cover rounded-xl'/>

            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold text-black dark:text-white'>
                    {property.name}
                </h1>
                <h2 className='text-2xl text-red-600 font-semibold'>{property.price}</h2>
                <p className='text-gray-700 dark:text-gray-300'>{property.about}</p>
            </div>

            <div className='flex flex-wrap gap-6 mt-4'>
                <div className='flex items-center gap-2'>
                    <FaBath className='text-red-500'/>
                    <span>{property.bath}Bathrooms</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaBed className='text-red-500'/>
                    <span>{property.bed}Bedrooms</span>
                </div>
                <div className='flex items-center gap-2'>
                    <MdSpaceDashboard className='text-red-500'/>
                    <span>{property.area}</span>
                </div>
                
                <div className='flex items-center gap-2'>
                    <FaUserCircle className='text-red-500'/>
                    <span>Owner: {property.owner}</span>
                </div>
            </div>



            

            {/* Action button  */}
            <div className='flex gap-4 mt-6'>
                <button
                onClick={handleLike}
                className={`p-3 border-2 rounded-full 
                    ${liked ?"bg-red-600 border-red-600":"border-gray-300"}`}>
                        <FaHeart className={`size-5 ${liked? "text-white":"text-red-400"}`}/>
                    </button>

                <button onClick={handleShare}
                className='p-3 border-2 border-gray-300 rounded-full hover:bg-black transition'>
                    <FaShareAlt className='size-5 text-red-400'/></button>   

                <button
                onClick={handleAdd}
                disabled={added}
                className={`p-3 border-2 rounded-full 
                    ${added ?"bg-green-500 border-green-500":"border-gray-300 hover:bg-black"} transition`}>
                      <FaPlus className='size-5 text-red-400'/></button>     
            </div>

        </div>

           <div className="w-full py-10 mt-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex justify-between items-center px-6">
            {prevProperty ? (
              <Link
                to={`/property/${prevProperty.id}`}
                className="px-6 py-3 bg-white dark:bg-gray-700 shadow-md rounded-lg text-red-600 font-semibold hover:bg-red-100
                 dark:hover:bg-gray-600"
              >
                 Previous
              </Link>
            ) : (
              <div></div>
            )}

            <Link
              to="/"
              className="px-6 py-3 bg-red-600 text-white shadow-md rounded-lg hover:bg-red-700"
            >
              All Properties
            </Link>

            {nextProperty ? (
              <Link
                to={`/property/${nextProperty.id}`}
                className="px-6 py-3 bg-white dark:bg-gray-700 shadow-md rounded-lg text-red-600 font-semibold hover:bg-red-100
                 dark:hover:bg-gray-600"
              >
                Next 
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>



    </div>
  )
}

export default PropertiesDetail