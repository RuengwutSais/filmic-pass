/* eslint-disable react/prop-types */
import { useEffect } from "react";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const Home = ({ playing, onair, trendMovie, trendTV }) => {
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
    scrollToTop();
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="p-4 m-4 rounded">
      <div className="w-full h-full text-white items-center justify-center flex flex-wrap">
        <h2 className="text-3xl font-bold p-2 text-red relative w-full">
          Now In Theaters
        </h2>
        <div className="overflow-x-scroll overflow-y-hidden transition-height duration-500 ease-linear">
          <div className="flex flex-row p-2">
            {playing.map((play) => {
              const colorClass = getColorClass(play.vote_average);
              const formatdate = convertDate(play.release_date);
              return (
                <div key={play.id} className="m-2">
                  <div
                    id="movie"
                    className="shadow-md rounded-lg bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  >
                    <img
                      src={IMAGE_URL + play.poster_path}
                      alt=""
                      className="h-96 w-72 overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                    />
                    <div className="h-44 w-72">
                      <div className=" text-white font-semibold text-xl flex justify-between items-center p-4 gap-2">
                        <div className="w-60">
                          <h3>{play.title}</h3>
                        </div>
                        <span
                          className={`bg-black p-2 rounded font-bold ${colorClass} w-16 items-center text-center`}
                        >
                          {play.vote_average.toFixed(1)}
                        </span>
                      </div>
                      <p className="p-4 text-white text-lg absolute bottom-0">
                        Relese Date - {formatdate}
                      </p>
                    </div>
                    <div
                      className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-96 overflow-y-auto"
                    >
                      <h3 className="font-bold text-xl text-red">Overview</h3>
                      <div className="text-justify">{play.overview}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h2 className="text-3xl font-bold p-2 text-red relative w-full mt-8">
          Now On Air
        </h2>
        <div className="overflow-x-scroll overflow-y-hidden transition-height duration-500 ease-linear">
          <div className="flex flex-row p-2">
            {onair.map((onair) => {
              const colorClass = getColorClass(onair.vote_average);
              const formatdate = convertDate(onair.first_air_date);

              return (
                <div key={onair.id} className="m-2 shadow-md">
                  <div
                    id="movie"
                    className="shadow-md rounded-lg bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  >
                    <img
                      src={IMAGE_URL + onair.poster_path}
                      alt=""
                      className="h-96 w-72 overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                    />
                    <div className="h-44 w-72">
                      <div className=" text-white font-semibold text-xl flex justify-between items-center p-4 gap-2">
                        <div className="w-16">
                          <h3>{onair.name}</h3>
                        </div>
                        <span
                          className={`bg-black p-2 rounded font-bold ${colorClass} w-16 items-center text-center`}
                        >
                          {onair.vote_average.toFixed(1)}
                        </span>
                      </div>
                      <p className="p-4 text-white text-lg absolute bottom-0">
                        First Air Date - {formatdate}
                      </p>
                    </div>
                    <div
                      className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-96 overflow-y-auto"
                    >
                      <h3 className="font-bold text-xl text-red">Overview</h3>
                      <div className=" text-justify">{onair.overview}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <div className="w-full h-full text-white items-center justify-center flex flex-wrap">
        <h2 className="text-3xl font-bold p-2 text-red relative w-full">
          Trending Movies
        </h2>
        <div className="overflow-x-scroll overflow-y-hidden transition-height duration-500 ease-linear">
          <div className="flex flex-row p-2">
            {trendMovie.map((trendMovie) => {
              const colorClass = getColorClass(trendMovie.vote_average);
              const formatdate = convertDate(trendMovie.release_date);

              return (
                <div key={trendMovie.id} className="m-2">
                  <div
                    id="movie"
                    className="shadow-md rounded-lg bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  >
                    <img
                      src={IMAGE_URL + trendMovie.poster_path}
                      alt=""
                      className="h-96 w-72 overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                    />
                    <div className="h-44 w-72">
                      <div className=" text-white font-semibold text-xl flex justify-between items-center p-4 gap-2">
                        <div className="w-60">
                          <h3>{trendMovie.title}</h3>
                        </div>
                        <span
                          className={`bg-black p-2 rounded font-bold ${colorClass} w-16 items-center text-center`}
                        >
                          {trendMovie.vote_average.toFixed(1)}
                        </span>
                      </div>
                      <p className="p-4 text-white text-lg absolute bottom-0">
                        Relese Date - {formatdate}
                      </p>
                    </div>
                    <div
                      className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-96 overflow-y-auto"
                    >
                      <h3 className="font-bold text-xl text-red">Overview</h3>
                      <div className=" text-justify">{trendMovie.overview}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h2 className="text-3xl font-bold p-2 text-red relative w-full mt-8">
          Trending Series
        </h2>
        <div className="overflow-x-scroll overflow-y-hidden transition-height duration-500 ease-linear">
          <div className="flex flex-row p-2">
            {trendTV.map((trendTV) => {
              const colorClass = getColorClass(trendTV.vote_average);
              const formatdate = convertDate(trendTV.first_air_date);

              return (
                <div key={trendTV.id} className="m-2">
                  <div
                    id="movie"
                    className="shadow-md rounded-lg bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  >
                    <img
                      src={IMAGE_URL + trendTV.poster_path}
                      alt=""
                      className="h-96 w-72 overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                    />
                    <div className="h-44 w-72">
                      <div className=" text-white font-semibold text-xl flex justify-between items-center p-4 gap-2">
                        <div className="w-60">
                          <h3>{trendTV.name}</h3>
                        </div>
                        <span
                          className={`bg-black p-2 rounded font-bold ${colorClass} w-16 items-center text-center`}
                        >
                          {trendTV.vote_average.toFixed(1)}
                        </span>
                      </div>
                      <p className="p-4 text-white text-lg absolute bottom-0">
                        First Air Date - {formatdate}
                      </p>
                    </div>
                    <div
                      className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-96 overflow-y-auto"
                    >
                      <h3 className="font-bold text-xl text-red">Overview</h3>
                      <div className=" text-justify">{trendTV.overview}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
