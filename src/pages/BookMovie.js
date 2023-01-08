import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImNotification } from "react-icons/im";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Tooltip } from "antd";
import { Modal, Menu } from "antd";
import {
  imageLink1,
  imageLink2,
  imageLink3,
  imageLink4,
  imageLink5,
  imageLink6,
} from "../Links/MovieLinks";

const allMovies = [
  ...imageLink1,
  ...imageLink2,
  ...imageLink3,
  ...imageLink4,
  ...imageLink5,
  ...imageLink6,
];
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
  getItem("DATES", "sub1", "", [
    getItem("SAT 14 JAN", "1"),
    getItem("SUN 15 JAN", "2"),
    getItem("MON 16 JAN", "3"),
    getItem("TUE 17 JAN", "4"),
  ]),
];

const rootSubmenuKeys = ["sub1"];

const BookMovie = () => {
  let navigate = useNavigate();
  const [modal2Open, setModal2Open] = useState(false);
  const { movieid } = useParams();
  const [searchParams] = useSearchParams();
  const screen = searchParams.get("screen");
  const language = searchParams.get("lang");
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const movie = allMovies.find((movie) => movie.id === movieid);

  return (
    <div>
      <Modal
        title="NOTES"
        centered
        open={modal2Open}
        onOk={() => {
          setModal2Open(false);
        }}
        onCancel={() => setModal2Open(false)}
        className="text-center"
      >
        <div>
          Wearing a face mask and following other Covid guidelines are mandatory
          (As per the directions from your local authorities)..
        </div>
        <div className="mt-3 text-red-700">
          Please note that there would be an additional non-refundable charge
          towards 3D glasses.
        </div>
        <div className="mt-3 text-xl font-bold">How many seats ?</div>
        <div
          className="flex justify-around mt-3 cursor-pointer"
          onClick={() => {
            navigate("/seats");
          }}
        >
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            1
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            2
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            3
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            4
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            5
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            6
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            7
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            8
          </li>
          <li className="hover:bg-red-600 rounded-xl py-1 px-3 hover:text-white">
            9
          </li>
        </div>
      </Modal>
      <div className="bg-[#333545] text-white text-3xl pl-20 pt-5 pb-5">
        {movie.title} • {language} • {screen}
      </div>
      <div className="flex space-x-10">
        <div className="text-xl ml-16 mt-10">
          Select Date
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
        <div>
          <div className="text-base font-semibold ml-16 mt-10 flex space-x-11">
            <div className="flex items-center gap-3">
              <AiOutlineHeart /> Anna Cinemas : Mount Road
            </div>
            <div className="flex items-center gap-3">
              <ImNotification />
            </div>
            <div>
              <Tooltip placement="top" title="Rs 190.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  03:30
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip placement="top" title="Rs 200.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  11:30
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="text-base font-semibold ml-16 mt-10 flex space-x-11">
            <div className="flex items-center gap-3">
              <AiOutlineHeart /> BG Parimalam Cinemas
            </div>
            <div className="flex items-center gap-3">
              <ImNotification />
            </div>
            <div>
              <Tooltip placement="top" title="Rs 170.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  13:30
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip placement="top" title="Rs 180.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  3:30
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="text-base font-semibold ml-16 mt-10 flex space-x-11">
            <div className="flex items-center gap-3">
              <AiOutlineHeart /> Gokulam Cinemas
            </div>
            <div className="flex items-center gap-3">
              <ImNotification />
            </div>
            <div>
              <Tooltip placement="top" title="Rs 30000.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  4:30
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip placement="top" title="Rs 4566670.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  05:30
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="text-base font-semibold ml-16 mt-10 flex space-x-11">
            <div className="flex items-center gap-3">
              <AiOutlineHeart /> Anna Cinemas : Mount Road
            </div>
            <div className="flex items-center gap-3">
              <ImNotification />
            </div>
            <div>
              <Tooltip placement="top" title="Rs 190.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  07:30
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip placement="top" title="Rs 190.00">
                <button
                  className="border-2 bg-transparent px-4 py-1 rounded-lg border-gray-400"
                  onClick={() => setModal2Open(true)}
                >
                  11:30
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMovie;
