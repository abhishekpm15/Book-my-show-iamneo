import React from "react";

const CheckoutPage = () => {
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
          <div className="mt-3 flex ml-4 text-sm">
            {" "}
            ICLASS
            <div className="ml-28">750.00</div>
          </div>
          <div className="mt-3 flex ml-4 text-sm">
            {" "}
            Convenience
            <div className="ml-20">35.50</div>
          </div>
          <hr></hr>
          <div className="mt-3 flex ml-4 text-sm">
            Sub total
            <div className="ml-28">{750.0 + 35.5}</div>
          </div>
          <div className="px-3 mt-5 pb-4">
            <div className="bg-white px-3 pt-3 pb-3">
              Contribution to BookASmile ----- Rs.5
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
            <div>Rs. {785.5 + 5}</div>
          </div>
        </div>
        <div className="flex justify-center mt-10 bg-red-600 rounded-lg ">
          <button className="text-white rounded-lg px-36 py-2 hover:white ">PROCEED</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
