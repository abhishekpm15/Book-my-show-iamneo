import React from "react";
import Carousel from "react-bootstrap/Carousel";


const data1 = [
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
  return (
    <div>
        <Carousel>
          {data1.map((slide,index) => {
            return (
              <Carousel.Item interval={1000} key={data1.link}>
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
