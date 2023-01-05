import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import {AiOutlineArrowRight} from "react-icons/ai"
import { imageLink1,imageLink2,imageLink3,imageLink5,imageLink4,imageLink6 } from "../Links/MovieLinks";
import Movies2 from "../components/Movies2";
import { Link } from "react-router-dom";

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
  getItem("Languages", "sub1", <MailOutlined />, [
    getItem("English", "1"),
    getItem("Hindi", "2"),
    getItem("Tamil", "3"),
    getItem("Marathi", "4"),
  ]),
  getItem("Geners", "sub2", <AppstoreOutlined />, [
    getItem("Drama", "5"),
    getItem("Action", "6"),
    getItem("Comedy", "7"),
    getItem("Thriller", "8"),
    getItem("Romance", "9"),
    getItem("Horror", "10"),
    getItem("Crime", "11"),
    getItem("Adventure", "12"),
    getItem("Sci-Fi", "13"),
    getItem("Fantasy", "14"),
  ]),
  getItem("Format", "sub4", <SettingOutlined />, [
    getItem("2D", "9"),
    getItem("3D", "10"),
    getItem("IMAX 3D", "11"),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const UpComingMovies = () => {
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
          <div className="text-2xl font-bold">Movies in Chennai</div>
            <div className="list-none flex space-x-6 mt-4">
              <li><button className=" rounded-xl w-20 h-7 text-red-500 text-sm border-2 border-red-500 hover:text-white hover:bg-red-400">Tamil</button></li>
              <li><button className=" rounded-xl w-20 h-7 text-red-500 text-sm border-2 border-red-500 hover:text-white hover:bg-red-400">English</button></li>
              <li><button className=" rounded-xl w-20 h-7 text-red-500 text-sm border-2 border-red-500 hover:text-white hover:bg-red-400">Telugu</button></li>
              <li><button className=" rounded-xl w-20 h-7 text-red-500 text-sm border-2 border-red-500 hover:text-white hover:bg-red-400">Hindi</button></li>
              <li><button className=" rounded-xl w-20 h-7 text-red-500 text-sm border-2 border-red-500 hover:text-white hover:bg-red-400">Malayalam</button></li>
              <li><button className=" rounded-xl w-20 h-7 text-red-500 text-sm border-2 border-red-500 hover:text-white hover:bg-red-400">Bengali</button></li>
            </div>
            <div className="h-24 bg-gray-200 rounded-lg flex mt-4 justify-between">
              <div className="my-auto pl-5 font-bold text-xl">
                Now Showing
                </div>
                <div className="my-auto mr-8">
                  <Link to="/MoviesPage" className="no-underline flex items-center gap-3 text-red-700">
                  In Cinemas Near You
                  <AiOutlineArrowRight />
                  </Link>
                </div>
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

export default UpComingMovies;
