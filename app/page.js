"use client";

import HeroSection from "../src/components/HeroSection";
import FeaturesSection from "../src/components/FeaturesSection";
import PricingSection from "../src/components/PricingSection";
import DemoSection from "../src/components/DemoSection";
import TrackSection from "../src/components/TrackSection";
import FAQSection from "../src/components/FAQSection";
import { useState } from "react";
import LottiePlayer from "../src/components/LottiePlayer";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center flex-wrap space-x-6">
              <a href="/" className="text-orange-600 hover:text-orange-700">Home</a>
              <a href="/#process" className="text-orange-600 hover:text-orange-700">Features</a>
              <a href="/#features" className="text-orange-600 hover:text-orange-700">Process</a>
              <a href="/vcards-demo" className="text-orange-600 hover:text-orange-700">Pricing</a>
              <a href="/#pricing" className="text-orange-600 hover:text-orange-700">Demo Cards</a>
              <a href="/login" className="text-orange-600 hover:text-orange-700">Login</a>
              <a
                href="/register"
                className="ml-4 bg-orange-600 text-white font-semibold px-4 py-2 rounded hover:bg-orange-700 transition whitespace-nowrap"
              >
                Create a card
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
            <a href="/" className="block text-orange-600">Home</a>
            <a href="/#process" className="block text-orange-600">Features</a>
            <a href="/#features" className="block text-orange-600">Process</a>
            <a href="/vcards-demo" className="block text-orange-600">Pricing</a>
            <a href="/#pricing" className="block text-orange-600">Demo Cards</a>
            <a href="/login" className="block text-orange-600">Login</a>
            <a
              href="/register"
              className="block text-white text-center bg-orange-600 px-4 py-2 rounded hover:bg-orange-700"
            >
              Create a card
            </a>
          </div>
        )}
      </header>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DemoSection />
      <TrackSection />
      <FAQSection />
    </div>
  );
}
