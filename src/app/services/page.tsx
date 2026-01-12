"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2,
  Dumbbell,
  Target,
  Users,
  Sparkles,
  Trophy,
  Flame,
  Clock,
  Instagram,
  MessageCircle,
  Phone
} from "lucide-react";

const navLinks = [
  { href: "/services", label: "Programs" },
  { href: "/team", label: "Trainers" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  {
    icon: Target,
    title: "1:1 Personal Training",
    subtitle: "In Sarajevo at VIP Gym",
    description: "Train with me directly in a private, focused environment. I'll design your program, coach every rep, and ensure perfect form for maximum results.",
    price: "From 150 KM",
    period: "per session",
    features: [
      "Private training sessions at VIP Gym",
      "Fully customized workout program",
      "Real-time form correction & coaching",
      "Nutrition planning & macro guidance",
      "Weekly progress tracking & adjustments",
      "Direct WhatsApp support",
      "Access to member-only content"
    ],
    highlight: "Most Popular",
    gradient: "from-peach-400 to-peach-500",
    cta: "Book Session"
  },
  {
    icon: Sparkles,
    title: "Online Coaching",
    subtitle: "Train from anywhere",
    description: "Get my proven training methodology delivered to you wherever you are. Full program, video demonstrations, and weekly check-ins to keep you accountable.",
    price: "200 KM",
    period: "per month",
    features: [
      "Custom program designed for your goals",
      "HD video exercise demonstrations",
      "Weekly check-ins & progress reviews",
      "Form check via video submissions",
      "Nutrition guidelines & meal plans",
      "24/7 messaging support",
      "Monthly program adjustments"
    ],
    highlight: null,
    gradient: "from-gray-700 to-gray-900",
    cta: "Start Online"
  },
  {
    icon: Users,
    title: "Team Training",
    subtitle: "With my certified trainers",
    description: "Can't get a slot with me? My hand-selected team of trainers delivers the same quality, methodology, and results at more accessible rates.",
    price: "From 80 KM",
    period: "per session",
    features: [
      "Trained & certified by me personally",
      "Same proven training methodology",
      "More flexible scheduling options",
      "Group training discounts available",
      "Access to VIP Gym facilities",
      "Program oversight by me",
      "Team competitions & events"
    ],
    highlight: "Best Value",
    gradient: "from-gray-400 to-gray-600",
    cta: "Meet Team"
  }
];

const gluteProgram = {
  title: "The 12-Week Glute Transformation",
  description: "My signature program specifically designed for women who want to build strong, sculpted glutes. Based on the latest science and years of proven results.",
  phases: [
    { week: "1-4", title: "Foundation", focus: "Building muscle connection & proper form" },
    { week: "5-8", title: "Growth", focus: "Progressive overload & hypertrophy" },
    { week: "9-12", title: "Sculpt", focus: "Definition & peak performance" }
  ],
  includes: [
    "4 weekly workouts (glute-focused)",
    "Progressive overload programming",
    "Exercise video library access",
    "Nutrition guide for muscle building",
    "Weekly tracking sheets",
    "Community access"
  ]
};

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-peach-200/30 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-peach-100/40 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 pt-4">
          <nav className="px-6 py-4 glass rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center"><Dumbbell className="w-5 h-5 text-white" /></div>
                <span className="text-xl font-display tracking-wide text-gray-900">IMRAN BEZDROB</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`transition-colors animated-underline ${link.href === "/services" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="hidden md:flex items-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Book Session <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 rounded-xl bg-gray-100"><Menu className="w-6 h-6" /></button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] md:hidden">
            <div className="absolute inset-0 bg-white" onClick={() => setMobileMenuOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="relative h-full flex flex-col">
              <div className="container mx-auto px-4 pt-4">
                <div className="px-6 py-4 flex items-center justify-between">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center"><Dumbbell className="w-5 h-5 text-white" /></div>
                    <span className="text-xl font-display text-gray-900">IMRAN BEZDROB</span>
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl bg-gray-100"><X className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center px-8">
                <nav className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
                      <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-4 text-4xl font-display text-gray-900 hover:text-peach-500 transition-colors">{link.label}</Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-peach-500 font-semibold mb-4 block">PROGRAMS & PRICING</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
              CHOOSE YOUR <span className="text-gradient">PATH</span>
            </h1>
            <p className="text-lg text-gray-500">
              Every transformation starts with a choice. Pick the program that fits your lifestyle 
              and let me guide you to results you never thought possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-gray-200 relative z-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, value: "500+", label: "Clients Transformed" },
              { icon: Clock, value: "8+", label: "Years Experience" },
              { icon: Flame, value: "12", label: "Week Programs" },
              { icon: Target, value: "100%", label: "Commitment" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <stat.icon className="w-8 h-8 text-peach-500 mx-auto mb-3" />
                <div className="text-3xl font-display text-gradient">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-peach-300 hover:shadow-xl transition-all hover-lift">
                {program.highlight && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-peach-500 text-white text-xs font-semibold rounded-full">{program.highlight}</div>
                )}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display mb-1 text-gray-900">{program.title}</h3>
                <p className="text-peach-500 text-sm mb-4">{program.subtitle}</p>
                <p className="text-gray-500 mb-6">{program.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-display text-gradient">{program.price}</span>
                  <span className="text-gray-400 ml-2">{program.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-peach-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  {program.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glute Program Feature */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-peach-500 font-semibold mb-4 block">SIGNATURE PROGRAM</span>
            <h2 className="text-4xl sm:text-5xl font-display mb-6 text-gray-900">{gluteProgram.title.toUpperCase()}</h2>
            <p className="text-lg text-gray-500">{gluteProgram.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {gluteProgram.phases.map((phase, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white border border-gray-200 rounded-2xl text-center">
                <div className="text-peach-500 font-semibold mb-2">WEEKS {phase.week}</div>
                <h3 className="text-2xl font-display mb-2 text-gray-900">{phase.title.toUpperCase()}</h3>
                <p className="text-gray-500 text-sm">{phase.focus}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <h3 className="text-xl font-display mb-6 text-center text-gray-900">WHAT&apos;S INCLUDED</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {gluteProgram.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-peach-500 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-peach-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6 text-white">NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?</h2>
            <p className="text-lg text-gray-400 mb-10">Book a free consultation and let&apos;s discuss your goals. I&apos;ll help you find the perfect fit.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-200 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center"><Dumbbell className="w-5 h-5 text-white" /></div>
              <span className="text-xl font-display text-gray-900">IMRAN BEZDROB</span>
            </Link>
            <div className="flex gap-3">
              <a href="https://instagram.com/imranbezdrob" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://wa.me/38762123456" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="tel:+38762123456" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"><Phone className="w-5 h-5" /></a>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Imran Bezdrob</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
