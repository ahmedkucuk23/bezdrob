"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Sparkles,
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
      location: "Sarajevo",
      title1: "Kako povećati",
      title2: "Glutes brzo?",
      description: "Elitni 1:1 personalni trening u Sarajevu. Specijalizirani za programe transformacije gluteusa za žene koje žele prave, trajne rezultate.",
      cta1: "Započni Svoju Transformaciju",
      cta2: "Pogledaj Programe",
      stats: {
        transformations: "Transformacija",
        experience: "Godina Iskustva",
        inSarajevo: "U Bosni i Hercegovini"
      }
    },
    marquee: ["Trening Gluteusa", "Personalno Trenerstvo", "Online Programi", "Transformacija Tijela", "Trening Snage", "Savjeti o Prehrani"],
    about: {
      subtitle: "UPOZNAJ TRENERA",
      title1: "IMRAN",
      title2: "BEZDROB",
      description: "Sa više od 10 godina iskustva u fitnessu i preko 2000 uspješnih transformacija, posvetio sam svoj život pomaganju ženama da postignu tijelo o kojem su oduvijek sanjale.",
      quote: "Moja misija je jednostavna - pomoći ti da postaneš najbolja verzija sebe. Svaka transformacija počinje prvim korakom, a ja sam tu da te vodim na svakom koraku tog puta.",
      credentials: [
        "Certificirani Personal Trainer",
        "Specijalist za Glute Trening",
        "Nutrition Coach",
        "10+ Godina Iskustva"
      ]
    },
    services: {
      subtitle: "PROGRAMI",
      title1: "TRENING",
      title2: "NA TVOJ NAČIN",
      description: "Bilo da želiš personalne 1:1 treninge u Sarajevu, online coaching bilo gdje da se nalaziš ili pristup mom elitnom timu trenera - imam rješenje za tebe.",
      oneOnOne: {
        title: "1:1 Personalni VIP Trening",
        description: "Treniraj direktno sa mnom u All In GYM Sarajevo. Personalizirani programi, praktično vođenje i garantirani rezultati.",
        features: ["Treninzi uživo", "Prilagođeni planovi vježbanja", "Korekcija forme u realnom vremenu", "Savjeti o prehrani"],
        highlight: "Najpopularnije"
      },
      online: {
        title: "Online Coaching",
        description: "Dobij moj provjereni program gluteusa bilo gdje u svijetu. Sedmične provjere i konstantna podrška.",
        features: ["Video biblioteka vježbi", "Sedmični pregledi napretka", "Direktna podrška putem poruka", "Fleksibilno zakazivanje"]
      },
      team: {
        title: "Grupni Trening",
        description: "Treniraj u maloj, fokusiranoj grupi i dobiješ rezultate kao na personalnom treningu – uz dodatnu motivaciju i energiju tima. Svaki trening je stručno vođen, s jasnim ciljem i pažnjom na tehniku.",
        features: ["Male grupe (maks. 10 osoba)", "Kontinuirana korekcija forme tokom treninga", "Motivirajuća atmosfera i timski rad", "Povoljnija cijena u odnosu na 1:1 trening"]
      },
      learnMore: "Saznaj Više"
    },
    gluteProgram: {
      subtitle: "POTPISNI PROGRAM",
      title1: "GLUTE",
      title2: "TRANSFORMACIJA",
      description: "Moj potpisni 12-sedmični program dizajniran posebno za žene koje žele izgraditi snažne, oblikovane gluteuse. Metode zasnovane na nauci u kombinaciji s godinama realnih rezultata.",
      features: {
        weeks: "12-Sedmični Program",
        workouts: "4x treninga sedmično",
        progressive: "Progresivno Opterećenje",
        results: "Provjereni Rezultati"
      },
      cta: "Započni",
      weeksTo: "SEDMICA DO",
      transformation: "TRANSFORMACIJE"
    },
    testimonials: {
      subtitle: "REZULTATI",
      title1: "PRAVE",
      title2: "TRANSFORMACIJE",
      reviews: [
        { quote: "Imran je potpuno promijenio moj odnos prema fitnessu. Moji gluteusi nikad nisu izgledali bolje!", author: "Amila H.", result: "+5cm rast" },
        { quote: "Online coaching je jednako efikasan kao uživo. Imran je uvijek tu kad ti treba.", author: "Sara M.", result: "12 sedmica" },
        { quote: "Najbolji trener u Sarajevu, definitivno. Njegovo znanje o treningu gluteusa je nenadmašno.", author: "Lejla K.", result: "Promijenjen život" }
      ]
    },
    cta: {
      title1: "SPREMAN/SPREMNA SI ZAPOČETI SVOJU",
      title2: "TRANSFORMACIJU?",
      description: "Ograničen broj mjesta za 1:1 trening. Zakaži besplatnu konsultaciju danas.",
      button: "Zakaži Besplatnu Konsultaciju"
    },
    footer: {
      description: "Elitni personalni trening u Sarajevu. Specijalizirani za programe transformacije gluteusa.",
      location: "LOKACIJA",
      programs: "PROGRAMI",
      contact: "KONTAKT",
      oneOnOne: "1:1 Personalni Trening",
      onlineCoaching: "Online Coaching",
      gluteProgram: "Program Gluteusa",
      teamTraining: "Grupni Trening",
      bookConsultation: "Zakaži Konsultaciju",
      copyright: "© 2026 Imran Bezdrob. Sva prava zadržana.",
      tagline: "Gradimo bolja tijela u Sarajevu"
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
      location: "Sarajevo",
      title1: "How to grow",
      title2: "Glutes fast?",
      description: "Elite 1:1 personal training in Sarajevo. Specializing in glute transformation programs for women who want real, lasting results.",
      cta1: "Start Your Transformation",
      cta2: "View Programs",
      stats: {
        transformations: "Transformations",
        experience: "Years Experience",
        inSarajevo: "In Bosnia and Herzegovina"
      }
    },
    marquee: ["Glute Training", "Personal Coaching", "Online Programs", "Body Transformation", "Strength Training", "Nutrition Guidance"],
    about: {
      subtitle: "MEET THE TRAINER",
      title1: "IMRAN",
      title2: "BEZDROB",
      description: "With over 10 years of experience in fitness and more than 2000 successful transformations, I've dedicated my life to helping women achieve the body they've always dreamed of.",
      quote: "My mission is simple - to help you become the best version of yourself. Every transformation starts with the first step, and I'm here to guide you every step of the way.",
      credentials: [
        "Certified Personal Trainer",
        "Glute Training Specialist",
        "Nutrition Coach",
        "10+ Years Experience"
      ]
    },
    services: {
      subtitle: "PROGRAMS",
      title1: "TRAINING",
      title2: "YOUR WAY",
      description: "Whether you want personal 1:1 sessions in Sarajevo, online coaching from anywhere, or access to my elite team of trainers - I have a program for you.",
      oneOnOne: {
        title: "1:1 Personal VIP Training",
        description: "Train with me directly at All In GYM Sarajevo. Personalized programs, hands-on coaching, and guaranteed results.",
        features: ["Live training sessions", "Custom workout plans", "Real-time form correction", "Nutrition guidance"],
        highlight: "Most Popular"
      },
      online: {
        title: "Online Coaching",
        description: "Get my proven glute program delivered to you anywhere in the world. Weekly check-ins and constant support.",
        features: ["Video workout library", "Weekly progress reviews", "Direct messaging support", "Flexible scheduling"]
      },
      team: {
        title: "Group Training",
        description: "Train in a small, focused group and get results like personal training – with the added motivation and energy of a team. Each session is expertly led, with clear goals and attention to technique.",
        features: ["Small groups (max. 10 people)", "Continuous form correction during training", "Motivating atmosphere and teamwork", "More affordable than 1:1 training"]
      },
      learnMore: "Learn More"
    },
    gluteProgram: {
      subtitle: "SIGNATURE PROGRAM",
      title1: "THE GLUTE",
      title2: "TRANSFORMATION",
      description: "My signature 12-week program designed specifically for women who want to build strong, sculpted glutes. Science-backed methods combined with years of real-world results.",
      features: {
        weeks: "12-Week Program",
        workouts: "4x Weekly Workouts",
        progressive: "Progressive Overload",
        results: "Proven Results"
      },
      cta: "Get Started",
      weeksTo: "WEEKS TO",
      transformation: "TRANSFORMATION"
    },
    testimonials: {
      subtitle: "RESULTS",
      title1: "REAL",
      title2: "TRANSFORMATIONS",
      reviews: [
        { quote: "Imran completely changed my relationship with fitness. My glutes have never looked better!", author: "Amila H.", result: "+5cm growth" },
        { quote: "The online coaching is just as effective as in-person. Imran is always there when you need him.", author: "Sara M.", result: "12 weeks" },
        { quote: "Best trainer in Sarajevo, period. His knowledge of glute training is unmatched.", author: "Lejla K.", result: "Life changed" }
      ]
    },
    cta: {
      title1: "READY TO START YOUR",
      title2: "TRANSFORMATION?",
      description: "Limited spots available for 1:1 training. Book your free consultation today.",
      button: "Book Free Consultation"
    },
    footer: {
      description: "Elite personal training in Sarajevo. Specializing in glute transformation programs.",
      location: "LOCATION",
      programs: "PROGRAMS",
      contact: "CONTACT",
      oneOnOne: "1:1 Personal Training",
      onlineCoaching: "Online Coaching",
      gluteProgram: "Glute Program",
      teamTraining: "Group Training",
      bookConsultation: "Book Consultation",
      copyright: "© 2026 Imran Bezdrob. All rights reserved.",
      tagline: "Building better bodies in Sarajevo"
    }
  }
};

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
  const [lang, setLang] = useState<Language>('ba');
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [currentTransformImage, setCurrentTransformImage] = useState(0);

  const transformImages = [
    "/images/5823A99D-5A5C-417A-B69E-7A70C8553CA8.jpg",
    "/images/Slikatransfor2.png",
    "/images/22B4FC4D-C16D-4CDA-B252-B447FB07C070.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTransformImage((prev) => (prev + 1) % transformImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [transformImages.length]);

  const t = translations[lang];

  const navLinks = [
    { href: "/services", label: t.nav.programs },
    { href: "/team", label: t.nav.trainers },
    { href: "/contact", label: t.nav.contact },
  ];

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
          <nav className={`px-6 py-4 rounded-2xl transition-all duration-300 ${scrolledPastHero ? 'bg-white/90 backdrop-blur-md shadow-sm border border-gray-200' : 'bg-white/20 backdrop-blur-md border border-gray-400/30'}`}>
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image src="/Untitled design (26).png" alt="Bezdrob Transformation Program" width={200} height={50} className={`h-10 w-auto object-contain transition-all duration-300 ${scrolledPastHero ? '' : 'brightness-0 invert'}`} />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`transition-colors animated-underline ${scrolledPastHero ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => setLang(lang === 'ba' ? 'en' : 'ba')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors text-sm font-medium ${scrolledPastHero ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' : 'bg-white/20 hover:bg-white/30 text-white'}`}
                >
                  {lang === 'ba' ? '🇬🇧 EN' : '🇧🇦 BA'}
                </button>
                <Link href="/contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-colors ${scrolledPastHero ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-peach-500 text-white hover:bg-peach-600'}`}>
                  {t.nav.bookSession}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex md:hidden items-center gap-2">
                <button
                  onClick={() => setLang(lang === 'ba' ? 'en' : 'ba')}
                  className={`flex items-center gap-1 px-2 py-2 rounded-xl text-sm font-bold ${scrolledPastHero ? 'bg-gray-100 text-gray-700' : 'bg-white/20 text-white'}`}
                >
                  {lang === 'ba' ? '🇬🇧' : '🇧🇦'}
                </button>
                <button onClick={() => setMobileMenuOpen(true)} className={`p-2 rounded-xl transition-colors ${scrolledPastHero ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' : 'bg-white/20 hover:bg-white/30 text-white'}`} aria-label="Open menu">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
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
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image src="/Untitled design (26).png" alt="Bezdrob Transformation Program" width={200} height={50} className="h-10 w-auto object-contain" />
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
                    {t.nav.bookSession}
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
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_5643.JPG"
            alt="Imran Bezdrob - Personal Trainer"
            fill
            className="object-cover object-[30%_60%] md:object-[20%_50%]"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-5xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <MapPin className="w-4 h-4 text-peach-400" />
              <span className="text-sm text-white">{t.hero.location}</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display leading-[0.95] tracking-tight mb-6 text-white">
              {t.hero.title1}
              <br />
              <span className="text-gradient">{t.hero.title2}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              {t.hero.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-peach-500 text-white rounded-xl font-semibold text-lg hover:bg-peach-600 transition-colors">
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/30 transition-colors">
                <Play className="w-5 h-5" />
                {t.hero.cta2}
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { value: "2000+", label: t.hero.stats.transformations },
                { value: "10+", label: t.hero.stats.experience },
                { value: "#1", label: t.hero.stats.inSarajevo },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-display text-peach-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-peach-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="py-6 border-y border-gray-200 overflow-hidden bg-gray-50">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 mx-6">
              {t.marquee.map((item, i) => (
                <span key={i} className="text-2xl font-display text-gray-300 flex items-center gap-4">
                  {item}
                  <span className="text-2xl">🍑</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About Trainer Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-peach-500 font-semibold mb-4 block">{t.about.subtitle}</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
                {t.about.title1} <span className="text-gradient">{t.about.title2}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.about.description}
              </p>
              <blockquote className="border-l-4 border-peach-500 pl-6 py-2 mb-8">
                <p className="text-gray-500 italic">&ldquo;{t.about.quote}&rdquo;</p>
              </blockquote>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {t.about.credentials.map((credential, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-peach-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{credential}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image src="/images/IMG_4709.JPG" alt="Imran Bezdrob" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src="/images/IMG_8344.JPG" alt="Imran Bezdrob Training" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src="/images/WhatsApp Image 2026-01-07 at 16.47.56.jpeg" alt="Personal Training Session" fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-peach-400 to-peach-600 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-5xl font-display mb-2">2000+</div>
                      <div className="text-sm opacity-90">{t.hero.stats.transformations}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 sm:py-32 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <span className="text-peach-500 font-semibold mb-4 block">{t.services.subtitle}</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
              {t.services.title1} <span className="text-gradient">{t.services.title2}</span>
            </h2>
            <p className="text-lg text-gray-500">
              {t.services.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: t.services.oneOnOne.title,
                description: t.services.oneOnOne.description,
                features: t.services.oneOnOne.features,
                highlight: t.services.oneOnOne.highlight,
                gradient: "from-peach-400 to-peach-500",
                image: "/images/IMG_5712.JPG",
                imagePosition: "object-[center_30%]"
              },
              {
                icon: Users,
                title: t.services.team.title,
                description: t.services.team.description,
                features: t.services.team.features,
                highlight: null,
                gradient: "from-gray-400 to-gray-600",
                image: "/images/IMG_0224.JPG",
                imagePosition: "object-[center_42%]"
              },
              {
                icon: Sparkles,
                title: t.services.online.title,
                description: t.services.online.description,
                features: t.services.online.features,
                highlight: null,
                gradient: "from-gray-700 to-gray-900",
                image: "/images/IMG_9567.jpg",
                imagePosition: "object-bottom"
              }
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white border border-gray-200 rounded-2xl hover:border-peach-300 hover:shadow-xl transition-all duration-300 hover-lift relative overflow-hidden">
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-peach-500 text-white text-xs font-semibold rounded-full">
                    {service.highlight}
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className={`object-cover group-hover:scale-105 transition-transform duration-500 ${service.imagePosition}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
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
                    {t.services.learnMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
              <span className="text-peach-500 font-semibold mb-4 block">{t.gluteProgram.subtitle}</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-gray-900">
                {t.gluteProgram.title1} <span className="text-gradient">{t.gluteProgram.title2}</span>
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                {t.gluteProgram.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Calendar, text: t.gluteProgram.features.weeks },
                  { icon: Dumbbell, text: t.gluteProgram.features.workouts },
                  { icon: Target, text: t.gluteProgram.features.progressive },
                  { icon: Trophy, text: t.gluteProgram.features.results }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                    <item.icon className="w-5 h-5 text-peach-500" />
                    <span className="font-medium text-gray-900">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                {t.gluteProgram.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 relative">
                {/* Hidden first image to set dimensions */}
                <Image src={transformImages[0]} alt="" width={600} height={800} className="w-full h-auto invisible" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTransformImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image src={transformImages[currentTransformImage]} alt="Client glute transformation before and after results" fill className="object-cover" />
                  </motion.div>
                </AnimatePresence>
                {currentTransformImage === 0 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <div className="text-7xl sm:text-8xl font-display text-white mb-2">12</div>
                      <div className="text-xl sm:text-2xl font-display text-white/80">{t.gluteProgram.weeksTo}</div>
                      <div className="text-2xl sm:text-3xl font-display text-white">{t.gluteProgram.transformation}</div>
                    </div>
                  </>
                )}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {transformImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTransformImage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === currentTransformImage ? 'bg-white w-6' : 'bg-white/50'}`}
                    />
                  ))}
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
            <span className="text-peach-500 font-semibold mb-4 block">{t.testimonials.subtitle}</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-gray-900">
              {t.testimonials.title1} <span className="text-gradient">{t.testimonials.title2}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.reviews.map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 bg-white border border-gray-200 rounded-2xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
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
              {t.cta.title1} <span className="text-gradient">{t.cta.title2}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                {t.cta.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://www.instagram.com/bezdrob.tp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold text-lg hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
                @bezdrob.tp
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
              <Link href="/" className="mb-6 inline-block">
                <Image src="/Untitled design (26).png" alt="Bezdrob Transformation Program" width={200} height={50} className="h-10 w-auto object-contain" />
              </Link>
              <p className="text-gray-500 mb-6">{t.footer.description}</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/bezdrob.tp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/387644607444" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="tel:+387644607444" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-gray-900">{t.footer.location}</h4>
              <ul className="space-y-3 text-gray-500">
                <li>All In GYM Sarajevo</li>
                <li>Sarajevo, Bosnia</li>
                <li className="pt-2">Mon - Sat: 6AM - 10PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-gray-900">{t.footer.programs}</h4>
              <ul className="space-y-3 text-gray-500">
                <li><Link href="/services" className="hover:text-gray-900 transition-colors">{t.footer.oneOnOne}</Link></li>
                <li><Link href="/services" className="hover:text-gray-900 transition-colors">{t.footer.onlineCoaching}</Link></li>
                <li><Link href="/services" className="hover:text-gray-900 transition-colors">{t.footer.gluteProgram}</Link></li>
                <li><Link href="/team" className="hover:text-gray-900 transition-colors">{t.footer.teamTraining}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-gray-900">{t.footer.contact}</h4>
              <ul className="space-y-3 text-gray-500">
                <li><Link href="/contact" className="hover:text-gray-900 transition-colors">{t.footer.bookConsultation}</Link></li>
                <li><a href="mailto:imranbezdrob@gmail.com" className="hover:text-gray-900 transition-colors">imranbezdrob@gmail.com</a></li>
                <li><a href="tel:+387644607444" className="hover:text-gray-900 transition-colors">+387 64 460 7444</a></li>
                <li><a href="https://wa.me/387644607444" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-peach-400 rounded-full" />
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
