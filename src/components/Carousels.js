import React from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  [

    "https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1672995352793_theweb.jpg"
  ],
  [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1672815509121_formulaeweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1672814908773_f1web.jpg",
  ],
  [
    "https://assets-in.bmscdn.com/static/2021/06/des-sli-fiv.jpeg",
    "https://assets-in.bmscdn.com/static/2021/06/des-sli-th.jpeg",
    "https://assets-in.bmscdn.com/static/2021/06/sli-o.jpeg",
  ],
];


const Carousels = ({ type }) => {
  return (
    <div>
      <Carousel className="w-screen">
        {data[type].map((image, index) => {
          return (
            <Carousel.Item interval={1000} key={index + 1}>
              <img
                className="mx-auto pl-5 pr-5 pt-3"
                src={image}
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
