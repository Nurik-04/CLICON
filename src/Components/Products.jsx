import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import bannerImg from "../assets/banner.jpg";
import { data } from "./data";

const Products = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="mt-20">
      <div className="container mx-auto grid grid-cols-12 gap-6">

        {/* LEFT BANNER */}
        <div
          data-aos="fade-right"
          className="col-span-3 bg-yellow-300 p-8 rounded-xl flex flex-col justify-between"
        >
          <div>
            <p className="text-sm text-gray-700">
              COMPUTER & ACCESSORIES
            </p>

            <h2 className="text-3xl font-bold mt-2">
              32% Discount
            </h2>

            <p className="text-gray-600 mt-2">
              For all electronics products
            </p>

            <div className="mt-6 bg-white px-4 py-2 inline-block rounded">
              ENDS OF CHRISTMAS
            </div>

            <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              SHOP NOW →
            </button>
          </div>

          <img
            src={bannerImg}
            className="w-full mt-6"
            alt=""
          />
        </div>

        {/* PRODUCTS */}
        <div className="col-span-9">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Featured Products
            </h2>

            <ul className="flex gap-4 text-sm text-gray-500">
              <li className="text-black cursor-pointer">
                All Product
              </li>
              <li className="cursor-pointer hover:text-black">
                Smart Phone
              </li>
              <li className="cursor-pointer hover:text-black">
                Laptop
              </li>
              <li className="cursor-pointer hover:text-black">
                Headphone
              </li>
              <li className="cursor-pointer hover:text-black">
                TV
              </li>
            </ul>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-4 gap-6">

            {data.map((item) => (

              <div
                key={item.id}
                data-aos="zoom-in"
                className="border rounded-xl p-4 hover:shadow-lg transition group"
              >

                {/* IMAGE */}
                <div className="relative">

                  <img
                    src={item.img}
                    className="mx-auto h-36 object-contain"
                    alt=""
                  />

                  {/* ICONS */}
                  <div className="
                  absolute right-2 top-2 flex flex-col gap-2
                  opacity-0 translate-x-3 pointer-events-none
                  group-hover:opacity-100 group-hover:translate-x-0
                  group-hover:pointer-events-auto
                  transition duration-300">

                    <button className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white">
                      <FaRegEye />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white">
                      <PiShoppingCartSimpleBold />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white">
                      <FaRegHeart />
                    </button>

                  </div>
                </div>

                {/* STAR */}
                <p className="mt-4 text-orange-500">
                  {item.star}
                </p>

                {/* TEXT */}
                <p className="text-sm mt-2 text-gray-700">
                  {item.text}
                </p>

                {/* PRICE */}
                <p className="text-blue-500 font-semibold mt-2">
                  {item.prais}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;
