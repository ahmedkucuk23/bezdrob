"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Dumbbell,
  Target,
  Users,
  Flame,
  CheckCircle2,
  Play,
  MapPin,
  Calendar,
  Trophy,
  Star,
  Menu,
  X,
  Instagram,
  MessageCircle,
  Phone,
  Sparkles
} from "lucide-react";

const navLinks = [
  { href: "/services", label: "Programs" },
  { href: "/team", label: "Trainers" },
  { href: "/contact", label: "Contact" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-peach-200/30 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-peach-100/40 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 pt-4">
          <nav className="px-6 py-4 glass rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-display tracking-wide text-gray-900">IMRAN BEZDROB</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-gray-500 hover:text-gray-900 transition-colors animated-underline">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Book Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] md:hidden">
            <div className="absolute inset-0 bg-white" onClick={() => setMobileMenuOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="relative h-full flex flex-col">
              <div className="container mx-auto px-4 pt-4">
                <div className="px-6 py-4 flex items-center justify-between">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-display text-gray-900">IMRAN BEZDROB</span>
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl bg-gray-100" aria-label="Close menu">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center px-8">
                <nav className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}>
                      <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-4 text-4xl font-display text-gray-900 hover:text-peach-500 transition-colors">
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }} className="mt-12">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg">
                    Book Session
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-5xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-peach-100 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-peach-600" />
              <span className="text-sm text-gray-600">VIP Gym Sarajevo</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-[0.95] tracking-tight mb-6 text-gray-900">
              TRANSFORM YOUR
              <br />
              <span className="text-gradient">GLUTES</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
              Elite 1:1 personal training in Sarajevo. Specializing in glute transformation 
              programs for women who want real, lasting results.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors">
                <Play className="w-5 h-5" />
                View Programs
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Transformations" },
                { value: "8+", label: "Years Experience" },
                { value: "100%", label: "Dedication" },
                { value: "#1", label: "In Sarajevo" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-display text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-peach-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="py-6 border-y border-gray-200 overflow-hidden bg-gray-50">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 mx-6">
              {["Glute Training", "Personal Coaching", "Online Programs", "Body Transformation", "Strength Training", "Nutrition Guidance"].map((item, i) => (
                <span key={i} className="text-2xl font-display text-gray-300 flex items-center gap-4">
                  {item}
                  <Flame className="w-6 h-6 text-peach-300" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <span className="text-peach-500 font-semibold mb-4 block">PROGRAMS</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
              TRAINING <span className="text-gradient">YOUR WAY</span>
            </h2>
            <p className="text-lg text-gray-500">
              Whether you want personal 1:1 sessions in Sarajevo, online coaching from anywhere, 
              or access to my elite team of trainers - I have a program for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "1:1 Personal Training",
                description: "Train with me directly at VIP Gym Sarajevo. Personalized programs, hands-on coaching, and guaranteed results.",
                features: ["In-person sessions", "Custom workout plans", "Real-time form correction", "Nutrition guidance"],
                highlight: "Most Popular",
                gradient: "from-peach-400 to-peach-500"
              },
              {
                icon: Sparkles,
                title: "Online Coaching",
                description: "Get my proven glute program delivered to you anywhere in the world. Weekly check-ins and constant support.",
                features: ["Video workout library", "Weekly progress reviews", "Direct messaging support", "Flexible scheduling"],
                highlight: null,
                gradient: "from-gray-700 to-gray-900"
              },
              {
                icon: Users,
                title: "Team Training",
                description: "Can't get a slot with me? My hand-picked trainers deliver the same quality and methodology.",
                features: ["Certified trainers", "Same proven methods", "More availability", "Group discounts"],
                highlight: null,
                gradient: "from-gray-400 to-gray-600"
              }
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-peach-300 hover:shadow-xl transition-all duration-300 hover-lift relative">
                {service.highlight && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-peach-500 text-white text-xs font-semibold rounded-full">
                    {service.highlight}
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-peach-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="inline-flex items-center gap-2 text-peach-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glute Program Feature */}
      <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-peach-500 font-semibold mb-4 block">SIGNATURE PROGRAM</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
                THE GLUTE <span className="text-gradient">TRANSFORMATION</span>
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                My signature 12-week program designed specifically for women who want to build strong, 
                sculpted glutes. Science-backed methods combined with years of real-world results.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Calendar, text: "12-Week Program" },
                  { icon: Dumbbell, text: "4x Weekly Workouts" },
                  { icon: Target, text: "Progressive Overload" },
                  { icon: Trophy, text: "Proven Results" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                    <item.icon className="w-5 h-5 text-peach-500" />
                    <span className="font-medium text-gray-900">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square bg-gradient-to-br from-peach-100 to-peach-200 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-8xl font-display text-gradient mb-4">12</div>
                  <div className="text-2xl font-display text-gray-400">WEEKS TO</div>
                  <div className="text-3xl font-display text-gray-900">TRANSFORMATION</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-peach-500 font-semibold mb-4 block">RESULTS</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-gray-900">
              REAL <span className="text-gradient">TRANSFORMATIONS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Imran completely changed my relationship with fitness. My glutes have never looked better!", author: "Amila H.", result: "+5cm growth", stars: 5 },
              { quote: "The online coaching is just as effective as in-person. Imran is always there when you need him.", author: "Sara M.", result: "12 weeks", stars: 5 },
              { quote: "Best trainer in Sarajevo, period. His knowledge of glute training is unmatched.", author: "Lejla K.", result: "Life changed", stars: 5 },
            ].map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 bg-white border border-gray-200 rounded-2xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-peach-400 text-peach-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-gray-600">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.result}</div>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-peach-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-peach-500/10 rounded-full blur-[200px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-6 text-white">
              READY TO START YOUR <span className="text-gradient">TRANSFORMATION?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Limited spots available for 1:1 training. Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://instagram.com/imranbezdrob" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold text-lg hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
                @imranbezdrob
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-display text-gray-900">IMRAN BEZDROB</span>
              </Link>
              <p className="text-gray-500 mb-6">Elite personal training in Sarajevo. Specializing in glute transformation programs.</p>
              <div className="flex gap-3">
                <a href="https://instagram.com/imranbezdrob" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/38762123456" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="tel:+38762123456" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-gray-900">LOCATION</h4>
              <ul className="space-y-3 text-gray-500">
                <li>VIP Gym Sarajevo</li>
                <li>Sarajevo, Bosnia</li>
                <li className="pt-2">Mon - Sat: 6AM - 10PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-gray-900">PROGRAMS</h4>
              <ul className="space-y-3 text-gray-500">
                <li><Link href="/services" className="hover:text-gray-900 transition-colors">1:1 Personal Training</Link></li>
                <li><Link href="/services" className="hover:text-gray-900 transition-colors">Online Coaching</Link></li>
                <li><Link href="/services" className="hover:text-gray-900 transition-colors">Glute Program</Link></li>
                <li><Link href="/team" className="hover:text-gray-900 transition-colors">Team Training</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-gray-900">CONTACT</h4>
              <ul className="space-y-3 text-gray-500">
                <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Book Consultation</Link></li>
                <li><a href="mailto:imran@bezdrob.fit" className="hover:text-gray-900 transition-colors">imran@bezdrob.fit</a></li>
                <li><a href="tel:+38762123456" className="hover:text-gray-900 transition-colors">+387 62 123 456</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 Imran Bezdrob. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-peach-400 rounded-full" />
              Building better bodies in Sarajevo
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
