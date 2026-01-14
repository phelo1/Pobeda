import React from 'react';

export type Language = 'en' | 'ru';

export interface Project {
  id: number;
  name: string;
  location: string;
  area: string;
  duration: string;
  type: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  propertySize: string;
  propertyType: string;
  workRequired: string;
  location: string;
}

export interface CalculatorFormData {
  squareMeters: number;
  email: string;
  phone: string;
}

export interface Translations {
  nav: {
    services: string;
    projects: string;
    about: string;
    contact: string;
    getQuote: string;
    bookVisit: string;
    calculator: string;
    team: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    tagline: string;
  };
  services: {
    title: string;
    subtitle: string;
    explore: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  portfolio: {
    title: string;
    workTypes: string;
    duration: string;
    area: string;
    backToHome: string;
  };
  philosophy: {
    title: string;
    heading: string;
    text: string;
    highlight: string;
    commitment: string;
    expertise: string;
  };
  team: {
    title: string;
    subtitle: string;
  };
  ceo: {
    title: string;
    subtitle: string;
    quote: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    hoursText: string;
    visitNotice: string;
  };
  footer: {
    tagline: string;
    quickNav: string;
    serviceAreas: string;
  };
  forms: {
    submit: string;
    cancel: string;
    sending: string;
    success: string;
    quoteTitle: string;
    visitTitle: string;
    calcTitle: string;
    calcDesc: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    sizeLabel: string;
    typeLabel: string;
    workLabel: string;
    locationLabel: string;
    freeVisitNotice: string;
  };
}
