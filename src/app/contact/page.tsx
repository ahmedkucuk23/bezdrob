"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Instagram,
  MessageCircle,
  Clock,
  Dumbbell,
  CheckCircle2
} from "lucide-react";

const navLinks = [
  { href: "/services", label: "Programs" },
  { href: "/team", label: "Trainers" },
  { href: "/contact", label: "Contact" },
];

export default function ContactPage() {
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
                  <Link key={link.href} href={link.href} className={`transition-colors animated-underline ${link.href === "/contact" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>
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
            <span className="text-peach-500 font-semibold mb-4 block">GET IN TOUCH</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
              START YOUR <span className="text-gradient">TRANSFORMATION</span>
            </h1>
            <p className="text-lg text-gray-500">
              Ready to take the first step? Book a free consultation and let&apos;s discuss 
              your goals, schedule, and the best program for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-display mb-6 text-gray-900">BOOK FREE CONSULTATION</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name *</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">Phone *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all" placeholder="+387 62 XXX XXX" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-600 mb-2">Interested in</label>
                    <select id="program" name="program" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all">
                      <option value="">Select a program</option>
                      <option value="1on1">1:1 Personal Training (with Imran)</option>
                      <option value="team">Team Training (with certified trainers)</option>
                      <option value="online">Online Coaching</option>
                      <option value="glute">Glute Transformation Program</option>
                      <option value="other">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-600 mb-2">Your Goals</label>
                    <textarea id="goals" name="goals" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all resize-none" placeholder="Tell me about your fitness goals..."></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                    Book Consultation
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-display mb-6 text-gray-900">CONTACT INFO</h2>
                <p className="text-gray-500 mb-8">Prefer to reach out directly? Here&apos;s how you can contact me.</p>
                
                <div className="space-y-4">
                  <a href="https://wa.me/38762123456" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-peach-300 hover:bg-peach-50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center group-hover:bg-peach-200 transition-colors">
                      <MessageCircle className="w-6 h-6 text-peach-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">WhatsApp (fastest)</div>
                      <div className="font-semibold text-gray-900">+387 62 123 456</div>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/imranbezdrob" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-peach-300 hover:bg-peach-50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center group-hover:bg-peach-200 transition-colors">
                      <Instagram className="w-6 h-6 text-peach-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Instagram DM</div>
                      <div className="font-semibold text-gray-900">@imranbezdrob</div>
                    </div>
                  </a>

                  <a href="tel:+38762123456" className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-peach-300 hover:bg-peach-50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center group-hover:bg-peach-200 transition-colors">
                      <Phone className="w-6 h-6 text-peach-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-semibold text-gray-900">+387 62 123 456</div>
                    </div>
                  </a>
                  
                  <a href="mailto:imran@bezdrob.fit" className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-peach-300 hover:bg-peach-50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center group-hover:bg-peach-200 transition-colors">
                      <Mail className="w-6 h-6 text-peach-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-semibold text-gray-900">imran@bezdrob.fit</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-peach-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-semibold text-gray-900">VIP Gym Sarajevo</div>
                      <div className="text-gray-500 text-sm">Sarajevo, Bosnia</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-peach-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Training Hours</div>
                      <div className="font-semibold text-gray-900">Mon - Sat: 6AM - 10PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <h3 className="font-display text-lg mb-4 text-gray-900">WHAT TO EXPECT</h3>
                <ul className="space-y-3">
                  {[
                    "Free 15-min consultation call",
                    "Discuss your goals and current fitness level",
                    "Get personalized program recommendations",
                    "No pressure, no obligations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-peach-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Response */}
              <div className="p-6 bg-peach-50 border border-peach-200 rounded-2xl border-l-4 border-l-peach-400">
                <h3 className="font-display mb-2 text-gray-900">QUICK RESPONSE</h3>
                <p className="text-gray-600 text-sm">
                  I typically respond within a few hours. For fastest response, 
                  reach out via WhatsApp or Instagram DM.
                </p>
              </div>
            </motion.div>
          </div>
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
