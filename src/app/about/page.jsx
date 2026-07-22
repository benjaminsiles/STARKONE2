import React from "react";
import { Zap, Globe, Cpu, FlaskConical, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { FlickerText } from "../../components/FlickerText";
import { SmoothScroll } from "../../components/SmoothScroll";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const FOCUS_AREAS = [
  {
    icon: <Zap size={20} />,
    title: "Fusion Energy",
    desc: "Plain-language talks and Q&As that explain how fusion works and why it matters — no physics degree required.",
  },
  {
    icon: <Globe size={20} />,
    title: "Clean Technology",
    desc: "Connecting climate science to real, local solutions — turning urgency into opportunity instead of fear.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Engineering",
    desc: "Hands-on exposure to how engineers design, build, and solve problems, aimed at students who've never had access to it.",
  },
  {
    icon: <FlaskConical size={20} />,
    title: "Emerging Science",
    desc: "Keeping our community informed about the research and technology that will shape the next decade.",
  },
];

function SectionHeading({ number, label, title }) {
  return (
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
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <div className="min-h-screen bg-white" style={{ fontFamily: "sans-serif" }}>
          {/* Header */}
          <header className="relative pt-48 pb-20 px-6 border-b border-[rgba(0,0,0,0.08)]">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#1d9e75]" />
                <span
                  className="text-[10px] font-bold text-[#1d9e75] uppercase"
                  style={{ letterSpacing: "0.35em" }}
                >
                  About the organization
                </span>
              </div>
              <h1
                className="text-5xl md:text-7xl text-black mb-8"
                style={{
                  fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif",
                  lineHeight: 1.02,
                }}
              >
                About S.T.A.R.K. One
              </h1>
              <p className="text-lg md:text-xl text-gray-700 font-light max-w-2xl leading-relaxed">
                S.T.A.R.K. One is a youth-led, community education initiative
                based in Prince William County, Northern Virginia. We connect
                people with accessible, no-cost education in fusion energy,
                clean technology, engineering, and emerging science —
                starting with our own neighborhood.
              </p>
            </div>
          </header>

          {/* Who we are */}
          <section className="border-b border-[rgba(0,0,0,0.08)]">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <SectionHeading number="01" label="Who We Are" />
              <h2
                className="text-3xl md:text-4xl font-light text-black leading-[1.1] mb-8"
                style={{ fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif" }}
              >
                A student-run initiative, built for the community we live in.
              </h2>
              <div className="space-y-6 text-gray-700 text-base leading-relaxed font-light max-w-2xl">
                <p>
                  S.T.A.R.K. One was founded by local students who noticed the
                  same gap over and over: most people in our area have never
                  had a STEM mentor, never met an engineer, and never had
                  anyone explain how something like fusion energy actually
                  works. We started S.T.A.R.K. One to close that gap —
                  one free talk, one event, and one conversation at a time.
                </p>
                <p>
                  We are entirely volunteer-run and youth-led. That shapes how
                  we teach: no jargon, no gatekeeping, and no assumption that
                  you already know the vocabulary. Whether you're a middle
                  schooler curious about science or an adult who wants to
                  finally understand what "nuclear fusion" means, our programs
                  are built for you.
                </p>
              </div>
            </div>
          </section>

          {/* Our name */}
          <section className="border-b border-[rgba(0,0,0,0.08)] bg-[rgba(29,158,117,0.04)]">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <SectionHeading number="02" label="Our Name" />
              <h2
                className="text-3xl md:text-4xl font-light text-black leading-[1.1] mb-8"
                style={{ fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif" }}
              >
                S.T.A.R.K. stands for STEM Through Awareness, Resilience &amp; Knowledge.
              </h2>
              <div className="space-y-6 text-gray-700 text-base leading-relaxed font-light max-w-2xl">
                <p>
                  "One" reflects where we start: one community, one student,
                  one conversation at a time — with the goal of growing far
                  beyond that. You'll see our name written a few different
                  ways online and in casual conversation —{" "}
                  <strong className="text-black font-medium">S.T.A.R.K. One</strong>,{" "}
                  <strong className="text-black font-medium">STARK One</strong>, and{" "}
                  <strong className="text-black font-medium">Stark One</strong> — all
                  of them refer to the same organization. Our official name is
                  S.T.A.R.K. One, and our official website is{" "}
                  <a
                    href="https://starkone.org"
                    className="text-[#1d9e75] hover:text-[#17825f] transition-colors font-medium"
                  >
                    starkone.org
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Focus areas */}
          <section className="border-b border-[rgba(0,0,0,0.08)]">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <SectionHeading number="03" label="What We Focus On" />
              <h2
                className="text-3xl md:text-4xl font-light text-black leading-[1.1] mb-12"
                style={{ fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif" }}
              >
                Four subjects. One accessible on-ramp into each.
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {FOCUS_AREAS.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-5 items-start p-6 border border-[rgba(0,0,0,0.08)] hover:border-[#1d9e75] transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 border border-[rgba(29,158,117,0.4)] flex items-center justify-center text-[#1d9e75]">
                      {f.icon}
                    </div>
                    <div>
                      <p
                        className="text-black font-black text-xs uppercase mb-2"
                        style={{ letterSpacing: "0.15em" }}
                      >
                        {f.title}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed font-light">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Where we work */}
          <section className="border-b border-[rgba(0,0,0,0.08)] bg-[rgba(29,158,117,0.04)]">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <SectionHeading number="04" label="Where We Work" />
              <h2
                className="text-3xl md:text-4xl font-light text-black leading-[1.1] mb-8"
                style={{ fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif" }}
              >
                Rooted in Northern Virginia.
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin size={20} className="text-[#1d9e75] shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed font-light max-w-2xl">
                  S.T.A.R.K. One is based in Prince William County, Virginia,
                  and runs its programs in and around Woodbridge, VA. We
                  partner with local venues like Potomac Library to host free,
                  in-person events, and we're actively growing our reach
                  across Northern Virginia.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-[rgba(0,0,0,0.08)] pt-12">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-light text-black mb-2"
                  style={{ fontFamily: "'Le Jour Serif', 'Playfair Display', Georgia, serif" }}
                >
                  See S.T.A.R.K. One in action.
                </h2>
                <p className="text-gray-700 text-sm font-light">
                  Check our upcoming events or head back to the homepage.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <a
                  href="/events/"
                  className="square-btn flex items-center gap-2 bg-[#1d9e75] text-white font-black px-7 py-4 hover:bg-[#17825f] uppercase text-xs"
                  style={{ letterSpacing: "0.15em" }}
                >
                  View Events <ArrowRight size={14} />
                </a>
                <a
                  href="/"
                  className="square-btn flex items-center gap-2 border border-[#1d9e75] text-[#1d9e75] font-bold px-7 py-4 hover:bg-[rgba(29,158,117,0.08)] uppercase text-xs"
                  style={{ letterSpacing: "0.15em" }}
                >
                  Back to S.T.A.R.K. One <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
