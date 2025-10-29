import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Properties from "../sections/Properties";
import { property } from "../components/export";

const PropertyList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const locationFilter = searchParams.get("location")?.toLowerCase() || "";
  const categoryFilter = searchParams.get("category") || "";
  const typeFilter = searchParams.get("type") || "";

  // ✅ 1. Filter properties based on URL query params
  const filteredProperties = property.filter((p) => {
    const matchesLocation = locationFilter
      ? p.address?.toLowerCase().includes(locationFilter)
      : true;

    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    const matchesType = typeFilter ? p.type === typeFilter : true;

    return matchesLocation && matchesCategory && matchesType;
  });

  // ✅ 2. Pagination logic on the filtered result
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="py-20 lg:w-[95%] m-auto px-6">
      <h1 className="text-3xl font-bold text-center mb-10">All Properties</h1>

      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No properties found. Try changing filters.
        </p>
      ) : (
        <>
          {/* ✅ Paginated & Filtered Properties */}
          <Properties propertyList={currentProperties} />

          {/* ✅ Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Previous
              </button>

              <span className="font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyList;
