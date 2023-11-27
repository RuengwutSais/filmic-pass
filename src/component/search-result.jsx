/* eslint-disable react/prop-types */
import noImage from "../assets/no-img.png";
import BeatLoader from "react-spinners/BeatLoader";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const SearchResults = ({ searchResults }) => {
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
    <>
      {searchResults.length === 0 ? (
        <div className="h-screen w-full flex items-center justify-center absolute">
          <BeatLoader color="#fc2444" loading speedMultiplier={0.5}/>
        </div>
      ) : (
        <main className="flex flex-wrap justify-center m-4">
          {searchResults.map((result) => {
            const name = result.name || result.title;
            const releaseDate = result.first_air_date || result.release_date;

            const colorClass = getColorClass(result.vote_average);

            return (
              <div
                id="movie"
                className="w-96 m-4 rounded shadow-md bg-gray relative overflow-hidden cursor-pointer group"
                key={result.id}
              >
                {result.poster_path ? (
                  <img
                    src={IMAGE_URL + result.poster_path}
                    alt=""
                    className="w-full overflow-y-hidden group-hover:scale-110 ease-in-out duration-300 object-cover"
                  />
                ) : (
                  <img
                    src={noImage}
                    alt=""
                    className="w-full overflow-y-hidden group-hover:scale-110 ease-in-out duration-300 object-cover"
                  />
                )}
                <div className="text-white font-semibold text-xl flex justify-between p-4 items-center">
                  <h3>{name}</h3>
                  <span
                    className={`bg-black p-2 rounded font-bold ${colorClass} w-12 items-center text-center`}
                  >
                    {result.vote_average.toFixed(1)}
                  </span>
                </div>
                <p className="p-4 text-white text-xl">
                  Relese Date : {releaseDate}
                </p>

                <div
                  className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-52 overflow-y-scroll scroll-smooth"
                >
                  <h3 className="font-bold text-xl">Overview</h3>
                  <div className=" text-justify">{result.overview}</div>
                </div>
              </div>
            );
          })}
        </main>
      )}
    </>
  );
};

export default SearchResults;