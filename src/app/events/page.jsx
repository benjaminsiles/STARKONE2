import React from "react";
import { Calendar, ShieldCheck, ArrowRight, ChevronRight, Mail } from "lucide-react";
import { FlickerText } from "../../components/FlickerText";
import { SmoothScroll } from "../../components/SmoothScroll";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { events } from "../../data/events";

const BRAND_GREEN = "rgb(29, 158, 117)";
const ON_BRAND = "#ffffff";

function SectionHeading({ number, label }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="text-[10px] font-black text-white/50"
        style={{ letterSpacing: "0.4em" }}
      >
        {number}
      </span>
      <div className="flex-1 h-px bg-white/15" />
      <FlickerText
        text={label}
        className="text-[10px] font-black text-white uppercase flicker-label"
      />
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <div
          className="min-h-screen bg-brand text-white"
          style={{ fontFamily: "sans-serif", backgroundColor: BRAND_GREEN, color: ON_BRAND }}
        >
          <header className="relative pt-48 pb-20 px-6 border-b border-white/15">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-white/70" />
                <span
                  className="text-[10px] font-bold text-white/80 uppercase"
                  style={{ letterSpacing: "0.35em" }}
                >
                  Get involved
                </span>
              </div>
              <h1
                className="text-5xl md:text-7xl text-white mb-8"
                style={{
                  fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                  lineHeight: 1.02,
                }}
              >
                S.T.A.R.K. One Events
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
                Every S.T.A.R.K. One event is free and open to the public. We
                host talks, Q&As, and hands-on sessions across Northern
                Virginia that break down fusion energy, clean technology, and
                engineering for anyone who's curious — no background required.
              </p>
            </div>
          </header>

          <section className="border-b border-white/15">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <SectionHeading number="01" label="Upcoming" />

              {events.length > 0 ? (
                <div>
                  {events.map((ev, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-b border-white/15 first:pt-0"
                    >
                      <div className="shrink-0 w-20 text-center">
                        <p
                          className="text-5xl font-light text-white leading-none"
                          style={{
                            fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                          }}
                        >
                          {ev.date}
                        </p>
                        <p
                          className="text-[10px] font-bold text-white/65 mt-1"
                          style={{ letterSpacing: "0.15em" }}
                        >
                          {ev.month}
                        </p>
                      </div>

                      <div className="hidden md:block w-px bg-white/15 shrink-0 self-stretch" />

                      <div className="flex-1">
                        <span
                          className="text-[9px] font-black text-white uppercase mb-2 block"
                          style={{ letterSpacing: "0.4em" }}
                        >
                          {ev.tag}
                        </span>
                        <h2
                          className="text-2xl md:text-3xl font-light text-white mb-3"
                          style={{
                            fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                          }}
                        >
                          {ev.title}
                        </h2>
                        <p className="text-white/80 text-sm leading-relaxed font-light mb-4 max-w-xl">
                          {ev.description}
                        </p>
                        <div
                          className="flex flex-wrap items-center gap-6 text-white/75 text-xs font-medium uppercase mb-6"
                          style={{ letterSpacing: "0.1em" }}
                        >
                          <span className="flex items-center gap-2">
                            <Calendar size={11} /> {ev.time}
                          </span>
                          <span className="flex items-center gap-2">
                            <ShieldCheck size={11} /> {ev.location}
                          </span>
                        </div>
                        <a
                          href={ev.register}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="square-btn inline-flex items-center gap-2 bg-white text-brand font-black px-6 py-3 text-xs uppercase hover:bg-white/90"
                          style={{ letterSpacing: "0.15em" }}
                        >
                          Register <ArrowRight size={13} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white/80 text-base font-light">
                  We don't have an event on the calendar this moment — join
                  our list below and we'll email you the second one is
                  announced.
                </p>
              )}
            </div>
          </section>

          <section className="border-b border-white/15 bg-white/10">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <SectionHeading number="02" label="Stay In The Loop" />
              <h2
                className="text-3xl md:text-4xl font-light text-white leading-[1.1] mb-6"
                style={{ fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif" }}
              >
                More events are on the way.
              </h2>
              <p className="text-white/80 text-base leading-relaxed font-light max-w-2xl mb-8">
                We add new S.T.A.R.K. One events throughout the year as we
                grow our reach across Northern Virginia. Drop your email and
                we'll let you know as soon as the next one is scheduled — no
                spam, just events and ways to get involved.
              </p>
              <a
                href="https://forms.gle/3JegsguX2pfSoC2M7"
                target="_blank"
                rel="noopener noreferrer"
                className="square-btn inline-flex items-center gap-2 bg-white text-brand font-black px-7 py-4 hover:bg-white/90 uppercase text-xs"
                style={{ letterSpacing: "0.15em" }}
              >
                <Mail size={14} /> Get Notified
              </a>
            </div>
          </section>

          <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto flex justify-start border-t border-white/15 pt-12">
              <a
                href="/"
                className="square-btn flex items-center gap-2 border border-white/70 text-white font-bold px-7 py-4 hover:bg-white/10 uppercase text-xs"
                style={{ letterSpacing: "0.15em" }}
              >
                Back to S.T.A.R.K. One <ChevronRight size={14} />
              </a>
            </div>
          </section>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
