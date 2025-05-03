import DemoSlider from "../ui/general/SwiperSlider";

export default function DemoSection() {
  return (
    <section id="demo" className="bg-[#F3FBFC] py-16 relative">
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
                <DemoSlider/>
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
