
"use client";
import React, { useState } from 'react';


import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  // Scroll to top handler
  const handleScrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500 ${dark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white' : 'bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900'}`}
    >
      {/* Header with theme toggle */}
      <div className="relative shadow-md z-10">
        <Header />
        <button
          className="absolute top-6 right-8 px-4 py-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
        {showTooltip && (
          <span className="absolute top-2 right-36 bg-black text-white text-xs rounded px-2 py-1 shadow-lg animate-fade-in">
            Switch theme
          </span>
        )}
      </div>

      {/* Main with show/hide content */}
      <main className="flex-1 flex flex-col p-6 md:p-10 max-w-5xl w-full mx-auto transition-all duration-500">
        <div className="flex justify-end mb-4">
          <button
            className="px-4 py-2 rounded-full bg-green-600 text-white shadow hover:bg-green-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={() => setShowContent((s) => !s)}
            aria-label={showContent ? 'Hide content' : 'Show content'}
          >
            {showContent ? '🙈 Hide Content' : '👀 Show Content'}
          </button>
        </div>
        <div className={`transition-all duration-500 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-0 overflow-hidden'}`}>
          {children}
        </div>
      </main>

      {/* Footer with scroll-to-top */}
      <div className="relative shadow-inner z-10">
        <Footer />
        <button
          className="absolute -top-8 right-8 px-4 py-2 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={handleScrollTop}
          aria-label="Scroll to top"
        >
          ⬆️ Top
        </button>
      </div>
    </div>
  );
}