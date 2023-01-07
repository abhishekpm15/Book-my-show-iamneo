import React from "react";
import { Card } from "antd";

const ListCards = (props) => {
  return (
    <div className="site-card-border-less-wrapper transition ease-in-out delay-150 hover:-translate-y-3 duration-300 hover:shadow-2xl">
      <Card
        bordered={false}
        style={{
          width: 300,
          color: "red",
        }}
        className="bg-[#ecf5ff] rounded-xl"
      >
        <div className="flex justify-center">
          <img
            src={props.link}
            alt="images"
            className="rounded-md"
            width="210px"
          />
        </div>
        <h3 className="text-center mt-3 text-blue-gray-800">{props.text}</h3>
      </Card>
    </div>
  );
};

export default ListCards;
