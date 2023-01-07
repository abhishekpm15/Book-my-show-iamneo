import React from "react";
import { useNavigate } from "react-router-dom";

const Movies2 = ({ objects }) => {
  const router = useNavigate();
  return (
    <div className="flex justify-between">
      {objects.map((object, index) => {
        return (
          <div
            className="cursor-pointer"
            onClick={() => router("/movie/" + object.id)}
            key={object.image}
          >
            <img
              src={object?.link}
              alt="images"
              className="rounded-md"
              width="210px"
            />
            <div className="pt-3 text-xl font-semibold">{object?.title}</div>
            <div className="pt-1 text-md text-blue-gray-500">
              {object?.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies2;
