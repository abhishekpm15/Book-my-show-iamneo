import React from "react";

import { useParams, useSearchParams } from "react-router-dom";

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

const BookMovie = () => {
  const { movieid } = useParams();
  const [searchParams] = useSearchParams();
  const screen = searchParams.get("screen");
  const language = searchParams.get("lang");

  const movie = allMovies.find((movie) => movie.id === movieid);
  return (
    <div>
      {movie.title} • {screen} • {language}
    </div>
  );
};

export default BookMovie;
