import React from "react";

export const ContactUsForm = () => {
    return(
        <form className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Name" className="w-full border border-gray-300 px-4 py-2 rounded-sm text-sm" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" placeholder="Email" className="w-full border border-gray-300 px-4 py-2 rounded-sm text-sm" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 px-4 py-2 rounded-sm text-sm" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input type="text" placeholder="Subject" className="w-full border border-gray-300 px-4 py-2 rounded-sm text-sm" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea placeholder="Message" rows="3" className="w-full border border-gray-300 px-4 py-2 rounded-sm text-sm resize-none"></textarea>
            </div>
            <button type="submit" className="bg-gradient-to-r from-[#f5821f] to-[#f15a24] text-white px-6 py-2 rounded-sm text-sm mt-2">
            Send Message
            </button>
        </form>
    );
};