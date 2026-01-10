import React, { useState } from 'react';
import { Language, CalculatorFormData } from '../types';
import { CONTENT } from '../constants';
import { sendCalculationRequest } from '../services/emailService';

interface Props {
  lang: Language;
  onClose: () => void;
}

const CalculatorForm: React.FC<Props> = ({ lang, onClose }) => {
  const t = CONTENT[lang].forms;
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<CalculatorFormData>({
    squareMeters: 0,
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendCalculationRequest(formData);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ squareMeters: 0, email: '', phone: '' });
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
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <p className="text-xl text-white">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-gray-400 text-sm mb-4">{t.calcDesc}</p>
      
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">{t.sqmPlaceholder} *</label>
        <input
          required
          type="number"
          min="1"
          className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-pobeda-gold focus:outline-none focus:ring-1 focus:ring-pobeda-gold transition-colors text-lg"
          value={formData.squareMeters || ''}
          onChange={(e) => setFormData({...formData, squareMeters: parseInt(e.target.value)})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">{t.emailPlaceholder} *</label>
          <input
            required
            type="email"
            className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-pobeda-gold focus:outline-none"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">{t.phonePlaceholder} *</label>
          <input
            required
            type="tel"
            className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-pobeda-gold focus:outline-none"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 rounded hover:bg-gray-800 transition-colors"
        >
          {t.cancel}
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 px-4 bg-pobeda-gold text-black font-bold rounded hover:bg-yellow-500 transition-colors disabled:opacity-50"
        >
          {loading ? t.sending : t.submit}
        </button>
      </div>
    </form>
  );
};

export default CalculatorForm;