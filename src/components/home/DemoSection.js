import DemoSlider from "../ui/general/SwiperSlider";

export default function DemoSection() {
  return (
    <section id="demo" className="bg-[#F3FBFC] py-16 relative">
      <div className="flex flex-col h-full bg-black bg-opacity-0 text-black px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center text-gray-800 pt-10 pb-6">
          Design Your Identity with an Online Visiting Card! <br />
          Choose from 25+ templates.
        </h2>

        <div className="relative w-full mx-auto">
          <DemoSlider />
        </div>

        {/* Optional View More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
