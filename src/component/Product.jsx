import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const Product = ({ products }) => {
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth<600?20:25,
        value:2.5,
        isHalf:true,

    }
  return (
    <Link to={'/'} className="group border border-[#c4c6d3] relative block overflow-hidden w-80 rounded-lg">
      {/* <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button> */}

      <img
        src={products.images[0].url}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <div>
          <ReactStars {...options} /><span> (256 Review) </span>
        </div>

        <h3 className="mt-4 text-lg font-medium text-gray-900">{products.name}</h3>

        <p className="mt-1.5 text-sm text-gray-700">{products.price}</p>

        <form className="mt-4">
          <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
};

export default Product;
