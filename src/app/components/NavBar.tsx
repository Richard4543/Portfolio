// components/NavBar.tsx
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 w-full p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="/">
            <span className="text-white hover:text-gray-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-white hover:text-gray-300">About</span>
          </Link>
        </li>
        <li>
          <Link href="/experience">
            <span className="text-white hover:text-gray-300">Experience</span>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <span className="text-white hover:text-gray-300">Work</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="text-white hover:text-gray-300">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
