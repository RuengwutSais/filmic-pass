/* eslint-disable react/prop-types */

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const SerieListMain = ({ series }) => {
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
        {series.map((serie) => {
          const colorClass = getColorClass(serie.vote_average);

          return (
            <div
              id="movie"
              className="w-96 m-4 rounded shadow-md bg-gray relative overflow-hidden cursor-pointer group"
              key={serie.id}
            >
              <img
                src={IMAGE_URL + serie.poster_path}
                alt=""
                className="w-full overflow-y-hidden group-hover:scale-110 ease-in-out duration-300"
              />
              <div className="text-white font-semibold text-xl flex justify-between p-4 items-center">
                <h3>{serie.name}</h3>
                <span
                  className={`bg-black p-2 rounded font-bold ${colorClass} w-12 items-center text-center`}
                >
                  {serie.vote_average}
                </span>
              </div>
              <p className="p-4 text-white text-xl">
                Relese Date : {serie.first_air_date}
              </p>

              <div
                className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 max-h-full ease-in-out duration-300 translate-y-full 
              group-hover:translate-y-0 h-52 overflow-y-scroll scroll-smooth"
              >
                <h3 className="font-bold text-xl">Overview</h3>
                <div className=" text-justify">{serie.overview}</div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default SerieListMain;
