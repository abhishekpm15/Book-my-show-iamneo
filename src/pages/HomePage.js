import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Movies from "../components/Movies";
import Events from "../components/Events";

const HomePage = () => {
  const imageLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
      title: "Avatar the way of water",
      content: "Action/Adventure",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxLjlLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330396-kzazfmpaqe-portrait.jpg",
      title: "Sembi",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni40LzEwICA1LjZLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00345156-pdacdkazal-portrait.jpg",
      title: "Connect",
      content: "Horror/Thriller",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICA5OTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00103370-kpbpnpnrtv-portrait.jpg",
      title: "Raangi",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICAyLjhLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330656-vdgxhtzdcf-portrait.jpg",
      title: "Driver Jamuna",
      content: "Crime/Thriller",
    },
  ];

  const eventLink = [
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/upskill-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png"
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const images = [
    "https://picsum.photos/id/10/300/200",
    "https://picsum.photos/id/100/300/200",
    "https://picsum.photos/id/1000/300/200",
  ];

  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="">
        <div className="relative w-full h-64">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              className={`absolute w-full h-full object-cover rounded-lg shadow-md ${
                index === currentIndex ? "" : "hidden"
              }`}
              alt=""
            />
          ))}
          <button
            className="absolute left-0 top-0 w-12 h-12 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            onClick={handlePrevClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-0 w-12 h-12 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            onClick={handleNextClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="recommended ml-28 pt-7 pl-10">
        <div className="text-2xl font-bold text-gray-900 mb-3">
          Recommened Movies
        </div>
        <div className="flex">
          <Movies objects={imageLink} />
        </div>
      </div>

      <div className="ml-32 pt-28 pl-30 pb-14 pr-30 w-[80%]">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt=""
          width="100%"
          height="100%"
        />
      </div>

      <div className="recommended ml-28 pt-7 pl-10">
        <div className="text-2xl font-bold text-gray-900 mb-3">
          The Best Of Live Events
        </div>
        <div className="flex">
          <Events objects2={eventLink} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
