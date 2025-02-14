'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen bg-gray-100 overflow-hidden">

      {/* Main Content Container */}
      <div className="relative z-10 flex h-full">
        {/* Left Column: Welcome Text */}
        <div className="flex-1 flex items-center justify-center bg-[#cabcb1]">
          <div className="max-w-xl text-center px-4">
            <h1 className="text-6xl font-bold mb-4 text-gray-800">Welcome</h1>
            <p className="text-xl text-gray-700">Hi, I'm Ricardo.</p>
          </div>
        </div>

        {/* Right Column: Image with Gray Overlay */}
        <div className="flex-1 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/SICLE.png")' }}
          ></div>
          <div className="absolute inset-0 bg-gray-100 opacity-0"></div>
        </div>
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
