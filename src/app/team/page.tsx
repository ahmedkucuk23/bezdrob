"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Instagram,
  MessageCircle,
  Phone,
  Award,
  Users,
  Target,
  Star,
  Trophy,
  UserPlus,
} from "lucide-react";

type Language = 'ba' | 'en';

const translations = {
  ba: {
    nav: {
      programs: "Programi",
      trainers: "Treneri",
      contact: "Kontakt",
      bookSession: "Zakaži Termin"
    },
    hero: {
      subtitle: "TIM",
      title: "UPOZNAJ SVOJE",
      titleHighlight: "TRENERE",
      description: "Posvećen tim fitness profesionalaca koji su tu za tvoju transformaciju. Svaki trener prati istu provjerenu metodologiju za konzistentne rezultate."
    },
    values: {
      resultsDriven: {
        title: "Fokus na Rezultate",
        description: "Svaki program je dizajniran sa jasnim ciljevima i mjerljivim ishodima."
      },
      personalApproach: {
        title: "Personalni Pristup",
        description: "Tretiramo svakog klijenta kao pojedinca sa jedinstvenim potrebama i ciljevima."
      },
      expertTeam: {
        title: "Stručni Tim",
        description: "Svi treneri su lično certificirani i obučeni od strane Imrana."
      },
      provenMethods: {
        title: "Provjerene Metode",
        description: "Naša metodologija je podržana naukom i stotinama uspješnih priča."
      }
    },
    trainers: {
      headCoach: "GLAVNI TRENER",
      clients: "Klijenti",
      years: "Godine",
      rating: "Ocjena",
      bookWithImran: "Zakaži sa Imranom",
      bookSession: "Zakaži Termin"
    },
    imran: {
      role: "Glavni Trener i Osnivač",
      specialty: "Stručnjak za Transformaciju Gluteusa",
      bio: "10+ godina iskustva u transformaciji tijela. Kreator potpisnog programa Transformacije Gluteusa sa preko 2000 uspješnih klijentskih transformacija."
    },
    ammar: {
      role: "Certificirani Trener",
      specialty: "Funkcija • Snaga • Fizik",
      bio: "Certificiran: CFT1/CFT2 FMS1/FMS2. Posvećen pomaganju klijentima da ostvare svoje fitness ciljeve kroz funkcionalni trening i razvoj fizika."
    },
    teamGrid: {
      title: "TRENERSKI TIM",
      description: "Ne možeš dobiti termin kod Imrana? Ovi certificirani treneri prate istu provjerenu metodologiju."
    },
    becomeCoach: {
      title: "POSTANI TRENER",
      subtitle: "Pridruži se Bezdrob Timu",
      description: "Želiš postati naš sljedeći trener? Prijavi se i pošalji nam svoje informacije da postaneš dio Bezdrob trenerskog tima.",
      apply: "Prijavi Se"
    },
    joinCta: {
      title: "ŽELIŠ SE PRIDRUŽITI NAŠEM TIMU?",
      description: "Uvijek tražimo strastvene trenere koji žele učiti i napredovati. Ako imaš ono što je potrebno, javi nam se.",
      button: "Kontaktiraj Nas"
    },
    footer: {
      copyright: "© 2026 Imran Bezdrob"
    }
  },
  en: {
    nav: {
      programs: "Programs",
      trainers: "Trainers",
      contact: "Contact",
      bookSession: "Book Session"
    },
    hero: {
      subtitle: "THE TEAM",
      title: "MEET YOUR",
      titleHighlight: "COACHES",
      description: "A dedicated team of fitness professionals committed to your transformation. Every trainer follows the same proven methodology for consistent results."
    },
    values: {
      resultsDriven: {
        title: "Results-Driven",
        description: "Every program is designed with clear goals and measurable outcomes."
      },
      personalApproach: {
        title: "Personal Approach",
        description: "We treat every client as an individual with unique needs and goals."
      },
      expertTeam: {
        title: "Expert Team",
        description: "All trainers are personally certified and trained by Imran."
      },
      provenMethods: {
        title: "Proven Methods",
        description: "Our methodology is backed by science and hundreds of success stories."
      }
    },
    trainers: {
      headCoach: "HEAD COACH",
      clients: "Clients",
      years: "Years",
      rating: "Rating",
      bookWithImran: "Book with Imran",
      bookSession: "Book Session"
    },
    imran: {
      role: "Head Coach & Founder",
      specialty: "Glute Transformation Expert",
      bio: "10+ years of experience transforming bodies. Creator of the signature Glute Transformation program with over 2000 successful client transformations."
    },
    ammar: {
      role: "Certified Trainer",
      specialty: "Function • Strength • Physique",
      bio: "Certified: CFT1/CFT2 FMS1/FMS2. Dedicated to helping clients achieve their fitness goals through functional training and physique development."
    },
    teamGrid: {
      title: "THE TRAINING TEAM",
      description: "Can't get a slot with Imran? These certified trainers follow the same proven methodology."
    },
    becomeCoach: {
      title: "BECOME A COACH",
      subtitle: "Join the Bezdrob Team",
      description: "Want to become our next coach? Sign up and send us your info to become part of the Bezdrob training team.",
      apply: "Apply Now"
    },
    joinCta: {
      title: "WANT TO JOIN OUR TEAM?",
      description: "We're always looking for passionate trainers who want to learn and grow. If you have what it takes, reach out.",
      button: "Get in Touch"
    },
    footer: {
      copyright: "© 2026 Imran Bezdrob"
    }
  }
};

const trainersData = {
  imran: {
    id: 1,
    name: "Imran Bezdrob",
    initials: "IB",
    image: "/WhatsApp Image 2026-01-07 at 16.47.56.jpeg",
    gradient: "from-peach-400 to-peach-500",
    instagram: "https://www.instagram.com/bezdrob.tp/",
    featured: true,
    stats: { clients: "2000+", years: "10+", rating: "5.0" }
  },
  ammar: {
    id: 2,
    name: "Builtbyammar",
    initials: "BA",
    image: "/IMG_9409.jpg",
    gradient: "from-gray-600 to-gray-800",
    instagram: "https://www.instagram.com/built_by_ammar?igsh=bTNlZXFtd3hkaWo1",
    featured: false,
    stats: { clients: "50+", years: "4+", rating: "5.0" }
  }
};

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('ba');

  const t = translations[lang];

  const navLinks = [
    { href: "/services", label: t.nav.programs },
    { href: "/team", label: t.nav.trainers },
    { href: "/contact", label: t.nav.contact },
  ];

  const values = [
    { icon: Target, title: t.values.resultsDriven.title, description: t.values.resultsDriven.description },
    { icon: Users, title: t.values.personalApproach.title, description: t.values.personalApproach.description },
    { icon: Award, title: t.values.expertTeam.title, description: t.values.expertTeam.description },
    { icon: Trophy, title: t.values.provenMethods.title, description: t.values.provenMethods.description }
  ];

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
              <Link href="/">
                <Image src="/Untitled design (26).png" alt="Bezdrob Transformation Program" width={200} height={50} className="h-10 w-auto object-contain" />
              </Link>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`transition-colors animated-underline ${link.href === "/team" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button 
                  onClick={() => setLang(lang === 'ba' ? 'en' : 'ba')} 
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  {lang === 'ba' ? '🇬🇧 EN' : '🇧🇦 BA'}
                </button>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  {t.nav.bookSession} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex md:hidden items-center gap-2">
                <button 
                  onClick={() => setLang(lang === 'ba' ? 'en' : 'ba')} 
                  className="flex items-center gap-1 px-2 py-2 rounded-xl bg-gray-100 text-sm font-bold"
                >
                  {lang === 'ba' ? '🇬🇧' : '🇧🇦'}
                </button>
                <button onClick={() => setMobileMenuOpen(true)} className="p-2 rounded-xl bg-gray-100"><Menu className="w-6 h-6" /></button>
              </div>
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
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image src="/Untitled design (26).png" alt="Bezdrob Transformation Program" width={200} height={50} className="h-10 w-auto object-contain" />
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
            <span className="text-peach-500 font-semibold mb-4 block">{t.hero.subtitle}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
              {t.hero.title} <span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-gray-500">
              {t.hero.description}
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
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <Image src={trainersData.imran.image} alt={trainersData.imran.name} width={500} height={500} className="w-full h-full object-cover object-[center_20%]" />
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold">
                  {t.trainers.headCoach}
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-display mb-2 text-gray-900">{trainersData.imran.name.toUpperCase()}</h2>
                <p className="text-peach-500 font-semibold mb-4">{t.imran.specialty}</p>
                <p className="text-gray-500 mb-6">{t.imran.bio}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-display text-gradient">{trainersData.imran.stats.clients}</div>
                    <div className="text-xs text-gray-500">{t.trainers.clients}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-display text-gradient">{trainersData.imran.stats.years}</div>
                    <div className="text-xs text-gray-500">{t.trainers.years}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-display text-gradient flex items-center justify-center gap-1">
                      {trainersData.imran.stats.rating}
                      <Star className="w-4 h-4 fill-peach-400 text-peach-400" />
                    </div>
                    <div className="text-xs text-gray-500">{t.trainers.rating}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    {t.trainers.bookWithImran} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={trainersData.imran.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
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
            <h2 className="text-3xl sm:text-4xl font-display mb-4 text-gray-900">{t.teamGrid.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t.teamGrid.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ammar Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-peach-300 transition-all hover-lift">
              <div className={`h-48 bg-gradient-to-br ${trainersData.ammar.gradient} relative flex items-center justify-center overflow-hidden`}>
                <img src={trainersData.ammar.image} alt={trainersData.ammar.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display mb-1 group-hover:text-peach-500 transition-colors text-gray-900">{trainersData.ammar.name.toUpperCase()}</h3>
                <p className="text-peach-500 text-sm font-medium mb-2">{t.ammar.specialty}</p>
                <p className="text-gray-500 text-sm mb-4">{t.ammar.bio}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>{trainersData.ammar.stats.clients} {t.trainers.clients.toLowerCase()}</span>
                    <span>{trainersData.ammar.stats.years} {t.trainers.years.toLowerCase()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-peach-400 text-peach-400" />
                    <span>{trainersData.ammar.stats.rating}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/contact" className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
                    {t.trainers.bookSession}
                  </Link>
                  <a href={trainersData.ammar.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Become a Coach Cards */}
            {[1, 2].map((_, i) => (
              <motion.div key={`become-coach-${i}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 1) * 0.1 }} className="group bg-gray-50 border border-dashed border-gray-300 rounded-2xl overflow-hidden hover:border-peach-400 transition-all">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <UserPlus className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display mb-1 text-gray-900">{t.becomeCoach.title}</h3>
                  <p className="text-peach-500 text-sm font-medium mb-2">{t.becomeCoach.subtitle}</p>
                  <p className="text-gray-500 text-sm mb-4">{t.becomeCoach.description}</p>
                  <Link href="/contact" className="w-full text-center block px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
                    {t.becomeCoach.apply}
                  </Link>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6 text-white">{t.joinCta.title}</h2>
            <p className="text-lg text-gray-400 mb-8">
              {t.joinCta.description}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              {t.joinCta.button} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-200 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/">
              <Image src="/Untitled design (26).png" alt="Bezdrob Transformation Program" width={200} height={50} className="h-10 w-auto object-contain" />
            </Link>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/bezdrob.tp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://wa.me/387644607444" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="tel:+38762123456" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"><Phone className="w-5 h-5" /></a>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
