import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product";
import Metadata from "./layout/Metadata";
import { getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  const product = {
    name: "Blue Tshirt",
    images: [
      {
        url: "https://5.imimg.com/data5/VJ/MP/AK/SELLER-14071010/unicolr-formal-blue-shirt-1000x1000.jpeg",
      },
    ],
    price: "$300",
    _id: "bluetishirt300",
  };
  return (
    <Fragment>
      <Metadata title="SUPERMARKET" />
      <div className=" font-roboto min-h-screen bg-[#E8EAF6] flex flex-col text-center items-center justify-center banner">
        <p className=" font-light text-xl">Welcome to SUPERMARKET</p>
        <h1 className=" m-5 text-2xl sm:text-4xl font-semibold">
          FIND AMAZING PRODUCTS BELOW
        </h1>

        <a href="#container">
          <button className=" flex items-center gap-1 ">
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className=" text-center  text-[rgb(0,0,0,0.7)] text-2xl border-b-2 my-7 w-fit mx-auto px-4">
        Featured Products
      </h2>

      <div
        id="container"
        className="flex  flex-wrap gap-5 justify-center items-center "
      >
        <Product products={product} />
        <Product products={product} />
        <Product products={product} />
        <Product products={product} />
        <Product products={product} />
        <Product products={product} />
        <Product products={product} />
        <Product products={product} />
      </div>
    </Fragment>
  );
};

export default Home;
