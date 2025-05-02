import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DemoSection() {
  const cards = [
    { img: "/images/demo/vcard12-1.png" },
    { img: "/images/demo/vcard13-1.png" },
    { img: "/images/demo/vcard14-1.png" },
    { img: "/images/demo/vcard15-1.png" },
    { img: "/images/demo/vcard16-1.png" },
    { img: "/images/demo/vcard17-1.png" },
    { img: "/images/demo/vcard22-1.png" },
  ];

  return (
    <section className="bg-[#F3FBFC] py-16 relative">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sectionbg1.png')" }}
      >
        <div className="flex flex-col h-full bg-black bg-opacity-0 text-black">
          <h2 className="text-3xl text-center text-gray-800 pt-12 pb-8">
            Design Your Identity with an Online Visiting Card! <br />
            Choose from 25+ templates.
          </h2>

          <div className="relative px-8">
            {/* Navigation Arrows */}
            <div className="left-20 z-10 absolute top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 cursor-pointer">
              <img src="images/icons/arrow-left.svg" alt="Prev" />
            </div>
            <div className="right-20 z-10 absolute top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 cursor-pointer">
              <img src="images/icons/arrow-right.svg" alt="Next" />
            </div>
            <div className="w-full max-w-6xl mx-auto px-4">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={10}
                    slidesPerView={5} 
                    breakpoints={{
                        640: { slidesPerView: 2.5 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4.2 },
                    }}
                    className="features-swiper"
                >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                    <div className="transform scale-90 md:scale-90 lg:scale-75 transition-transform duration-500 rounded-xl overflow-hidden shadow-md bg-white cursor-pointer select-none">
                    <img
                        src={card.img}
                        alt={`Slide ${index}`}
                        className="w-full h-auto object-contain rounded-lg"
                    />
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
          </div>

          {/* Optional View More Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
