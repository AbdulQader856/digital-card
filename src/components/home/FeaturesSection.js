import {FeatureSlider} from "../ui/general/SwiperSlider";
import LottiePlayer from "../ui/general/LottiePlayer";

export default function FeaturesSection() {
  const processes = [
    { title: "Create Your Card", lottieUrl: "https://lottie.host/7666cde5-e5d8-4348-88fc-3d7798bff6c5/F4nxbYiqD6.lottie", description: "Dive into the fun of designing your digital visiting card! Choose colors, add details, and let your creativity flow to craft a unique and personal digi business card." },
    { title: "Select Template", lottieUrl: "https://lottie.host/745efd5a-d074-4a4d-a726-4b5250450d07/bwMjRzOjUB.lottie", description: "Explore various templates to design your business card online. Choose the one that fits your style and needs, and start designing the card with ease." },
    { title: "Activate Your Card", lottieUrl: "https://lottie.host/55f5f704-3cef-4e5d-86e3-6eb7fe26dc26/F3iZZhtrW5.lottie", description: "Make your digital business card fully functional with just a click! Activate it and complete the payment to unlock all features and start using it." },
    { title: "View Your Card", lottieUrl: "https://lottie.host/639b69f0-f69e-40f4-a7fb-efba654543a5/xfA80Ejt3w.lottie", description: "Check out your digital biz card in detail. Review the design and content to ensure everything is perfect before sharing or using your digi business card." },
  ];

  return (
    <section id="features" className="bg-[#F3FBFC] pt-20 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Section Intro */}
        <h2 className="text-3xl font-bold mb-5 text-center">
          Best Digital Business Card Maker
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          Easily create digital business cards for yourself or your team using Designhill’s digital business card maker tool. <br />
          Impress your contacts and capture more leads with a sleek and professional card.
        </p>

        {/* Flex Section */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
              What is Digital Business Card?
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              A virtual business card is more than just a contact-sharing tool; it’s a powerful personal branding asset.
              Each time you share it with a client, prospect, or customer, it helps communicate who you are and what business you represent.
              <br /><br />
              They provide all the necessary contact details, making it easy for others to reach you. Unlike traditional paper cards, digital cards are affordable, convenient, and eco-friendly. You can customize the background, layout, and instantly share your card.
              <br /><br />
              The process is simple and quick. Start sharing and build your brand identity instantly.
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-[#f5821f] to-[#f15a24] text-white px-6 py-3 rounded hover:bg-orange-700 inline-block"
            >
              Live Demo
            </a>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/feature.png"
              alt="Card Preview"
              className="w-[250px] sm:w-[300px] md:w-[450px] lg:w-[500px]"
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="relative pt-10 pb-10 z-10">
          <h2 className="relative text-3xl mb-5 text-center z-10">
            Key Highlights of Your Digital Visiting Card
          </h2>
          <p className="relative text-gray-600 mb-12 text-center max-w-3xl mx-auto z-10">
            Transform your networking game with our best digital business card! Share easily, connect seamlessly,<br />
            and stand out with interactive designs of our digital visiting cards.<br />
            Your digital identity, now more vibrant and connected than ever with Digibcard!
          </p>
          <div className="px-4 sm:px-6 lg:px-20">
            <FeatureSlider />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Process Section */}
        <div id="process" className="relative z-10 pt-16">
          <h2 className="text-3xl mb-5 text-center">
            Make Your Business Card Online: in 4 Easy Steps
          </h2>
          <div className="mt-2 mb-10 flex justify-center">
            <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
            <span className="w-2 h-1 bg-orange-400 rounded"></span>
            <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 z-10">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-6 sm:p-8"
            >
              <LottiePlayer src={process.lottieUrl} width={100} height={100} />
              <h3 className="text-xl font-semibold mt-3 mb-1">0{index + 1}</h3>
              <p className="text-lg font-medium text-gray-800">{process.title}</p>
              <p className="text-sm text-gray-600 mt-2">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
