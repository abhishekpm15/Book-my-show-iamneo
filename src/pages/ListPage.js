import React from "react";
import ListCarousel from "../components/ListCarousel";
import ListCards from "../components/ListCards";
const ListPage = () => {
  return (
    <div>
      <div className="bg-[#ebebeb]">
        <ListCarousel />
      </div>

      <div>
        <div className="flex justify-center text-5xl mt-5 font-bold ">
          What can you host ?
        </div>
        <div className="flex justify-center text-xl mt-4 pl-[20%] pr-[20%] align-middle">
          As the purveyor of entertainment, BookMyShow enables your event with
          end to end solutions from the time you register to the completion of
          the event. Let’s look at what you can host.
        </div>
        <div className="flex justify-center space-x-28 mt-5">
          <ListCards
            link={
              "https://assets-in.bmscdn.com/static/2021/06/online-stream-play.png"
            }
            text={"Online Streaming"}
          />
          <ListCards
            link={"https://assets-in.bmscdn.com/static/2021/06/perf.png"}
            text={"Performances"}
          />
          <ListCards
            link={
              "https://assets-in.bmscdn.com/static/2021/06/experiencess.png"
            }
            text={"Experiences"}
          />
        </div>
        <div className="flex justify-center space-x-28 mt-5">
          <ListCards
            link={
              "https://assets-in.bmscdn.com/static/2021/06/expositionss.png"
            }
            text={"Expositions"}
          />
          <ListCards
            link={"https://assets-in.bmscdn.com/static/2021/06/partiess.png"}
            text={"Parties"}
          />
          <ListCards
            link={"https://assets-in.bmscdn.com/static/2021/06/sport.png"}
            text={"Sports"}
          />
        </div>
        <div className="flex justify-center space-x-28 mt-5">
          <ListCards
            link={
              "https://assets-in.bmscdn.com/static/2021/06/online-stream-play.png"
            }
            text={"Online Streaming"}
          />
          <ListCards
            link={"https://assets-in.bmscdn.com/static/2021/06/perf.png"}
            text={"Performances"}
          />
          <ListCards
            link={
              "https://assets-in.bmscdn.com/static/2021/06/experiencess.png"
            }
            text={"Experiences"}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="text-2xl bg-[#e7364d] py-2 px-7 text-white rounded-lg ">
          List your show
        </button>
      </div>

      <div className="flex justify-center text-5xl mt-5 font-bold">
        What are the services we offer ?
      </div>
      <div className="flex justify-center text-xl mt-4 pl-[20%] pr-[20%] align-middle">
        After successful collaborations with the best event organisers over the
        past decade and a half, we’re well equipped to bring your vision to life
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
      </div>

      <div>
        <div className="h-auto w-full bg-[#e7364d] pb-10">
          <div className="pl-4 pr-4  mt-10  pt-10 text-5xl font-bold text-white flex justify-center">
            We're proud of what we do
          </div>
          <div className="text-white text-xl flex justify-center font-bold mt-8">
            As the country's largest integrated ticketing portaland we're proud
            to share these stats !
          </div>
          <div className="text-5xl list-none text-white font-bold flex justify-evenly mt-24">
            <li className="text-center">
              90%
              <li className="text-lg">Market share</li>
            </li>
            <li className="text-center">
              15M <li className="text-lg">Monthly Active users</li>
            </li>
            <li className="text-center">
              95M <li className="text-lg">Tickets sold annualy</li>
            </li>
            <li className="text-center">
              2L <li className="text-lg">Ticketed events</li>
            </li>
          </div>

          <div className="inline-flex align-middle ml-[43%]  bg-white text-red-600 mt-20 rounded-2xl py-3 px-10">
            <button>Contact us Today!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
