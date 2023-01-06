import React from "react";
import Carousel from "react-bootstrap/Carousel";


const data = [
  {
    image:"https://assets-in.bmscdn.com/promotions/cms/creatives/1672815509121_formulaeweb.jpg"
      
  },
  {
    image:
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1672814908773_f1web.jpg",
  },
];

const Carousels2 = () => {

  return (
    <div>
        <Carousel>
          {data.map((slide) => {
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

export default Carousels2;
