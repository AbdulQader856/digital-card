"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center flex-wrap space-x-6">
                <Link href="/" className="text-orange-600 hover:text-orange-700">Home</Link>
                <Link href="/#features" className="text-orange-600 hover:text-orange-700">Features</Link>
                <Link href="/#process" className="text-orange-600 hover:text-orange-700">Process</Link>
                <Link href="/#pricing" className="text-orange-600 hover:text-orange-700">Pricing</Link>
                <Link href="/#demo" className="text-orange-600 hover:text-orange-700">Demo Cards</Link>
                <Link href="/#faq" className="text-orange-600 hover:text-orange-700">FAQ</Link>
                <Link href="/login" className="text-orange-600 hover:text-orange-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg><span>Login</span>
                </Link>
                <Link
                    href="/register"
                    className="ml-4 bg-orange-600 text-white font-semibold px-4 py-2 rounded hover:bg-orange-700 transition whitespace-nowrap"
                    >
                        Create a card
                </Link>
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
  );
};

export default Navbar;
