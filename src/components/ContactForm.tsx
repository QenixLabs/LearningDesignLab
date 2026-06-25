import { useState } from 'react';
import Button from './Button';

interface ContactFormProps {
  dark?: boolean;
}

export default function ContactForm({ dark = true }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organisation: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`p-12 border ${dark ? 'border-pink/20 bg-pink/5' : 'border-pink/20 bg-pink/5'} flex flex-col items-center justify-center min-h-[400px]`}>
        <h3 className={`font-display text-2xl mb-3 ${dark ? 'text-white' : 'text-black'}`}>
          Thank you!
        </h3>
        <p className={`text-center ${dark ? 'text-white/70' : 'text-black/60'}`}>
          We've received your message and will get back to you within 48 hours.
        </p>
      </div>
    );
  }

  const inputClasses = `w-full bg-transparent border-b ${dark ? 'border-white/25 text-white placeholder:text-white/30 focus:border-pink' : 'border-black/25 text-black placeholder:text-black/30 focus:border-pink'} py-3 font-body text-base outline-none transition-colors`;
  const labelClasses = `section-label block mb-2 ${dark ? 'text-pink' : 'text-pink'}`;

  const serviceOptions = [
    'Frameworks & Courses',
    'Faculty Enrichment',
    'Research & Evaluation',
    'Strategic Advisory',
    'Multiple Services',
    'Other',
  ];

  return (
    <form onSubmit={handleSubmit} className={`p-6 md:p-12 border ${dark ? 'border-pink/15 bg-pink/[0.03]' : 'border-pink/15 bg-pink/[0.03]'}`}>
      <div className="space-y-6">
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
          />
        </div>
        <div>
          <label className={labelClasses}>Service Interest</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
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
          <label className={labelClasses}>Message *</label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us about your project"
          />
        </div>
        <Button
          text="Send Request"
          variant="primary"
          type="submit"
          className="w-full mt-4"
        />
      </div>
    </form>
  );
}
