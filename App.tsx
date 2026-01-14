
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Globe, 
  MapPin, 
  Mail, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Language } from './types';
import { CONTENT, SERVICES_LIST, PROJECTS_DATA, TEAM_DATA, CONTACT_INFO, CEO_IMAGE } from './constants';
import Modal from './components/Modal';
import QuoteForm from './components/QuoteForm';
import CalculatorForm from './components/CalculatorForm';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [calcModalOpen, setCalcModalOpen] = useState(false);

  const t = CONTENT[lang];

  // Dynamic SEO Updates
  useEffect(() => {
    // Update Document Title
    const titles = {
      en: "Pobeda LLC | Premium Construction & Refurbishment Dubai",
      ru: "Pobeda LLC | Премиальное строительство и ремонт в Дубае"
    };
    document.title = titles[lang];

    // Update Meta Description
    const descriptions = {
      en: "Pobeda LLC offers high-end construction, luxury villa building, and premium apartment refurbishments in Dubai. Quality, precision, and international expertise.",
      ru: "Pobeda LLC предлагает высококачественное строительство, возведение роскошных вилл и премиальный ремонт квартир в Дубае. Качество, точность и международный опыт."
    };
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[lang]);
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const openQuote = () => setQuoteModalOpen(true);
  const openVisit = () => setVisitModalOpen(true);

  return (
    <div className="min-h-screen font-sans text-gray-200 bg-[#050505]">
      
      {/* TOP CONTACT BAR */}
      <div className="hidden lg:block bg-pobeda-gray py-2 border-b border-gray-900 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-pobeda-gold" aria-hidden="true" /> {CONTACT_INFO.address}</span>
            <span className="flex items-center gap-2"><Clock size={12} className="text-pobeda-gold" aria-hidden="true" /> {t.contact.hoursText}</span>
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors" aria-label={`Email us at ${CONTACT_INFO.email}`}><Mail size={12} className="text-pobeda-gold" aria-hidden="true" /> {CONTACT_INFO.email}</a>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors" aria-label={`Call us at ${CONTACT_INFO.phone}`}><Phone size={12} className="text-pobeda-gold" aria-hidden="true" /> {CONTACT_INFO.phone}</a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-gray-900 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer" 
              onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
              role="button"
              aria-label="Home"
            >
              <img 
                src="/logo.png" 
                alt="Pobeda LLC Construction Dubai" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-pobeda-gold font-bold text-xl tracking-tighter">POBEDA <span class="text-white">LLC</span></span>`;
                }}
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6" aria-label="Main Navigation">
              {['services', 'projects', 'about', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-[11px] font-bold hover:text-pobeda-gold transition-colors uppercase tracking-[0.2em]"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={toggleLang} 
                className="flex items-center gap-1 text-[11px] font-bold hover:text-pobeda-gold transition-colors"
                aria-label={lang === 'en' ? "Switch to Russian" : "Switch to English"}
              >
                <Globe size={14} aria-hidden="true" />
                <span>{lang === 'en' ? 'RU' : 'EN'}</span>
              </button>
              
              <button 
                onClick={openVisit}
                className="text-[11px] font-bold border border-pobeda-gold text-pobeda-gold px-4 py-2 hover:bg-pobeda-gold hover:text-black transition-all uppercase tracking-widest"
              >
                {t.nav.bookVisit}
              </button>

              <button 
                onClick={openQuote}
                className="bg-pobeda-gold text-black px-4 py-2 text-[11px] font-bold hover:bg-yellow-500 transition-colors uppercase tracking-widest"
              >
                {t.nav.getQuote}
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-4">
               <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`} 
                className="text-pobeda-gold"
                aria-label="Call Pobeda LLC"
              >
                <Phone size={20} />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-white"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-b border-gray-900 animate-fade-in">
            <nav className="px-4 pt-4 pb-8 space-y-4 flex flex-col" aria-label="Mobile Navigation">
              {['services', 'projects', 'about', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-lg font-medium text-white hover:text-pobeda-gold uppercase tracking-widest text-left"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
              <div className="h-px bg-gray-900 w-full my-2"></div>
              <button onClick={openVisit} className="w-full py-4 border border-pobeda-gold text-pobeda-gold font-bold uppercase tracking-widest">
                {t.nav.bookVisit}
              </button>
              <button onClick={openQuote} className="w-full py-4 bg-pobeda-gold text-black font-bold uppercase tracking-widest">
                {t.nav.getQuote}
              </button>
              <button onClick={toggleLang} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
                <Globe size={16} aria-hidden="true" /> {lang === 'en' ? 'RU' : 'EN'}
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: 'url("https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/hero.webp")' }}
            role="img"
            aria-label="High-end construction site in Dubai"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in-up">
            <div className="max-w-2xl">
              <span className="text-pobeda-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">{t.hero.tagline}</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-300 mb-10 font-light tracking-wide">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openQuote}
                  className="bg-pobeda-gold text-black px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-yellow-500 transition-all flex items-center justify-center gap-3 group"
                >
                  {t.nav.getQuote}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border border-white/30 text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                >
                  {t.hero.cta}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section id="about" className="py-24 bg-pobeda-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-pobeda-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">{t.philosophy.title}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-8 leading-snug">
                  {(() => {
                    const words = t.philosophy.heading.split(' ');
                    const lastWord = words.pop();
                    return (
                      <>
                        {words.join(' ')} <span className="text-pobeda-gold">{lastWord}</span>
                      </>
                    );
                  })()}
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {t.philosophy.text}
                </p>
                <div className="bg-pobeda-gray border-l-4 border-pobeda-gold p-8 rounded-r-lg">
                  <p className="text-xl text-white font-serif italic mb-2">"{t.philosophy.highlight}"</p>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">{t.philosophy.commitment}</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/kinetic.webp" 
                    className="w-full h-full object-cover grayscale transition-all duration-500" 
                    alt="Close-up architectural detail of modern construction" 
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-pobeda-gold text-black p-10 hidden md:block rounded-lg shadow-xl">
                  <p className="text-4xl font-bold mb-1">15+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest">{t.philosophy.expertise}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-pobeda-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">{t.services.title}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-6">{t.services.subtitle}</h2>
              <div className="w-20 h-1 bg-pobeda-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES_LIST[lang].map((service) => (
                <article key={service.id} className="group p-10 bg-pobeda-gray border border-gray-900 hover:border-pobeda-gold transition-all duration-500 hover:-translate-y-2">
                  <div className="text-pobeda-gold mb-8 transform group-hover:scale-110 transition-transform inline-block" aria-hidden="true">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
                  <button 
                    onClick={openQuote}
                    className="text-[10px] font-bold text-pobeda-gold uppercase tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    {t.services.explore} <ArrowRight size={12} aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 bg-pobeda-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-pobeda-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">{t.projects.title}</span>
                <h2 className="text-3xl md:text-5xl font-serif text-white font-bold">{t.projects.subtitle}</h2>
              </div>
              <button className="hidden md:block text-xs font-bold text-pobeda-gold uppercase tracking-widest border-b border-pobeda-gold pb-2 hover:text-white hover:border-white transition-colors">
                {t.projects.viewAll}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {PROJECTS_DATA[lang].map((project) => (
                <div key={project.id} className="group relative aspect-square overflow-hidden cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={`Pobeda LLC Project: ${project.name}`} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-pobeda-gold text-[10px] font-bold uppercase tracking-widest mb-2">{project.type}</span>
                    <h4 className="text-2xl font-serif text-white mb-2">{project.name}</h4>
                    <p className="text-gray-400 text-sm">{project.location} • {project.area} • {project.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="team" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-pobeda-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">{t.team.title}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-6">{t.team.subtitle}</h2>
              <div className="w-20 h-1 bg-pobeda-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {TEAM_DATA[lang].map((member) => (
                <div key={member.id} className="group">
                  <div className="aspect-[3/4] bg-pobeda-gray overflow-hidden mb-6 rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={member.image} 
                      alt={`Pobeda Team: ${member.name}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                  </div>
                  <h4 className="text-2xl font-serif text-white mb-1">{member.name}</h4>
                  <p className="text-pobeda-gold text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO MESSAGE */}
        <section className="py-24 bg-pobeda-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 shadow-2xl">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 border border-pobeda-gold rounded-2xl transform -rotate-3" aria-hidden="true"></div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={CEO_IMAGE}
                      alt="Victoria Karaman, CEO of Pobeda LLC" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <span className="text-pobeda-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">{t.ceo.subtitle}</span>
                <h2 className="text-4xl font-serif text-white mb-8">{t.ceo.title}</h2>
                <blockquote className="text-2xl text-gray-300 font-serif leading-relaxed italic border-l-4 border-pobeda-gold pl-8">
                  "{t.ceo.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            
            <div className="col-span-1 lg:col-span-1">
              <img 
                src="https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/logo.png" 
                alt="Pobeda LLC Logo" 
                className="max-h-16 h-auto w-auto mb-8 object-contain" 
              />
              <p className="text-gray-500 leading-relaxed mb-8">
                {t.footer.tagline}
              </p>
              <div className="flex gap-4">
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="Chat with us on WhatsApp">
                  <MessageCircle size={20} className="text-white" aria-hidden="true" />
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="w-10 h-10 bg-pobeda-gray border border-gray-800 rounded-full flex items-center justify-center hover:border-pobeda-gold transition-colors" aria-label="Send us an Email">
                  <Mail size={18} className="text-pobeda-gold" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-8">{t.contact.title}</h5>
              <ul className="space-y-6">
                <li className="flex gap-4 text-sm">
                  <MapPin className="text-pobeda-gold flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-gray-400">{CONTACT_INFO.address}</span>
                </li>
                <li className="flex gap-4 text-sm">
                  <Phone className="text-pobeda-gold flex-shrink-0" size={18} aria-hidden="true" />
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-gray-400 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                </li>
                <li className="flex gap-4 text-sm">
                  <Mail className="text-pobeda-gold flex-shrink-0" size={18} aria-hidden="true" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>

            <div>
              <nav aria-label="Footer Navigation">
                <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-8">{t.footer.quickNav}</h5>
                <ul className="space-y-4">
                   {['services', 'projects', 'about', 'team'].map((item) => (
                    <li key={item}>
                      <button onClick={() => scrollToSection(item)} className="text-sm text-gray-500 hover:text-pobeda-gold transition-colors">
                        {t.nav[item as keyof typeof t.nav]}
                      </button>
                    </li>
                   ))}
                   <li>
                     <button onClick={openVisit} className="text-sm text-pobeda-gold font-bold">
                       {t.nav.bookVisit}
                     </button>
                   </li>
                </ul>
              </nav>
            </div>

            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-8">{t.footer.serviceAreas}</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>Palm Jumeirah</li>
                <li>Dubai Marina</li>
                <li>Business Bay</li>
                <li>Downtown Dubai</li>
                <li>Emirates Hills</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
              &copy; {new Date().getFullYear()} Pobeda LLC. Premium Construction Dubai.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
              <a href="#" className="hover:text-pobeda-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pobeda-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent CTA Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
         <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
          className="bg-green-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
          aria-label="Contact us via WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* MODALS */}
      <Modal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        title={t.forms.quoteTitle}
      >
        <QuoteForm lang={lang} onClose={() => setQuoteModalOpen(false)} />
      </Modal>

      <Modal 
        isOpen={visitModalOpen} 
        onClose={() => setVisitModalOpen(false)} 
        title={t.forms.visitTitle}
      >
        <QuoteForm lang={lang} onClose={() => setVisitModalOpen(false)} isVisitOnly={true} />
      </Modal>

      <Modal 
        isOpen={calcModalOpen} 
        onClose={() => setCalcModalOpen(false)} 
        title={t.forms.calcTitle}
      >
        <CalculatorForm lang={lang} onClose={() => setCalcModalOpen(false)} />
      </Modal>

    </div>
  );
}

export default App;
