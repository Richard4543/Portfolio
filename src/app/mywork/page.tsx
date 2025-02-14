'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  downloadUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Tag Generator',
    description: "Quickly generate Tags, UDT's, and Sample Tags for Ignition 8.1.x",
    image: '/domposer.png',
    githubUrl: 'https://github.com/yourusername/domposer',
  },
  // {
  //   id: 2,
  //   title: 'Bay.js',
  //   description: 'A lightweight library for web components with minimal setup and zero build steps.',
  //   image: '/bayjs.png',
  //   githubUrl: 'https://github.com/yourusername/bayjs',
  // },
  // {
  //   id: 3,
  //   title: 'Cookiemunch',
  //   description: 'A customizable, minimal cookie-consent popup with extended styling options.',
  //   image: '/cookiemunch.png',
  //   githubUrl: 'https://github.com/yourusername/cookiemunch',
  //   downloadUrl: '/cookiemunch.zip', // Example if you want a direct download
  // },
  // Add more projects as needed
];

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Work</h1>
      <p className="text-center text-gray-600 mb-12">
        A collection of projects I&apos;ve worked on. Click an image to learn more!
      </p>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col transition-transform hover:-translate-y-1"
          >
            {/* Clickable Image */}
            <div className="relative w-full h-48 cursor-pointer" onClick={() => openModal(project)}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-4 mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>

            {/* Buttons Row */}
            <div className="mt-auto flex space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  View on GitHub
                </a>
              )}
              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  download
                  className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100"
                >
                  Download
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded shadow-lg relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="relative w-full h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-4">{selectedProject.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
