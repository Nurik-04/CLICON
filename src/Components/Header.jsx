import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { PiMapPinLineBold } from "react-icons/pi";

const Header = () => {
    return (
        <header className=" fixed top-0 left-0 right-0 z-999 ">
            <div className="container">
                <nav className="h-45 shadow-md">
                    <div className="header__follow bg-blue-500 h-12 text-white px-10 flex items-center justify-between">
                        <h1 className="">
                            Welcome to Clicon online eCommerce store.
                        </h1>
                        <div className="header__follow__box flex items-center gap-3">
                            <p>Follow us:</p>
                            <FaXTwitter className="animate-bounce" />
                            <FaFacebook className="animate-bounce" />
                            <FaPinterestP className="animate-bounce" />
                            <FaReddit className="animate-bounce" />
                            <FaYoutube className="animate-bounce" />
                            <FaInstagram className="animate-bounce" />
                            <div className="bg-gray-400 w-[1px] h-10"></div>
                            <select className="text-gray-100">
                                <option className="text-gray-500" value="0">
                                    Eng
                                </option>
                                <option className="text-gray-500" value="1">
                                    Rus
                                </option>
                                <option className="text-gray-500" value="2">
                                    Uzb
                                </option>
                            </select>
                            <select className="text-gray-100">
                                <option className="text-gray-500" value="0">
                                    USD
                                </option>
                                <option className="text-gray-500" value="1">
                                    RUB
                                </option>
                                <option className="text-gray-500" value="2">
                                    UZS
                                </option>
                            </select>
                        </div>
                    </div>
                    {/* --------- */}
                    <div className="bg-blue-500 h-17 border-y flex items-center justify-between px-10">
                        <img
                            className="w-35 h-10 animate-pulse"
                            src={logo}
                            alt=""
                        />
                        <div className="w-125 h-10 bg-white rounded-md flex items-center justify-between px-5">
                            <input
                                id="header__input"
                                type="text"
                                placeholder="Search for anything..."
                                className="w-100 rounded-sm "
                            />
                            <button type="submit">
                                <IoSearch className="text-2xl animate-bounce " />
                            </button>
                        </div>
                        <div className="flex gap-4 text-white text-2xl">
                            <PiShoppingCartSimpleBold />
                            <FaRegHeart />
                            <LuUserRound />
                        </div>
                    </div>
                    {/* ---------- */}
                    <div className="h-17 px-10 bg-gray-100 border flex justify-between items-center sticky ">
                        <select className="w-30 h-10 bg-gray-200 border rounded-sm">
                            <option value="0">All Category</option>
                            <option value="1">All Favorite</option>
                            <option value="2">All Korzinka</option>
                        </select>
                        <div className="flex gap-5 font-bold  ">
                            <div className="flex items-center gap-1 hover:text-2xl hover:text-blue-500  duration-500">
                                <PiMapPinLineBold className=" text-2xl" />
                                <p className="text-lg hover:text-xl ">
                                    Track Order
                                </p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-xl hover:text-blue-500  duration-500">
                                <PiArrowsCounterClockwise className=" text-2xl" />
                                <p className="text-lg hover:text-xl ">
                                    Compare
                                </p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-xl hover:text-blue-500  duration-500">
                                <FaHeadphones className=" text-2xl" />
                                <p className="text-lg hover:text-xl ">
                                    Customer Support
                                </p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-xl hover:text-blue-500  duration-500">
                                <IoInformationCircleOutline className=" text-2xl" />
                                <p className="text-lg hover:text-xl ">
                                    Need Help
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 font-bold hover:text-xl hover:text-blue-500 ">
                            <FiPhoneCall className="animate-ping" />
                            <p className="text-lg hover:text-xl duration-500">
                                {" "}
                                +1-202-555-0104
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
// ---------------------------------
