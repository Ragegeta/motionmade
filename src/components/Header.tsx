import React, { useState } from 'react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className="bg-black/70 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-800"
      role="banner"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo + SEO boost */}
        <a href="#" aria-label="MotionMade Home" className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold text-slate-100 tracking-wider">
            Motion<span className="text-blue-400">Made</span>
          </h1>
          <span className="sr-only">Digital Ads That Convert — Brisbane</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-sm transition-colors duration-300"
          >
            Start Campaign
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-200 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-md border-t border-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-md shadow-sm transition-colors duration-300"
            >
              Start Campaign
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
