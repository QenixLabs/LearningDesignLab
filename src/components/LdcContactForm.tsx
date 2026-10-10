import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, Globe, Send, AlertCircle, Loader2 } from 'lucide-react';

interface LdcContactFormProps {
  className?: string;
}

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', label: 'India (+91)' },
  { code: '+1', country: 'US', label: 'US/Canada (+1)' },
  { code: '+44', country: 'GB', label: 'UK (+44)' },
  { code: '+234', country: 'NG', label: 'Nigeria (+234)' },
  { code: '+92', country: 'PK', label: 'Pakistan (+92)' },
  { code: '+20', country: 'EG', label: 'Egypt (+20)' },
  { code: '+971', country: 'AE', label: 'UAE (+971)' },
  { code: '+81', country: 'JP', label: 'Japan (+81)' },
  { code: '+65', country: 'SG', label: 'Singapore (+65)' },
  { code: '+61', country: 'AU', label: 'Australia (+61)' },
  { code: '+49', country: 'DE', label: 'Germany (+49)' },
  { code: '+254', country: 'KE', label: 'Kenya (+254)' },
  { code: '+27', country: 'ZA', label: 'South Africa (+27)' },
  { code: '+62', country: 'ID', label: 'Indonesia (+62)' },
  { code: '+55', country: 'BR', label: 'Brazil (+55)' },
  { code: '+33', country: 'FR', label: 'France (+33)' },
  { code: '+34', country: 'ES', label: 'Spain (+34)' },
  { code: '+880', country: 'BD', label: 'Bangladesh (+880)' },
  { code: '+63', country: 'PH', label: 'Philippines (+63)' },
];

export default function LdcContactForm({ className = '' }: LdcContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+91',
    phone: '',
    email: '',
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
      firstName: '',
      lastName: '',
      countryCode: '+91',
      phone: '',
      email: '',
      message: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    // Specifically prioritize the dedicated LDC community template ID, with graceful fallback
    const templateId =
      import.meta.env.VITE_EMAILJS_COMMUNITY_TEMPLATE_ID ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        'EmailJS configuration missing. Please verify VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_COMMUNITY_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
      );
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        phone: `${formData.countryCode} ${formData.phone}`.trim(),
        phone_number: `${formData.countryCode} ${formData.phone}`.trim(),
        email: formData.email,
        reply_to: formData.email,
        message: formData.message,
        source: 'Learning Designers Community (LDC)',
        community: 'Learning Designers Community (LDC)',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitted(true);
    } catch (err: unknown) {
      console.error('EmailJS LDC Community error:', err);
      const text =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text: string }).text)
          : err instanceof Error
            ? err.message
            : 'Failed to send your message. Please try again or reach out to us on our community channels.';
      setErrorMessage(text);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl p-10 md:p-14 border border-pink/30 bg-gradient-to-br from-[#2a0832] via-[#1b0522] to-[#120217] text-white flex flex-col items-center justify-center min-h-[440px] text-center shadow-2xl shadow-pink/10 ${className}`}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-14 h-14 rounded-full bg-pink/20 border border-pink/40 text-pink flex items-center justify-center mb-5 animate-in zoom-in-75 duration-300">
          <Check className="w-7 h-7 stroke-[2.5]" />
        </div>
        <span className="font-body text-xs uppercase tracking-[0.2em] text-pink-light mb-2">
          Learning Designers Community
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-white font-semibold mb-3">
          Welcome to LDC!
        </h3>
        <p className="max-w-md text-white/70 font-body text-sm leading-relaxed mb-6">
          Thank you for reaching out to the Learning Designers Community. Your details have been submitted and our community team will be in touch with you shortly.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-[#A60573]/30 bg-gradient-to-b from-[#25072e] via-[#1a0422] to-[#130219] p-6 sm:p-10 md:p-12 shadow-2xl shadow-pink/15 ${className}`}
    >
      {/* Decorative LDC ambient glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-pink/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#A60573]/20 blur-3xl pointer-events-none" />

      {/* World Map Background Watermark from PDF Page 5 */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%23ffffff' d='M150 120 C180 110 240 130 260 170 C280 210 240 260 210 280 C180 300 150 350 160 390 C140 370 120 320 120 280 C120 240 110 180 150 120 Z M420 100 C470 90 530 110 560 160 C580 200 560 250 540 290 C510 350 490 410 460 450 C440 420 440 360 430 310 C420 260 390 200 400 150 C400 120 410 110 420 100 Z M650 90 C720 80 820 100 870 160 C920 220 900 280 860 320 C820 360 760 380 720 350 C680 320 660 280 650 230 C640 180 620 130 650 90 Z'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Form header branding */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-body tracking-[0.08em] uppercase bg-pink/20 text-pink-light border border-pink/30">
            <Globe className="w-3 h-3 text-pink-light" />
            LDC Community Connect
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
          Stay Connected
        </h3>
        <p className="font-body text-xs md:text-sm text-white/60 mb-8 max-w-lg">
          Connect with the Learning Designers Community. Reach out to get involved, share an initiative, or collaborate with educators across the Global South.
        </p>

        {errorMessage && (
          <div className="mb-6 p-4 rounded-lg border border-red-500/40 bg-red-500/10 text-red-200 text-xs md:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>{errorMessage}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-body text-xs font-medium text-white/70 mb-2">
                First name <span className="text-pink">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                disabled={isLoading}
                className="w-full bg-white/[0.04] border-b-2 border-white/20 hover:border-pink/50 focus:border-pink text-white placeholder:text-white/30 py-3 px-1 font-body text-sm outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block font-body text-xs font-medium text-white/70 mb-2">
                Last name <span className="text-pink">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                disabled={isLoading}
                className="w-full bg-white/[0.04] border-b-2 border-white/20 hover:border-pink/50 focus:border-pink text-white placeholder:text-white/30 py-3 px-1 font-body text-sm outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Phone with Country Code */}
          <div>
            <label className="block font-body text-xs font-medium text-white/70 mb-2">
              Phone <span className="text-pink">*</span>
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                disabled={isLoading}
                className="w-32 bg-[#2d0938] border-b-2 border-white/20 focus:border-pink text-white py-3 px-2 font-body text-sm outline-none transition-colors cursor-pointer"
                title="Select country code"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#1f0627] text-white">
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                disabled={isLoading}
                className="flex-1 bg-white/[0.04] border-b-2 border-white/20 hover:border-pink/50 focus:border-pink text-white placeholder:text-white/30 py-3 px-1 font-body text-sm outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-body text-xs font-medium text-white/70 mb-2">
              Email <span className="text-pink">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              disabled={isLoading}
              className="w-full bg-white/[0.04] border-b-2 border-white/20 hover:border-pink/50 focus:border-pink text-white placeholder:text-white/30 py-3 px-1 font-body text-sm outline-none transition-all duration-200"
            />
          </div>

          {/* Write a message */}
          <div>
            <label className="block font-body text-xs font-medium text-white/70 mb-2">
              Write a message <span className="text-pink">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what brings you to LDC or how you'd like to collaborate..."
              disabled={isLoading}
              className="w-full bg-white/[0.04] border-b-2 border-white/20 hover:border-pink/50 focus:border-pink text-white placeholder:text-white/30 py-3 px-1 font-body text-sm outline-none transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-8 rounded-full font-body text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-pink via-[#c4188c] to-[#9b0e6e] hover:opacity-95 active:scale-[0.99] transition-all duration-200 shadow-lg shadow-pink/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Submitting to LDC...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit</span>
                </>
              )}
            </button>
            <p className="mt-3 text-center text-[11px] font-body text-white/40">
              This form directly reaches the Learning Designers Community (LDC) leadership team.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
