import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import { Modal } from "antd";
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

const MovieDescPage = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const navigate = useNavigate();

  const { movieid } = useParams();

  const movie = allMovies.find((movie) => movie.id === movieid);
  return (
    <div className="w-screen">
      <div className="relative w-screen">
        <img
          style={{ filter: "brightness(.1)" }}
          className="w-full opacity-80"
          src={movie.bgImage}
          alt={movie.title}
        />

        <div className="absolute flex items-start p-20 top-0 space-x-5 w-full h-full">
          <img
            className="w-64 shadow-2xl rounded-md"
            src={movie?.link}
            alt=""
          />
          <div className="">
            <p className="text-4xl pt-2 font-bold text-white">{movie?.title}</p>
            <div className="flex items-center font-bold space-x-2">
              <AiFillStar className="w-10 h-10 text-[#F94265]" />
              <div className="text-white text-2xl">{movie?.info?.stars}</div>
              <div className="text-white font-light">{movie?.info?.votes}</div>
              <AiOutlineRight className="text-white w-3 h-3" />
            </div>
            <div className="bg-[#323233] mb-3 flex items-center justify-between space-x-6 shadow-xl p-4 mt-3 rounded-md">
              <div className="flex flex-col space-y-1">
                <div className="text-white text-xl font-bold">
                  Add Your rating & reviews
                </div>
                <div className="text-[#979697] font-bold">
                  Your rating matter
                </div>
              </div>
              <button className="bg-white px-4 py-2 rounded-md font-bold">
                Rate Now
              </button>
            </div>

            <div className="bg-[#E4E4E4] inline p-2 rounded-md ">
              2D , 3D , 3D SCREEN X , 4DX 3D , IMAX 3D
            </div>
            <br />
            <div className="mb-4" />
            <div className="bg-[#E4E4E4] inline p-2 rounded-md ">
              English , Kannada , Malayalam , Tamil , Telugu , Hindi
            </div>
            <div className="text-white mt-3 text-sm">
              {movie?.info?.runTime} • {movie?.info?.genre} •
              {movie?.info?.releaseDate}
            </div>
            <button
              className="px-4 py-2 rounded-md bg-[#F84364] font-bold text-white mt-4"
              onClick={() => {
                setModal1Open(true);
              }}
            >
              Book Tickets
            </button>
          </div>
        </div>
      </div>

      <Modal
        title={movie?.title}
        style={{}}
        open={modal1Open}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <div className="font-bold text-xl">Select the language format</div>
        <div className="bg-[#f2f5f9] mt-3 font-semibold">ENGLISH</div>
        <div className="flex flex-end space-x-11 mt-3 text-red-700 ">
          <div
            onClick={() =>
              navigate(`/book/${movie?.id}?screen=2D&lang=ENGLISH`)
            }
            className="outline ouline-2 rounded px-4 hover:bg-red-300 hover:text-white"
          >
            <button>2D</button>
          </div>
          <div
            onClick={() =>
              navigate(`/book/${movie?.id}?screen=3D&lang=ENGLISH`)
            }
            className="outline ouline-2 rounded px-4 hover:bg-red-300 hover:text-white"
          >
            <button>3D</button>
          </div>
          <div
            onClick={() =>
              navigate(`/book/${movie?.id}?screen=IMAX%203D&lang=ENGLISH`)
            }
            className="outline ouline-2 rounded px-4 hover:bg-red-300 hover:text-white"
          >
            <button>IMAX 3D</button>
          </div>
        </div>
        <div className="bg-[#f2f5f9] mt-4 font-semibold">TAMIL</div>
        <div className="flex flex-end space-x-11 mt-4 text-red-700">
          <div
            onClick={() => navigate(`/book/${movie?.id}?screen=2D&lang=TAMIL`)}
            className="outline ouline-2 rounded px-4 hover:bg-red-300 hover:text-white"
          >
            <button>2D</button>
          </div>
          <div
            onClick={() => navigate(`/book/${movie?.id}?screen=3D&lang=TAMIL`)}
            className="outline ouline-2 rounded px-4 hover:bg-red-300 hover:text-white"
          >
            <button>3D</button>
          </div>
        </div>
        <div className="bg-[#f2f5f9] mt-4 font-semibold">TELUGU</div>
        <div className="flex flex-end space-x-11 mt-4 text-red-700  ">
          <div
            onClick={() => navigate(`/book/${movie?.id}?screen=3D&lang=TELUGU`)}
            className="outline ouline-2 rounded px-4 hover:bg-red-300 hover:text-white"
          >
            <button>3D</button>
          </div>
        </div>
        <div className="bg-[#f2f5f9] mt-4 font-semibold">HINDI</div>
        <div className="flex flex-end space-x-11 mt-4 text-red-700 ">
          <div
            onClick={() => navigate(`/book/${movie?.id}?screen=3D&lang=HINDI`)}
            className="outline ouline-2 rounded px-4 hover:bg-red-300 hover:text-white"
          >
            <button>3D</button>
          </div>
        </div>
      </Modal>
      <br />
      <br />

      <div className="p-10 space-y-5">
        <div className="font-bold text-2xl">About the Movie</div>
        <div className="text-sm">{movie?.info?.desc}</div>
      </div>
    </div>
  );
};

export default MovieDescPage;
