import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";
import { useState } from "react";

const ProductDetailsCarousel = ({ images }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
       {loading ? (
        <div style={{ height: "300px", backgroundColor: "#f0f0f0" }}>
          <Skeleton height={300} />
        </div>
      ) : (
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          {images?.map((img) => (
            <img key={img?.id} src={img?.src} alt={img?.alt ? img?.alt : "loading"} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProductDetailsCarousel;
