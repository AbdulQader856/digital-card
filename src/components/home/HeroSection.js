'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 bg-gradient-to-r from-white via-blue-50 to-white px-6 sm:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-primary leading-tight">
            BEST Digital Business Card -DigiBcard
          </h1>
          <p className="text-lg sm:text-2xl md:text-2xl font-semibold text-gray-900 leading-tight">
            Create a Digital Business Card/Mini Website for Your Business
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Elevate your professional image with a modern digital visiting card that doubles as a mini-website. Impress clients and prospects effortlessly while showcasing your brand in style.
          </p>
          <div className='space-y-4 lg:space-x-4 md:space-x-4'>
            <button className="bg-primary hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md">
              View Pricing
            </button>
            <button className="bg-primary hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md">
              Create Your Business Card
            </button>
          </div>
        </motion.div>

        {/* Right Mockup Images */}
        <motion.div
          className="relative aspect-square flex justify-center hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='w-5/6 h-5/6 bg-primary absolute top-0 aspect-square [border-radius:28%_82%_97%_22%/40%_47%_69%_80%]'></div>
          <Image
            src="/images/digibcard-phone-1.png"
            alt="Mobile UI 1"
            width={176}
            height={352}
            className="w-40 sm:w-48 md:w-56 md:h-2/3 top-10 -right-0 left-20 z-10 absolute"
          />
          <Image
            src="/images/digibcard-phone-2.png"
            alt="Mobile UI 2"
            width={176}
            height={352}
            className="w-40 sm:w-48 md:w-56 md:h-2/3 absolute right-1/4 top-20 z-20"
          />

          {/* Floating Labels */}
          <motion.div
            className="absolute top-20 left-0 right-10 bg-white rounded-xl px-4 py-2 z-20 shadow flex items-center gap-2 max-w-[160px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-indigo-600 font-semibold text-sm">15+</div>
            <div className="text-xs text-gray-500">Channel payment method</div>
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-20 bg-yellow-400 text-white rounded-xl px-3 py-1 z-20 shadow font-bold text-sm text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            50+ <div className="text-xs font-normal">Community Feature</div>
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-0 right-10 bg-white px-4 py-2 z-20 rounded-xl shadow text-sm text-gray-700 font-medium max-w-[160px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            📊 200k+ Active Users
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
