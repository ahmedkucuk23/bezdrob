"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Dumbbell,
  Instagram,
  MessageCircle,
  Phone,
  Award,
  Users,
  Target,
  Star,
  Trophy
} from "lucide-react";

const navLinks = [
  { href: "/services", label: "Programs" },
  { href: "/team", label: "Trainers" },
  { href: "/contact", label: "Contact" },
];

const trainers = [
  {
    id: 1,
    name: "Imran Bezdrob",
    role: "Head Coach & Founder",
    specialty: "Glute Transformation Expert",
    bio: "8+ years of experience transforming bodies. Creator of the signature Glute Transformation program with over 500 successful client transformations.",
    initials: "IB",
    gradient: "from-peach-400 to-peach-500",
    instagram: "https://instagram.com/imranbezdrob",
    featured: true,
    stats: { clients: "500+", years: "8+", rating: "5.0" }
  },
  {
    id: 2,
    name: "Amina Hadžić",
    role: "Senior Trainer",
    specialty: "Women's Fitness & Nutrition",
    bio: "Certified nutrition coach and fitness expert. Specializes in sustainable body transformations and lifestyle changes.",
    initials: "AH",
    gradient: "from-gray-600 to-gray-800",
    instagram: "https://instagram.com",
    featured: false,
    stats: { clients: "200+", years: "5+", rating: "4.9" }
  },
  {
    id: 3,
    name: "Emir Kovač",
    role: "Trainer",
    specialty: "Strength & Conditioning",
    bio: "Former competitive athlete turned coach. Expert in building functional strength and athletic performance.",
    initials: "EK",
    gradient: "from-gray-500 to-gray-700",
    instagram: "https://instagram.com",
    featured: false,
    stats: { clients: "150+", years: "4+", rating: "4.8" }
  },
  {
    id: 4,
    name: "Sara Mehmedović",
    role: "Trainer",
    specialty: "Glute Training & Posture",
    bio: "Trained directly under Imran's methodology. Passionate about helping women build confidence through fitness.",
    initials: "SM",
    gradient: "from-gray-400 to-gray-600",
    instagram: "https://instagram.com",
    featured: false,
    stats: { clients: "100+", years: "3+", rating: "4.9" }
  }
];

const values = [
  { icon: Target, title: "Results-Driven", description: "Every program is designed with clear goals and measurable outcomes." },
  { icon: Users, title: "Personal Approach", description: "We treat every client as an individual with unique needs and goals." },
  { icon: Award, title: "Expert Team", description: "All trainers are personally certified and trained by Imran." },
  { icon: Trophy, title: "Proven Methods", description: "Our methodology is backed by science and hundreds of success stories." }
];

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-peach-200/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-peach-100/40 rounded-full blur-[150px]" />
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
                  <Link key={link.href} href={link.href} className={`transition-colors animated-underline ${link.href === "/team" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>
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
            <span className="text-peach-500 font-semibold mb-4 block">THE TEAM</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
              MEET YOUR <span className="text-gradient">COACHES</span>
            </h1>
            <p className="text-lg text-gray-500">
              A dedicated team of fitness professionals committed to your transformation. 
              Every trainer follows the same proven methodology for consistent results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl text-center">
                <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-peach-500" />
                </div>
                <h3 className="font-display text-lg mb-2 text-gray-900">{value.title.toUpperCase()}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainer - Imran */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 md:p-12 bg-white border border-gray-200 rounded-3xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className={`aspect-square bg-gradient-to-br ${trainers[0].gradient} rounded-3xl flex items-center justify-center shadow-lg`}>
                  <span className="text-8xl font-display text-white/90">{trainers[0].initials}</span>
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold">
                  HEAD COACH
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-display mb-2 text-gray-900">{trainers[0].name.toUpperCase()}</h2>
                <p className="text-peach-500 font-semibold mb-4">{trainers[0].specialty}</p>
                <p className="text-gray-500 mb-6">{trainers[0].bio}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-display text-gradient">{trainers[0].stats.clients}</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-display text-gradient">{trainers[0].stats.years}</div>
                    <div className="text-xs text-gray-500">Years</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-display text-gradient flex items-center justify-center gap-1">
                      {trainers[0].stats.rating}
                      <Star className="w-4 h-4 fill-peach-400 text-peach-400" />
                    </div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    Book with Imran <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={trainers[0].instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display mb-4 text-gray-900">THE TRAINING TEAM</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Can&apos;t get a slot with Imran? These certified trainers follow the same proven methodology.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.slice(1).map((trainer, i) => (
              <motion.div key={trainer.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-peach-300 transition-all hover-lift">
                <div className={`h-48 bg-gradient-to-br ${trainer.gradient} relative flex items-center justify-center`}>
                  <span className="text-5xl font-display text-white/90">{trainer.initials}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display mb-1 group-hover:text-peach-500 transition-colors text-gray-900">{trainer.name.toUpperCase()}</h3>
                  <p className="text-peach-500 text-sm font-medium mb-2">{trainer.specialty}</p>
                  <p className="text-gray-500 text-sm mb-4">{trainer.bio}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span>{trainer.stats.clients} clients</span>
                      <span>{trainer.stats.years} years</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-peach-400 text-peach-400" />
                      <span>{trainer.stats.rating}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
                      Book Session
                    </Link>
                    <a href={trainer.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-peach-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6 text-white">WANT TO JOIN OUR TEAM?</h2>
            <p className="text-lg text-gray-400 mb-8">
              We&apos;re always looking for passionate trainers who want to learn and grow. 
              If you have what it takes, reach out.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get in Touch <ArrowRight className="w-5 h-5" />
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
