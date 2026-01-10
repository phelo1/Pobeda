import React, { useState } from 'react';
import { Language, QuoteFormData } from '../types';
import { CONTENT } from '../constants';
import { sendQuoteRequest } from '../services/emailService';

interface Props {
  lang: Language;
  onClose: () => void;
  isVisitOnly?: boolean;
}

const QuoteForm: React.FC<Props> = ({ lang, onClose, isVisitOnly = false }) => {
  const t = CONTENT[lang].forms;
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertySize: '',
    propertyType: 'Apartment',
    workRequired: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendQuoteRequest(formData);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-pobeda-gold text-5xl mb-4">✓</div>
        <p className="text-xl text-white">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-pobeda-gold/10 border-l-4 border-pobeda-gold p-3 mb-4">
        <p className="text-pobeda-gold text-sm font-bold uppercase">{t.freeVisitNotice}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.nameLabel} *</label>
          <input
            required
            type="text"
            className="w-full bg-black/40 border border-gray-800 rounded p-3 text-white focus:border-pobeda-gold outline-none transition-colors"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.phoneLabel} *</label>
          <input
            required
            type="tel"
            className="w-full bg-black/40 border border-gray-800 rounded p-3 text-white focus:border-pobeda-gold outline-none"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.emailLabel}</label>
        <input
          type="email"
          className="w-full bg-black/40 border border-gray-800 rounded p-3 text-white focus:border-pobeda-gold outline-none"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.sizeLabel}</label>
          <input
            type="text"
            className="w-full bg-black/40 border border-gray-800 rounded p-3 text-white focus:border-pobeda-gold outline-none"
            value={formData.propertySize}
            onChange={(e) => setFormData({...formData, propertySize: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.typeLabel}</label>
          <select
            className="w-full bg-black/40 border border-gray-800 rounded p-3 text-white focus:border-pobeda-gold outline-none"
            value={formData.propertyType}
            onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
          >
            <option value="Apartment">{lang === 'en' ? 'Apartment' : 'Квартира'}</option>
            <option value="Villa">{lang === 'en' ? 'Villa' : 'Вилла'}</option>
            <option value="Commercial">{lang === 'en' ? 'Commercial' : 'Коммерческая'}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.locationLabel}</label>
        <input
          placeholder="e.g. Palm Jumeirah, Business Bay"
          type="text"
          className="w-full bg-black/40 border border-gray-800 rounded p-3 text-white focus:border-pobeda-gold outline-none"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
        />
      </div>

      {!isVisitOnly && (
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.workLabel}</label>
          <textarea
            rows={2}
            className="w-full bg-black/40 border border-gray-800 rounded p-3 text-white focus:border-pobeda-gold outline-none"
            value={formData.workRequired}
            onChange={(e) => setFormData({...formData, workRequired: e.target.value})}
          />
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
        >
          {t.cancel}
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 px-4 bg-pobeda-gold text-black text-xs font-bold uppercase tracking-widest hover:bg-yellow-500 transition-colors disabled:opacity-50"
        >
          {loading ? t.sending : t.submit}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;