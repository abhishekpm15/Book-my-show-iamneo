import React from "react";
import { Card } from "antd";

const ListCards = (props) => {
  return (
    <div className="site-card-border-less-wrapper shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
      <Card
        bordered={false}
        style={{
          width: 300,
          color: "red",
        }}
      >
        <div className="flex justify-center">
          <img
            src={props.link}
            alt="images"
            className="rounded-md"
            width="210px"
          />
        </div>
        <h3 className="text-center mt-3">{props.text}</h3>
      </Card>
    </div>
  );
};

export default ListCards;
