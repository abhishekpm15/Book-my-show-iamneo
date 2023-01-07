import {
  CardBody,
  CardFooter,
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import { MdSlowMotionVideo } from "react-icons/md";
import { BiDownload } from "react-icons/bi";

const CorporatesPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
        <div className="relative w-screen flex justify-center">
          <img
            src="https://bit.ly/3CsfjKM"
            alt=""
            className="w-full opacity-80"
            style={{ filter: "brightness(.2)" }}
          />

          <div className="mt-[4%] absolute flex w-full justify-end pr-64">
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-center mt-16 text-white">
                Entertainment you can give.
              </div>
              <div className="text-lg mt-4 self-center text-center text-white w-[60%] ">
                A variety of solutions to skyrocket your business with vouchers,
                promotions, loyality, employee recognition & rewards.
              </div>
              <div className="flex justify-evenly mt-4 w-[60%] self-center">
                <div className="text-white text-xl font-bold flex items-center">
                  <MdSlowMotionVideo className="mr-2" />
                  Watch Video
                </div>
                <div className="text-white text-xl font-bold flex items-center">
                  <BiDownload className="mr-2" />
                  Download Brochure
                </div>
              </div>
            </div>
            <Card className="w-96 ">
              <CardBody className="flex flex-col gap-4">
                <div className="text-xs">
                  *Full Name
                  <Input label="Full Name" size="lg" className="mt-1" />
                </div>
                <div className="text-xs">
                  *Company Email
                  <Input label="Company Email" size="lg" className="mt-1" />
                </div>
                <div className="text-xs">
                  *Company Name
                  <Input label="Company Name" size="lg" className="mt-1" />
                </div>
                <div className="text-xs">
                  *Mobile Number
                  <Input label="Mobile Number" size="lg" className="mt-1" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                  Receive a callback
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-blue-gray-50 mt-5 pb-5">
        <div className="text-md mt-4">OUR PARTNERS</div>
        <div className="list-none flex space-x-20 mt-8">
          <li>
            <img
              src="https://in.bmscdn.com/webin/corporate/hp-logo.png"
              alt="hplogo"
            />
          </li>
          <li>
            <img
              src="https://in.bmscdn.com/webin/corporate/ola-logo.png"
              alt="olalogo"
            />
          </li>
          <li>
            <img
              src="https://in.bmscdn.com/webin/corporate/axis-logo.png"
              alt="olalogo"
            />
          </li>
          <li>
            <img
              src="https://in.bmscdn.com/webin/corporate/mastercard-logo.png"
              alt="olalogo"
            />
          </li>
          <li>
            <img
              src="https://in.bmscdn.com/webin/corporate/icici-logo.png"
              alt="olalogo"
            />
          </li>
        </div>
      </div>
      <div className="list-none flex justify-center space-x-20  items-center mt-28 text-xl ">
        <li className="font-bold text-center">
          1000+
          <div className="font-normal text-center">Cities</div>
        </li>
        <li className="font-bold text-center">
          6000
          <div className="font-normal">Screens</div>
        </li>
        <li className="font-bold text-center">
          1000+
          <div className="font-normal w-36">Corporates who trust us</div>
        </li>
        <li className="font-bold text-center">
          1% Million+
          <div className="font-normal w-36">Tickets sold per month</div>
        </li>
        <li className="font-bold text-center">
          4 Billion
          <div className="font-normal w-32">Page views per month</div>
        </li>
      </div>
      <div className="mt-32 ml-20 mr-20">
        <div className="flex justify-center space-x-10">
          <div className="flex flex-col mt-20 ml-10 pl-10 w-[40%] ">
            <div className="text-gray-500 text-xl">WHAT'S IN IT FOR YOU? </div>
            <div className="text-3xl font-semibold mt-4">Brand Promotion</div>
            <div className="float-left mt-6 text-xl">
              Gifting entertainment is a fun way to push your brand’s message.
              And the ways you can use vouchers are endless. For example,
              upselling celebrity-endorsed products timed with a movie release.
            </div>
          </div>
          <img
            src="https://in.bmscdn.com/webin/corporate/steven-libralon.png"
            alt="child"
            className="w-[40%]"
          />
        </div>
        <div className="flex justify-center space-x-10 mt-14">
        <img
            src="https://in.bmscdn.com/webin/corporate/customer-engage.png"
            alt="child"
            className="w-[40%]"
          />
          <div className="flex flex-col mt-20 ml-10 pl-10 w-[40%] ">
            <div className="text-gray-500 text-xl">Employee Enagagement Recognition & Rewards </div>
            <div className="text-3xl font-semibold mt-4">Brand Promotion</div>
            <div className="float-left mt-6 text-xl">
              Show your clients and employees some appreciation by gifting them our products
          </div>
          </div>

        </div>
        <div className="flex justify-center space-x-10 mt-14">
          <div className="flex flex-col mt-20 ml-10 pl-10 w-[40%] ">
            <div className="text-3xl font-semibold mt-4">Lead Generation</div>
            <div className="float-left mt-6 text-xl">
            Get positive referrals,keep existing customers and trigger change management
            </div>
          </div>
          <img
            src="https://in.bmscdn.com/webin/corporate/lead-generation.png"
            alt="child"
            className="w-[40%]"
          />
        </div>
        <div className="flex justify-center space-x-10 mt-14">
          <img
            src="https://in.bmscdn.com/webin/corporate/loyalty.png"
            alt="child"
            className="w-[40%]"
          />
          <div className="flex flex-col mt-20 ml-10 pl-10 w-[40%] ">
            <div className="text-3xl font-semibold mt-4">Loyalty</div>
            <div className="float-left mt-6 text-xl">
              Keep customers firmly in your corner by rewarding them with our products
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-10 mt-14">
          <div className="flex flex-col mt-20 ml-10 pl-10 w-[40%] ">
            <div className="text-3xl font-semibold mt-4">Corporate Gifting</div>
            <div className="float-left mt-6 text-xl">
              From stand-up comedy and sporting activities to movies and plays, we've got all the entertainment worth gifting to your patrons.
            </div>
          </div>
          <img
            src="https://in.bmscdn.com/webin/corporate/corporate-gifting.png"
            alt="child"
            className="w-[40%]"
          />
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default CorporatesPage;
