import { Language, Project, Service, TeamMember, Translations } from './types';
import { Ruler, Hammer, Home, PaintBucket, Building2, ShieldCheck, Users, Briefcase } from 'lucide-react';
import React from 'react';

const CEO_IMAGE = "/images/ceo.jpg";

export const CONTACT_INFO = {
  phone: "+971 50 939 2279",
  phoneRaw: "971509392279",
  whatsapp: "971509392279",
  email: "info@pobedallc.com",
  address: "Cayan Tower G floor office R06, Dubai Marina, UAE"
};

export const PROJECTS_DATA: Project[] = [
  { id: 1, name: "Legend Flower Business Center", location: "Moscow", area: "1300m²", duration: "2.5 months", type: "Office", image: "/images/legend-flower.jpg" },
  { id: 2, name: "Gazetny Mosbirzhа", location: "Business Club", area: "1250m²", duration: "2.5 months", type: "Business Club", image: "/images/gazetny.jpg" },
  { id: 3, name: "Bank Financial Corporation", location: "Moscow", area: "6000m²", duration: "6 months", type: "Bank HQ", image: "/images/bank-financial.jpg" },
  { id: 4, name: "Kinetic Residential Complex", location: "Moscow", area: "18,000m²", duration: "8 months", type: "Residential", image: "/images/kinetic.jpg" },
  { id: 5, name: "Lucky Quarter", location: "Moscow", area: "8000m²", duration: "6 months", type: "Mixed Use", image: "/images/lucky.jpg" },
  { id: 6, name: "Magnit Office", location: "Moscow", area: "1370m²", duration: "4 months", type: "Office", image: "/images/magnit.jpg" },
];

export const TEAM_DATA: Record<Language, TeamMember[]> = {
  en: [
    { id: 1, name: "Alexander Volkov", role: "Founder & Managing Director", description: "Leads with a focus on quality, deadlines, and client satisfaction. Oversees operations and strategy.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { id: 2, name: "Daniel Morris", role: "Senior Project Manager", description: "Manages projects from planning to delivery, coordinating teams, budgets, and timelines.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
    { id: 3, name: "Elena Petrova", role: "Lead Architect", description: "Responsible for architectural solutions, technical planning, and Dubai regulation compliance.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
    { id: 4, name: "Sophia Reynolds", role: "Interior Design Director", description: "Develops aesthetic and practical interior concepts, working closely with clients.", image: "https://images.unsplash.com/photo-1567532939604-b6c5b0adcc2c?q=80&w=400&auto=format&fit=crop" },
    { id: 5, name: "Ahmed Al Mansouri", role: "Site Engineer", description: "Supervises on-site works, safety regulations, and technical standards.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
    { id: 6, name: "Michael Turner", role: "Construction Supervisor", description: "Responsible for daily site operations, workforce coordination, and quality control.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  ],
  ru: [
    { id: 1, name: "Александр Волков", role: "Основатель и управляющий директор", description: "Руководит с акцентом на качество и сроки. Курирует операции и стратегию.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { id: 2, name: "Даниэль Моррис", role: "Старший менеджер проектов", description: "Управляет проектами от планирования до сдачи, координируя бюджеты и сроки.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
    { id: 3, name: "Елена Петрова", role: "Ведущий архитектор", description: "Отвечает за архитектурные решения и соблюдение норм Дубая.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
    { id: 4, name: "София Рейнольдс", role: "Директор по дизайну интерьера", description: "Разрабатывает эстетичные и практичные концепции интерьера.", image: "https://images.unsplash.com/photo-1567532939604-b6c5b0adcc2c?q=80&w=400&auto=format&fit=crop" },
    { id: 5, name: "Ахмед Аль Мансури", role: "Инженер объекта", description: "Контролирует работы на месте, соблюдение техники безопасности и стандартов.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
    { id: 6, name: "Майкл Тернер", role: "Прораб", description: "Отвечает за ежедневные операции на площадке и контроль качества.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  ]
};

export const SERVICES_LIST: Record<Language, Service[]> = {
  en: [
    { id: 1, title: "Apartment Renovation", description: "High-end refurbishments tailored to modern urban living.", icon: <Building2 /> },
    { id: 2, title: "Villa Construction", description: "Bespoke luxury villas built from initial ground-breaking to final touch.", icon: <Home /> },
    { id: 3, title: "Fit-out Works", description: "Commercial and residential interior finishing of the highest standard.", icon: <PaintBucket /> },
    { id: 4, title: "Full-cycle Construction", description: "Comprehensive management from foundation and structure to the roof.", icon: <Hammer /> },
    { id: 5, title: "Turnkey Projects", description: "Stress-free delivery where we handle everything including design and furnishing.", icon: <ShieldCheck /> },
  ],
  ru: [
    { id: 1, title: "Ремонт квартир", description: "Высококачественная отделка для современного городского образа жизни.", icon: <Building2 /> },
    { id: 2, title: "Строительство вилл", description: "Роскошные виллы по индивидуальным проектам от фундамента до крыши.", icon: <Home /> },
    { id: 3, title: "Fit-out работы", description: "Коммерческая и жилая внутренняя отделка высочайшего стандарта.", icon: <PaintBucket /> },
    { id: 4, title: "Полный цикл строительства", description: "Комплексное управление: от фундамента и конструктива до кровли.", icon: <Hammer /> },
    { id: 5, title: "Проекты «под ключ»", description: "Сдача объекта без забот: берем на себя все, включая дизайн и мебель.", icon: <ShieldCheck /> },
  ]
};

export const CONTENT: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      getQuote: "Request a Quote",
      bookVisit: "Book Free Site Visit",
      calculator: "Estimator",
      team: "Team"
    },
    hero: {
      title: "Building Excellence in Dubai.",
      subtitle: "A unified team for premium design and construction execution.",
      cta: "View Portfolio"
    },
    services: {
      title: "CORE SERVICES",
      subtitle: "Comprehensive solutions for luxury living and commercial spaces."
    },
    projects: {
      title: "OUR WORK"
    },
    philosophy: {
      title: "OUR PHILOSOPHY",
      text: "Pobeda LLC represents a unique synergy of international construction expertise and deep Dubai market knowledge. We operate on a principle of total accountability.",
      highlight: "Design and execution are handled by one unified team."
    },
    team: {
      title: "MEET THE TEAM",
      subtitle: "The experts behind your vision."
    },
    ceo: {
      title: "Victoria Karaman",
      subtitle: "CEO & Visionary"
    },
    contact: {
      title: "GET IN TOUCH",
      address: "Our Office",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      visitNotice: "Visit us at our Dubai Marina office."
    },
    forms: {
      submit: "Submit Request",
      cancel: "Cancel",
      sending: "Processing...",
      success: "Thank you. Our team will contact you shortly.",
      quoteTitle: "Request a Project Quote",
      visitTitle: "Book a Free Site Visit",
      calcTitle: "Cost Estimator",
      calcDesc: "Provide basic details for a preliminary assessment.",
      nameLabel: "Full Name",
      emailLabel: "Email",
      phoneLabel: "Phone Number",
      sizeLabel: "Property Size (sqm)",
      typeLabel: "Property Type",
      workLabel: "Work Required",
      locationLabel: "Project Location",
      freeVisitNotice: "Notice: First site visit and measurements are free."
    }
  },
  ru: {
    nav: {
      services: "Услуги",
      projects: "Проекты",
      about: "О нас",
      contact: "Контакты",
      getQuote: "Запрос сметы",
      bookVisit: "Замер бесплатно",
      calculator: "Калькулятор",
      team: "Команда"
    },
    hero: {
      title: "Строим Совершенство в Дубае.",
      subtitle: "Единая команда для премиального проектирования и реализации.",
      cta: "Портфолио"
    },
    services: {
      title: "ОСНОВНЫЕ УСЛУГИ",
      subtitle: "Комплексные решения для элитного жилья и коммерции."
    },
    projects: {
      title: "НАШИ РАБОТЫ"
    },
    philosophy: {
      title: "НАША ФИЛОСОФИЯ",
      text: "Pobeda LLC — это синергия международного опыта и знаний рынка недвижимости Дубая. Мы работаем по принципу полной ответственности.",
      highlight: "Проектирование и реализация выполняются одной единой командой."
    },
    team: {
      title: "НАША КОМАНДА",
      subtitle: "Эксперты, стоящие за вашим проектом."
    },
    ceo: {
      title: "Виктория Караман",
      subtitle: "CEO и визионер"
    },
    contact: {
      title: "СВЯЖИТЕСЬ С НАМИ",
      address: "Наш офис",
      phone: "Телефон",
      email: "Email",
      hours: "График",
      visitNotice: "Ждем вас в нашем офисе в Дубай Марина."
    },
    forms: {
      submit: "Отправить запрос",
      cancel: "Отмена",
      sending: "Обработка...",
      success: "Спасибо! Наша команда скоро свяжется с вами.",
      quoteTitle: "Запрос стоимости проекта",
      visitTitle: "Заказать бесплатный выезд",
      calcTitle: "Калькулятор стоимости",
      calcDesc: "Укажите базовые параметры для предварительной оценки.",
      nameLabel: "ФИО",
      emailLabel: "Email",
      phoneLabel: "Номер телефона",
      sizeLabel: "Площадь (кв.м.)",
      typeLabel: "Тип объекта",
      workLabel: "Тип работ",
      locationLabel: "Локация объекта",
      freeVisitNotice: "Примечание: Первый выезд специалиста и замеры — бесплатно."
    }
  }
};

export { CEO_IMAGE };