import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { imageLink1,imageLink2,imageLink3,imageLink4,imageLink5,imageLink6 } from "../Links/ActivityLinks";
import Movies2 from "../components/Movies2";
import Carousels2 from "../components/Carousels2";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Date", "sub1", <MailOutlined />, [
    getItem("Today", "1"),
    getItem("Tomorrow", "2"),
    getItem("This weekend", "3"),
  ]),
  getItem("Categories", "sub2", <AppstoreOutlined />, [
    getItem("Online Games", "5"),
    getItem("Football", "6"),
    getItem("Chess", "7"),
  ]),
  getItem("More filters", "sub4", <SettingOutlined />, [
    getItem("2D", "9"),
    getItem("3D", "10"),
    getItem("IMAX 3D", "11"),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const ActivityPage = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="bg-[#ebebeb]">
        <Carousels2 />
      </div>
      <div className="flex ml-36 mt-10">
        <div className="flex w-80">
          <div className="text-2xl">
            <div className="font-bold"> Filters</div>
            <div className="mt-10">
              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                  width: 256,
                }}
                items={items}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto mr-10 pr-10 ">
          <div className="text-2xl font-bold">Activities in Chennai</div>
            <div className="list-none flex space-x-3 mt-4">
              <li><button className=" rounded-xl w-auto h-7 text-red-500 text-xs p-1 border-2 border-red-500 hover:text-white hover:bg-red-400">Amusement Park</button></li>
              <li><button className=" rounded-xl w-auto h-7 text-red-500 text-xs p-1 border-2 border-red-500 hover:text-white hover:bg-red-400">Gaming</button></li>
              <li><button className=" rounded-xl w-auto h-7 text-red-500 text-xs p-1 border-2 border-red-500 hover:text-white hover:bg-red-400">Unique Tours</button></li>
              <li><button className=" rounded-xl w-auto h-7 text-red-500 text-xs p-1 border-2 border-red-500 hover:text-white hover:bg-red-400">Quizzesand competitions</button></li>
              <li><button className=" rounded-xl w-auto h-7 text-red-500 text-xs p-1 border-2 border-red-500 hover:text-white hover:bg-red-400">Online Sports</button></li>
              <li><button className=" rounded-xl w-auto h-7 text-red-500 text-xs p-1 border-2 border-red-500 hover:text-white hover:bg-red-400">Night life</button></li>
            </div>
        
              <div className="recommended mt-10">
                  <div className="">
                      <Movies2 objects={imageLink1} />
                  </div>
              </div>    

              <div className="recommended mt-10">
                  <div className="">
                      <Movies2 objects={imageLink2} />
                  </div>
              </div>    

              <div className="recommended mt-10">
                  <div className="">
                      <Movies2 objects={imageLink3} />
                  </div>
              </div>    

              <div className="recommended mt-10">
                  <div className="">
                      <Movies2 objects={imageLink4} />
                  </div>
              </div>    

              <div className="recommended mt-10">
                  <div className="">
                      <Movies2 objects={imageLink5} />
                  </div>
              </div>    

              <div className="recommended mt-10">
                  <div className="">
                      <Movies2 objects={imageLink6} />
                  </div>
              </div>    

            </div>
      </div>
    </div>
  );
};

export default ActivityPage;
