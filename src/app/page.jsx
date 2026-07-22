import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  GraduationCap,
  Globe,
  ArrowRight,
  Calendar,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { FlickerText } from "../components/FlickerText";
import { SmoothScroll } from "../components/SmoothScroll";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { events } from "../data/events";

const BRAND_GREEN = "#1d9e75";
const BLACK_TEXT = "#000000";

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1643877970211-1a47b2e528b7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="fusion plasma nebula"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1d9e75] z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24 pt-48">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#1d9e75]" />
          <span
            className="text-[10px] font-bold text-[#1d9e75] uppercase"
            style={{ letterSpacing: "0.35em" }}
          >
            STEM • AWARENESS • RESILIENCE • KNOWLEDGE
          </span>
        </div>

        <h1
          className="text-[13vw] md:text-[10vw] text-black mb-10 uppercase"
          style={{
            fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
          }}
        >
          S.T.A.R.K.{" "}
          <br />
          <span style={{ color: BLACK_TEXT }}>ONE.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[rgba(0,0,0,0.1)] pt-8">
          <p className="text-lg md:text-xl text-gray-700 font-light max-w-xl leading-relaxed">
            Bridging STEM education, fusion energy awareness, and climate action
            for every community — starting with ours.
          </p>
          <div className="flex gap-4 shrink-0">
            <a
              href="#mission"
              className="square-btn flex items-center gap-2 bg-[#1d9e75] text-white font-black px-7 py-4 hover:bg-[#17825f] uppercase text-xs"
              style={{ letterSpacing: "0.15em" }}
            >
              Explore <ArrowRight size={14} />
            </a>
            <a
              href="#connect"
              className="square-btn flex items-center gap-2 border border-[#1d9e75] text-[#1d9e75] font-bold px-7 py-4 hover:bg-[rgba(29,158,117,0.08)] uppercase text-xs"
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
      className={`catalog-panel border-b border-[rgba(0,0,0,0.08)]${visible ? " is-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-0 items-stretch">
        {/* Text column */}
        <div
          className={`flex flex-col justify-between pb-12 md:pb-0 border-b md:border-b-0 border-[rgba(0,0,0,0.08)] ${
            flip ? "md:order-2 md:pl-16" : "md:pr-16"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span
                className="text-[10px] font-black text-[rgba(0,0,0,0.25)]"
                style={{ letterSpacing: "0.4em" }}
              >
                {number}
              </span>
              <div className="flex-1 h-px bg-[rgba(0,0,0,0.1)]" />
              <FlickerText
                text={label}
                className="text-[10px] font-black text-[#1d9e75] uppercase flicker-label"
                style={{ letterSpacing: "0.4em" }}
              />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-[1.05] mb-10"
              style={{
                fontFamily:
                  "'Le Jour Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              {title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed font-light max-w-sm">
              {body}
            </p>
          </div>
          <div className="mt-12">
            <a
              href="#connect"
              className="inline-flex items-center gap-3 text-[#1d9e75] text-xs font-black uppercase group border-b border-[rgba(29,158,117,0.4)] pb-2 hover:border-[#1d9e75] transition-colors"
              style={{ letterSpacing: "0.15em" }}
            >
              Learn More <ChevronRight size={12} />
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
          className="flex gap-6 p-6 bg-[#1d9e75] border border-[#1d9e75] hover:border-[#17825f] transition-colors"
        >
          <span
            className="text-[10px] font-black text-[rgba(255,255,255,0.6)] mt-1 shrink-0"
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
            <p className="text-white text-sm leading-relaxed font-light">
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
        className="text-2xl md:text-3xl font-light text-black leading-snug mb-10 italic"
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
            className="bg-[#1d9e75] border border-[#1d9e75] p-6"
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
              className="text-white text-xs leading-relaxed font-light uppercase"
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
    <div className="border border-[rgba(0,0,0,0.08)]">
      {pillars.map((p, i) => (
        <div
          key={i}
          className="flex gap-6 items-start p-8 border-b border-[rgba(0,0,0,0.08)] last:border-b-0 hover:bg-[rgba(29,158,117,0.05)] transition-colors group cursor-pointer"
        >
          <div className="shrink-0 w-10 h-10 border border-[rgba(29,158,117,0.4)] flex items-center justify-center text-[#1d9e75] group-hover:border-[#1d9e75] group-hover:bg-[#1d9e75] group-hover:text-white transition-colors">
            {p.icon}
          </div>
          <div className="flex-1">
            <p
              className="text-black font-black text-xs uppercase mb-2"
              style={{ letterSpacing: "0.15em" }}
            >
              {p.title}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed font-light">
              {p.desc}
            </p>
          </div>
          <ChevronRight
            size={14}
            className="text-[rgba(0,0,0,0.25)] group-hover:text-[#1d9e75] transition-colors mt-1 shrink-0"
          />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   EVENTS SECTION (homepage preview)
───────────────────────────────────────────── */
function EventsSection() {
  return (
    <section id="events" className="border-b border-[rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[rgba(0,0,0,0.08)] pb-8">
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] font-black text-[rgba(0,0,0,0.25)]"
              style={{ letterSpacing: "0.4em" }}
            >
              04
            </span>

            <div className="w-16 h-px bg-[rgba(0,0,0,0.1)]" />

            <FlickerText
              text="EVENTS"
              className="text-[10px] font-black text-[#1d9e75] uppercase flicker-label"
            />
          </div>

          <h2
            className="text-3xl md:text-4xl font-light text-black"
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
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b border-[rgba(0,0,0,0.08)] hover:bg-[rgba(29,158,117,0.04)] transition-colors px-2"
            >
              {/* Date */}
              <div className="shrink-0 w-20 text-center">
                <p
                  className="text-5xl font-light text-[#1d9e75] leading-none"
                  style={{
                    fontFamily:
                      "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                  }}
                >
                  {ev.date}
                </p>

                <p
                  className="text-[10px] font-bold text-[rgba(0,0,0,0.4)] mt-1"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {ev.month}
                </p>
              </div>

              <div className="hidden md:block w-px h-12 bg-[rgba(0,0,0,0.1)] shrink-0" />

              {/* Event Info */}
              <div className="flex-1">
                <span
                  className="text-[9px] font-black text-[#1d9e75] uppercase mb-2 block"
                  style={{ letterSpacing: "0.4em" }}
                >
                  {ev.tag}
                </span>

                <h4
                  className="text-xl md:text-2xl font-light text-black mb-2 group-hover:text-[#1d9e75] transition-colors"
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
                className="square-btn shrink-0 bg-[#1d9e75] text-white font-black px-7 py-3 text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#17825f]"
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
            href="/events/"
            className="inline-flex items-center gap-3 text-[rgba(0,0,0,0.5)] hover:text-[#1d9e75] text-xs font-black uppercase transition-colors border-b border-[rgba(29,158,117,0.4)] pb-1 hover:border-[#1d9e75]"
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
    <section id="connect" className="bg-white border-t border-[rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FlickerText
              text="STAY CONNECTED"
              tag="p"
              className="text-[10px] font-black text-[#1d9e75] uppercase mb-8 flicker-label-dark"
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
            <p className="text-gray-700 text-lg font-light max-w-md leading-relaxed">
              Drop your email and we'll keep you in the loop on events,
              resources, and ways to get involved in the STEM revolution.
            </p>
          </div>

          <div className="flex justify-start">
            <a
              href="https://forms.gle/3JegsguX2pfSoC2M7"
              target="_blank"
              rel="noopener noreferrer"
              className="square-btn square-btn-dark bg-[#1d9e75] text-white font-black py-4 px-8 hover:bg-[#17825f] uppercase text-xs flex items-center justify-center gap-3"
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
   ROOT PAGE
───────────────────────────────────────────── */
export default function StarkOneLanding() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <div
          className="min-h-screen bg-white"
          style={{ fontFamily: "sans-serif" }}
        >
          <Hero />

          <CatalogPanel
            id="mission"
            number="01"
            label="OUR MISSION"
            title="STEM should be accessible to everyone."
            body="S.T.A.R.K. One is a youth-led community education initiative based in Prince William County, Northern Virginia. We connect our neighbors with clear, no-cost education in fusion energy, clean technology, engineering, and emerging science — because understanding the world's future shouldn't be a privilege. This site, starkone.org, is our official home for programs, events, and ways to get involved."
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
    </>
  );
}
