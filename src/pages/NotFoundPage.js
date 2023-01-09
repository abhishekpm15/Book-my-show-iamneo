import React from "react";
import Error from "../assets/images/404Error.jpg";
const NotFoundPage = () => {
  return (
    <div className="flex justify-content">
      <div className="w-[30%] text-center ml-[32%]">
        <img src={Error} alt="404-error-page" />
      </div>
    </div>
  );
};

export default NotFoundPage;
