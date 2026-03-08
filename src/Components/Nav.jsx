import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'];

  return (
    <nav className="w-full bg-white text-black shadow-sm fixed top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">

          <div className="flex-shrink-0">
            <h2 className="font-bold text-xl sm:text-2xl">
              CS - Ticket System
            </h2>
          </div>
          <div className="flex items-center gap-5 md:gap-6 lg:gap-8">
            <button
              className={`
                hidden md:inline-flex
                px-5 py-2.5 
                bg-gradient-to-r from-[#6b56e3] to-[#9f62f2]
                text-white font-semibold rounded-md
                hover:shadow-lg hover:shadow-indigo-200/50
                transition-all duration-200
              `}
            >
              + New Ticket
            </button>
            <div className="hidden lg:flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${isOpen ? 'text-indigo-700' : 'text-gray-700'}
                p-2 rounded-md hover:bg-gray-100 focus:outline-none lg:hidden
              `}
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16 M4 12h16 M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-5 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-700 hover:text-indigo-700 font-medium py-1.5"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            <button
              className={`
                w-full mt-4 px-6 py-3
                bg-gradient-to-r from-[#6b56e3] to-[#9f62f2]
                text-white font-semibold rounded-md
                hover:shadow-md transition-all
              `}
              onClick={() => setIsOpen(false)}
            >
              + New Ticket
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;