"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-primary font-bruno">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-center items-center h-p50 sm:h-20">
            <div className="mr-p30">
              <Image
                priority={true}
                src="/images/f1-logo.png"
                alt="f1-logo"
                width={100}
                height={100}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex absolute md:static md:justify-center items-center text-white text-2xl">
              <a
                href="/"
                className="hover:bg-secondary px-5 py-6 active:bg-secondary"
              >
                Home
              </a>
              <a href="season" className="hover:bg-secondary px-5 py-6">
                Season
              </a>
              <a href="drivers" className="hover:bg-secondary px-5 py-6">
                Drivers
              </a>
              <a href="teams" className="hover:bg-secondary px-5 py-6">
                Teams
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-end flex-grow">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary text-white text-lg">
            <a
              href="/"
              className="block py-3 text-center hover:bg-secondary border-t-2 border-b-2 active:bg-secondary"
            >
              Home
            </a>
            <a
              href="season"
              className="block py-3 text-center hover:bg-secondary border-b-2"
            >
              Season
            </a>
            <a
              href="drivers"
              className="block py-3 text-center hover:bg-secondary border-b-2"
            >
              Drivers
            </a>
            <a
              href="teams"
              className="block py-3 text-center hover:bg-secondary"
            >
              Teams
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
