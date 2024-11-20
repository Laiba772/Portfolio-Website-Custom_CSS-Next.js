'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '@/app/styles/style.css'; // Import the custom CSS

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <span>Laiba</span> Naz.
      </div>

      <div className="navbar-links">
        <ul className="hidden md:flex">
          <li className="nav-item"><Link href="/" onClick={closeDropdown}>Home</Link></li>
          <li className="nav-item"><Link href="./components/about" onClick={closeDropdown}>About me</Link></li>
          <li className="nav-item"><Link href="/components/skills" onClick={closeDropdown}>Skills</Link></li>
          <li className="nav-item"><Link href="/components/portfolio" onClick={closeDropdown}>Project</Link></li>
        </ul>
      </div>

      <div className="navbar-contact">
        <button>
          <Link href="/components/contact">Contact me</Link>
        </button>
      </div>

      <FaBars
        className="navbar-menu-icon"
        size={30}
        onClick={toggleDropdown}
      />

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="mobile-menu">
          <ul>
            <li className="nav-item"><Link href="/" onClick={closeDropdown}>Home</Link></li>
            <li className="nav-item"><Link href="/components/about" onClick={closeDropdown}>About me</Link></li>
            <li className="nav-item"><Link href="/components/skills" onClick={closeDropdown}>Skills</Link></li>
            <li className="nav-item"><Link href="/components/portfolio" onClick={closeDropdown}>Project</Link></li>
            <li className="contact-button">
              <button>
                <Link href="/components/contact" onClick={closeDropdown}>Contact me</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
