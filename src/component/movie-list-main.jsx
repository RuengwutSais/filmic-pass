/* eslint-disable react/prop-types */
import { useEffect } from "react";


const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
import noImage from "../assets/no-img.png";

const MovieListMain = ({ movies }) => {
  const getColorClass = (voteAverage) => {
    if (voteAverage > 7) {
      return "text-rating-green";
    } else if (voteAverage > 5) {
      return "text-rating-orange";
    } else {
      return "text-rating-red";
    }
  };
  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);

    const options = { year: "numeric", month: "short", day: "numeric" };

    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  useEffect(() => {
    scrollToTop()
  },[]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
      <main className="flex flex-wrap justify-center m-4">
        {movies.map((movie) => {
          const colorClass = getColorClass(movie.vote_average);
          const formatdate = convertDate(movie.release_date);


          return (
            <div
              id="movie"
              className="m-4 rounded-lg shadow-md bg-gray relative overflow-hidden cursor-pointer group"
              key={movie.id}
            >
              {movie.poster_path ? (
                <img
                  src={IMAGE_URL + movie.poster_path}
                  alt=""
                  className="w-96 h-128 overflow-y-hidden group-hover:scale-110 ease-in-out duration-300 object-cover"
                />
              ) : (
                <img
                  src={noImage}
                  alt=""
                  className="w-96 h-128 overflow-y-hidden group-hover:scale-110 ease-in-out duration-300 object-cover"
                />
              )}
              <div className="h-52 w-96">
                <div className="text-white font-semibold text-xl flex justify-between p-4 items-center">
                  <h3>{movie.title}</h3>
                  <span
                    className={`bg-black p-2 rounded font-bold ${colorClass} w-12 items-center text-center`}
                  >
                    {movie.vote_average}
                  </span>
                </div>
                <p className="p-4 text-white text-xl absolute bottom-0">
                  Release Date : {formatdate}
                </p>
              </div>

              <div
                className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-96 overflow-y-auto scroll-smooth"
              >
                <h3 className="font-bold text-xl text-red">Overview</h3>
                <div className=" text-justify">{movie.overview}</div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default MovieListMain;
