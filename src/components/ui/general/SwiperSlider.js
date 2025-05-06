"use client"

import React from "react";
// import LottiePlayer from "../components/ui/general/LottiePlayer";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DemoSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const demos = [
        { img: "/images/demo/vcard12-1.png" },
        { img: "/images/demo/vcard13-1.png" },
        { img: "/images/demo/vcard14-1.png" },
        { img: "/images/demo/vcard15-1.png" },
        { img: "/images/demo/vcard16-1.png" },
        { img: "/images/demo/vcard17-1.png" },
        { img: "/images/demo/vcard22-1.png" },
      ];
    return (
        <>
            <div className="relative">
                {/* Arrows */}
                <div
                    ref={prevRef}
                    className="custom-swiper-prev left-0 z-10 absolute top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 cursor-pointer"
                >
                    <img src="/images/icons/Left-Arrow.svg" alt="Prev" className="w-5 h-5 purple-100"/>
                </div>
                <div
                    ref={nextRef}
                    className="custom-swiper-next right-0 z-10 absolute top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 cursor-pointer"
                >
                    <img src="/images/icons/Right-Arrow.svg" alt="Next" className="w-5 h-5"/>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
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
                        1024: { slidesPerView: 5 },
                    }}
                    className="features-swiper"
                >
                {demos.map((demo, index) => (
                    <SwiperSlide key={index}>
                    <div className="transform scale-90 md:scale-90 lg:scale-75 transition-transform duration-500 rounded-xl overflow-hidden shadow-md bg-white cursor-pointer select-none">
                    <img
                        src={demo.img}
                        alt={`Slide ${index}`}
                        className="w-full h-auto object-contain rounded-lg"
                    />
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </>
    );
}

export function FeatureSlider() {
    useEffect(() => {
        if (!customElements.get("dotlottie-player")) {
            import("@dotlottie/player-component");
        }
    }, []);

    const features = [
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

      return(
        <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            breakpoints={{
                640: { slidesPerView: 1, slidesPerGroup: 1},
                768: { slidesPerView: 2, slidesPerGroup: 2},
                1024: { slidesPerView: 4, slidesPerGroup: 4},
            }}
            className="w-full px-4 features-swiper"
            >
            {features.map((feature, index) => (
                <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-6 h-48 cursor-pointer select-none">
                    <img src={feature.img} alt={feature.title} className="w-16 h-16 mb-4" />
                    <p className="text-gray-800 text-base font-medium">{feature.title}</p>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export function FAQSlider() {
    const faqs = [
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

    return(
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
            breakpoints={{
                640: { slidesPerView: 1 , slidesPerGroup: 1},
                768: { slidesPerView: 2 , slidesPerGroup: 2},
                1024: { slidesPerView: 3 , slidesPerGroup: 3},
            }}
            className="w-full px-4 features-swiper"
            >
            {faqs.map((faq, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-white rounded-2xl shadow-md flex flex-col items-center p-10 h-60 cursor-pointer select-none">
                        <h2 className="text-lg font-medium text-primary">{faq.title}</h2>
                        <p className="text-sm text-gray-600 mt-2">{faq.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export function TestimonialSlider() {
    const comments = [
        {testimony : "DigiBcard transformed the way I network. It's not just an online visiting card, but a complete digital experience! It's modern, stylish, and incredibly easy to use. Sharing my digital biz card has never been this effortless!", name: "Rajesh S.", designation: "Entrepreneur"},
        {testimony : "The Razorpay integration on my DigiBcard has made transactions seamless for my clients. It’s the best digital business card I’ve used, and the analytics help me track who views my card. I love how easy it was to design my business card online!", name: "Priya M.", designation: "Online Store Owner"},
        {testimony : "As a freelancer, I needed a professional digital visiting card to showcase my portfolio. With Digibcard, I not only created the best digital business card but also impressed clients with its multimedia features. It’s perfect for anyone looking to buy business cards online that are dynamic and impactful!", name: "Sandeep K.", designation: "Graphic Designer"},
        {testimony : "Switching to an online digital visiting card was the best decision for my business. My Digi business card acts as a mini website, helping me get inquiries and boost my reach. It’s the future of business cards online!", name: "Ananya T.", designation: "Consultant"},
        {testimony : "I’ve tried various digital cards for business, but Digibcard stands out with its premium themes and customization options. It truly makes your digital visiting card a reflection of your brand. Highly recommend it for anyone who wants to make their business card online with style!", name: "Nikhil R.", designation: "Marketing Professional"},
        {testimony : "Digibcard has completely changed how I connect with people. It’s more than just a digital visiting card; it’s my go-to tool for making an impactful first impression. The design options are fantastic, and I love being able to share my digi business card instantly!", name: "Rahul M.", designation: "Financial Advisor"},
        {testimony : "Creating my online digital visiting card was so simple with Digibcard. The mini e-commerce feature allowed me to showcase my services and receive payments easily. It’s by far the best digital business card platform out there!", name: "Sneha G.", designation: "Freelance Writer"},
        {testimony : "I never thought I’d switch from traditional cards, but Digibcard proved to be a game-changer. It’s easy to design your business card online, share it via WhatsApp or email, and even track its performance. I highly recommend it for anyone looking to buy business cards online.", name: "Aditya P.", designation: "Real Estate Agent"},
        {testimony : "The ability to integrate multimedia into my online visiting card is incredible! My DigiBcard now features videos of my products, links to my website, and even a payment gateway. It’s the best digital business card for anyone serious about networking.", name: "Pooja K.", designation: "Boutique Owner"},
        {testimony : "I’ve tried other platforms to make my business card online, but nothing compares to Digibcard. The themes are stunning, the analytics are insightful, and it’s completely eco-friendly. It’s the future of business cards online!", name: "Arjun R.", designation: "Photographer"},
        {testimony : "With Digibcard, I created a digital visiting card that doubles as a mini website for my business. It’s so professional and makes sharing my details hassle-free. This is the best platform for creating digital cards for business!", name: "Komal S.", designation: "Event Planner"},
        {testimony : "If you’re looking to make a professional digital business card, Digibcard is the way to go. It’s not just convenient but also cost-effective. I’ve already received so many compliments on my online visiting card!", name: "Vikas L.", designation: "Fitness Coach"},
    ];

    return(
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
            breakpoints={{
                640: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="w-full px-4 features-swiper"
            >
            {comments.map((comment, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-white rounded-2xl shadow-md flex flex-col items-left p-10 h-80 justify-center cursor-pointer select-none">
                        <p className="text-sm text-gray-600 mt-2">{comment.testimony}</p>
                        <h2 className="text-lg text-primary mt-4">{comment.name}</h2>
                        <p className="text-sm text-gray-600 mt-3">{comment.designation}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}