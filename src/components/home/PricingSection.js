// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from "swiper/modules"; //
// import 'swiper/css';

// export default function PricingSection() {
//     const cards = [
//         {
//             title: "1 Year",
//             subtitle: "Storage Limit : 500 MB",
//             original: "₹799",
//             discounted: "₹599",
//         },
//         {
//             title: "2 Year",
//             subtitle: "Storage Limit : 500 MB",
//             original: "₹999",
//             discounted: "₹799",
//         },
//         {
//             title: "3 Year",
//             subtitle: "Storage Limit : 500 MB",
//             original: "₹1199",
//             discounted: "₹999",
//         },
//     ];

//     const features = [
//         "25+ Templates", "Services", "Testimonials", "Hide Branding", "Enquiry Form",
//         "Social Links", "Password Protection", "Custom CSS", "Custom JS", "Custom Fonts",
//         "Products", "Appointments", "Gallery", "Analytics", "SEO", "Blog", "Affiliation",
//         "Custom QR Code", "Instagram Feed", "Iframes",
//     ];

//     const Card = ({ card }) => (
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center mx-2">
//             <h3 className="text-3xl font-semibold pt-3 pb-5 mb-1 text-black">{card.title}</h3>
//             <p className="text-xl pb-3 font-bold text-gray-400">{card.subtitle}</p>
    
//             <div className="bg-[#E3F6FD] inline-block rounded-full py-2 px-5 mt-4 mb-6">
//                 <span className="text-gray-500 line-through text-xl mr-2">{card.original}</span>
//                 <span className="text-[#05006D] font-bold text-3xl">{card.discounted}</span>
//             </div>
    
//             <ul className="text-right text-sm text-gray-800 space-y-2 mt-4">
//                 {features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
//                         <svg
//                             className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                         {feature}
//                     </li>
//                 ))}
//             </ul>
    
//             <div className="pt-10 pb-4">
//                 <a href="#" className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700">
//                     View Pricing
//                 </a>
//             </div>
//         </div>
//     );

//     return (
//         <section id="pricing" className="bg-[#F3FBFC] py-16">
//             <div className="max-w-7xl mx-auto px-4">
//                 <h2 className="text-4xl text-center text-gray-800 pt-12 pb-8">
//                     Choose a plan that's right for you <br />
//                     & design your business card online easily
//                 </h2>

//                 {/* 🖥️ Desktop Grid View */}
//                 <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//                     {cards.map((card, index) => (
//                         <Card key={index} card={card} />
//                     ))}
//                 </div>

//                 {/* 📱 Mobile Carousel View */}
//                 <div className="lg:hidden mt-10">
//                     <Swiper
//                       modules={[Autoplay]}
//                       spaceBetween={20}
//                       slidesPerView={1}
//                       loop={true}
//                       autoplay={{
//                         delay: 3000,
//                         disableOnInteraction: false,
//                       }}
//                       className="block lg:hidden px-4"
//                     >
//                         {cards.map((card, index) => (
//                             <SwiperSlide key={index}>
//                                 <Card card={card} />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </section>
//     );
// }


'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { HiCheckCircle } from "react-icons/hi";
import 'swiper/css';

export default function PricingSection() {
  const cards = [
    { title: "1 Year", subtitle: "Storage Limit : 500 MB", original: "₹799", discounted: "₹599" },
    { title: "2 Year", subtitle: "Storage Limit : 500 MB", original: "₹999", discounted: "₹799" },
    { title: "3 Year", subtitle: "Storage Limit : 500 MB", original: "₹1199", discounted: "₹999" },
  ];

  const features = [
    "25+ Templates", "Services", "Testimonials", "Hide Branding", "Enquiry Form",
    "Social Links", "Password Protection", "Custom CSS", "Custom JS", "Custom Fonts",
    "Products", "Appointments", "Gallery", "Analytics", "SEO", "Blog", "Affiliation",
    "Custom QR Code", "Instagram Feed", "Iframes",
  ];

  const Card = ({ card }) => (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 mx-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center w-full max-w-sm mx-auto">
      {/* Header */}
      <div>
        <h3 className="text-3xl font-bold text-gray-800">{card.title}</h3>
        <p className="text-lg text-gray-500 mt-1">{card.subtitle}</p>

        {/* Price Display */}
        <div className="mt-5 mb-6 rounded-md bg-blue-100 py-2">
          <span className="text-gray-400 text-xl line-through mr-2">{card.original}</span>
          <span className="text-4xl font-bold text-indigo-700">{card.discounted}</span>
        </div>
      </div>

      {/* Features - vertically centered in remaining space */}
      <div className="flex-grow flex items-center justify-center">
        <ul className="grid grid-cols-1 gap-3 text-base text-gray-800 mt-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <HiCheckCircle className="text-green-500 w-6 h-6 shrink-0" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="pt-8">
        <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold inline-block">
          View Pricing
        </a>
      </div>
    </div>
  );

  return (
    <section id="pricing" className="bg-[#F3FBFC] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl text-gray-800 leading-snug mb-4">
            Choose a plan that's right for you <br/> & design your business card online easily
        </h2>

        {/* 💻 Grid for Desktop */}
        <div className="hidden lg:flex justify-center gap-8 mt-10">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

        {/* 📱 Carousel for Mobile */}
        <div className="lg:hidden mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="px-4"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
