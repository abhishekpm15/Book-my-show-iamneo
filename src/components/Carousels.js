import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


const data = [
  {
    image:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1672736193489_jffweb.jpg",
  },
  {
    image:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg",
  },
  {
    image:
      "https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg",
  },
];

const Carousels = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((slide) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-95 mx-auto pl-5 pr-5 pt-3"
                  src={slide.image}
                  alt="slider-img"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
    </div>
  );
};

export default Carousels;
