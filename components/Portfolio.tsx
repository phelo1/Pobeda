import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import { Language, Project } from '../types';
import { PROJECTS_DATA, getProjectImages, PROJECT_WORK_DESCRIPTIONS, CONTENT } from '../constants';

interface PortfolioProps {
  lang: Language;
  onBack: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang, onBack }) => {
  const t = CONTENT[lang];
  const projects = PROJECTS_DATA[lang];

  // Helper function to determine grid layout based on number of images
  const getImageGridClass = (imageCount: number): string => {
    if (imageCount <= 3) return 'grid-cols-1 md:grid-cols-3';
    if (imageCount <= 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    if (imageCount <= 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <>
      {/* Portfolio Header with Logo */}
      <div className="bg-gradient-to-b from-black via-pobeda-dark to-black py-16 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-pobeda-gold hover:text-yellow-500 transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t.portfolio.backToHome}
          </button>
          
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pobeda-gold flex items-center justify-center">
                  <Star className="text-black" size={24} fill="currentColor" />
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-white font-bold">
                  {t.portfolio.title}
                </h1>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl">
                {lang === 'en' 
                  ? "A comprehensive showcase of our completed projects, demonstrating excellence in construction and design."
                  : "Полное представление наших завершенных проектов, демонстрирующих совершенство в строительстве и дизайне."}
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="https://raw.githubusercontent.com/phelo1/Pobeda/refs/heads/main/images/logo.png" 
                alt="Pobeda LLC Logo" 
                className="h-24 w-auto object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="py-12">
        {projects.map((project: Project) => {
          const projectImages = getProjectImages(project.id);
          const workDescription = PROJECT_WORK_DESCRIPTIONS[lang][project.id] || '';

          return (
            <section
              key={project.id}
              className="border-b border-gray-900 last:border-b-0"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 pb-8 border-b border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-pobeda-gold flex items-center justify-center flex-shrink-0">
                      <Star className="text-black" size={14} fill="currentColor" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif text-white font-bold">
                      {project.name}
                    </h2>
                  </div>
                  <div className="text-pobeda-gold text-sm font-bold uppercase tracking-widest">
                    {project.type}
                  </div>
                </div>

                {/* Project Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Project Info */}
                  <div className="lg:col-span-1 space-y-8">
                    <div>
                      <div className="text-pobeda-gold text-xs font-bold uppercase tracking-widest mb-3">
                        {t.portfolio.workTypes}
                      </div>
                      <div className="text-white text-base leading-relaxed">
                        {workDescription}
                      </div>
                    </div>
                    
                    <div className="h-px bg-pobeda-gold/30"></div>
                    
                    <div>
                      <div className="text-pobeda-gold text-xs font-bold uppercase tracking-widest mb-3">
                        {t.portfolio.duration}
                      </div>
                      <div className="text-white text-lg font-medium">
                        {project.duration}
                      </div>
                    </div>
                    
                    <div className="h-px bg-pobeda-gold/30"></div>
                    
                    <div>
                      <div className="text-pobeda-gold text-xs font-bold uppercase tracking-widest mb-3">
                        {t.portfolio.area}
                      </div>
                      <div className="text-white text-lg font-medium">
                        {project.area}
                      </div>
                    </div>
                    
                    <div className="h-px bg-pobeda-gold/30"></div>
                    
                    <div>
                      <div className="text-pobeda-gold text-xs font-bold uppercase tracking-widest mb-3">
                        {lang === 'en' ? 'Location' : 'Местоположение'}
                      </div>
                      <div className="text-white text-lg font-medium">
                        {project.location}
                      </div>
                    </div>
                  </div>

                  {/* Project Images */}
                  <div className="lg:col-span-2">
                    <div className={`grid ${getImageGridClass(projectImages.length)} gap-4`}>
                      {projectImages.map((imageUrl, idx) => (
                        <div
                          key={idx}
                          className="group relative aspect-square overflow-hidden bg-pobeda-gray rounded-lg"
                        >
                          <img
                            src={imageUrl}
                            alt={`${project.name} - Image ${idx + 1}`}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Back to Top Button */}
      <div className="bg-pobeda-dark py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-pobeda-gold hover:text-yellow-500 transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t.portfolio.backToHome}
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
