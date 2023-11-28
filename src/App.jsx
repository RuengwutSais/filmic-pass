import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavbarComponent from "./component/navbar";
import Home from "./component/movie-section";
import MovieListMain from "./component/movie-list-main";
import SerieListMain from "./component/serie-list-main";
import SearchResults from "./component/search-result";
import BeatLoader from "react-spinners/BeatLoader";

const ACCESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmEzZDVlZTUwMTg3ZWUxOTVkODgyZGM2YzNhZmE0MSIsInN1YiI6IjY1NWRlZTU2N2YyZDRhMDBlYTI1YWZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OPkonx5pj5BAUpl_HnceE3unt25MQgJDUCXEwX6Vsbk";
const AUTHEN_API = "https://api.themoviedb.org/3/authentication";

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [playing, setPlaying] = useState([]);
  const [onair, setOnair] = useState([]);
  const [trendTV, setTrendTV] = useState([]);
  const [trendMovie, setTrendMovie] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: ACCESS_TOKEN,
          },
        };

        const response = await axios.get(AUTHEN_API, options);
        setData(response.data);

        // Fetch movies
        axios
          .get("https://api.themoviedb.org/3/discover/movie", {
            params: {
              include_adult: false,
              include_null_first_air_dates: false,
              language: "en-US",
              page: 1,
              sort_by: "vote_average.desc",
            },
            ...options,
          })
          .then((movieResponse) => {
            setMovies(movieResponse.data.results);
            console.log("Movies:", movieResponse.data.results);
          })
          .catch((error) => {
            console.error("Error fetching movies:", error);
          });

        // Fetch TV shows
        axios
          .get("https://api.themoviedb.org/3/discover/tv", {
            params: {
              include_adult: false,
              include_null_first_air_dates: false,
              language: "en-US",
              page: 1,
              sort_by: "vote_average.desc",
            },
            ...options,
          })
          .then((tvResponse) => {
            setSeries(tvResponse.data.results);
            console.log("TV Shows:", tvResponse.data.results);
          })
          .catch((error) => {
            console.error("Error fetching TV shows:", error);
          });

        // Fetch Now playing Movies
        axios
          .get("https://api.themoviedb.org/3/movie/now_playing", {
            params: {
              language: "en-US",
              page: 1,
            },
            ...options,
          })
          .then((playingResponse) => {
            setPlaying(playingResponse.data.results);
            console.log("Now Playing:", playingResponse.data.results);
          })          
          .catch((error) => console.error(error));

          axios
          .get("https://api.themoviedb.org/3/tv/on_the_air", {
            params: {
              language: "en-US",
              page: 1,
            },
            ...options,
          })
          .then((onairResponse) => {
            setOnair(onairResponse.data.results);
            console.log("Now On Air:", onairResponse.data.results);
          })          
          .catch((error) => console.error(error));

          // Trending Movies

          axios
          .get("https://api.themoviedb.org/3/trending/movie/week", {
            params: {
              language: "en-US",
              page: 1,
            },
            ...options,
          })
          .then((trendMovieResponse) => {
            setTrendMovie(trendMovieResponse.data.results);
            console.log("Trending Movies:", trendMovieResponse.data.results);
          })          
          .catch((error) => console.error(error));

          axios
          .get("https://api.themoviedb.org/3/trending/tv/week", {
            params: {
              language: "en-US",
              page: 1,
            },
            ...options,
          })
          .then((trendTVResponse) => {
            setTrendTV(trendTVResponse.data.results);
            console.log("Trending Series:", trendTVResponse.data.results);
          })          
          .catch((error) => console.error(error));

      } 
      catch (err) {
        setError(err);
      } 
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      if (searchTerm.trim() === "") {
        setSearchResults([]);
        console.log("Search term is empty");
        return;
      }

      const movieResponse = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            query: searchTerm,
            language: "en-US",
            page: 1,
          },
          headers: {
            accept: "application/json",
            Authorization: ACCESS_TOKEN,
          },
        }
      );

      const seriesResponse = await axios.get(
        "https://api.themoviedb.org/3/search/tv",
        {
          params: {
            query: searchTerm,
            language: "en-US",
            page: 1,
          },
          headers: {
            accept: "application/json",
            Authorization: ACCESS_TOKEN,
          },
        }
      );

      const combinedResults = [
        ...movieResponse.data.results,
        ...seriesResponse.data.results,
      ];

      setSearchResults(combinedResults);
      console.log("Search Results:", combinedResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center absolute">
        <BeatLoader color="#fc2444" loading speedMultiplier={0.5} />
      </div>
    );
  }

  if (error) {
    return console.log(error.massage);
  }

  return (
    <Router>
      <>
        <NavbarComponent onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home playing={playing} onair = {onair} trendMovie={trendMovie} trendTV={trendTV} />} />
          <Route path="/movies" element={<MovieListMain movies={movies} />} />
          <Route path="/series" element={<SerieListMain series={series} />} />
          <Route
            path="/search"
            element={<SearchResults searchResults={searchResults} />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
