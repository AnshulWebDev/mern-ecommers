import React from "react";
import playStore from "../../images/playstore.png";
import appStore from "../../images/Appstore.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 flex md:flex-row flex-col space-y-9 md:space-y-0  font-roboto">
      <div className="flex items-center justify-center md:w-1/5">
        <div className="text-center flex flex-col items-center">
          <h4 className="font-medium text-lg">DOWNLOAD OUR APP</h4>
          <img
            src={playStore}
            alt="playstore"
            className="w-28 my-4 cursor-pointer"
          />
          <img src={appStore} alt="Appstore" className="w-28 cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center justify-center md:w-3/5">
        <div className="text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            <span className="text-[#3334A8]">SUPER</span>
            <span className="text-[#FF0F7D]">MARKET</span>
          </p>
          <p className="max-w-3xl mx-auto text-sm">
            High Quality is our first priority
          </p>
          <p className="text-sm mt-2">
            Copyrights 2023 &copy;{" "}
            <Link
              to={"https://www.anshuldev.com"}
              target="_blank"
              className=" hover:text-slate-300"
            >
              Anshul Vishwakarma
            </Link>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-1/5">
        <div className="text-center flex flex-col ">
          <h4 className="font-medium text-2xl underline">Follow Us</h4>
          <div className=" space-x-3 flex md:flex-col">
            <Link
              to={"https://www.linkedin.com/in/anshul-webdev"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#0A66C2]"
            >
              LinkedIn
            </Link>
            <Link
              to={"https://www.instagram.com/wassupanshul"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#E14451]"
            >
              Instagram
            </Link>
            <Link
              to={"https://twitter.com/anshul_wdev"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#1A8CD8]"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
