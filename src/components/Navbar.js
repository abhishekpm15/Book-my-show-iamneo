import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBars } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Drawer, Modal } from "antd";
const Navbar = () => {
  const auth = getAuth();
  const { user, signOutUser, SignUp } = useAuth();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Drawer
        title={user ? `Hey ${user.displayName.split(" ")[0]}` : "Hey User"}
        placement="right"
        onClose={() => setOpenSideBar(false)}
        open={openSideBar}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Modal
        open={openModal}
        onOk={() => setOpenModal(false)}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        onCancel={() => setOpenModal(false)}
        title="Select City"
        width={1000}
      >
        <div className="border mt-3 flex space-x-4 items-center py-2 px-3">
          <AiOutlineSearch className="" />
          <input
            placeholder="Search for your City"
            type="text"
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        <div className="text-sm text-center mt-4">Popular Cities</div>
        <img
          src={require("../assets/images/cities.png")}
          className="mt-3"
          alt=""
        />
        <div className="text-red-500 mt-3 cursor-pointer text-center ">
          View All Cities
        </div>
      </Modal>
      <div className="w-screen bg-[#333444]">
        <div className="flex justify-between py-3 w-[90%] mx-auto">
          <div className="flex items-center space-x-10 lg:w-1/2">
            <img
              src={require("../assets/images/logo.png")}
              className="w-32 text-white"
              alt=""
            />
            <div className="bg-white hidden lg:inline-flex flex-1 space-x-4 items-center py-2 px-3 rounded-sm">
              <AiOutlineSearch className="text-gray-700 w-5 h-5" />
              <input
                placeholder="Search for Movies, Event, Plays, Sports and Activities"
                className="bg-transparent outline-none flex-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center text-gray-400 space-x-5">
            <div
              onClick={() => setOpenModal(true)}
              className="flex cursor-pointer items-center space-x-1"
            >
              <button className="">Chennai</button>
              <BiChevronDown />
            </div>
            <button
              onClick={user ? signOutUser : SignUp}
              className="px-3 py-1 text-sm rounded-md text-white bg-[#F94265]"
            >
              {user ? "Sign Out" : "Sign In"}
            </button>
            {user && (
              <div className="hidden lg:inline-flex items-center justify-center space-x-3">
                <img
                  src={user ? user?.photoUrl : "https://bit.ly/3CjPQDm"}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div>Hey, {user?.displayName.split(" ")[0]}</div>
              </div>
            )}

            <FaBars
              onClick={() => setOpenSideBar(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
