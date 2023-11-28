/* eslint-disable react/prop-types */
import "../css/navbar.css";
import { Carousel } from "@material-tailwind/react";

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
  return (
    <div className="p-8 rounded m-8">
      <div className="w-full h-full text-white items-center justify-center gap-8 flex flex-wrap">
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Now In Theaters</h2>
          <Carousel className="rounded-xl w-80 h-full pb-10">
            {playing.map((play) => {
              const colorClass = getColorClass(play.vote_average);
              return (
                <div
                  id="movie"
                  className="rounded shadow-md bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  key={play.id}
                >
                  <img
                    src={IMAGE_URL + play.poster_path}
                    alt=""
                    className="h-96 w-full overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                  />
                  <div className="h-44">
                    <div className=" text-white font-semibold text-xl flex justify-between items-center p-4">
                      <h3 className="p-2">{play.title}</h3>
                      <span
                        className={`bg-black p-2 rounded font-bold ${colorClass} items-center text-center`}
                      >
                        {play.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <p className="p-4 text-white text-xl absolute bottom-0">
                      Relese Date : {play.release_date}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Now On Air</h2>
          <Carousel className="rounded-xl w-80 h-full pb-10">
            {onair.map((onair) => {
              const colorClass = getColorClass(onair.vote_average);
              return (
                <div
                  id="movie"
                  className="rounded shadow-md bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  key={onair.id}
                >
                  <img
                    src={IMAGE_URL + onair.poster_path}
                    alt=""
                    className="h-96 w-full overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                  />
                  <div className="h-44">
                    <div className=" text-white font-semibold text-xl flex justify-between items-center p-4">
                      <h3 className="h-2">{onair.name}</h3>
                      <span
                        className={`bg-black p-2 rounded font-bold ${colorClass} items-center text-center`}
                      >
                        {onair.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <div className="absolute bottom-0">
                      <p className="p-4 text-white text-xl">
                        Relese Date : {onair.first_air_date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <br />
      <div className="w-full h-full text-white items-center justify-center gap-8 flex flex-wrap">
      <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Trending Movies</h2>
          <Carousel className="rounded-xl w-80 h-full pb-10">
            {trendMovie.map((trendMovie) => {
              const colorClass = getColorClass(trendMovie.vote_average);
              return (
                <div
                  id="movie"
                  className="rounded shadow-md bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  key={trendMovie.id}
                >
                  <img
                    src={IMAGE_URL + trendMovie.poster_path}
                    alt=""
                    className="h-96 w-full overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                  />
                  <div className="h-44">
                    <div className=" text-white font-semibold text-xl flex justify-between items-center p-4">
                      <h3 className="p-2">{trendMovie.title}</h3>
                      <span
                        className={`bg-black p-2 rounded font-bold ${colorClass} items-center text-center`}
                      >
                        {trendMovie.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <p className="p-4 text-white text-xl absolute bottom-0">
                      Relese Date : {trendMovie.release_date}
                    </p>
                    
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div> 
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Trending Series</h2>
          <Carousel className="rounded-xl w-80 h-full pb-10">
            {trendTV.map((trendTV) => {
              const colorClass = getColorClass(trendTV.vote_average);
              return (
                <div
                  id="movie"
                  className="rounded shadow-md bg-gray relative overflow-hidden items-start justify-start cursor-pointer group"
                  key={trendTV.id}
                >
                  <img
                    src={IMAGE_URL + trendTV.poster_path}
                    alt=""
                    className="h-96 w-full overflow-y-hidden bg-center bg-cover ease-in-out group-hover:scale-105 duration-300"
                  />
                  <div className="h-44">
                    <div className=" text-white font-semibold text-xl flex justify-between items-center p-4">
                      <h3 className="h-2">{trendTV.name}</h3>
                      <span
                        className={`bg-black p-2 rounded font-bold ${colorClass} items-center text-center`}
                      >
                        {trendTV.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <div className="absolute bottom-0">
                      <p className="p-4 text-white text-xl">
                        Relese Date : {trendTV.first_air_date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
