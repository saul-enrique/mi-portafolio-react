import React, { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { texts } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage(texts.contact.validationError);
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xovngqno', { // <-- Tu URL ya está aquí
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatusMessage(texts.contact.successMessage);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage(texts.contact.errorMessage);
      }
    } catch (error) {
      console.error("Failed to send submission", error);
      setStatusMessage(texts.contact.errorMessage);
    } finally {
        setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"
        dangerouslySetInnerHTML={{ __html: texts.contact.title }}
      />
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">{texts.contact.namePlaceholder}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={texts.contact.namePlaceholder}
              className="w-full bg-[#16102c] border border-purple-900/50 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
              required
              aria-label={texts.contact.namePlaceholder}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">{texts.contact.emailPlaceholder}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={texts.contact.emailPlaceholder}
              className="w-full bg-[#16102c] border border-purple-900/50 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
              required
              aria-label={texts.contact.emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">{texts.contact.messagePlaceholder}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={texts.contact.messagePlaceholder}
              rows={5}
              className="w-full bg-[#16102c] border border-purple-900/50 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow resize-none"
              required
              aria-label={texts.contact.messagePlaceholder}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-md hover:opacity-90 transition-opacity">
              {texts.contact.submitButton}
            </button>
          </div>
        </form>
        {statusMessage && (
          <p className="text-center mt-6 text-gradient font-semibold" role="alert">
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;