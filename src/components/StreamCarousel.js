import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image1:"https://assets-in.bmscdn.com/promotions/cms/creatives/1672736193489_jffweb.jpg",
    image2:"https://assets-in.bmscdn.com/discovery-catalog/events/et00345490-xzflcrhjzm-portrait.jpg",
    preimer:"https://assets-in.bmscdn.com/discovery-catalog/icons/tr:h-48,q-100/premiere-chip-tag.png",
    release:"Brand new release on every Friday",
    title:"Unhuman",
    time:"",
    language:"English",
    para:"A class of high school students are forced to run for their lives, when a killer begins hunting them for sport.",
  },
  {
    image1:"https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg",
    image2:"https://assets-in.bmscdn.com/discovery-catalog/events/et00076943-smkpwvadsk-portrait.jpg",
    preimer:"https://assets-in.bmscdn.com/discovery-catalog/icons/tr:h-48,q-100/premiere-chip-tag.png",
    release:"Brand new release on every Thursday",
    title:"Strong Fathers, Strong Daughters",
    time:"2h 50m",
    language:"English",
    para:"This empowering and touching social drama brings to life the daily struggles of three women across different generations.",
  },
  {
    image1:"https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg",
    image2:"https://assets-in.bmscdn.com/discovery-catalog/events/et00345957-eezusmehse-portrait.jpg",
    preimer:"https://assets-in.bmscdn.com/discovery-catalog/icons/tr:h-48,q-100/premiere-chip-tag.png",
    release:"Brand new release on every Sunday",
    title:"",
    time:"",
    language:"",
    para:"A group of rich friends find their party in a remote mansion taking a horrifying turn when one of them turns into a sadistic killer.",
  },
];

const StreamCarousels = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide,index) => {
          return (
            <Carousel.Item key={slide.image1}>
              <div className="carousel-container relative">
              <img
                className="d-block w-[100%] pt-3 opacity-60 h-[470px] filter-blur-50"
                src={slide.image1}
                alt="slider-img"
              />
                    <div>
                        <div className="darkimage">
                        <img src={slide.image2} alt="slide2image" className=" rounded-lg my-8 absolute top-2 w-[260px] left-32" />
                        </div>
                        <img src={slide.preimer} alt="slide2image" className="overlay rounded-lg my-8 absolute top-14 ml-[20%] left-36 w-32"  />
                        <p className="overlay rounded-lg my-8 absolute top-16 ml-[20%] left-36 w-32 font-medium">{slide.release}</p>
                    </div>
                    
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default StreamCarousels;
