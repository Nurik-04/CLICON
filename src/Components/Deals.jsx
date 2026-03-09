import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../assets/hero1.png"; // PS5 yoki asosiy rasm
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import reiting from "../assets/Rating.png";
import { FaRegEye } from "react-icons/fa6";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

const Deals = () => {
    useEffect(() => {
            AOS.init({
                duration: 1200,
                once: true,
                easing: "ease-in-out",
            });
        }, []);
    const data = [
        {
            id: 1,
            img: hero1,
            text: "Bose Sport Earbuds - Wireless Earphones...",
            bold: "$2,300",
        },
        {
            id: 2,
            img: hero2,
            text: "Simple Mobile 4G LTE Prepaid Smartphone",
            bold: "$220",
        },
        {
            id: 3,
            img: hero3,
            text: "4K UHD LED Smart TV with Chromecast",
            bold: "$1,50",
        },
        {
            id: 4,
            img: hero1,
            text: "Dell Optiplex 7000x7480 All-in-One",
            bold: "$299",
        },
        {
            id: 5,
            img: hero2,
            text: "Portable Washing Machine, 11lbs capacity",
            bold: "$70",
        },
        {
            id: 6,
            img: hero3,
            text: "2-Barrel Carburetor Carb 2100 Engine",
            bold: "$160",
        },
        {
            id: 7,
            img: hero2,
            text: "Simple Mobile 4G LTE Prepaid Smartphone",
            bold: "$220",
        },
        {
            id: 8,
            img: hero3,
            text: "4K UHD LED Smart TV with Chromecast",
            bold: "$1,50",
        },
    ];
    let [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);
    return (
        <main className="py-10 ">
            <div className="container mx-auto px-4">
                {/* Sarlavha qismi */}
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold">Best Deals</h2>
                    <p className="text-sm text-gray-600">Deals ends in</p>
                    <mark className="bg-yellow-300 px-3 py-1 font-mono text-black rounded">
                        {time.toLocaleTimeString("uz-UZ")} 
                    </mark>
                </div>
                {/* ASOSIY SETKA (GRID) */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 border border-gray-200 bg-white         shadow-sm">
                    {/* CHAP TOMONDAGI KATTA MAHSULOT (Row span 2 qatorni egallaydi) */}
                    <div data-aos="fade-right" className="md:col-span-1 lg:col-span-1 border p-6 relative group transition-all hover:shadow-lg ml-">
                        <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">x``
                            <span className="bg-yellow-400 text-[10px] font-bold px-2 py-1 uppercase">
                                32% OFF
                            </span>
                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase w-fit">
                                HOT
                            </span>
                        </div>
                        <div className="h-64 flex items-center justify-center mb-4">
                            <img
                                src={hero1}
                                alt="Main"
                                className="max-h-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="space-y-3">
                            <img src={reiting} alt="rating" className="w-24" />
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                Xbox Series S - 512GB SSD Console with Wireless
                                Controller - EU Versio...
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400 line-through text-sm">
                                    $865.99
                                </span>
                                <span className="text-blue-500 font-bold text-lg">
                                    $442.12
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Games built using the Xbox Series X|S
                                development kit showcase unparalleled load
                                times.
                            </p>
                        </div>
                        {/* Hover bo'lganda chiqadigan tugmalar (Majburiy emas, lekin rasmda bor) */}
                        <div className="mt-4 flex gap-2">
                            <button className="bg-orange-500 text-white flex-1 py-3 text-xs font-bold uppercase rounded-sm">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* O'NG TOMONDAGI KICHIK MAHSULOTLAR */}
                    <div className="md:col-span-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {data.map((el) => (
                            <div
                                key={el.id}
                                data-aos="zoom-in"
                                className="border p-4 group hover:shadow-md transition-all relative hover:rounded-2xl hover:bg-[#00000033] "
                            >
                                <div className="h-32 flex items-center justify-center mb-4">
                                    <img
                                        src={el.img}
                                        alt={el.text}
                                        className="max-h-full object-contain border-b"
                                    />
                                </div>

                                {/* Kichik kartalar uchun overlay tugmalar (Sichqoncha kelsa chiqadi) */}
                                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 ">
                                    <button className="bg-white p-2 rounded-full shadow-lg active:bg-orange-500">
                                        <FaRegHeart />
                                    </button>
                                    <button className= "bg-white active:bg-orange-500 p-2 rounded-full text-black shadow-lg">
                                        <PiShoppingCartSimpleBold />
                                    </button>
                                    <button className="bg-white p-2 rounded-full shadow-lg active:bg-orange-500">
                                        <FaRegEye />
                                    </button>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-[13px] text-gray-700 line-clamp-2 h-10 leading-tight">
                                        {el.text}
                                    </p>
                                    <p className="text-blue-500 font-bold">
                                        {el.bold}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Deals;
