import React, { useEffect, useState } from "react";
import Preloader from "../../src/Component/Preloader";
import { useLocation } from "react-router-dom";
import { ApiGet } from "../helper/axios";

export default function ImagePage() {
  const location = useLocation();
  const { productId } = location.state || {};
  const [imageUrls, setImageUrls] = useState([]); // Updated to handle multiple images
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }

      try {
        const response = await ApiGet(`/admin/product-images/${productId}`);
        console.log("response", response);

        if (response?.data?.length > 0) {
          const urls = response.data.map((item) => item.file); // Extract image URLs
          setImageUrls(urls);
        } else {
          console.error("No images found for the product");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [productId]);

  console.log('imageUrls', imageUrls);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : imageUrls.length > 0 ? (
        <div className="flex flex-wrap justify-center  flex-col items-center w-full h-screen gap-4 p-4">
          {imageUrls.map((url, index) => (
            <div  
              key={index}
              className="relative w-[300px] flex flex-col h-[300px] overflow-hidden rounded-md shadow-md"
            >
              <img
                src={url}
                alt={`Product Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No images found for this product.</p>
      )}
    </>
  );
}
