'use client';
import { Menu } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import NavBar from '../ui/navigation/NavBar'
import Link from 'next/link';

export default function Header() {
  const { isLoggedIn, logout, darkMode, toggleDarkMode } = useAppContext();

  return (
    <header className="fixed w-full flex justify-between items-center px-10 py-4 z-50 shadow-md bg-white dark:bg-gray-900">
      <NavBar />

      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md">Login</button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md">Sign Up</button>
          </>
        ) : (
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Profile ⬇
            </MenuButton>

            <AnimatePresence>
              <MenuItems as={motion.div}
                static
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              >
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="#pricing"
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                      >
                        Change to Premium
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={toggleDarkMode}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                      >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                      </button>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={logout}
                        className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${
                          active ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                      >
                        Logout
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </AnimatePresence>
          </Menu>
        )}
      </div>
    </header>
  );
}
