"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "../buttons/NavBarButtons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-4 space-x-8 relative">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
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

      {/* Right: Login/Sign Up Buttons (Desktop only) */}
      <div className="hidden md:flex space-x-3">
        <Link href="/login" className="px-4 py-2 bg-orange-600 text-white rounded-md">Login</Link>
        <Link href="/signup" className="px-4 py-2 bg-orange-600 text-white rounded-md">Sign Up</Link>
      </div>

      {/* Mobile Hamburger Icon
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
      </div> */}

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-3 z-50 md:hidden">
          <Link href="/" className="text-orange-600 hover:text-orange-700">Home</Link>
          <Link href="/#features" className="text-orange-600 hover:text-orange-700">Features</Link>
          <Link href="/#process" className="text-orange-600 hover:text-orange-700">Process</Link>
          <Link href="/#pricing" className="text-orange-600 hover:text-orange-700">Pricing</Link>
          <Link href="/#demo" className="text-orange-600 hover:text-orange-700">Demo Cards</Link>
          <Link href="/#faq" className="text-orange-600 hover:text-orange-700">FAQ</Link>
          <Link href="/#contact" className="text-orange-600 hover:text-orange-700">Contact US</Link>
          <Link href="/login" className="text-center px-4 py-2 bg-orange-600 text-white rounded-md">Login</Link>
          <Link href="/signup" className="text-center px-4 py-2 bg-orange-600 text-white rounded-md">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
