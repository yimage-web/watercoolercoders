import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className="container mx-auto ">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-4">
            <div className="h-40 flex justify-center items-center">
              <img src={img} alt={`Slide ${index}`} className="w-full h-auto block" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
