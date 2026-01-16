"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2,
  Target,
  Users,
  Sparkles,
  Trophy,
  Flame,
  Clock,
  Instagram,
  MessageCircle,
  Phone,
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
      subtitle: "PROGRAMI I CIJENE",
      title1: "ODABERI SVOJ",
      title2: "PUT",
      description: "Svaka transformacija počinje izborom. Odaberi program koji odgovara tvom životnom stilu i dopusti mi da te vodim do rezultata koje nikad nisi mislio/mislila da su mogući."
    },
    stats: {
      clients: "Transformiranih Klijenata",
      experience: "Godina Iskustva",
      weeks: "Sedmični Programi",
      commitment: "Posvećenost"
    },
    programs: {
      oneOnOne: {
        title: "1:1 VIP Personalni Trening",
        subtitle: "U Sarajevu u All In GYM",
        description: "Treniraj direktno sa mnom u privatnom, fokusiranom okruženju. Dizajnirat ću tvoj program, voditi svako ponavljanje i osigurati savršenu formu za maksimalne rezultate.",
        price: "65 KM",
        period: "po treningu",
        features: [
          "Privatne sesije treninga u All In GYM",
          "Potpuno prilagođen program vježbanja",
          "Korekcija forme u realnom vremenu",
          "Planiranje prehrane i savjeti o makronutrijentima",
          "Sedmično praćenje napretka i prilagodbe",
          "Direktna WhatsApp podrška",
          "Pristup ekskluzivnom sadržaju"
        ],
        highlight: "Najpopularnije",
        cta: "Zakaži Termin"
      },
      online: {
        title: "Online Coaching",
        subtitle: "Treniraj bilo gdje",
        description: "Dobij moju provjerenu metodologiju treninga gdje god se nalaziš. Kompletan program, video demonstracije i sedmične provjere za održavanje odgovornosti.",
        price: "600 KM / 300 EUR",
        period: "12 sedmica",
        features: [
          "Prilagođen program dizajniran za tvoje ciljeve",
          "HD video demonstracije vježbi",
          "Sedmične provjere i pregledi napretka",
          "Provjera forme putem video snimaka",
          "Smjernice za prehranu i planovi obroka",
          "24/7 podrška putem poruka",
          "Mjesečne prilagodbe programa"
        ],
        cta: "Započni Online"
      },
      team: {
        title: "Grupni Trening",
        subtitle: "Treniraj u grupi, postižeš više",
        description: "Treniraj u maloj, fokusiranoj grupi po tvom izboru ili koja ti se dodijeli i dobiješ rezultate kao na personalnom treningu – uz dodatnu motivaciju i energiju tima. Svaki trening je stručno vođen, s jasnim ciljem i pažnjom na tehniku.",
        price: "300 KM",
        period: "12 treninga mjesečno",
        features: [
          "Male grupe (maks. 10 osoba)",
          "Kontinuirana korekcija forme tokom treninga",
          "Motivirajuća atmosfera i timski rad",
          "Povoljnija cijena u odnosu na 1:1 trening",
          "Strukturirani programi za sve nivoe",
          "Fleksibilan raspored termina"
        ],
        highlight: "Najbolja Vrijednost",
        cta: "Upoznaj Tim"
      }
    },
    gluteProgram: {
      title: "12-Sedmična Transformacija Gluteusa",
      description: "Moj potpisni program posebno dizajniran za žene koje žele izgraditi snažne, oblikovane gluteuse. Zasnovan na najnovijoj nauci i godinama provjerenih rezultata.",
      phases: [
        { week: "1-4", title: "Temelj", focus: "Izgradnja povezanosti mišića i pravilne forme" },
        { week: "5-8", title: "Rast", focus: "Progresivno opterećenje i hipertrofija" },
        { week: "9-12", title: "Oblikovanje", focus: "Definicija i vrhunska izvedba" }
      ],
      includes: [
        "4 sedmična treninga (fokus na gluteuse)",
        "Programiranje progresivnog opterećenja",
        "Pristup video biblioteci vježbi",
        "Vodič za prehranu za izgradnju mišića",
        "Sedmične tablice praćenja",
        "Pristup zajednici"
      ],
      whatsIncluded: "ŠTA JE UKLJUČENO",
      cta: "Započni Svoju Transformaciju"
    },
    cta: {
      title: "NISI SIGURAN/A KOJI PROGRAM JE PRAVI ZA TEBE?",
      description: "Zakaži besplatnu konsultaciju i razgovarajmo o tvojim ciljevima. Pomoći ću ti pronaći savršen odabir.",
      button: "Zakaži Besplatnu Konsultaciju"
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
      subtitle: "PROGRAMS & PRICING",
      title1: "CHOOSE YOUR",
      title2: "PATH",
      description: "Every transformation starts with a choice. Pick the program that fits your lifestyle and let me guide you to results you never thought possible."
    },
    stats: {
      clients: "Clients Transformed",
      experience: "Years Experience",
      weeks: "Week Programs",
      commitment: "Commitment"
    },
    programs: {
      oneOnOne: {
        title: "1:1 VIP Personal Training",
        subtitle: "In Sarajevo at All In GYM",
        description: "Train with me directly in a private, focused environment. I'll design your program, coach every rep, and ensure perfect form for maximum results.",
        price: "65 KM",
        period: "per training",
        features: [
          "Private training sessions at All In GYM",
          "Fully customized workout program",
          "Real-time form correction & coaching",
          "Nutrition planning & macro guidance",
          "Weekly progress tracking & adjustments",
          "Direct WhatsApp support",
          "Access to member-only content"
        ],
        highlight: "Most Popular",
        cta: "Book Session"
      },
      online: {
        title: "Online Coaching",
        subtitle: "Train from anywhere",
        description: "Get my proven training methodology delivered to you wherever you are. Full program, video demonstrations, and weekly check-ins to keep you accountable.",
        price: "600 KM / 300 EUR",
        period: "12 weeks",
        features: [
          "Custom program designed for your goals",
          "HD video exercise demonstrations",
          "Weekly check-ins & progress reviews",
          "Form check via video submissions",
          "Nutrition guidelines & meal plans",
          "24/7 messaging support",
          "Monthly program adjustments"
        ],
        cta: "Start Online"
      },
      team: {
        title: "Group Training",
        subtitle: "Train in a group, achieve more",
        description: "Train in a small, focused group of your choice or one assigned to you and get results like personal training – with the added motivation and energy of a team. Each session is expertly led, with clear goals and attention to technique.",
        price: "300 KM",
        period: "12 trainings per month",
        features: [
          "Small groups (max. 10 people)",
          "Continuous form correction during training",
          "Motivating atmosphere and teamwork",
          "More affordable than 1:1 training",
          "Structured programs for all levels",
          "Flexible session schedule"
        ],
        highlight: "Best Value",
        cta: "Meet Team"
      }
    },
    gluteProgram: {
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
      ],
      whatsIncluded: "WHAT'S INCLUDED",
      cta: "Start Your Transformation"
    },
    cta: {
      title: "NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?",
      description: "Book a free consultation and let's discuss your goals. I'll help you find the perfect fit.",
      button: "Book Free Consultation"
    },
    footer: {
      copyright: "© 2026 Imran Bezdrob"
    }
  }
};

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('ba');

  const t = translations[lang];

  const navLinks = [
    { href: "/services", label: t.nav.programs },
    { href: "/team", label: t.nav.trainers },
    { href: "/contact", label: t.nav.contact },
  ];

  const programs = [
    {
      icon: Target,
      ...t.programs.oneOnOne,
      gradient: "from-peach-400 to-peach-500",
      image: "/images/IMG_5712.JPG",
      imagePosition: "object-[center_30%]"
    },
    {
      icon: Users,
      ...t.programs.team,
      gradient: "from-gray-400 to-gray-600",
      image: "/images/IMG_0224.JPG",
      imagePosition: "object-[center_42%]"
    },
    {
      icon: Sparkles,
      ...t.programs.online,
      highlight: null,
      gradient: "from-gray-700 to-gray-900",
      image: "/images/IMG_9567.jpg",
      imagePosition: "object-bottom"
    }
  ];

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
              <Link href="/">
                <Image src="/Untitled design (26).png" alt="Bezdrob Transformation Program" width={200} height={50} className="h-10 w-auto object-contain" />
              </Link>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`transition-colors animated-underline ${link.href === "/services" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>
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
              {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
            </h1>
            <p className="text-lg text-gray-500">
              {t.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-gray-200 relative z-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, value: "2000+", label: t.stats.clients },
              { icon: Clock, value: "10+", label: t.stats.experience },
              { icon: Flame, value: "12", label: t.stats.weeks },
              { icon: Target, value: "100%", label: t.stats.commitment },
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-white border border-gray-200 rounded-2xl hover:border-peach-300 hover:shadow-xl transition-all hover-lift overflow-hidden">
                {program.highlight && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-peach-500 text-white text-xs font-semibold rounded-full">{program.highlight}</div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image src={program.image} alt={program.title} fill className={`object-cover group-hover:scale-105 transition-transform duration-500 ${program.imagePosition}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
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
                  <Link href={program.cta === t.programs.team.cta ? "/team" : "/contact"} className="block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    {program.cta}
                  </Link>
                </div>
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
            <span className="text-peach-500 font-semibold mb-4 block">{lang === 'ba' ? 'POTPISNI PROGRAM' : 'SIGNATURE PROGRAM'}</span>
            <h2 className="text-4xl sm:text-5xl font-display mb-6 text-gray-900">{t.gluteProgram.title.toUpperCase()}</h2>
            <p className="text-lg text-gray-500">{t.gluteProgram.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {t.gluteProgram.phases.map((phase, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white border border-gray-200 rounded-2xl text-center">
                <div className="text-peach-500 font-semibold mb-2">{lang === 'ba' ? 'SEDMICE' : 'WEEKS'} {phase.week}</div>
                <h3 className="text-2xl font-display mb-2 text-gray-900">{phase.title.toUpperCase()}</h3>
                <p className="text-gray-500 text-sm">{phase.focus}</p>
              </motion.div>
            ))}
          </div>

          {/* Transformation Images */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/5823A99D-5A5C-417A-B69E-7A70C8553CA8.jpg" alt="Client glute transformation before and after - 12 week program results" width={600} height={800} className="w-full h-auto" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '600/800' }}>
              <Image src="/images/Slikatransfor2.png" alt="Body transformation progress photo - glute building results" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '600/800' }}>
              <Image src="/images/22B4FC4D-C16D-4CDA-B252-B447FB07C070.jpg" alt="Fitness transformation before and after - personal training results" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <h3 className="text-xl font-display mb-6 text-center text-gray-900">{t.gluteProgram.whatsIncluded}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.gluteProgram.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-peach-500 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                  {t.gluteProgram.cta}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6 text-white">{t.cta.title}</h2>
            <p className="text-lg text-gray-400 mb-10">{t.cta.description}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              {t.cta.button} <ArrowRight className="w-5 h-5" />
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
              <a href="tel:+387644607444" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"><Phone className="w-5 h-5" /></a>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
