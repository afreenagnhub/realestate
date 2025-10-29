import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import { useNavigate } from "react-router-dom";
import { property } from "../components/export";

const Hero = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  //  State for form fields
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  //  Extract unique values dynamically from property data
  const locations = [...new Set(property.map((p) => p.location))];
  const categories = [...new Set(property.map((p) => p.category))];
  const types = [...new Set(property.map((p) => p.type))];

  //  Handle search
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (selectedLocation) params.append("location", selectedLocation);
    if (selectedCategory) params.append("category", selectedCategory);
    if (selectedType) params.append("type", selectedType);

    navigate(`/properties?${params.toString()}`);
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* hero section */}
      <div className={`${darkMode === "dark" ? "bg-black" : "bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center 
          rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="fade-up"
            className="text-6xl font-semibold lg:pr-[500px] pr-0
            lg:leading-[70px] leading-[60px] 
            text-white dark:text-white"
          >
            Find your home in Jaipur
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl lg:pr-[500px] pr-0 text-white dark:text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Beatae delectus perferendis aperiam distinctio veritatis mollitia,
            veniam iusto recusandae cupiditate ducimus?
          </p>
        </section>
      </div>

      {/* ✅ Search Form Section */}
      <div
        className={`${
          darkMode === "dark" ? "bg-black" : "bg-transparent"
        } z-10`}
      >
        <div
          id="form"
          data-aos="zoom-in"
          data-aos-delay="300"
          className={`${
            darkMode === "dark" ? "bg-gray-800" : "bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 
          justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          {/* Location Dropdown */}
          <div className="w-full" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-black font-semibold dark:text-white">LOCATION</h1>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md rounded"
            >
              <option value="">Select Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="w-full" data-aos="fade-up" data-aos-delay="500">
            <h1 className="text-black font-semibold dark:text-white">CATEGORY</h1>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md rounded"
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="w-full" data-aos="fade-up" data-aos-delay="600">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md rounded"
            >
              <option value="">Select Type</option>
              {types.map((t, index) => (
                <option key={index} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full" data-aos="fade-up" data-aos-delay="700">
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer 
              transform hover:scale-110 transition-transform duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
