"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TrackSection() {
    const cards = [
        {title : "Cost-Effective", description: "Traditional business cards involve recurring costs for printing and reprinting. With an online digital visiting card, you get an affordable, one-time solution, with plans starting as low as ₹599. It's a great way to design your business card online without overspending."},
        {title : "Enviornmentally Friendly", description: "Paper business cards contribute to deforestation and waste. A digital biz card helps you go green by reducing paper usage and protecting the environment."},
        {title : "Easy Customization", description: "Traditional cards come with fixed layouts and require reprinting for any updates. With a virtual business card, you can customize and update your card instantly, making it more dynamic and aligned with your brand."},
        {title : "Effortless Sharing", description: "Physical business cards are limited to face-to-face exchanges. A digital visiting card can be shared via WhatsApp, email, QR codes, and social media, expanding your reach far beyond physical boundaries."},
        {title : "Diverse Design Option", description: "Traditional cards often lack variety and creativity. Digital cards for business provide over 25 interactive and premium themes to make your card unique and eye-catching."},
        {title : "Access to Analytics", description: "Unlike paper cards, a digital business card offers built-in analytics to track views, clicks, and inquiries. Use these insights to measure performance and optimize your card for better engagement."},
        {title : "Multimedia Integration", description: "Traditional cards can only display text and graphics. A virtual business card supports multimedia, allowing you to embed videos, clickable links, and images to create a rich, interactive experience."},
        {title : "Lead Generation Features", description: "Paper cards lack any mechanism for capturing leads. A digital visiting card comes with built-in inquiry forms, enabling direct communication and lead generation."},
        {title : "Mini E-commerce Capabilities", description: "Take your online visiting card to the next level by showcasing products and services. With integrated payment options, your card can double as a mini e-commerce platform, perfect for seamless transactions."},
        {title : "Instant Updates", description: "Updating traditional cards means going through the hassle of reprinting. With a digital biz card, you can update contact information, services, or achievements instantly, ensuring your card is always current."},
        {title : "Durable and Accessible", description: "Physical cards are prone to getting lost or damaged. Online digital business cards are securely stored online, ensuring they are always accessible whenever needed."},
        {title : "Professional and Modern Appeal", description: "Make a lasting impression with a digital visiting card that offers a sleek, professional presentation. Its advanced features and interactivity set you apart from competitors still relying on traditional methods."},
    ];
  return (
    <section className="bg-[#F3FBFC] container px-20 pt-10 mx-auto rounded">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            
            {/* Left Side - Track */}
            <div className="md:w-1/3 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Track</h2>
            <p className="text-gray-600">
                Track the power of your digital visiting card with comprehensive analytics.
            </p>
            <div className="mt-4 px-10">
                <Image
                src="/images/graph.png"
                width={350}
                height={200}
                alt="digibcard Graph"
                className="rounded"
                />
            </div>
            </div>

            {/* Right Side - Impact */}
            <div className="md:w-2/3 p-6 bg-green-50">
                <h2 className="text-2xl font-bold text-gray-800">Impact</h2>
                <p className="text-gray-700 mb-6">
                    Environmental impact of not printing 1,000 business cards (Approx) by 10 Users Of digital visiting cards created online with digibcard. Every digibcard card shared has helped save:
                </p>

                <div className="grid grid-cols-1 px-40 pt-10 pb-10 sm:grid-cols-2 gap-20">
                    {/* Tree */}
                    <div className="flex items-center">
                        <Image
                            src="/images/icons/tree.png"
                            width={48}
                            height={48}
                            alt="Tree Icon"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">1</h2>
                            <p className="text-sm text-gray-600">Tree</p>
                        </div>
                    </div>

                    {/* Waste */}
                    <div className="flex items-center">
                        <Image
                            src="/images/icons/trash.png"
                            width={48}
                            height={48}
                            alt="Trash Icon"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">150</h2>
                            <p className="text-sm text-gray-600">Reduce Waste in KG</p>
                        </div>
                    </div>

                    {/* Water */}
                    <div className="flex items-center">
                        <Image
                            src="/images/icons/water.png"
                            width={48}
                            height={48}
                            alt="Water Icon"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">1,000</h2>
                            <p className="text-sm text-gray-600">Liters Of Water</p>
                        </div>
                    </div>

                    {/* CO2 */}
                    <div className="flex items-center">
                        <Image
                            src="/images/icons/Carbon.png"
                            width={48}
                            height={48}
                            alt="Carbon Icon"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">10.6</h2>
                            <p className="text-sm text-gray-600">CO2 emission in KG</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-20 px-20">
            <h2 className="text-3xl mb-2 pt-10 text-center">Why Choose DigiBcard Over Traditional Business Cards?</h2>
            <div className="mt-2 mb-10 flex justify-center">
                <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
                <span className="w-2 h-1 bg-orange-400 rounded"></span>
                <span className="w-8 h-1 mx-2 bg-orange-400 rounded"></span>
            </div>

            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            }}
            className="w-full px-4 features-swiper"
            >
            {cards.map((card, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-white rounded-2xl shadow-md flex flex-col items-center p-10 h-60 cursor-pointer select-none">
                        <h2 className="text-lg font-medium text-primary">{card.title}</h2>
                        <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </section>
  );
}
