/* eslint-disable react/prop-types */
import "../css/navbar.css";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const Home = ({ playing, onair } ) => {
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
    <div className="w-full h-full text-white p-10">
      <h2 className="text-2xl">Now In Theaters</h2>
      <div className="p-4 flex flex-wrap overflow-x-scroll scroll-smooth">
        <div className="flex flex-row">
          {playing.map((play) => {
            const colorClass = getColorClass(play.vote_average);
            return (
                <div
                  id="movie"
                  className="min-w-96 w-96 h-full rounded shadow-md bg-gray relative m-2 mb-2 overflow-hidden items-start justify-start cursor-pointer group"
                  key={play.id}
                >
                  <img
                    src={IMAGE_URL + play.poster_path}
                    alt=""
                    className="w-full overflow-y-hidden group-hover:scale-110 ease-in-out duration-300"
                  />
                  <div className=" text-white font-semibold text-xl flex justify-between p-4 items-center">
                    <h3>{play.title}</h3>
                    <span
                      className={`bg-black p-2 rounded font-bold ${colorClass} w-12 items-center text-center`}
                    >
                      {play.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <p className="p-4 text-white text-xl">
                    Relese Date : {play.release_date}
                  </p>

                  <div
                    className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-52 overflow-y-scroll scroll-smooth"
                  >
                    <h3 className="font-bold text-xl">Overview</h3>
                    <div className=" text-justify">{play.overview}</div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
      <br />
      <h2 className="text-2xl">Now On Air</h2>
      <div className="p-4 flex flex-wrap overflow-x-scroll scroll-smooth">
        <div className="flex flex-row">
          {onair.map((onair) => {
            const colorClass = getColorClass(onair.vote_average);
            return (
                <div
                  id="series"
                  className="min-w-96 w-96 h-full rounded shadow-md bg-gray relative m-2 mb-2 overflow-hidden items-start justify-start cursor-pointer group"
                  key={onair.id}
                >
                  <img
                    src={IMAGE_URL + onair.poster_path}
                    alt=""
                    className="w-full overflow-y-hidden group-hover:scale-110 ease-in-out duration-300"
                  />
                  <div className=" text-white font-semibold text-xl flex justify-between p-4 items-center">
                    <h3>{onair.name}</h3>
                    <span
                      className={`bg-black p-2 rounded font-bold ${colorClass} w-12 items-center text-center`}
                    >
                      {onair.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <p className="p-4 text-white text-xl">
                    Relese Date : {onair.first_air_date}
                  </p>

                  <div
                    className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-52 overflow-y-scroll scroll-smooth"
                  >
                    <h3 className="font-bold text-xl">Overview</h3>
                    <div className=" text-justify">{onair.overview}</div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
    
  );
};

export default Home;
