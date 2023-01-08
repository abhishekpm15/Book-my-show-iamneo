import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "antd";
import ticksuccess from "../assets/json/ticksuccess.json";
import successLottie from "../assets/json/succes.json";
import { useAuth } from "../context/AuthContext";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";

const CheckoutPage = () => {
  emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY);
  const [confirmed, setConfirmed] = useState(false);
  const { user, api } = useAuth();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const mailSend = () => {
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          toMail: user?.email,
          userName: user?.displayName,
          seatNumbers: location?.state?.seatsSelected.toString(),
        }
      )
      .then(
        (result) => {
          setConfirmed(true);
        },
        (error) => {
          api.error({
            message: "Error",
            description: "Something went wrong",
          });
        }
      );
  };

  if (confirmed) return <ConfirmationPage />;

  return (
    <div className="flex ml-28 space-x-4 mt-6">
      <div className="">
        <img
          src="https://in.bmscdn.com/webin/modal/bookasmile-03.jpg?v123"
          alt="img"
        />
      </div>
      <div className="bg-gray-100 w-[26%] justify-center pt-4 font-semibold ml-5 flex flex-col">
        <div>
          <div className="text-red-700 ml-3">BOOKING SUMMARY</div>
          <div className="mt-3 flex justify-between mr-3 ml-4 text-sm">
            <div className="flex flex-col">
              <div>ICLASS</div>
              <div className="text-xs font-light">
                ({location?.state?.seatsSelected.toString()})
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div>Rs.{150 * location?.state?.seatsSelected.length}</div>
              <div className="text-xs font-light">
                ({location?.state?.seatsSelected.length} x Rs.150)
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-between mr-3 ml-4 text-sm">
            {" "}
            Convenience
            <div className="">35.50</div>
          </div>
          <hr></hr>
          <div className="mt-3 flex justify-between mr-3 ml-4 text-sm">
            Sub total
            <div className="">
              {150 * location?.state?.seatsSelected.length + 35.5}
            </div>
          </div>
          <div className="px-3 mt-5 pb-4">
            <div className="bg-white px-3 pt-3 pb-3">
              Contribution to BookASmile &nbsp; Rs.5
              <div className="text-xs font-normal mt-1">
                (Rs.1 per ticket has been added)
              </div>
              <div className="text-xs font-normal mt-1">VIEW T&C</div>
            </div>
          </div>
          <div className="text-sm pl-5 text-red-700">
            Your current state is Tamil Nadu
          </div>
          <div className="pl-5 mt-5 text-xl pb-4 bg-yellow-200 pt-4 rounded-lg flex space-x-5">
            <div>Amount Payable</div>
            <div>
              Rs. {150 * location?.state?.seatsSelected.length + 35.5 + 5}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 bg-red-600 rounded-lg ">
          <button
            className="text-white rounded-lg px-36 py-2 hover:white "
            onClick={showModal}
          >
            PROCEED
          </button>
          <Modal
            title="Confirmation"
            open={isModalOpen}
            onOk={handleOk}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
            onCancel={handleCancel}
          >
            <div className="mt-3">
              Your ticket will be sent to this E-mail{" "}
              <span className="font-bold text-red-400 animate-pulse">
                {user?.email}
              </span>
            </div>
            <div className="flex justify-center">
              <button
                onClick={mailSend}
                className="bg-red-600 font-bold rounded-lg px-4 py-2 mt-4 text-white "
              >
                CONFIRM
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

const ConfirmationPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute font-bold text-3xl">
        <div>Your Ticket has been Booked</div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: ticksuccess,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: successLottie,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
    </div>
  );
};
