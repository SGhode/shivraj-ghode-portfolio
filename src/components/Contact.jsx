import { useState } from 'react';
import Button from './Button';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
const WHATSAPP_MESSAGE = encodeURIComponent('Hi Shivraj, I saw your portfolio and wanted to connect');
const WHATSAPP_URL = `https://wa.me/917028792266?text=${WHATSAPP_MESSAGE}`;

/**
 * Contact section: form submits to Formspree and reports the submission state.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORMSPREE_FORM_ID) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="section-title text-center mb-4">
        Contact
      </h2>
      <p className="section-subtitle text-center mx-auto mb-10">
        Have a project in mind or want to say hi? Send me a message.
      </p>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
              placeholder="Your message..."
            />
          </div>
          {status === 'success' && (
            <p className="text-green-600 dark:text-green-400 font-medium">
              Thanks! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 dark:text-red-400 font-medium">
              Unable to send your message right now. Please try again later or email me at ghodeshivraj2@gmail.com.
            </p>
          )}
          <Button
            type="submit"
            variant="primary"
            className="w-full sm:w-auto"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </Button>
        </form>
        <aside className="lg:pt-1" aria-label="Alternative contact options">
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Prefer a quick chat?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
              Connect directly through WhatsApp or email.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors"
            >
              <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold" aria-hidden="true">W</span>
              Chat on WhatsApp
            </a>
            <a
              href="mailto:ghodeshivraj2@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            >
              <span aria-hidden="true">@</span>
              Email me directly
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
