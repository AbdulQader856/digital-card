"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "../buttons/NavBarButtons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center space-x-8">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
      </a>

      {/* Desktop Navigation */}
      <nav>
        <NavLink label="Home" target="#home" />
        <NavLink label="Features" target="#features" />
        <NavLink label="Process" target="#process" />
        <NavLink label="Pricing" target="#pricing" />
        <NavLink label="Demo Cards" target="#demo" />
        <NavLink label="FAQ" target="#faq" />
        <NavLink label="Contact US" target="#contact" />
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

      {/* Mobile Menu */}
      {isOpen && (
        
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <Link href="/" className="block text-orange-600 hover:text-orange-700">Home</Link>
          <Link href="/#features" className="block text-orange-600 hover:text-orange-700">Features</Link>
          <Link href="/#process" className="block text-orange-600 hover:text-orange-700">Process</Link>
          <Link href="/#pricing" className="block text-orange-600 hover:text-orange-700">Pricing</Link>
          <Link href="/#demo" className="block text-orange-600 hover:text-orange-700">Demo Cards</Link>
          <Link href="/#faq" className="block text-orange-600 hover:text-orange-700">FAQ</Link>
          <Link href="/#contact" className="block text-orange-600 hover:text-orange-700">Contact US</Link>
          {/* <a
            href="/register"
            className="block text-white text-center bg-orange-600 px-4 py-2 rounded hover:bg-orange-700"
          >
            Create a card
          </a> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
