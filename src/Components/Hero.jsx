import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section className="mt-51">
            <div className="container mx-auto grid grid-cols-3 gap-6">
                {/* LEFT BIG CARD */}
                <div
                    data-aos="fade-right"
                    className="group col-span-2 bg-gray-100 rounded-2xl p-10 flex justify-between items-center
          relative overflow-hidden
          transition duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                    {/* AFTER EFFECT */}
                    <div
                        className="
          absolute inset-0 bg-gradient-to-r from-transparent to-blue-200
          opacity-0 group-hover:opacity-20
          transition duration-500
          "
                    ></div>

                    <div className="relative z-10">
                        <p
                            className="text-blue-500 font-semibold mb-3
            before:content-['']
            before:w-10
            before:h-[2px]
            before:bg-blue-500
            before:inline-block
            before:mr-2"
                        >
                            THE BEST PLACE TO PLAY
                        </p>

                        <h1
                            className="text-5xl font-bold mb-4
            transition duration-300 group-hover:scale-105"
                        >
                            Xbox Consoles
                        </h1>

                        <p className="text-gray-500 mb-6 max-w-md">
                            Save up to 50% on select Xbox games. Get 3 months of
                            PC Game Pass for £2 USD.
                        </p>

                        <button
                            className="
              relative
              bg-orange-500
              text-white
              px-6 py-3
              rounded-lg
              font-semibold
              overflow-hidden
              transition duration-300
              hover:scale-110
              "
                        >
                            <span className="relative z-10">Shop Now →</span>

                            {/* BEFORE EFFECT */}
                            <span
                                className="
              absolute left-0 top-0 w-0 h-full bg-black
              transition-all duration-500
              hover:w-full
              "
                            ></span>
                        </button>
                    </div>

                    <div className="relative z-10">
                        <img
                            src={hero1}
                            className="
              w-64
              transition duration-700
              group-hover:scale-110
              group-hover:rotate-3
              "
                        />

                        <div
                            className="
            absolute top-0 right-0
            bg-blue-500 text-white
            px-5 py-3
            rounded-full
            font-bold
            animate-bounce
            "
                        >
                            $299
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6">
                    {/* TOP CARD */}
                    <div
                        data-aos="fade-left"
                        className="
            group
            bg-black
            text-white
            rounded-2xl
            p-6
            flex
            justify-between
            items-center
            transition duration-500
            hover:scale-105
            hover:shadow-2xl
            "
                    >
                        <div>
                            <p className="text-yellow-400 text-sm">
                                SUMMER SALES
                            </p>

                            <h3 className="text-xl font-bold mb-4">
                                New Google Pixel 6 Pro
                            </h3>

                            <button
                                className="
              bg-orange-500
              px-5 py-2
              rounded-lg
              transition
              hover:bg-orange-600
              "
                            >
                                Shop Now →
                            </button>
                        </div>

                        <img
                            src={hero2}
                            className="
              w-28
              transition duration-500
              group-hover:scale-110
              "
                        />
                    </div>

                    {/* BOTTOM CARD */}
                    <div
                        data-aos="zoom-in"
                        className="
            group
            bg-gray-100
            rounded-2xl
            p-6
            flex
            justify-between
            items-center
            transition duration-500
            hover:-translate-y-2
            hover:shadow-xl
            "
                    >
                        <img
                            src={hero3}
                            className="
              w-28
              transition duration-500
              group-hover:rotate-6
              "
                        />

                        <div>
                            <h3 className="font-bold text-lg">
                                Xiaomi FlipBuds Pro
                            </h3>

                            <p className="text-blue-500 mb-3">$299 USD</p>

                            <button
                                className="
                                        bg-orange-500
                                        text-white
                                        px-4 py-2
                                        rounded-lg
                                        transition
                                        hover:scale-110
                                        "
                            >
                                Shop Now →
                            </button>
                        </div>
                    </div>
                </div>

                {/* FEATURES */}
                <div
                    data-aos="fade-up"
                    className="
                    col-span-3
                    bg-gray-100
                    rounded-2xl
                    p-6
                    flex
                    justify-around
                    mt-4
                    "
                >
                    <div className="hover:scale-110 transition">
                        <h4 className="font-semibold">Fastest Delivery</h4>

                        <p className="text-gray-500 text-sm">Delivery in 24H</p>
                    </div>

                    <div className="hover:scale-110 transition">
                        <h4 className="font-semibold">24 Hours Return</h4>

                        <p className="text-gray-500 text-sm">100% money-back</p>
                    </div>

                    <div className="hover:scale-110 transition">
                        <h4 className="font-semibold">Secure Payment</h4>

                        <p className="text-gray-500 text-sm">
                            Your money is safe
                        </p>
                    </div>

                    <div className="hover:scale-110 transition">
                        <h4 className="font-semibold">Support 24/7</h4>

                        <p className="text-gray-500 text-sm">
                            Live contact/message
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
