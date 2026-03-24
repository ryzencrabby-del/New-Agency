/*
 * ATLAS DIGITAL AGENCY — Home Page
 * All 14 changes applied per user instructions
 */

import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, CheckCircle, ChevronDown, Send,
  TrendingUp, Users, Star, Zap, Instagram, Music2,
  Bot, Server, Globe, Mail, BarChart2, PenTool, Megaphone,
  Cpu, Bolt, Calendar, BellRing, Coffee
} from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/hello-atlasdigitalagency/30min";
const LOGO_ICON_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663461011468/PLNS4n83QcWxh4tdXjDH6N/atlas-logo-icon-jku7vVNnKvRFx4SggkjmaQ.webp";

// ── Change #4 & #6: Updated services list with AI Automation first, Hosting 4th ──
const SERVICES = [
  {
    number: "01",
    title: "AI Business Automation",
    description:
      "We build custom AI systems that respond to every lead in 60 seconds automatically, qualify prospects, and book appointments into your calendar while you sleep — 24 hours a day, 7 days a week. The most powerful growth tool available for your business right now.",
    icon: "🤖",
    badge: "Most Popular",
    highlight: true,
    price: "Starting from $800 setup",
  },
  {
    number: "02",
    title: "Website Design & Development",
    description:
      "Conversion-focused websites built for speed, accessibility, and brand impact. We design experiences that turn visitors into clients.",
    icon: "💻",
    badge: null,
    highlight: false,
    price: null,
  },
  {
    number: "03",
    title: "AI Chatbot Setup",
    description:
      "Deploy intelligent AI chatbots on your website, Instagram, and Facebook that qualify leads, answer questions, and book appointments automatically — around the clock.",
    icon: "💬",
    badge: null,
    highlight: false,
    price: null,
  },
  {
    number: "04",
    title: "Web Hosting & Maintenance",
    description:
      "Premium managed web hosting with 99.9% uptime guarantee. Includes daily backups, security monitoring, speed optimization, software updates, and monthly performance reports. We keep your site fast, secure, and always online so you never lose a visitor.",
    icon: "🖥️",
    badge: null,
    highlight: false,
    price: "Starting from $99/month",
  },
  {
    number: "05",
    title: "Search Engine Optimization",
    description:
      "Dominate organic search with technical SEO, content strategy, and authoritative link-building that drives compounding long-term traffic.",
    icon: "🔍",
    badge: null,
    highlight: false,
    price: null,
  },
  {
    number: "06",
    title: "Paid Advertising (PPC)",
    description:
      "High-ROI Google Ads and Meta campaigns engineered for conversion. Every dollar tracked, every audience tested, every result optimized.",
    icon: "📈",
    badge: null,
    highlight: false,
    price: null,
  },
  {
    number: "07",
    title: "Social Media Management",
    description:
      "Strategic content and community management that builds brand authority and drives meaningful engagement across all platforms.",
    icon: "📱",
    badge: null,
    highlight: false,
    price: null,
  },
  {
    number: "08",
    title: "Email Marketing & Automation",
    description:
      "Automated sequences and broadcast campaigns that nurture leads and generate repeat revenue with precision targeting.",
    icon: "✉️",
    badge: null,
    highlight: false,
    price: null,
  },
];

const WHY_ATLAS = [
  { stat: "250%", label: "Average ROI for clients in year one" },
  { stat: "100+", label: "Brands scaled across the United States" },
  { stat: "97%", label: "Client retention rate" },
  { stat: "60s", label: "AI lead response time guarantee" },
];

// ── Change #2: Updated stats ──
const RESULTS_STATS = [
  { icon: TrendingUp, value: "$10M+", label: "Revenue Generated for Clients" },
  { icon: Users, value: "100+", label: "Brands Scaled Successfully" },
  { icon: Star, value: "97%", label: "Client Retention Rate" },
  { icon: Zap, value: "250%", label: "Average First-Year ROI" },
];

const TICKER_ITEMS = [
  "AI Business Automation", "SEO That Ranks", "Ads That Convert", "Websites That Sell",
  "AI Chatbots That Close", "Growth That Compounds", "Strategy That Scales", "Results That Matter",
];

// AI Flow steps
const AI_FLOW_STEPS = [
  { icon: Mail, label: "Lead submits contact form", time: "11:47pm", color: "#3B82F6" },
  { icon: Cpu, label: "Atlas AI detects new lead", time: "Instant", color: "#60A5FA" },
  { icon: Bot, label: "Personalized email written & sent", time: "47 seconds", color: "#3B82F6" },
  { icon: Zap, label: "Lead qualified automatically", time: "Auto", color: "#60A5FA" },
  { icon: Calendar, label: "Appointment booked to calendar", time: "Auto", color: "#3B82F6" },
  { icon: Coffee, label: "You wake up to a confirmed meeting", time: "Morning", color: "#60A5FA" },
];

const AI_BENEFITS = [
  "Responds to every lead in under 60 seconds guaranteed",
  "Works on your website, Instagram, Facebook and email simultaneously",
  "Fully customized to sound exactly like you wrote it personally",
  "Integrates seamlessly with your existing tools and CRM",
  "Zero technical knowledge required from you ever",
];

// Intersection observer hook
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Navigation ────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Change #11: Updated nav links
  const links = [
    { label: "Services", href: "#services" },
    { label: "AI Automation", href: "#ai-automation" },
    { label: "Hosting", href: "#hosting-plans" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D0D0F]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={LOGO_ICON_URL}
            alt="Atlas Digital Agency"
            className="w-10 h-10 object-contain rounded-sm"
            style={{ filter: "drop-shadow(0 0 8px oklch(0.52 0.22 293 / 0.5))" }}
          />
          <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Atlas Digital Agency
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 relative group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: "oklch(0.52 0.22 293)" }} />
            </a>
          ))}
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow px-5 py-2 rounded text-sm">
            Book a Call
          </a>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0D0D0F]/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/80 text-lg"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-violet-glow px-5 py-3 rounded text-center text-sm mt-2"
            onClick={() => setOpen(false)}
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Ticker Bar ────────────────────────────────────────────────────────────────
function TickerBar() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="w-full overflow-hidden py-3 border-b" style={{ background: "oklch(0.52 0.22 293)", borderColor: "oklch(0.42 0.24 293)" }}>
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "ticker 30s linear infinite", width: "max-content" }}>
        {items.map((item, i) => (
          <span key={i} className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0D0D0F" }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663461011468/PLNS4n83QcWxh4tdXjDH6N/atlas-hero-bg-BYf7tCPys44eW4aFapg9gu.webp')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0F] via-[#0D0D0F]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "oklch(0.52 0.22 293)" }} />

      <div className="container relative z-10 pt-36 pb-24">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border text-xs font-semibold tracking-widest uppercase"
            style={{ borderColor: "oklch(0.52 0.22 293 / 0.4)", color: "oklch(0.72 0.18 293)", background: "oklch(0.52 0.22 293 / 0.08)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.72 0.18 293)" }} />
            AI-Powered Digital Growth Agency
          </div>

          {/* Change #3: Updated hero headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6 animate-fade-up" style={{ fontFamily: "'Syne', sans-serif" }}>
            We Build. We Automate.
            <br />
            <span style={{ color: "oklch(0.72 0.18 293)" }}>We Grow Your Business.</span>
          </h1>

          {/* Change #3: Updated hero subheadline */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-up animate-fade-up-delay-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Atlas Digital Agency builds custom AI automation systems, premium websites, and full digital marketing solutions that help businesses grow faster with less work — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-fade-up-delay-2">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow px-8 py-4 rounded text-base flex items-center gap-2 justify-center">
              Book a Free Strategy Call
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="px-8 py-4 rounded text-base text-white/80 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200 flex items-center gap-2 justify-center" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>
              Our Services
              <ChevronDown size={18} />
            </a>
          </div>

          {/* Change #2: Updated trust micro-copy */}
          <p className="mt-8 text-white/50 text-xs animate-fade-up animate-fade-up-delay-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No contracts. No fluff. Just results. — Trusted by 100+ businesses across the United States.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────────────────────
function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0D0D0F" }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663461011468/PLNS4n83QcWxh4tdXjDH6N/atlas-services-bg-Ui5btoRnN3fnMAiguxfbqH.webp')" }} />
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container relative z-10" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Services Built
              <br />
              for Growth
            </h2>
          </div>
          <p className="text-white/50 text-base max-w-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Every service we offer is engineered around one goal: measurable, sustainable growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.number}
              className={`bg-[#0D0D0F] p-8 card-lift group relative overflow-hidden ${inView ? `animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}` : "opacity-0"}`}
              style={svc.highlight ? { boxShadow: "inset 0 0 0 1.5px #3B82F6, 0 0 24px #3B82F620" } : {}}
            >
              {svc.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, #3B82F6, #60A5FA)" }} />
              )}
              {svc.badge && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold mb-3" style={{ background: "#3B82F620", color: "#60A5FA", border: "1px solid #3B82F640", fontFamily: "'DM Sans', sans-serif" }}>
                  ⚡ {svc.badge}
                </span>
              )}
              <span className="absolute top-4 right-4 text-7xl font-black select-none pointer-events-none" style={{ color: "oklch(0.52 0.22 293 / 0.06)", fontFamily: "'Syne', sans-serif" }}>{svc.number}</span>
              <div className="text-xs font-bold tracking-widest mb-3" style={{ color: svc.highlight ? "#60A5FA" : "oklch(0.52 0.22 293)", fontFamily: "'DM Sans', sans-serif" }}>{svc.number}</div>
              <div className="text-2xl mb-3">{svc.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>{svc.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{svc.description}</p>
              {svc.price && (
                <p className="text-xs font-semibold mt-2" style={{ color: svc.highlight ? "#60A5FA" : "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>{svc.price}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow inline-flex items-center gap-2 px-8 py-4 rounded text-base">
            Get a Free Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Change #5: AI Automation Flow Section ─────────────────────────────────────
function AIAutomation() {
  const { ref, inView } = useInView();

  return (
    <section
      id="ai-automation"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 40%, #0a1628 70%, #0D0D0F 100%)" }}
    >
      <div className="violet-rule absolute top-0 left-0 right-0" />
      {/* Blue glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none" style={{ background: "#3B82F6" }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-6 blur-3xl pointer-events-none" style={{ background: "#1D4ED8" }} />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#60A5FA", fontFamily: "'DM Sans', sans-serif" }}>AI Lead Automation</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Never Miss Another
            <br />
            <span style={{ color: "#60A5FA" }}>Lead Again.</span>
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Our AI automation responds to every single inquiry in 60 seconds — even at 2am on a Sunday. Here is exactly what happens the moment a lead reaches out to your business:
          </p>
        </div>

        {/* Animated flow — horizontal on desktop, vertical on mobile */}
        <div className={`mb-16 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}>
          {/* Desktop flow */}
          <div className="hidden lg:flex items-center justify-between gap-2">
            {AI_FLOW_STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center text-center w-28">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3 border-2"
                    style={{ background: `${step.color}18`, borderColor: `${step.color}60`, boxShadow: `0 0 20px ${step.color}30` }}
                  >
                    <step.icon size={22} style={{ color: step.color }} />
                  </div>
                  <p className="text-white text-xs font-semibold leading-tight mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.label}</p>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${step.color}20`, color: step.color, fontFamily: "'DM Sans', sans-serif" }}>{step.time}</span>
                </div>
                {i < AI_FLOW_STEPS.length - 1 && (
                  <div className="flex items-center gap-1 text-blue-400 shrink-0">
                    <div className="w-6 h-px" style={{ background: "linear-gradient(90deg, #3B82F6, #60A5FA)" }} />
                    <Zap size={14} style={{ color: "#60A5FA" }} />
                    <div className="w-6 h-px" style={{ background: "linear-gradient(90deg, #60A5FA, #3B82F6)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow — vertical */}
          <div className="lg:hidden flex flex-col gap-4">
            {AI_FLOW_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-center gap-4 w-full max-w-sm">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2"
                    style={{ background: `${step.color}18`, borderColor: `${step.color}60`, boxShadow: `0 0 16px ${step.color}30` }}
                  >
                    <step.icon size={20} style={{ color: step.color }} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.label}</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${step.color}20`, color: step.color }}>{step.time}</span>
                  </div>
                </div>
                {i < AI_FLOW_STEPS.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-px h-4" style={{ background: "linear-gradient(180deg, #3B82F6, #60A5FA)" }} />
                    <Zap size={12} style={{ color: "#60A5FA" }} />
                    <div className="w-px h-4" style={{ background: "linear-gradient(180deg, #60A5FA, #3B82F6)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Electric blue italic tagline */}
        <p
          className={`text-center text-lg font-semibold italic mb-12 ${inView ? "animate-fade-up animate-fade-up-delay-3" : "opacity-0"}`}
          style={{ color: "#60A5FA", fontFamily: "'DM Sans', sans-serif" }}
        >
          While your competitors are sleeping, you are closing.
        </p>

        {/* 5 benefit points in 2 columns */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 ${inView ? "animate-fade-up animate-fade-up-delay-3" : "opacity-0"}`}>
          {AI_BENEFITS.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#60A5FA" }} />
              <span className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Large glowing CTA button */}
        <div className={`text-center ${inView ? "animate-fade-up animate-fade-up-delay-4" : "opacity-0"}`}>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-lg text-base font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2563EB, #3B82F6)",
              boxShadow: "0 0 40px #3B82F660, 0 0 80px #3B82F620",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            See It In Action
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Why Atlas ─────────────────────────────────────────────────────────────────
function WhyAtlas() {
  const { ref, inView } = useInView();

  return (
    <section id="why-atlas" className="relative py-24 md:py-32" style={{ background: "oklch(0.11 0.006 285)" }}>
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={inView ? "animate-fade-up" : "opacity-0"}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Results-Obsessed.
              <br />
              <span style={{ color: "oklch(0.72 0.18 293)" }}>Always.</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We don't just run campaigns — we build growth systems. Every strategy is custom-built around your business goals, your audience, and your competitive landscape. No templates. No guesswork. Just results.
            </p>

            <ul className="space-y-4">
              {[
                "Dedicated account manager for every client",
                "Transparent reporting — no smoke and mirrors",
                "Full-funnel strategy from awareness to conversion",
                "AI automation that works while you sleep",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: "oklch(0.72 0.18 293)" }} />
                  <span className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm mt-10">
              Schedule Your Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}>
            {WHY_ATLAS.map((item) => (
              <div key={item.stat} className="rounded-lg p-8 card-lift border" style={{ background: "oklch(0.13 0.007 285)", borderColor: "oklch(0.22 0.01 285)" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'Syne', sans-serif" }}>{item.stat}</div>
                <div className="text-white/55 text-sm leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Results ──────────────────────────────────────────────────────────────────
function Results() {
  const { ref, inView } = useInView();

  return (
    <section id="results" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0D0D0F" }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663461011468/PLNS4n83QcWxh4tdXjDH6N/atlas-results-bg-HEqHTShqzcc4nyZDzcLpki.webp')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0F] via-transparent to-[#0D0D0F]" />
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>Our Track Record</p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            Our Work Speaks
            <br />
            <span style={{ color: "oklch(0.72 0.18 293)" }}>For Itself.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            From local businesses to national brands, we've helped clients across every industry achieve breakthrough growth.
          </p>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}>
          {RESULTS_STATS.map((stat) => (
            <div key={stat.value} className="rounded-xl p-6 md:p-8 text-center card-lift border group" style={{ background: "oklch(0.12 0.006 285)", borderColor: "oklch(0.22 0.01 285)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.52 0.22 293 / 0.12)" }}>
                <stat.icon size={20} style={{ color: "oklch(0.72 0.18 293)" }} />
              </div>
              <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'Syne', sans-serif" }}>{stat.value}</div>
              <div className="text-white/50 text-xs leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`text-center ${inView ? "animate-fade-up animate-fade-up-delay-3" : "opacity-0"}`}>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow inline-flex items-center gap-3 px-10 py-5 rounded-lg text-base" style={{ boxShadow: "0 0 40px oklch(0.52 0.22 293 / 0.4), 0 0 80px oklch(0.52 0.22 293 / 0.15)" }}>
            Start Growing Today
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const { ref, inView } = useInView();

  const testimonials = [
    {
      quote: "Atlas completely transformed how we handle leads. We went from slow, manual follow-ups to instant responses and fully automated booking. Within the first month, our calendar was noticeably fuller — and we didn't have to hire anyone to keep up.",
      name: "Sarah M.",
      title: "Owner, Home Services Company",
      initials: "SM",
    },
    {
      quote: "What stood out about Atlas is that everything actually works together. The website, ads, and AI automation aren't separate — they built a system that consistently brings in and converts leads. It feels like we finally have a real growth engine in place.",
      name: "James R.",
      title: "Founder, Consulting Firm",
      initials: "JR",
    },
    {
      quote: "The AI automation alone paid for itself. Leads are contacted immediately, pre-qualified, and booked onto our calendar without any back-and-forth. It's like having a 24/7 sales assistant that never misses an opportunity.",
      name: "Daniel K.",
      title: "Sales Director, SaaS Company",
      initials: "DK",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "oklch(0.11 0.006 285)" }}>
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>Client Results</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            What Our Clients
            <br />
            <span style={{ color: "oklch(0.72 0.18 293)" }}>Are Saying.</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}>
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl p-8 flex flex-col border card-lift" style={{ background: "oklch(0.13 0.007 285)", borderColor: "oklch(0.22 0.01 285)" }}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} fill="oklch(0.72 0.18 293)" style={{ color: "oklch(0.72 0.18 293)" }} />
                ))}
              </div>
              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "{t.quote}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "oklch(0.52 0.22 293 / 0.2)", color: "oklch(0.72 0.18 293)", fontFamily: "'Syne', sans-serif" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>{t.name}</p>
                  <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Change #7: New Pricing Section ───────────────────────────────────────────
function PricingSection() {
  const { ref, inView } = useInView();

  const packages = [
    {
      id: "starter",
      name: "Starter",
      subtitle: "Ideal for new businesses getting started online",
      price: "$1,200",
      period: "one time",
      badge: null,
      style: "blue-border",
      features: [
        "5 page custom website design & development",
        "Mobile responsive on all devices",
        "Contact form and lead capture setup",
        "Basic SEO foundation",
        "AI chatbot setup",
        "30 days of post-launch support",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      subtitle: "Ideal for established businesses ready to scale",
      price: "$2,500",
      period: "one time + $299/month",
      badge: "Most Popular",
      style: "blue-gradient",
      features: [
        "Everything in Starter",
        "Custom AI lead automation system",
        "Automated email follow-up sequences",
        "Full CRM integration",
        "Appointment booking automation",
        "Monthly website maintenance",
        "Monthly performance report",
        "Priority support",
        "Up and running in 5 days",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      subtitle: "Ideal for serious businesses that want to dominate their market",
      price: "$5,000",
      period: "one time + $499/month",
      badge: "Best Value",
      style: "purple-border",
      features: [
        "Everything in Growth",
        "Full business automation suite",
        "Social media management across 3 platforms",
        "SEO and Google rankings campaign",
        "Paid advertising management",
        "Dedicated account manager",
        "Weekly strategy calls",
        "Unlimited revisions and support",
        "First project delivered in 7 days",
      ],
    },
  ];

  const getCardStyle = (style: string) => {
    if (style === "blue-gradient") return { background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%)", border: "1.5px solid #3B82F6" };
    if (style === "blue-border") return { background: "oklch(0.12 0.006 285)", border: "1.5px solid #3B82F6" };
    if (style === "purple-border") return { background: "oklch(0.12 0.006 285)", border: "1.5px solid oklch(0.52 0.22 293)", boxShadow: "0 0 24px oklch(0.52 0.22 293 / 0.2)" };
    return {};
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "oklch(0.11 0.006 285)" }}>
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>Transparent Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Transparent Pricing.
            <br />
            <span style={{ color: "oklch(0.72 0.18 293)" }}>No Surprises.</span>
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Every project is custom scoped but here are our starting points. Book a free call for your exact quote.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}>
          {packages.map((pkg) => (
            <div key={pkg.id} className="rounded-xl p-8 flex flex-col" style={getCardStyle(pkg.style)}>
              {pkg.badge && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start" style={{ background: pkg.style === "blue-gradient" ? "rgba(255,255,255,0.2)" : "#3B82F620", color: pkg.style === "purple-border" ? "oklch(0.72 0.18 293)" : "#60A5FA", border: pkg.style === "purple-border" ? "1px solid oklch(0.52 0.22 293 / 0.4)" : "1px solid #3B82F640" }}>
                  ⚡ {pkg.badge}
                </span>
              )}
              <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{pkg.name}</h3>
              <p className="text-white/60 text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>{pkg.subtitle}</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{pkg.price}</span>
                <span className="text-white/50 text-sm ml-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{pkg.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: pkg.style === "blue-gradient" ? "#93C5FD" : pkg.style === "purple-border" ? "oklch(0.72 0.18 293)" : "#60A5FA" }} />
                    <span className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 text-white"
                style={pkg.style === "blue-gradient" ? { background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" } : pkg.style === "purple-border" ? { background: "oklch(0.52 0.22 293)", boxShadow: "0 0 16px oklch(0.52 0.22 293 / 0.4)" } : { background: "#2563EB", boxShadow: "0 0 16px #3B82F640" }}
              >
                Get Started <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          All prices are starting points. Every project is custom scoped to match your exact needs and budget. Book a free call to get your custom quote on the spot.
        </p>
      </div>
    </section>
  );
}

// ─── Change #8: Web Hosting Plans Section ─────────────────────────────────────
function HostingPlans() {
  const { ref, inView } = useInView();

  const plans = [
    {
      name: "Starter Hosting",
      price: "$99",
      period: "/month",
      badge: null,
      highlight: false,
      features: [
        "Up to 5 page website hosting",
        "99.9% uptime guarantee",
        "SSL certificate included",
        "Weekly backups",
        "Basic security monitoring",
        "Email support",
      ],
    },
    {
      name: "Professional Hosting",
      price: "$199",
      period: "/month",
      badge: "Most Popular",
      highlight: true,
      features: [
        "Up to 20 page website hosting",
        "99.99% uptime guarantee",
        "SSL certificate included",
        "Daily backups",
        "Advanced security monitoring",
        "Monthly speed optimization",
        "Monthly performance report",
        "Priority support",
      ],
    },
    {
      name: "Enterprise Hosting",
      price: "$399",
      period: "/month",
      badge: null,
      highlight: false,
      features: [
        "Unlimited pages",
        "99.99% uptime guarantee",
        "SSL certificate",
        "Real-time backups",
        "Enterprise security suite",
        "Weekly speed optimization",
        "Weekly performance reports",
        "Dedicated account manager",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <section id="hosting-plans" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0D0D0F" }}>
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#60A5FA", fontFamily: "'DM Sans', sans-serif" }}>Web Hosting</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Premium Hosting Plans.
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Your website deserves infrastructure that never lets you down.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl p-8 flex flex-col"
              style={plan.highlight
                ? { background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%)", border: "1.5px solid #3B82F6", boxShadow: "0 0 30px #3B82F630" }
                : { background: "oklch(0.12 0.006 285)", border: "1.5px solid oklch(0.22 0.01 285)" }
              }
            >
              {plan.badge && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>
                  ⚡ {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-black text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{plan.price}</span>
                <span className="text-white/50 text-sm ml-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: plan.highlight ? "#93C5FD" : "#60A5FA" }} />
                    <span className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 text-white"
                style={plan.highlight ? { background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" } : { background: "#2563EB", boxShadow: "0 0 16px #3B82F640" }}
              >
                Get Started <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          All hosting plans include free migration from your current host. Setup completed within 24 hours.
        </p>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQ() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { q: "How quickly can you get my project started?", a: "Most projects kick off within 48 hours of signing. Our Growth package is up and running in 5 days, and Enterprise in 7 days." },
    { q: "What makes Atlas different from other agencies?", a: "We combine AI automation with traditional digital marketing — meaning your leads get responded to in 60 seconds automatically, 24/7. Most agencies can't offer that. We're also fully transparent with reporting, so you always know exactly what's working." },
    { q: "Do I need to sign a long-term contract?", a: "No. We believe in earning your business every month. Monthly retainers are month-to-month with 30 days notice to cancel. One-time projects have no ongoing commitment." },
    { q: "What is AI Business Automation exactly?", a: "It's a custom system we build for your business that automatically responds to every new lead within 60 seconds, qualifies them with smart questions, and books appointments directly into your calendar — all without you lifting a finger." },
    { q: "Can you work with my existing website?", a: "Absolutely. We can integrate our AI automation and marketing services with any existing website, CRM, or tool you're already using." },
    { q: "How do I get started?", a: "Simply book a free 30-minute strategy call using the button below. We'll learn about your business, identify the biggest growth opportunities, and give you a custom quote on the spot." },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32" style={{ background: "oklch(0.11 0.006 285)" }}>
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container" ref={ref}>
        <div className={`text-center mb-16 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Common Questions
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto space-y-3 ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`}>
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border overflow-hidden" style={{ background: "oklch(0.13 0.007 285)", borderColor: "oklch(0.22 0.01 285)" }}>
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm pr-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{faq.q}</span>
                <ChevronDown size={18} className={`text-white/50 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${inView ? "animate-fade-up animate-fade-up-delay-3" : "opacity-0"}`}>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow inline-flex items-center gap-2 px-8 py-4 rounded text-base">
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ──────────────────────────────────────────────────────────────
function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Change #9: Updated services dropdown
  const services = [
    "AI Business Automation",
    "Website Design and Development",
    "AI Chatbot Setup",
    "Web Hosting and Maintenance",
    "Search Engine Optimization",
    "Paid Advertising and PPC",
    "Social Media Management",
    "Email Marketing and Automation",
    "Full Service Enterprise Package",
    "Not Sure Yet — Help Me Decide",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "2b3ce074-ed1b-4df1-b225-0d4f78b03789",
          subject: `New Lead from Atlas Digital Agency — ${form.service || "General Enquiry"}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "oklch(0.11 0.006 285)" }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663461011468/PLNS4n83QcWxh4tdXjDH6N/atlas-contact-bg-99RiRg4h92XumrBbfcfme7.webp')" }} />
      <div className="violet-rule absolute top-0 left-0 right-0" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={inView ? "animate-fade-up" : "opacity-0"}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.72 0.18 293)", fontFamily: "'DM Sans', sans-serif" }}>Let's Talk</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Get In Touch
              <br />
              <span style={{ color: "oklch(0.72 0.18 293)" }}>With Us Today</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ready to grow? Fill out the form and our team will be in touch within 24 hours to discuss your goals and build a custom strategy.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded flex items-center justify-center shrink-0" style={{ background: "oklch(0.52 0.22 293 / 0.12)" }}>
                  <Send size={16} style={{ color: "oklch(0.72 0.18 293)" }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Email</p>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>hello@atlasdigitalagency.net</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded flex items-center justify-center shrink-0" style={{ background: "#3B82F620" }}>
                  <Instagram size={16} style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Instagram</p>
                  <a href="https://www.instagram.com/atlasdigital.agency?igsh=MXFteTl6cDVjdjF2aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-white transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>@atlasdigital.agency</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded flex items-center justify-center shrink-0" style={{ background: "#3B82F620" }}>
                  <Music2 size={16} style={{ color: "#60A5FA" }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>TikTok</p>
                  <a href="https://www.tiktok.com/@atlasdigitalagency?_r=1&_t=ZP-94wsxOQjBra" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-white transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>@atlasdigitalagency</a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm">
                Or Book a Call Directly
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className={`rounded-xl p-8 md:p-10 border ${inView ? "animate-fade-up animate-fade-up-delay-2" : "opacity-0"}`} style={{ background: "oklch(0.13 0.007 285)", borderColor: "oklch(0.22 0.01 285)" }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "oklch(0.52 0.22 293 / 0.15)" }}>
                  <CheckCircle size={32} style={{ color: "oklch(0.72 0.18 293)" }} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>Message Received!</h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>Thank you for reaching out. Our team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" className="input-dark w-full px-4 py-3 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className="input-dark w-full px-4 py-3 rounded text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="input-dark w-full px-4 py-3 rounded text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Service Interested In *</label>
                  <select name="service" required value={form.service} onChange={handleChange} className="input-dark w-full px-4 py-3 rounded text-sm appearance-none">
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your business and goals..." className="input-dark w-full px-4 py-3 rounded text-sm resize-none" />
                </div>
                {error && <p className="text-red-400 text-xs text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>{error}</p>}
                <button type="submit" disabled={loading} className="btn-violet-glow w-full py-4 rounded text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t" style={{ background: "#0D0D0F", borderColor: "oklch(0.18 0.008 285)" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_ICON_URL} alt="Atlas Digital Agency" className="w-10 h-10 object-contain rounded-sm" style={{ filter: "drop-shadow(0 0 6px oklch(0.52 0.22 293 / 0.4))" }} />
              <span className="text-white font-bold text-base" style={{ fontFamily: "'Syne', sans-serif" }}>Atlas Digital Agency</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              AI automation, premium websites, and full digital marketing — all under one roof. Built for businesses that want to win.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/atlasdigital.agency?igsh=MXFteTl6cDVjdjF2aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors" style={{ background: "oklch(0.14 0.007 285)" }} aria-label="Instagram">
                <Instagram size={16} className="text-white/60 hover:text-white" />
              </a>
              <a href="https://www.tiktok.com/@atlasdigitalagency?_r=1&_t=ZP-94wsxOQjBra" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors" style={{ background: "oklch(0.14 0.007 285)" }} aria-label="TikTok">
                <Music2 size={16} className="text-white/60 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Change #10: Updated services column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "'Syne', sans-serif" }}>Services</h4>
            <ul className="space-y-2">
              {[
                "AI Business Automation",
                "Website Design & Development",
                "AI Chatbot Setup",
                "Web Hosting & Maintenance",
                "SEO and Google Rankings",
                "Paid Advertising",
                "Social Media Management",
                "Email Marketing",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/40 text-sm hover:text-white/70 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "'Syne', sans-serif" }}>Contact</h4>
            <p className="text-white/40 text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>hello@atlasdigitalagency.net</p>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-violet-glow inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs mt-4">
              Book a Free Call
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="violet-rule mb-6" />

        {/* Change #14: Tagline above copyright */}
        <p className="text-center text-white/30 text-xs mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Atlas Digital Agency — Premium AI Automation, Website Design, Digital Marketing and Web Hosting for businesses across the United States.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>© {year} Atlas Digital Agency. All rights reserved.</p>
          <p className="text-white/25 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>atlasdigitalagency.net</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0D0D0F" }}>
      <Nav />
      <TickerBar />
      <Hero />
      <Services />
      <AIAutomation />
      <WhyAtlas />
      <Results />
      <Testimonials />
      <PricingSection />
      <HostingPlans />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
