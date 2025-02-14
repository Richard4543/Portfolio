// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 w-full p-4 mt-8">
      <div className="text-center text-white">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
