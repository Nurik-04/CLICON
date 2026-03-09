import React from "react";
import homepodImg from "../assets/Kalonka.png";
import phoneImg from "../assets/Xiomiy.png";

const Banner = () => {
    return (
        <section className="py-10">
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 px-4 md:grid-cols-2">
                <article className="flex min-h-[230px] items-center justify-between overflow-hidden rounded-sm bg-[#f1f2f4] px-6 py-7">
                    <div className="max-w-[230px]">
                        <span className="inline-block bg-[#2da5f3] px-3 py-1 text-[10px] font-bold uppercase text-white">
                            Introducing
                        </span>
                        <h2 className="mt-3 text-[36px] font-semibold leading-[1.1] text-[#191c1f]">
                            New Apple
                            <br />
                            Homepod Mini
                        </h2>
                        <p className="mt-3 text-sm leading-5 text-[#5f6c72]">
                            Jam-packed with innovation, HomePod mini delivers
                            unexpectedly.
                        </p>
                        <button className="mt-5 inline-flex items-center gap-2 bg-[#fa8232] px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#f06d17]">
                            Shop now
                            <span aria-hidden="true">-&gt;</span>
                        </button>
                    </div>
                    <img
                        src={homepodImg}
                        alt="Apple Homepod Mini"
                        className="h-[190px] w-[190px] object-contain"
                    />
                </article>

                <article className="relative flex min-h-[230px] items-center justify-between overflow-hidden rounded-sm bg-[#191c1f] px-6 py-7">
                    <div className="max-w-[240px]">
                        <span className="inline-block bg-[#efd33d] px-3 py-1 text-[10px] font-bold uppercase text-[#191c1f]">
                            Introducing new
                        </span>
                        <h2 className="mt-3 text-[36px] font-semibold leading-[1.1] text-white">
                            Xiaomi Mi 11 Ultra
                            <br />
                            12GB+256GB
                        </h2>
                        <p className="mt-3 text-sm leading-5 text-[#adb7bc]">
                            *Data provided by internal laboratories. Industry
                            measurement.
                        </p>
                        <button className="mt-5 inline-flex items-center gap-2 bg-[#fa8232] px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#f06d17]">
                            Shop now
                            <span aria-hidden="true">-&gt;</span>
                        </button>
                    </div>

                    <img
                        src={phoneImg}
                        alt="Xiaomi Mi 11 Ultra"
                        className="h-50 w-40 object-contain"
                    />

                    <span className="absolute right-6 top-3 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#2da5f3] text-xl font-semibold text-white">
                        $590
                    </span>
                </article>
            </div>
        </section>
    );
};

export default Banner;
