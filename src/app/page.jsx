import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Zap,
  GraduationCap,
  Globe,
  ArrowRight,
  Mail,
  Calendar,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Instagram,
  Music,
} from "lucide-react";

/* ─────────────────────────────────────────────
   FLICKERING TEXT
───────────────────────────────────────────── */
function FlickerText({ text, className = "", tag: Tag = "span", delay = 0 }) {
  return (
    <Tag className={className}>
      {text.split("").map((letter, i) => (
        <span
          key={i}
          className="flicker-letter"
          style={{
            animationDelay: `${delay + i * 0.09}s`,
            display: letter === " " ? "inline" : "inline-block",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
   SMOOTH SCROLL — lerp/RAF, Slade-style
───────────────────────────────────────────── */
function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const state = useRef({
    current: 0,
    target: 0,
    ease: 0.09,
    rafId: null,
    lastTime: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleAnchorClick = useCallback((e) => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;

    const anchor = e.target.closest("a[href^='#']");
    if (!anchor) return;

    const id = anchor.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();

    const top = el.offsetTop;
    window.scrollTo({ top, behavior: "instant" });

    state.current.target = top;
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const syncHeight = () => {
      document.body.style.height = container.scrollHeight + "px";
    };

    syncHeight();

    const ro = new ResizeObserver(syncHeight);
    ro.observe(container);

    const onScroll = () => {
      state.current.target = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    state.current.lastTime = performance.now();

    const tick = (time) => {
      const s = state.current;
      const dt = Math.min(64, time - s.lastTime);

      s.lastTime = time;

      const delta = s.target - s.current;
      const frameMs = 1000 / 60;
      const k = 1 - Math.pow(1 - s.ease, dt / frameMs);

      s.current += delta * k;

      if (Math.abs(delta) < 0.1) {
        s.current = s.target;
      }

      container.style.transform = `translateY(-${s.current}px)`;
      s.rafId = requestAnimationFrame(tick);
    };

    state.current.rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(state.current.rafId);
      ro.disconnect();
      document.body.style.height = "";
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div ref={containerRef} onClick={handleAnchorClick}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onClick={handleAnchorClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "OUR MISSION", href: "#mission" },
  { label: "WHY STARK ONE", href: "#why" },
  { label: "OUR WORK", href: "#work" },
  { label: "EVENTS", href: "#events" },
];

function Navbar() {
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
          ? "bg-[#080808]/95 backdrop-blur-md py-4 border-b border-[rgba(255,255,255,0.05)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-white font-bold text-sm uppercase"
            style={{
              letterSpacing: "0.25em",
              fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
            }}
          >
            S.T.A.R.K. ONE
          </span>
          <img
            src="/weblogo.png"
            alt="S.T.A.R.K. ONE logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-bold text-gray-400 hover:text-white transition-colors"
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
            href="#connect"
            className=" bg-white text-black text-[11px] font-black px-6 py-2.5 hover:bg-gray-200 uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            Stay Connected
          </a>
        </div>

      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#080808] border-t border-[rgba(255,255,255,0.1)] px-6 py-8 flex flex-col gap-6 md:hidden">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="interactive-pulse text-white font-bold text-sm uppercase"
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
          <button
            className="square-btn bg-white text-black font-black py-3 uppercase text-sm"
            style={{ letterSpacing: "0.15em" }}
          >
            Stay Connected
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-[#080808] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1643877970211-1a47b2e528b7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="fusion plasma nebula"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[rgba(255,255,255,0.08)] z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24 pt-48">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[rgba(255,255,255,0.4)]" />
          <span
            className="text-[10px] font-bold text-[rgba(255,255,255,0.5)] uppercase"
            style={{ letterSpacing: "0.35em" }}
          >
            STEM • AWARENESS • RESILIENCE • KNOWLEDGE
          </span>
        </div>

        <h1
          className="text-[13vw] md:text-[10vw] text-white mb-10 uppercase"
          style={{
            fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
          }}
        >
          STARK
          <br />
          <span style={{ color: "rgba(255, 255, 255, 1)" }}>ONE.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[rgba(255,255,255,0.08)] pt-8">
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed">
            Bridging STEM education, fusion energy awareness, and climate action
            for every community — starting with ours.
          </p>
          <div className="flex gap-4 shrink-0">
            <a
              href="#mission"
              className="square-btn flex items-center gap-2 bg-white text-black font-black px-7 py-4 hover:bg-gray-200 uppercase text-xs"
              style={{ letterSpacing: "0.15em" }}
            >
              Explore <ArrowRight size={14} />
            </a>
            <a
              href="#connect"
              className="square-btn flex items-center gap-2 border border-[rgba(255,255,255,0.3)] text-white font-bold px-7 py-4 hover:bg-[rgba(255,255,255,0.05)] uppercase text-xs"
              style={{ letterSpacing: "0.15em" }}
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CATALOG PANEL
───────────────────────────────────────────── */
function CatalogPanel({
  number,
  label,
  title,
  body,
  children,
  id,
  flip = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`catalog-panel border-b border-[rgba(255,255,255,0.06)]${visible ? " is-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-0 items-stretch">
        {/* Text column */}
        <div
          className={`flex flex-col justify-between pb-12 md:pb-0 border-b md:border-b-0 border-[rgba(255,255,255,0.06)] ${
            flip ? "md:order-2 md:pl-16" : "md:pr-16"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span
                className="text-[10px] font-black text-[rgba(255,255,255,0.2)]"
                style={{ letterSpacing: "0.4em" }}
              >
                {number}
              </span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
              <FlickerText
                text={label}
                className="text-[10px] font-black text-[rgba(255,255,255,0.5)] uppercase flicker-label"
                style={{ letterSpacing: "0.4em" }}
              />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.05] mb-10"
              style={{
                fontFamily:
                  "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              {title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-sm">
              {body}
            </p>
          </div>
          <div className="mt-12">
            <a
              href="#connect"
              className="interactive-pulse inline-flex items-center gap-3 text-white text-xs font-black uppercase group border-b border-[rgba(255,255,255,0.2)] pb-2 hover:border-white transition-colors"
              style={{ letterSpacing: "0.15em" }}
            >
              Learn More{" "}
              <ChevronRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Content column */}
        <div
          className={`pt-12 md:pt-0 flex flex-col justify-center ${
            flip ? "md:order-1 md:pr-16" : "md:pl-16"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MISSION CONTENT
───────────────────────────────────────────── */
function MissionContent() {
  const items = [
    {
      num: "01",
      head: "Access for All",
      text: "STEM awareness and resources should never be gated by zip code, income, or background.",
    },
    {
      num: "02",
      head: "Education as Power",
      text: "When people understand the science shaping their world, they become advocates for a better one.",
    },
    {
      num: "03",
      head: "Community First",
      text: "We start where we live — local events, local mentors, local impact — then scale outward.",
    },
  ];
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.num}
          className="flex gap-6 p-6 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.18)] transition-colors"
        >
          <span
            className="text-[10px] font-black text-[rgba(255,255,255,0.18)] mt-1 shrink-0"
            style={{ letterSpacing: "0.1em" }}
          >
            {item.num}
          </span>
          <div>
            <p
              className="text-white font-bold text-sm mb-2 uppercase"
              style={{ letterSpacing: "0.08em" }}
            >
              {item.head}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   WHY CONTENT
───────────────────────────────────────────── */
function WhyContent() {
  return (
    <div>
      <blockquote
        className="text-2xl md:text-3xl font-light text-white leading-snug mb-10 italic"
        style={{
          fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
        }}
      >
        "Most people in our community have never had the awareness or
        opportunities of accessing STEM networks, mentors, or even a simple
        explanation of the technologies that will shape their future."
      </blockquote>
      <div className="grid grid-cols-2 gap-4">
        {[
          { stat: "70%", label: "of STEM jobs go unfilled due to talent gaps" },
          { stat: "∞", label: "potential in every community member" },
        ].map((s) => (
          <div
            key={s.stat}
            className="border border-[rgba(255,255,255,0.06)] p-6"
          >
            <p
              className="text-4xl font-light text-white mb-2"
              style={{
                fontFamily:
                  "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              {s.stat}
            </p>
            <p
              className="text-gray-500 text-xs leading-relaxed font-light uppercase"
              style={{ letterSpacing: "0.08em" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WORK CONTENT
───────────────────────────────────────────── */
function WorkContent() {
  const pillars = [
    {
      icon: <Zap size={20} />,
      title: "FUSION 101",
      desc: "Free talks that break down fusion energy from zero — no PhD required.",
    },
    {
      icon: <GraduationCap size={20} />,
      title: "STEM PATHWAYS",
      desc: "Connecting curious minds to careers, scholarships, and mentors in science and tech.",
    },
    {
      icon: <Globe size={20} />,
      title: "CLIMATE ACTION",
      desc: "Turning urgency into opportunity — solutions, not fear. Technology as a tool for change.",
    },
  ];
  return (
    <div className="border border-[rgba(255,255,255,0.06)]">
      {pillars.map((p, i) => (
        <div
          key={i}
          className="flex gap-6 items-start p-8 border-b border-[rgba(255,255,255,0.06)] last:border-b-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors group cursor-pointer"
        >
          <div className="shrink-0 w-10 h-10 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[rgba(255,255,255,0.6)] group-hover:border-white group-hover:text-white transition-colors">
            {p.icon}
          </div>
          <div className="flex-1">
            <p
              className="text-white font-black text-xs uppercase mb-2"
              style={{ letterSpacing: "0.15em" }}
            >
              {p.title}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {p.desc}
            </p>
          </div>
          <ChevronRight
            size={14}
            className="text-[rgba(255,255,255,0.2)] group-hover:text-white group-hover:translate-x-1 transition-all mt-1 shrink-0"
          />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   EVENTS SECTION
───────────────────────────────────────────── */
function EventsSection() {
  const events = [
    {
      date: "7",
      month: "AUGUST 2026",
      title: "Fusion 101 + Q&A",
      time: "2:30-4:00",
      location: "Potomac Library, VA",
      tag: "EDUCATION",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSdUGixGZr7_Va5sNoGvkiJhqKqDZl_Mybjg8SsmzHJRjtTaHQ/viewform",
    },
  ];

  return (
    <section id="events" className="border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[rgba(255,255,255,0.06)] pb-8">
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] font-black text-[rgba(255,255,255,0.2)]"
              style={{ letterSpacing: "0.4em" }}
            >
              04
            </span>

            <div className="w-16 h-px bg-[rgba(255,255,255,0.08)]" />

            <FlickerText
              text="EVENTS"
              className="text-[10px] font-black text-[rgba(255,255,255,0.5)] uppercase flicker-label"
            />
          </div>

          <h2
            className="text-3xl md:text-4xl font-light text-white"
            style={{
              fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
            }}
          >
            Upcoming
          </h2>
        </div>

        {/* List */}
        <div>
          {events.map((ev, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.015)] transition-colors px-2"
            >
              {/* Date */}
              <div className="shrink-0 w-20 text-center">
                <p
                  className="text-5xl font-light text-white leading-none"
                  style={{
                    fontFamily:
                      "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                  }}
                >
                  {ev.date}
                </p>

                <p
                  className="text-[10px] font-bold text-[rgba(255,255,255,0.3)] mt-1"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {ev.month}
                </p>
              </div>

              <div className="hidden md:block w-px h-12 bg-[rgba(255,255,255,0.08)] shrink-0" />

              {/* Event Info */}
              <div className="flex-1">
                <span
                  className="text-[9px] font-black text-[rgba(255,255,255,0.3)] uppercase mb-2 block"
                  style={{ letterSpacing: "0.4em" }}
                >
                  {ev.tag}
                </span>

                <h4
                  className="text-xl md:text-2xl font-light text-white mb-2 group-hover:text-[rgba(255,255,255,0.8)] transition-colors"
                  style={{
                    fontFamily:
                      "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                  }}
                >
                  {ev.title}
                </h4>

                <div
                  className="flex items-center gap-6 text-gray-600 text-xs font-medium uppercase"
                  style={{ letterSpacing: "0.1em" }}
                >
                  <span className="flex items-center gap-2">
                    <Calendar size={11} /> {ev.time}
                  </span>

                  <span className="flex items-center gap-2">
                    <ShieldCheck size={11} /> {ev.location}
                  </span>
                </div>
              </div>

              {/* Register Button */}
              <a
                href={ev.register}
                target="_blank"
                rel="noopener noreferrer"
                className="square-btn shrink-0 bg-white text-black font-black px-7 py-3 text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ letterSpacing: "0.15em" }}
              >
                Register
              </a>
            </div>
          ))}
        </div>

        {/* All Events */}
        <div className="mt-12 flex justify-end">
          <a
            href="#"
            className="interactive-pulse inline-flex items-center gap-3 text-[rgba(255,255,255,0.4)] hover:text-white text-xs font-black uppercase transition-colors border-b border-[rgba(255,255,255,0.2)] pb-1 hover:border-white"
            style={{ letterSpacing: "0.15em" }}
          >
            All Events <ChevronRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────── */
function CTASection() {
  return (
    <section id="connect" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FlickerText
              text="STAY CONNECTED"
              tag="p"
              className="text-[10px] font-black text-[rgba(0,0,0,0.3)] uppercase mb-8 flicker-label-dark"
              style={{ letterSpacing: "0.4em" }}
            />
            <h2
              className="text-5xl md:text-7xl font-light text-black leading-[1.0] mb-8"
              style={{
                fontFamily:
                  "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              Build the
              <br />
              Future
              <br />
              with Us.
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-md leading-relaxed">
              Drop your email and we'll keep you in the loop on events,
              resources, and ways to get involved in the STEM revolution.
            </p>
          </div>

          <div className="flex justify-start">
            <a
              href="https://forms.gle/3JegsguX2pfSoC2M7"
              target="_blank"
              rel="noopener noreferrer"
              className="square-btn square-btn-dark bg-black text-white font-black py-4 px-8 hover:bg-gray-900 uppercase text-xs flex items-center justify-center gap-3"
              style={{ letterSpacing: "0.15em" }}
            >
              Count Me In <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[rgba(255,255,255,0.06)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-white font-bold text-sm uppercase"
                style={{
                  letterSpacing: "0.25em",
                  fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                }}
              >
                S.T.A.R.K. ONE
              </span>
              <img
                src="/weblogo.png"
                alt="S.T.A.R.K. ONE logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light max-w-xs">
              STEM Through Awareness, Resilience &amp; Knowledge — bridging the
              gap between cutting-edge science and our community.
            </p>
          </div>

          <div className="md:col-span-3">
            <h5
              className="text-white font-black text-[10px] uppercase mb-6"
              style={{ letterSpacing: "0.15em" }}
            >
              
            </h5>
            <ul className="space-y-4">
              {[
              ,
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="interactive-pulse text-gray-600 hover:text-white transition-colors text-sm font-light"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5
              className="text-white font-black text-[10px] uppercase mb-6"
              style={{ letterSpacing: "0.15em" }}
            >
              Contact
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@starkone.org"
                  className="text-gray-600 hover:text-white transition-colors text-sm font-light flex items-center gap-2"
                >
                  <Mail size={13} /> starkone.stem@gmail.com
                </a>
              </li>
              {["Woodbridge, VA "].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="interactive-pulse text-gray-600 hover:text-white transition-colors text-sm font-light"
                    >
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5
              className="text-white font-black text-[10px] uppercase mb-6"
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
                  className="text-gray-600 hover:text-white transition-colors text-sm font-light flex items-center gap-2"
                >
                  <Instagram size={13} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@starkone.stem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors text-sm font-light flex items-center gap-2"
                >
                  <Music size={13} /> TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.06)] gap-4">
          <p
            className="text-[rgba(255,255,255,0.2)] text-[10px] font-bold uppercase"
            style={{ letterSpacing: "0.3em" }}
          >
            © 2026 S.T.A.R.K. ONE — Bringing the Future to Light.
          </p>
          <div
            className="flex gap-8 text-[rgba(255,255,255,0.2)] text-[10px] font-bold uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            <a href="/privacy-policy" className="interactive-pulse hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT PAGE
───────────────────────────────────────────── */
export default function StarkOneLanding() {
  return (
    <SmoothScroll>
      <div
        className="min-h-screen bg-[#080808]"
        style={{ fontFamily: "sans-serif" }}
      >
        <Navbar />
        <Hero />

        <CatalogPanel
          id="mission"
          number="01"
          label="OUR MISSION"
          title="STEM should be accessible to everyone."
          body="At S.T.A.R.K. ONE, we believe that understanding the technologies shaping our future is not a privilege — it's a right. We exist to level the playing field."
        >
          <MissionContent />
        </CatalogPanel>

        <CatalogPanel
          id="why"
          number="02"
          label="WHY STARK ONE"
          title="The gap is real. We bridge it."
          body="Too many people have never encountered a STEM mentor, a career counselor, or even a basic explanation of fusion energy. We change that — one community at a time."
          flip
        >
          <WhyContent />
        </CatalogPanel>

        <CatalogPanel
          id="work"
          number="03"
          label="OUR WORK"
          title="Three pillars. One mission."
          body="From Fusion 101 talks to climate summits, our work is tangible, local, and built for real impact. No jargon. No gatekeeping."
        >
          <WorkContent />
        </CatalogPanel>

        <EventsSection />
        <CTASection />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
