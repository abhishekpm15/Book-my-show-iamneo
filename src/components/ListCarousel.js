import React from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
    {
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/drishyam-2-et00331997-1667547668.jpg",
    },
    {
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ponniyin-selvan--part-1-et00323897-1664271205.jpg",
    },
    {
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ek-villain-returns-et00128946-1658744061.jpg",
    },
  ];

  const ListCarousel = () => {
  
    return (
      <div>
          <Carousel>
            {data.map((slide,index) => {
              return (
                <Carousel.Item interval={1000} key={data.image}>
                  <img
                    className="mx-auto pt-3 w-[60%]"
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
  
  export default ListCarousel;