import React from "react";
import { IMovie } from "../types.ts";
import { useNavigate } from "react-router-dom";

type CardProps = {
  movie: IMovie;
};

const Card: React.FC<CardProps> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie-details/${movie.id}`)}
      className={
        "group relative flex cursor-pointer flex-col overflow-hidden rounded bg-black"
      }
    >
      <img
        src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
        alt={movie.title}
        className="transition-transform duration-300 ease-in group-hover:scale-[1.5]"
      />

      <hr className={"h-1 bg-white"} />

      <h3
        className={
          "flex max-w-[300px] grow items-center justify-center px-3 py-2 text-center text-xl text-white"
        }
      >
        {movie.title}
      </h3>

      <div
        className={
          "absolute bottom-[-100%] h-full bg-black p-4 text-white opacity-70 transition-all duration-700 group-hover:bottom-0"
        }
      >
        <h3 className={"w-full text-center font-bold"}>Overview:</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
export default Card;
