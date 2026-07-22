import React from "react";
import { Mail, Instagram, Music } from "lucide-react";

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About S.T.A.R.K. One", href: "/about/" },
  { label: "Events", href: "/events/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[rgba(0,0,0,0.08)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <a href="/" className="flex items-center gap-3 mb-6" aria-label="S.T.A.R.K. One — home">
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
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-gray-700 text-sm leading-relaxed font-light max-w-xs">
              STEM Through Awareness, Resilience &amp; Knowledge — bridging the
              gap between cutting-edge science and our community.
            </p>
          </div>

          <div className="md:col-span-3">
            <h5
              className="text-black font-black text-[10px] uppercase mb-6"
              style={{ letterSpacing: "0.15em" }}
            >
              Explore
            </h5>
            <ul className="space-y-4">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-700 hover:text-[#1d9e75] transition-colors text-sm font-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5
              className="text-black font-black text-[10px] uppercase mb-6"
              style={{ letterSpacing: "0.15em" }}
            >
              Contact
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:starkone.stem@gmail.com"
                  className="text-gray-700 hover:text-[#1d9e75] transition-colors text-sm font-light flex items-center gap-2"
                >
                  <Mail size={13} /> starkone.stem@gmail.com
                </a>
              </li>
              <li className="text-gray-700 text-sm font-light">
                Woodbridge, VA — Prince William County
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5
              className="text-black font-black text-[10px] uppercase mb-6"
              style={{ letterSpacing: "0.15em" }}
            >
              Follow Us
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/starkone.va/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#1d9e75] transition-colors text-sm font-light flex items-center gap-2"
                >
                  <Instagram size={13} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@starkone.stem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#1d9e75] transition-colors text-sm font-light flex items-center gap-2"
                >
                  <Music size={13} /> TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(0,0,0,0.08)] gap-4">
          <p
            className="text-[rgba(0,0,0,0.4)] text-[10px] font-bold uppercase"
            style={{ letterSpacing: "0.3em" }}
          >
            © 2026 S.T.A.R.K. ONE — Bringing the Future to Light.
          </p>
          <div
            className="flex gap-8 text-[rgba(0,0,0,0.4)] text-[10px] font-bold uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            <a href="/privacy-policy/" className="hover:text-[#1d9e75] transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
