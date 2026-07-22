import React, { useState, useEffect } from "react";
import { FlickerText } from "./FlickerText";

const NAV_LINKS = [
  { label: "ABOUT", href: "/about/" },
  { label: "OUR MISSION", href: "/#mission" },
  { label: "OUR WORK", href: "/#work" },
  { label: "EVENTS", href: "/events/" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      className={`transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-[rgba(0,0,0,0.08)]"
          : "bg-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo — links home; the accessible name doubles as branded internal-link anchor text */}
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="S.T.A.R.K. One — home"
        >
          <span
            className="text-black font-bold text-sm uppercase"
            style={{
              letterSpacing: "0.25em",
              fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
            }}
          >
            S.T.A.R.K. ONE
          </span>
          <img
            src="/starkfavi.png"
            alt="S.T.A.R.K. One logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="interactive-pulse text-[11px] font-bold text-gray-700 hover:text-[#1d9e75] transition-colors"
              style={{ letterSpacing: "0.2em" }}
            >
              <FlickerText
                text={l.label}
                className="flicker-nav"
                delay={i * 0.3}
              />
            </a>
          ))}
          <a
            href="/#connect"
            className="square-btn bg-[#1d9e75] text-white text-[11px] font-black px-6 py-2.5 hover:bg-[#17825f] uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            Stay Connected
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-black"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-[rgba(0,0,0,0.08)] px-6 py-8 flex flex-col gap-6 md:hidden">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="interactive-pulse text-black font-bold text-sm uppercase"
              style={{ letterSpacing: "0.15em" }}
              onClick={() => setMenuOpen(false)}
            >
              <FlickerText
                text={l.label}
                className="flicker-nav"
                delay={i * 0.2}
              />
            </a>
          ))}
          <a
            href="/#connect"
            className="square-btn bg-[#1d9e75] text-white font-black py-3 uppercase text-sm hover:bg-[#17825f] text-center"
            style={{ letterSpacing: "0.15em" }}
            onClick={() => setMenuOpen(false)}
          >
            Stay Connected
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
