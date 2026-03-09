import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rasm1 from "../assets/oq nut slider.png";
import rasm2 from "../assets/SmartPhone  slider.png";
import rasm3 from "../assets/Headphones slider.png";
import rasm4 from "../assets/Accessories  slider.png";
import rasm5 from "../assets/Camera & Photo slider.png";
import rasm6 from "../assets/TV & Homes  slider.png";

const Slaider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4, // 3 tadan ko'ra 4 ta chiroyliroq chiqadi (ekranga qarab)
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 800,
        cssEase: "linear",
        // Responsive qismi (Telefonlarda 1 ta yoki 2 ta ko'rsatish uchun)
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const categories = [
        { title: "Computer & Laptop", img: rasm1 },
        { title: "SmartPhone", img: rasm2 },
        { title: "Headphones", img: rasm3 },
        { title: "Accessories", img: rasm4 },
        { title: "Camera & Photo", img: rasm5 },
        { title: "TV & Homes", img: rasm6 },
    ];

    return (
        <main className="py-10 ">
            <div className="container mx-auto px-4">
                {/* W-FULL va overflow-hidden slider to'g'ri ishlashi uchun muhim 
                */}
                <div className="w-full overflow-hidden">
                    <Slider {...settings}>
                        {categories.map((item, index) => (
                            <div key={index} className="px-2"> {/* Slaydlar orasida masofa bo'lishi uchun px-2 */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all hover:border-orange-500 hover:shadow-md cursor-pointer h-full">
                                    <div className="w-32 h-32 flex items-center justify-center mb-4">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </main>
    );
};

export default Slaider;