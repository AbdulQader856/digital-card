'use client';
import { useState } from 'react';

export default function LanguageSelector(){
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        // Language Selector
        <div class="dropdown absolute top-6 right-8 inline-flex">
            <button type="button" onClick={toggleDropdown} data-target="dropdown-with-icon" class="dropdown-toggle inline-flex justify-center items-center gap-2 py-2 px-3 text-sm bg-[#0099fb] text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-blue-600 "> Choose Language <svg class="dropdown-open:rotate-180 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    );
}