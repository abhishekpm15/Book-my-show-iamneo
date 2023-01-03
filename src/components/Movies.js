import React from "react";

const Movies = ({ objects }) => {
  // console.log(objects);
  return (
    <div className="flex">
      {objects.map((object) => {
        console.log(object)
        return (
          <div className="ml-0 mr-9">
            <img
              src={object?.link}
              alt="Avatar: The Way of Water"
              className="rounded-md"
              width="210px"
            />
            <div className="pt-3 text-xl">{object?.title}</div>
            <div className="pt-1 text-md text-blue-gray-500">{object?.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
