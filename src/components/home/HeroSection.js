export default function HeroSection() {
  return (
    <section id="home" className="bg-white-100 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-3xl font-bold mb-4">
            BEST Digital Business Card - DigiBcard
          </h1>
          <h2 className="text-1.5xl md:text-1.5xl mb-4">
            Create a Digital Business Card/Mini Website for Your Business
          </h2>
          <p className="text-gray-700 mb-6">
            Elevate your professional image with a modern digital visiting card that doubles as a mini-website. Impress clients and prospects effortlessly while showcasing your brand in style.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700">
              View Pricing
            </a>
            <a href="#" className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700">
              Create Your Business Card
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="relative flex justify-center items-center">
            <img
              src="/images/digibcard-phone-1.png"
              alt="Card Preview Left"
              className="w-[200px] pt-10 md:w-[280px] left-0 top-0 md:left-10 z-10 "
            />
            <img
              src="/images/digibcard-phone-2.png"
              alt="Card Preview Center"
              className="w-[200px] pt-10 md:w-[280px] md:top-10 z-10 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
