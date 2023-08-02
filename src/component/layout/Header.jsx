import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { BiSearch, BiSolidUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ${
        isScrolled ? "shadow-md sticky top-0 z-50" : ""
      } bg-[#E8EAF6] font-roboto`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </Link>
        <div className="flex sm:order-2">
          <div className="hidden w-32 sm:flex items-center justify-center sm:space-x-2 lg:space-x-4">
            <Link to={"/search"}>
              <BiSearch className=" text-3xl text-black" />
            </Link>

            <Link to={"/cart"}>
              <AiOutlineShoppingCart className="text-2xl text-black" />
            </Link>

            <Link to={"/profile"}>
              <BiSolidUser className="text-2xl text-black" />
            </Link>
          </div>

          <button
            className="sm:hidden absolute top-3 right-4 p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <aside
            className={`sm:hidden fixed top-0 right-0 w-full h-full bg-white border-r border-gray-300 transform transition-all duration-300 ${
              isOpen ? "translate-y-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-end p-2.5 bg-transparent border-gray-300">
              <button
                className="p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 m-4 border-2 py-8 flex flex-col space-y-6 rounded-xl">
              <ul className="space-y-1">
                <li
                  className={`w-full hover:bg-[#E8EAF6] px-2 py-3 rounded-lg ${
                    tab === "/" ? "bg-[#E8EAF6]" : "bg-white"
                  }`}
                >
                  <Link to={"/"} className="text-base font-medium text-black">
                    Home
                  </Link>
                </li>
                <li
                  className={`w-full hover:bg-[#E8EAF6] px-2 py-3 rounded-lg ${
                    tab === "/product" ? "bg-[#E8EAF6]" : "bg-white"
                  }`}
                >
                  <Link
                    to={"/product"}
                    className="text-base font-medium text-black"
                  >
                    Product
                  </Link>
                </li>
                <li
                  className={`w-full hover:bg-[#E8EAF6] px-2 py-3 rounded-lg ${
                    tab === "/contact" ? "bg-[#E8EAF6]" : "bg-white"
                  }`}
                >
                  <Link
                    to={"/contact"}
                    className="text-base font-medium text-black"
                  >
                    Contact
                  </Link>
                </li>
                <li
                  className={`w-full hover:bg-[#E8EAF6] px-2 py-3 rounded-lg ${
                    tab === "/about" ? "bg-[#E8EAF6]" : "bg-white"
                  }`}
                >
                  <Link
                    to={"/about"}
                    className="text-base font-medium text-black"
                  >
                    About
                  </Link>
                </li>
              </ul>

              <div className="flex items-center justify-evenly">
                <Link to={"/search"}>
                  <BiSearch className=" text-3xl text-black" />
                </Link>

                <Link to={"/cart"}>
                  <AiOutlineShoppingCart className="text-2xl text-black" />
                </Link>

                <Link to={"/profile"}>
                  <BiSolidUser className="text-2xl text-black" />
                </Link>
              </div>
            </nav>
          </aside>
        </div>

        <div className="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1">
          <ul className="sm:flex flex-col p-4 sm:p-0 mt-4 font-medium border hidden rounded-lg sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0 ">
            <li>
              <Link
                to={"/"}
                className={`text-base text-black ${
                  tab === "/" ? "font-bold" : "font-medium"
                }`}
                onClick={() => setTab("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/product"}
                onClick={() => setTab("/product")}
                className={`text-base text-black ${
                  tab === "/product" ? "font-bold" : "font-medium"
                }`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={() => setTab("/contact")}
                className={`text-base text-black ${
                  tab === "/contact" ? "font-bold" : "font-medium"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={() => setTab("/about")}
                className={`text-base text-black ${
                  tab === "/about" ? "font-bold" : "font-medium"
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
