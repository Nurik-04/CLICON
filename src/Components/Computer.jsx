import React from "react";
import { data } from "./data";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Computer = () => {
    return (
        <section>
            <div className="container flex">
                <div className="">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                            Computer Accessories
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
                    <div className="grid grid-cols-4 gap-6">
                        {data.map((el) => (
                            <div
                                key={el.id}
                                className="border rounded-xl p-4 hover:shadow-lg transition group"
                            >
                                <div className="relative">
                                    <img
                                        src={el.img}
                                        className="mx-auto h-36 object-contain"
                                        alt=""
                                    />

                                    {/* ICONS */}
                                    <div
                                        className="
                                                      absolute right-2 top-2 flex flex-col gap-2
                                                      opacity-0 translate-x-3 pointer-events-none
                                                      group-hover:opacity-100 group-hover:translate-x-0
                                                      group-hover:pointer-events-auto
                                                      transition duration-300"
                                    >
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
                                    {el.star}
                                </p>

                                {/* TEXT */}
                                <p className="text-sm mt-2 text-gray-700">
                                    {el.text}
                                </p>

                                {/* PRICE */}
                                <p className="text-blue-500 font-semibold mt-2">
                                    {el.prais}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/*  */}
                <div>
                    <div className="bg-[#fdf3a7] p-8 rounded-lg text-center shadow-md mb-8">
                        {/* Earbuds rasmi */}
                        <div className="mb-6">
                            <img
                                src="path/to/earbuds.png" // Earbuds rasmiga yo'lni bu yerga kiriting
                                alt="Xiaomi True Wireless Earbuds"
                                className="w-48 h-auto mx-auto"
                            />
                        </div>

                        {/* Sarlavha va Tavsif */}
                        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3">
                            Xiaomi True Wireless Earbuds
                        </h2>
                        <p className="text-[#666666] mb-6">
                            Escape the noise, It’s time to hear the magic with
                            Xiaomi Earbuds.
                        </p>

                        {/* Narxi */}
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="text-[#666666]">Only for:</span>
                            <span className="text-xl font-bold text-[#1a1a1a] bg-white px-4 py-2 rounded-lg shadow-inner">
                                $299 USD
                            </span>
                        </div>

                        {/* Tugma */}
                        <button className="bg-[#ff8533] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#e67300] transition duration-300">
                            SHOP NOW →
                        </button>
                    </div>
                    <div className="bg-[#1a4a6e] p-8 rounded-lg text-center shadow-md">
                        {/* Sarlavha va Tavsif */}
                        <h2 className="text-4xl font-extrabold text-white mb-3">
                            <span className="block text-2xl font-semibold mb-1">
                                SUMMER SALES
                            </span>
                            37% DISCOUNT
                        </h2>
                        <p className="text-white mb-6">
                            only for{" "}
                            <span className="font-semibold text-[#f9e79f]">
                                SmartPhone
                            </span>{" "}
                            product.
                        </p>

                        {/* Tugma */}
                        <button className="bg-[#33a1ff] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#0080ff] transition duration-300">
                            SHOP NOW →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Computer;
