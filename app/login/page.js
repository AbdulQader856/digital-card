'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-[white]">
      {/* Left: design preview (optional placeholder) */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <img src="images/default-register.png" alt="Preview" className="h-screen w-screen" />
      </div>

      {/* Right: Login Form */}
      <div className="w-full pt-20 md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-32 py-12 relative">
        {/* Language selector */}
        <div class="dropdown absolute top-6 right-8 inline-flex">
          <button type="button" onClick={toggleDropdown} data-target="dropdown-with-icon" class="dropdown-toggle inline-flex justify-center items-center gap-2 py-3 px-6 text-sm bg-[#0099fb] text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-blue-600 "> Choose Language <svg class="dropdown-open:rotate-180 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </button>

          {isOpen && (
          <div id="dropdown-with-icon" class="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-70 mt-2 z-20" aria-labelledby="dropdown-with-icon">
            <ul class="py-2">
              <li>
                <a class="flex items-center gap-2 px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  Arabic
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2 px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  Chinese
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2  px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  English
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2  px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  French
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2  px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  German
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2  px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  Portuguese
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2  px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  Russian
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2  px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  Spanish
                </a>
              </li>
              <li>
                <a class="flex items-center gap-2  px-8 py-1 hover:bg-gray-100 text-gray-900 font-sm" href="javascript:;">
                  Turkish
                </a>
              </li>
            </ul>
          </div>
          )}
        </div>

        {/* Logo and Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            <a href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="logo" className="h-10 w-auto ml-10" />
            </a>
          </h1>
          <h2 className="text-xl mt-2 font-medium text-gray-700">Sign In</h2>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="mt-1 w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <span
                className="absolute top-3 right-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_425_4503)">
                                <path d="M13.9 14.7C13.3 15.3 12.6 15.6 11.8 15.6C11 15.6 10.2 15.3 9.70005 14.7C9.10005 14.1 8.80005 13.4 8.80005 12.6C8.80005 11.8 9.10005 11 9.70005 10.5L11.8 12.6L13.9 14.7Z" stroke="#000000" stroke-width="1.5" class="my-path"></path>
                                <path d="M4 4.7998L19.6 20.3998" stroke="#000000" stroke-width="1.5" stroke-linecap="round" class="my-path"></path>
                                <path d="M17.7 18.4998C16 19.5998 14 20.1998 11.8 20.1998C7.70003 20.1998 4.10002 17.8998 2.30002 14.4998C1.60002 13.3998 1.60002 11.9998 2.30002 10.8998C3.20002 9.19981 4.50002 7.7998 6.10002 6.7998" stroke="#000000" stroke-width="1.5" class="my-path"></path>
                                <path d="M8.40002 5.7001C9.50002 5.3001 10.6 5.1001 11.8 5.1001C15.9 5.1001 19.5 7.4001 21.3 10.8001C21.9 11.9001 21.9 13.3001 21.3 14.4001C20.8 15.3001 20.2 16.1001 19.5 16.8001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" class="my-path"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0_425_4503">
                                <rect width="21.6" height="17.2" fill="white" transform="translate(1 4)"></rect>
                                </clipPath>
                                </defs>
                                </svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.45448 13.8008C1.84656 12.6796 1.84656 11.3204 2.45447 10.1992C4.29523 6.80404 7.87965 4.5 11.9999 4.5C16.1202 4.5 19.7046 6.80404 21.5454 10.1992C22.1533 11.3204 22.1533 12.6796 21.5454 13.8008C19.7046 17.196 16.1202 19.5 11.9999 19.5C7.87965 19.5 4.29523 17.196 2.45448 13.8008Z" stroke="#000000" stroke-width="1.5" class="my-path"></path>
                                <path d="M15.0126 11.9551C15.0126 13.6119 13.6695 14.9551 12.0126 14.9551C10.3558 14.9551 9.01263 13.6119 9.01263 11.9551C9.01263 10.2982 10.3558 8.95508 12.0126 8.95508C13.6695 8.95508 15.0126 10.2982 15.0126 11.9551Z" stroke="#000000" stroke-width="1.5" class="my-path"></path>
                                </svg>}
              </span>
            </div>
            <div className="text-right mt-1">
              <Link href="#" className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="h-4 w-4 text-orange-500" />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-md font-medium hover:bg-violet-700 transition"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center text-gray-600">
            New Here?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Create an Account
            </Link>
          </p>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-700 transition gap-2"
          >
            <FaGoogle /> Login via Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-10">
          All Rights Reserved © 2025{' '}
          <Link href="#" className="text-blue-500 hover:underline">
            DigiBCard
          </Link>
        </p>
      </div>
    </div>
  );
}