/* eslint-disable react/prop-types */

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
  return (
    <>
      <main className="flex flex-wrap justify-center m-4">
        {movies.map((movie) => {
          const colorClass = getColorClass(movie.vote_average);

          return (
            <div
              id="movie"
              className="w-96 m-4 rounded shadow-md bg-gray relative overflow-hidden cursor-pointer group"
              key={movie.id}
            >
              {movie.poster_path ? (
                <img
                  src={IMAGE_URL + movie.poster_path}
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
                <h3>{movie.title}</h3>
                <span
                  className={`bg-black p-2 rounded font-bold ${colorClass} w-12 items-center text-center`}
                >
                  {movie.vote_average}
                </span>
              </div>
              <p className="p-4 text-white text-xl">
                Release Date : {movie.release_date}
              </p>

              <div
                className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-52 overflow-y-scroll scroll-smooth"
              >
                <h3 className="font-bold text-xl">Overview</h3>
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
