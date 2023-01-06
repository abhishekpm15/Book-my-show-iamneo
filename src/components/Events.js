import React from "react";

const Events = ({ objects2 }) => {
  console.log(objects2);
  return (
    <div className="flex">
      {objects2.map((object, index) => {
        return (
          <div className="ml-0 mr-12" key={object.link}>
            <img
              src={object}
              alt="Avatar: The Way of Water"
              className="rounded-md"
              width="210px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Events;
