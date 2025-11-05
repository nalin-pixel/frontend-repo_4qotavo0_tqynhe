import React from 'react';
import Hero from './components/Hero';
import Tour from './components/Tour';
import Merch from './components/Merch';
import AboutContact from './components/AboutContact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0f1c] text-indigo-50">
      {/* Simple header for navigation */}
      <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#0a0f1c]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-serif text-xl text-white">JAYDN</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#tour" className="text-indigo-100/90 hover:text-white">Tour</a>
            <a href="#merch" className="text-indigo-100/90 hover:text-white">Merch</a>
            <a href="#about" className="text-indigo-100/90 hover:text-white">About</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Tour />
        <Merch />
        <AboutContact />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0f1c] py-10 text-center text-sm text-indigo-200/80">
        <p>© {new Date().getFullYear()} JAYDN — The Interactive Artist Hub</p>
      </footer>
    </div>
  );
};

export default App;
