"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Cerrar dropdown More al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };

    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreOpen]);

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="hidden md:block text-sm sm:text-base font-bold text-retroYellow whitespace-nowrap overflow-hidden truncate pr-4 border-r-2 border-gray-600 mr-4 transition-transform duration-200 hover:scale-105">
              <Link href="/">Retroid Pocket 5 Hub</Link>
            </h1>
            <h1 className="block md:hidden text-sm font-bold text-retroYellow whitespace-nowrap overflow-hidden truncate transition-transform duration-200 hover:scale-105">
              <Link href="/">RP5 Hub</Link>
            </h1>
          </div>

          {/* Menú Desktop */}
          <ul className="hidden md:flex gap-6 text-sm justify-center items-center whitespace-nowrap">
            <li>
              <Link href="/guides" className="hover:text-gray-400 px-2 whitespace-nowrap">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/emulation" className="hover:text-gray-400 px-2 whitespace-nowrap">
                Emulation
              </Link>
            </li>
            <li>
              <Link href="/game-picks" className="hover:text-gray-400 px-2 whitespace-nowrap">
                Game Picks
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="hover:text-gray-400 px-2 whitespace-nowrap">
                Accessories
              </Link>
            </li>
            <li className="relative" ref={moreRef}>
              <button onClick={() => setMoreOpen(!moreOpen)} className="hover:text-gray-400 px-2 whitespace-nowrap">
                More ▾
              </button>
              {moreOpen && (
                <div className="absolute top-full left-0 bg-gray-700 p-2 rounded shadow-lg z-10">
                  <Link
                    href="/faqs"
                    className="block hover:text-gray-400"
                    onClick={() => setMoreOpen(false)}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/specs"
                    className="block hover:text-gray-400 mt-2"
                    onClick={() => setMoreOpen(false)}
                  >
                    Specs
                  </Link>
                </div>
              )}
            </li>
          </ul>


          {/* Botón modo oscuro (Desktop) */}
          <div className="hidden md:flex items-center">
            <button onClick={toggleDarkMode} className="retro-button px-3 py-1 text-xs ml-6">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Botón hamburguesa (Móvil) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="bg-gray-900 text-white px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/guides" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Guides
              </Link>
            </li>
            <li>
              <Link href="/emulation" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Emulation
              </Link>
            </li>
            <li>
              <Link href="/game-picks" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Game Picks
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/specs" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                Specs
              </Link>
            </li>
          </ul>
          <button onClick={toggleDarkMode} className="mt-4 w-full retro-button">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </header>
  );
}
