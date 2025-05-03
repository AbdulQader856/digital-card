import React from "react";

export default function PricingSection() {
    const cards = [
        {
            title: "1 Year",
            subtitle: "Storage Limit : 500 MB",
            original: "₹799",
            discounted: "₹599",
        },
        {
            title: "2 Year",
            subtitle: "Storage Limit : 500 MB",
            original: "₹999",
            discounted: "₹799",
        },
        {
            title: "3 Year",
            subtitle: "Storage Limit : 500 MB",
            original: "₹1199",
            discounted: "₹999",
        },
    ];

    const features = [
        "25+ Templates",
        "Services",
        "Testimonials",
        "Hide Branding",
        "Enquiry Form",
        "Social Links",
        "Password Protection",
        "Custom CSS",
        "Custom JS",
        "Custom Fonts",
        "Products",
        "Appointments",
        "Gallery",
        "Analytics",
        "SEO",
        "Blog",
        "Affiliation",
        "Custom QR Code",
        "Instagram Feed",
        "Iframes",
    ];

    return (
        <section id= "pricing" className="bg-[#F3FBFC] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl text-center text-gray-800 pt-12 pb-8">
                    Choose a plan that's right for you <br />
                    & design your business card online easily
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center"
                        >
                            <h3 className="text-3xl font-semibold pt-3 pb-5 mb-1 text-black">
                                {card.title}
                            </h3>
                            <p className="text-xl pb-3 font-bold text-gray-400">{card.subtitle}</p>

                            {/* Price display with strike and discount */}
                            <div className="bg-[#E3F6FD] inline-block rounded-full py-2 px-5 mt-4 mb-6">
                                <span className="text-gray-500 line-through text-xl mr-2">{card.original}</span>
                                <span className="text-[#05006D] font-bold text-3xl">
                                    {card.discounted}
                                </span>
                            </div>

                            {/* Feature list */}
                            <ul className="text-right text-sm text-gray-800 space-y-2 mt-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-10 pb-4">
                                <a href="#" className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700">
                                    View Pricing
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
