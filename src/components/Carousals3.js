import React from "react";
import Carousel from "react-bootstrap/Carousel";


const data = [
  {
    image:
      "https://assets-in.bmscdn.com/static/2021/06/des-sli-fiv.jpeg",
  },
  {
    image:
      "https://assets-in.bmscdn.com/static/2021/06/des-sli-th.jpeg",
  },
  {
    image:
      "https://assets-in.bmscdn.com/static/2021/06/sli-o.jpeg",
  },
];

const Carousels3 = () => {

  return (
    <div>
        <Carousel>
          {data.map((slide,index) => {
            return (
              <Carousel.Item interval={1000} key={data.image}>
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

export default Carousels3;
