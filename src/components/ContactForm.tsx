import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

interface ContactFormProps {
  dark?: boolean;
}

export default function ContactForm({ dark = true }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organisation: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      organisation: '',
      service: '',
      message: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        'EmailJS configuration missing. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
      );
      return;
    }

    setIsLoading(true);

    try {
      // Common template parameters mapped for flexibility in EmailJS templates
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        reply_to: formData.email,
        organisation: formData.organisation,
        service: formData.service,
        message: formData.message || 'N/A',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitted(true);
    } catch (err: unknown) {
      console.error('EmailJS error:', err);
      const text =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text: string }).text)
          : err instanceof Error
            ? err.message
            : 'Failed to send your message. Please try again or reach out to us directly.';
      setErrorMessage(text);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`p-12 border ${
          dark ? 'border-white/20 bg-white/5' : 'border-black/10 bg-black/[0.03]'
        } flex flex-col items-center justify-center min-h-[400px] text-center space-y-4`}
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className={`font-display text-2xl ${dark ? 'text-white' : 'text-black'}`}>
          Thank you!
        </h3>
        <p className={`max-w-md ${dark ? 'text-white/70' : 'text-black/60'}`}>
          Your request has been sent successfully. We will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className={`mt-4 text-xs tracking-wider uppercase underline underline-offset-4 ${
            dark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
          } transition-colors`}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses = `w-full bg-transparent border-b ${
    dark
      ? 'border-white/25 text-white placeholder:text-white/30 focus:border-white'
      : 'border-black/25 text-black placeholder:text-black/30 focus:border-near-black'
  } py-3 font-body text-base outline-none transition-colors`;
  const labelClasses = `section-label block mb-2 ${dark ? 'text-white/50' : 'text-black/45'}`;

  const serviceOptions = [
    'Frameworks & Courses',
    'Faculty Enrichment',
    'Research & Evaluation',
    'Strategic Advisory',
    'Multiple Services',
    'Other',
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 md:p-12 border ${
        dark ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'
      }`}
    >
      <div className="space-y-6">
        {errorMessage && (
          <div
            className={`p-4 border text-sm ${
              dark
                ? 'border-red-500/30 bg-red-500/10 text-red-300'
                : 'border-red-500/40 bg-red-50 text-red-700'
            }`}
          >
            {errorMessage}
          </div>
        )}

        <div>
          <label className={labelClasses}>Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className={labelClasses}>Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your phone number"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className={labelClasses}>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your email address"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className={labelClasses}>Organisation *</label>
          <input
            type="text"
            name="organisation"
            required
            value={formData.organisation}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your organisation"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className={labelClasses}>Service Interest *</label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
            disabled={isLoading}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="text-black">
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses}>Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us about your project"
            disabled={isLoading}
          />
        </div>
        <Button
          text={isLoading ? 'Sending...' : 'Send Request'}
          variant="primary"
          type="submit"
          disabled={isLoading}
          className="w-full mt-4"
        />
      </div>
    </form>
  );
}
