"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only use transparent/dark-bg style on the homepage hero
  const isHome = pathname === "/";
  // Treat as "scrolled" (solid white) on all inner pages
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" id="navbar-logo">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4285F4] to-[#EA4335] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-display font-bold text-xl transition-colors ${
                isSolid ? "text-gray-900" : "text-white"
              }`}
            >
              CBNCC
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    id={`nav-${link.label.toLowerCase()}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#4285F4] text-white shadow-sm"
                        : isSolid
                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              id="navbar-cta"
              className="hidden md:inline-flex items-center px-5 py-2 bg-[#4285F4] text-white text-sm font-semibold rounded-full hover:bg-[#3b78e7] transition-colors shadow-sm hover:shadow-md"
            >
              Join Club
            </Link>
            <button
              id="navbar-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                isSolid
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <ul className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#EEF4FF] text-[#4285F4]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-4 py-3 bg-[#4285F4] text-white rounded-xl text-sm font-semibold"
                >
                  Join Club
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
