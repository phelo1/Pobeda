
import { Language, Project, Service, TeamMember, Translations } from './types';
import { Ruler, Hammer, Home, PaintBucket, Building2, ShieldCheck, Users, Briefcase } from 'lucide-react';
import React from 'react';

const CEO_IMAGE = "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/ceo.webp";

export const CONTACT_INFO = {
  phone: "+971 50 939 2279",
  phoneRaw: "971509392279",
  whatsapp: "971509392279",
  email: "info@pobedallc.com",
  address: "Cayan Tower G floor office R06, Dubai Marina, UAE"
};

export const PROJECTS_DATA: Record<Language, Project[]> = {
  en: [
    { id: 1, name: "BC \"Legenda Tsvetnogo\"", location: "Moscow", area: "1300m²", duration: "2.5 months", type: "Office", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/BC_Legenda_Tsvetnogo_img_1.webp" },
    { id: 2, name: "Gazetny Mosbirzha", location: "Moscow", area: "1250m²", duration: "2.5 months", type: "Business Club", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Gazetny_Mosbirzha_img_1.webp" },
    { id: 3, name: "Bank Otkritie", location: "Moscow", area: "6000m²", duration: "6 months", type: "Bank HQ", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Bank_Otkritie_img_1.webp" },
    { id: 4, name: "JK \"Kinetic\"", location: "Moscow", area: "18000m²", duration: "8 months", type: "Residential", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Kinetic_img_1.webp" },
    { id: 5, name: "Lucky Quarter", location: "Moscow", area: "8000m²", duration: "6 months", type: "Residential", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Lucky_Quarter_img_1.webp" },
    { id: 6, name: "PAO \"Magnit\" Office", location: "Moscow", area: "1370m²", duration: "4 months", type: "Office", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/PAO_Magnit_img_1.webp" },
    { id: 7, name: "Bars Group Office", location: "Moscow", area: "880m²", duration: "5 months", type: "Office", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Bars_Group_img_1.webp" },
    { id: 8, name: "OMZ Perspective Tech", location: "Moscow", area: "815m²", duration: "3 months", type: "Office", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/OMZ_Perspective_1_img_1.webp" },
    { id: 9, name: "JK \"Liner\"", location: "Moscow", area: "12500m²", duration: "9 months", type: "Residential", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Liner_img_1.webp" },
    { id: 10, name: "BC \"Geolog\"", location: "Moscow", area: "6500m²", duration: "6 months", type: "Office", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/BC_Geolog_img_1.webp" },
    { id: 11, name: "JK \"Doro Mille\"", location: "Moscow", area: "3000m²", duration: "6 months", type: "Residential", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Doro_Mille_img_1.webp" },
    { id: 12, name: "JK \"Armani\"", location: "Moscow", area: "2500m²", duration: "7 months", type: "Residential", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Armani_img_1.webp" },
    { id: 13, name: "Hide Clinic Moscow", location: "Moscow", area: "300m²", duration: "2 months", type: "Medical", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Hide_Clinic_Moscow_img_1.webp" },
    { id: 14, name: "Private Apartment", location: "Moscow", area: "84m²", duration: "4 months", type: "Residential", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Apartment_Private_img_1.webp" },
    { id: 15, name: "Hide Clinic Dubai", location: "Dubai", area: "350m²", duration: "4 months", type: "Medical", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Hide_Clinic_Dubai_img_1.webp" },
    { id: 16, name: "Retreat Center Dubai", location: "Dubai", area: "1500m²", duration: "6 months", type: "Wellness", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Retreat_Center_Dubai_img_1.webp" },
  ],
  ru: [
    { id: 1, name: "БЦ \"Легенда Цветного\"", location: "Москва", area: "1300м²", duration: "2.5 месяца", type: "Офис", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/BC_Legenda_Tsvetnogo_img_1.webp" },
    { id: 2, name: "Газетный Мосбиржа", location: "Москва", area: "1250м²", duration: "2.5 месяца", type: "Бизнес-клуб", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Gazetny_Mosbirzha_img_1.webp" },
    { id: 3, name: "Банк Открытие", location: "Москва", area: "6000м²", duration: "6 месяцев", type: "Штаб-квартира банка", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Bank_Otkritie_img_1.webp" },
    { id: 4, name: "ЖК \"Кинетик\"", location: "Москва", area: "18000м²", duration: "8 месяцев", type: "Жилой комплекс", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Kinetic_img_1.webp" },
    { id: 5, name: "Lucky Quarter", location: "Москва", area: "8000м²", duration: "6 месяцев", type: "Жилой комплекс", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Lucky_Quarter_img_1.webp" },
    { id: 6, name: "Офис ПАО \"Магнит\"", location: "Москва", area: "1370м²", duration: "4 месяца", type: "Офис", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/PAO_Magnit_img_1.webp" },
    { id: 7, name: "Офис Группы \"Барс\"", location: "Москва", area: "880м²", duration: "5 месяцев", type: "Офис", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Bars_Group_img_1.webp" },
    { id: 8, name: "Офис ОМЗ Перспективные Технологии", location: "Москва", area: "815м²", duration: "3 месяца", type: "Офис", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/OMZ_Perspective_1_img_1.webp" },
    { id: 9, name: "ЖК \"Лайнер\"", location: "Москва", area: "12500м²", duration: "9 месяцев", type: "Жилой комплекс", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Liner_img_1.webp" },
    { id: 10, name: "БЦ \"Геолог\"", location: "Москва", area: "6500м²", duration: "6 месяцев", type: "Офис", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/BC_Geolog_img_1.webp" },
    { id: 11, name: "ЖК \"Доро Милле\"", location: "Москва", area: "3000м²", duration: "6 месяцев", type: "Жилой комплекс", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Doro_Mille_img_1.webp" },
    { id: 12, name: "ЖК \"Армани\"", location: "Москва", area: "2500м²", duration: "7 месяцев", type: "Жилой комплекс", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/JK_Armani_img_1.webp" },
    { id: 13, name: "Клиника Hide Москва", location: "Москва", area: "300м²", duration: "2 месяца", type: "Медицинский", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Hide_Clinic_Moscow_img_1.webp" },
    { id: 14, name: "Частная Квартира", location: "Москва", area: "84м²", duration: "4 месяца", type: "Жилье", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Apartment_Private_img_1.webp" },
    { id: 15, name: "Клиника Hide Дубай", location: "Дубай", area: "350м²", duration: "4 месяца", type: "Медицинский", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Hide_Clinic_Dubai_img_1.webp" },
    { id: 16, name: "Центр Отдыха Дубай", location: "Дубай", area: "1500м²", duration: "6 месяцев", type: "Велнес", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/Retreat_Center_Dubai_img_1.webp" },
  ]
};

export const TEAM_DATA: Record<Language, TeamMember[]> = {
  en: [
    { id: 1, name: "Alexander Volkov", role: "Founder & Managing Director", description: "Leads with a focus on quality, deadlines, and client satisfaction. Oversees operations and strategy.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team1.webp" },
    { id: 2, name: "Daniel Morris", role: "Senior Project Manager", description: "Manages projects from planning to delivery, coordinating teams, budgets, and timelines.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team2.webp" },
    { id: 3, name: "Elena Petrova", role: "Lead Architect", description: "Responsible for architectural solutions, technical planning, and Dubai regulation compliance.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team3.webp" },
    { id: 4, name: "Sophia Reynolds", role: "Interior Design Director", description: "Develops aesthetic and practical interior concepts, working closely with clients.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team4.webp" },
    { id: 5, name: "Dmitry Sokolov", role: "Site Engineer", description: "Supervises on-site works, safety regulations, and technical standards.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team5.webp" },
    { id: 6, name: "Michael Turner", role: "Construction Supervisor", description: "Responsible for daily site operations, workforce coordination, and quality control.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team6.webp" },
  ],
  ru: [
    { id: 1, name: "Александр Волков", role: "Основатель и управляющий директор", description: "Руководит с акцентом на качество и сроки. Курирует операции и стратегию.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team1.webp" },
    { id: 2, name: "Даниэль Моррис", role: "Старший менеджер проектов", description: "Управляет проектами от планирования до сдачи, координируя бюджеты и сроки.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team2.webp" },
    { id: 3, name: "Елена Петрова", role: "Ведущий архитектор", description: "Отвечает за архитектурные решения и соблюдение норм Дубая.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team3.webp" },
    { id: 4, name: "София Рейнольдс", role: "Директор по дизайну интерьера", description: "Разрабатывает эстетичные и практичные концепции интерьера.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team4.webp" },
    { id: 5, name: "Дмитрий Соколов", role: "Инженер объекта", description: "Контролирует работы на месте, соблюдение техники безопасности и стандартов.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team5.webp" },
    { id: 6, name: "Майкл Тернер", role: "Прораб", description: "Отвечает за ежедневные операции на площадке и контроль качества.", image: "https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/team6.webp" },
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
      cta: "View Portfolio",
      tagline: "PREMIUM CONSTRUCTION • DUBAI"
    },
    services: {
      title: "CORE SERVICES",
      subtitle: "Comprehensive solutions for luxury living and commercial spaces.",
      explore: "Explore"
    },
    projects: {
      title: "OUR WORK",
      subtitle: "Showcase of Mastery",
      viewAll: "View All Works"
    },
    philosophy: {
      title: "OUR PHILOSOPHY",
      heading: "Experience Meets Local Excellence",
      text: "Pobeda LLC represents a unique synergy of international construction expertise and deep Dubai market knowledge. We operate on a principle of total accountability.",
      highlight: "Design and execution are handled by one unified team.",
      commitment: "— Pobeda LLC Commitment",
      expertise: "Years of Combined Expertise"
    },
    team: {
      title: "MEET THE TEAM",
      subtitle: "The experts behind your vision."
    },
    ceo: {
      title: "Victoria Karaman",
      subtitle: "CEO & Visionary",
      quote: "At Pobeda LLC, we don't just build structures; we craft legacies. Our commitment to excellence, punctuality, and refined aesthetics ensures that every square meter we touch transforms into a masterpiece of modern construction."
    },
    contact: {
      title: "GET IN TOUCH",
      address: "Our Office",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      hoursText: "Mon - Sat 9:00 - 18:00",
      visitNotice: "Visit us at our Dubai Marina office."
    },
    footer: {
      tagline: "Dubai's premier partner for high-end construction and refurbishment. Precision. Quality. Integrity.",
      quickNav: "Quick Navigation",
      serviceAreas: "Service Areas"
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
      cta: "Портфолио",
      tagline: "ПРЕМИАЛЬНОЕ СТРОИТЕЛЬСТВО • ДУБАЙ"
    },
    services: {
      title: "ОСНОВНЫЕ УСЛУГИ",
      subtitle: "Комплексные решения для элитного жилья и коммерции.",
      explore: "Подробнее"
    },
    projects: {
      title: "НАШИ РАБОТЫ",
      subtitle: "Демонстрация Мастерства",
      viewAll: "Все Проекты"
    },
    philosophy: {
      title: "НАША ФИЛОСОФИЯ",
      heading: "Опыт Встречается с Местным Совершенством",
      text: "Pobeda LLC — это синергия международного опыта и знаний рынка недвижимости Дубая. Мы работаем по принципу полной ответственности.",
      highlight: "Проектирование и реализация выполняются одной единой командой.",
      commitment: "— Обязательство Pobeda LLC",
      expertise: "Лет Совместного Опыта"
    },
    team: {
      title: "НАША КОМАНДА",
      subtitle: "Эксперты, стоящие за вашим проектом."
    },
    ceo: {
      title: "Виктория Караман",
      subtitle: "CEO и визионер",
      quote: "В Pobeda LLC мы не просто строим здания; мы создаем наследие. Наша приверженность совершенству, пунктуальности и утонченной эстетике гарантирует, что каждый квадратный метр, к которому мы прикасаемся, превращается в шедевр современного строительства."
    },
    contact: {
      title: "СВЯЖИТЕСЬ С НАМИ",
      address: "Наш офис",
      phone: "Телефон",
      email: "Email",
      hours: "График",
      hoursText: "Пн - Сб 9:00 - 18:00",
      visitNotice: "Ждем вас в нашем офисе в Дубай Марина."
    },
    footer: {
      tagline: "Ведущий партнер Дубая в области премиального строительства и ремонта. Точность. Качество. Честность.",
      quickNav: "Быстрая Навигация",
      serviceAreas: "Районы Обслуживания"
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
