'use client';
import React from "react";
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';

export const ContactUsForm = () => {
    return(
        <form className="space-y-1 md:space-y-4">
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

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return(
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
                <label className="block text-sm font-medium text-gray-700">Password:<span className="text-red-600">*</span></label>
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
    );
}

export const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return(
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name:<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
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
                placeholder="Create password"
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
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password:<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Re-enter password"
                className="mt-1 w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <span
                className="absolute top-3 right-3 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </svg> : <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.45448 13.8008C1.84656 12.6796 1.84656 11.3204 2.45447 10.1992C4.29523 6.80404 7.87965 4.5 11.9999 4.5C16.1202 4.5 19.7046 6.80404 21.5454 10.1992C22.1533 11.3204 22.1533 12.6796 21.5454 13.8008C19.7046 17.196 16.1202 19.5 11.9999 19.5C7.87965 19.5 4.29523 17.196 2.45448 13.8008Z" stroke="#000000" stroke-width="1.5" class="my-path"></path>
                                <path d="M15.0126 11.9551C15.0126 13.6119 13.6695 14.9551 12.0126 14.9551C10.3558 14.9551 9.01263 13.6119 9.01263 11.9551C9.01263 10.2982 10.3558 8.95508 12.0126 8.95508C13.6695 8.95508 15.0126 10.2982 15.0126 11.9551Z" stroke="#000000" stroke-width="1.5" class="my-path"></path>
                                </svg>}
              </span>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="h-4 w-4 text-orange-500" />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{' '}
              <Link href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-md font-medium hover:bg-violet-700 transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>

          {/* Google Signup */}
          <button
            type="button"
            className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-700 transition gap-2"
          >
            <FaGoogle /> Sign up with Google
          </button>
        </form>
    );
}