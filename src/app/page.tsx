'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen bg-gray-100 overflow-hidden">
      {/* Collapsible Side Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 bg-white w-64 h-full p-4 transition-transform duration-300"
            style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="mt-8 space-y-4">
              <li>
                <Link href="/">
                  <span className="block text-xl hover:text-gray-700">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="block text-xl hover:text-gray-700">About</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="block text-xl hover:text-gray-700">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="block text-xl hover:text-gray-700">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 flex h-full">
        {/* Left Column: Welcome Text */}
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="max-w-xl text-center px-4">
            <h1 className="text-6xl font-bold mb-4 text-gray-800">Welcome</h1>
            <p className="text-xl text-gray-700">
              Hi, I'm Ricardo.
            </p>
          </div>
        </div>

        {/* Right Column: Image with Gray Overlay */}
        <div className="flex-1 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/SICLE.png")' }}
          ></div>
          {/* Gray overlay to blend with site's background */}
          <div className="absolute inset-0 bg-gray-100 opacity-70"></div>
        </div>
      </div>

      {/* Menu Button on Far Right */}
      <div className="absolute top-4 right-4 z-30">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 focus:outline-none bg-white rounded shadow"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Vertical Social Media Icons on the Left (Desktop Only) */}
      <div className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-30 flex-col space-y-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <FaGithub size={20} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
