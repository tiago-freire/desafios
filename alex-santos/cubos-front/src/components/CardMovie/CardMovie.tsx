import React from "react";
import { Link } from "react-router-dom";

interface CardMovieProps {
  id: number;
  title: string;
  poster: string;
}

const CardMovie: React.FC<CardMovieProps> = ({ id, title, poster }) => {
  return (
    <div className="relative  overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      <Link to={`/details-movie/${id}`}>
        <img
          src={poster}
          alt={title}
          className=" w-60 h-80 object-cover"
        />
        {/* Overlay com degradê escuro */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
        {/* Título */}
        <div className="absolute bottom-4 left-4 right-4 z-20 text-white font-semibold text-lg leading-tight drop-shadow-md">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
