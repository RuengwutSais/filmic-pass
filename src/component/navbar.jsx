/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import filmLogo from "../assets/video-camera.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const NavbarComponent = ({ onSearch }) => {
  const Links = [
    { linkId: 1, name: "Home", link: "/" },
    { linkId: 2, name: "Movies", link: "/movies" },
    { linkId: 3, name: "Series", link: "/series" },
  ];

  const [mobileToggle, setMobileToggle] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchTerm);
    navigate("/search");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  return (
    <header className="bg-black w-full sticky top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <a className="text-white font-bold text-2xl cursor-pointer flex items-center gap-1" href="/">
            <img src={filmLogo} alt="film-logo" className="h-8 w-8" />
            <span>
              <h1 className="font-bold">FilmicPass</h1>
            </span>
        </a>

        <div
          onClick={() => setMobileToggle(!mobileToggle)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white hover:text-red"
        >
          {mobileToggle ? <XMarkIcon /> : <Bars3BottomLeftIcon />}
        </div>

        <ul
          className={`md:flex md:items-center p-4 md:p-0 md:pb-0 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            mobileToggle ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.linkId}
              className="md:ml-8 md:my-0 my-7 font-semibold text-xl text-white hover:text-red transition-all duration-100"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
          <div className="flex items-center bg-midblack rounded-full md:static md:ml-10">
            <input
              id="search"
              className="appearance-none bg-midblack border-none rounded-full rounded-r-none w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-midblack"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="flex-shrink-0 text-white py-2 md:ml-2 w-12 bg-transparent items-center justify-center rounded-full rounded-l-none hover:text-red transition-all hover:transform hover:scale-125 duration-100"
              type="button"
              onClick={handleSearch}
            >
              <span className="item-center">
                <FontAwesomeIcon className="md:px-2" icon={faMagnifyingGlass} />
              </span>
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default NavbarComponent;
