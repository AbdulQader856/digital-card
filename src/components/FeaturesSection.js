"use client";

import React from "react";
import LottiePlayer from "../components/LottiePlayer";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function FeaturesSection() {
  useEffect(() => {
    // Optional if you're using <script> in layout.tsx
    if (!customElements.get("dotlottie-player")) {
      import("@dotlottie/player-component");
    }
  }, []);

  const cards = [
    { title: "Online Store", img: "/images/laptop.png" },
    { title: "Payment Section", img: "/images/credit-card.png" },
    { title: "Mobile Compatibility", img: "/images/mobile-phone.png" },
    { title: "Enquiry Form", img: "/images/info.png" },
    { title: "Create Your Card", img: "/images/add.png" },
    { title: "Upload PDF Docs", img: "/images/upload.png" },
    { title: "One Click WhatsApp", img: "/images/whatsapp.png" },
    { title: "One Click Email", img: "/images/email.png" },
    { title: "Customers Feedback", img: "/images/feedback.png" },
    { title: "One Click Navigate", img: "/images/navigation.png" },
    { title: "Add to Contacts", img: "/images/contacts.png" },
    { title: "Website & Social Links", img: "/images/link.png" },
    { title: "Share Unlimited", img: "/images/infinity.png" },
    { title: "Easy to Update", img: "/images/sync.png" },
    { title: "Photo Gallery ", img: "/images/gallery.png" },
    { title: "Youtube Video Gallery", img: "/images/youtube.png" },
    { title: "Appointments", img: "/images/appointment.png" },
    { title: "Services", img: "/images/service.png" },
    { title: "Popups", img: "/images/popups.png" },
    { title: "Blogs", img: "/images/blog.png" },
    { title: "Testimonials", img: "/images/customer-review.png" },
    { title: "SEO", img: "/images/s-e-o.png" },
    { title: "Privacy Policy", img: "/images/compliant.png" },
    { title: "Terms & Conditions", img: "/images/terms-and-conditions.png" },
    { title: "CRM Integration", img: "/images/crm.png" },
  ];

  const cardss = [
    { title: "Create Your Card", lottieUrl: "https://lottie.host/7666cde5-e5d8-4348-88fc-3d7798bff6c5/F4nxbYiqD6.lottie", description: "Dive into the fun of designing your digital visiting card! Choose colors, add details, and let your creativity flow to craft a unique and personal digi business card." },
    { title: "Select Template", lottieUrl: "https://lottie.host/745efd5a-d074-4a4d-a726-4b5250450d07/bwMjRzOjUB.lottie", description: "Explore various templates to design your business card online. Choose the one that fits your style and needs, and start designing the card with ease." },
    { title: "Activate Your Card", lottieUrl: "https://lottie.host/55f5f704-3cef-4e5d-86e3-6eb7fe26dc26/F3iZZhtrW5.lottie", description: "Make your digital business card fully functional with just a click! Activate it and complete the payment to unlock all features and start using it." },
    { title: "View Your Card", lottieUrl: "https://lottie.host/639b69f0-f69e-40f4-a7fb-efba654543a5/xfA80Ejt3w.lottie", description: "Check out your digital biz card in detail. Review the design and content to ensure everything is perfect before sharing or using your digi business card." },
  ];

  return (
    <section className="bg-[#F3FBFC] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-5 text-center">Best Digital Business Card Maker</h2>
        <p className="text-gray-600 mb-12 text-center">
          Easily create digital business cards for yourself or your team using Designhill's digital business card maker tool...
        </p>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-5">What is Digital Business Card?</h2>
            <p className="text-gray-600 mb-5">
              A virtual business card is more than just a contact-sharing tool...
              <br/><br/>
              So, how do digital business cards help with branding? ...
              <br/><br/>        
              The process is simple and quick, and as soon as you start sharing your digital business card, you begin building your brand identity.
            </p>
            <div className="flex mb-12">
              <a href="#" className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700">
                Live Demo
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="relative flex justify-center items-center">
              <img
                src="/images/feature.png"
                alt="Card Preview Left"
                className="w-[200px] md:w-[700px] md:top-10 z-10"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-cover bg-center pt-10 pb-10" style={{ backgroundImage: "url('/images/sectionbg1.png')" }}>
          <h2 className="text-3xl mb-5 text-center">Key Highlights of Your Digital Visiting Card</h2>
          <p className="text-gray-600 mb-12 text-center">
          Transform your networking game with our best digital business card! Share easily, connect seamlessly,<br/>
          and stand out with interactive designs of our digital visiting cards.<br/>
          Your digital identity, now more vibrant and connected than ever with Digibcard!
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full px-4 features-swiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-6 h-48 cursor-pointer select-none">
                  <img src={card.img} alt={card.title} className="w-16 h-16 mb-4" />
                  <p className="text-gray-800 text-base font-medium">{card.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="text-3xl mt-20 mb-5 text-center">Make Your Business Card Online: in 4 Easy Steps</h2>
        <div className="mt-2 mb-10 flex justify-center">
            <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
            <span className="w-2 h-1 bg-orange-400 rounded"></span>
            <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {cardss.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-10 h-100">
              <LottiePlayer src={card.lottieUrl} width={100} height={100} />
              <h3 className="text-xl font-semibold mb-2">0{index + 1}</h3>
              <p className="text-lg font-medium text-gray-800">{card.title}</p>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
