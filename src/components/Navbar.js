import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaBars } from "react-icons/fa";
import { BiChevronDown, BiLibrary } from "react-icons/bi";
import { AiOutlineSearch,AiFillCreditCard,AiFillSetting } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { BsFillBagCheckFill } from "react-icons/bs";
import {GiHelp,GiWantedReward} from "react-icons/gi"
import { Drawer, Modal } from "antd";
const Navbar = () => {
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
        <div className="flex items-center space-x-2 ">
          <img
            src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png"
            className="w-10"
            alt=""
          />
          <div className="flex">
            <div className="flex-1">
              Unlock special offers and great benefits
            </div>
            <button className=" outline outline-deep-orange-600 rounded-md text-xs text-deep-orange-400 p-2">
              Login/ Register
            </button>
          </div>
        </div>
        <div className="mt-3 flex p-3 space-x-3 hover:bg-blue-gray-100 rounded-lg">
          <div className="my-auto">
            <GrNotification className="text-2xl opacity-50" />
          </div>
          <div className="font-semibold">Notifications</div>
        </div>

        <div className="flex p-3 space-x-3 hover:bg-blue-gray-100 rounded-lg">
          <div className="my-auto">
            <BsFillBagCheckFill className="text-2xl opacity-50" />
          </div>
          <div className="flex flex-col my-auto">
            <div className="font-semibold">Your Orders</div>
            <div className="text-xs mt-1 my-auto">
              View all your bookings & purchases
            </div>
          </div>
        </div>

        <div className="flex p-3 space-x-3 hover:bg-blue-gray-100 rounded-lg">
          <div className="my-auto">
            <BiLibrary className="text-2xl opacity-50" />
          </div>
          <div className="flex flex-col my-auto">
            <div className="font-semibold">Stream Library</div>
            <div className="text-xs mt-1 my-auto">
              Rented and Purchased Movies
            </div>
          </div>
        </div>

        <div className="flex p-3 space-x-3 hover:bg-blue-gray-100 rounded-lg">
          <div className="my-auto">
            <AiFillCreditCard className="text-2xl opacity-50" />
          </div>
          <div className="flex flex-col my-auto">
            <div className="font-semibold">Play Credit Card</div>
            <div className="text-xs mt-1 my-auto">
              View your play credit card
            </div>
          </div>
        </div>


        <div className="flex p-3 space-x-3 hover:bg-blue-gray-100 rounded-lg">
          <div className="my-auto">
            <GiHelp className="text-2xl opacity-50" />
          </div>
          <div className="flex flex-col my-auto">
            <div className="font-semibold">Help & Support</div>
            <div className="text-xs mt-1 my-auto">
              View commonly asked queries and chat 
            </div>
          </div>
        </div>

        <div className="flex p-3 space-x-3 hover:bg-blue-gray-100 rounded-lg">
          <div className="my-auto">
            <AiFillSetting className="text-2xl opacity-50" />
          </div>
          <div className="flex flex-col my-auto">
            <div className="font-semibold">Account and Settings</div>
            <div className="text-xs mt-1 my-auto">
              Location, Payments and more
            </div>
          </div>
        </div>

        <div className="flex p-3 space-x-3 hover:bg-blue-gray-100 rounded-lg">
          <div className="my-auto">
            <GiWantedReward className="text-2xl opacity-50" />
          </div>
          <div className="flex flex-col my-auto">
            <div className="font-semibold">Rewards</div>
            <div className="text-xs mt-1 my-auto">
              View your rewards and unlock new ones
            </div>
          </div>
        </div>


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
              className="w-32 text-white ml-14"
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
                  src={user ? "https://www.pngitem.com/pimgs/m/514-5149286_profile-logo-hd-png-download.png" :"" }
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
