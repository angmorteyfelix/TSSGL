import React from 'react';
import { companyData } from '../data';

const formatWhatsAppNumber = (phone) => {
  const digits = phone.replace(/\D/g, '');

  if (!digits) return '';
  if (digits.startsWith('233')) return digits;
  if (digits.startsWith('0')) return `233${digits.slice(1)}`;

  return digits;
};

const WhatsAppButton = () => {
  const phone = formatWhatsAppNumber(companyData.contact.ops247 || companyData.contact.phone);
  const message = encodeURIComponent('Hello TSSGL, I would like to inquire about your services.');
  const href = `https://wa.me/${phone}?text=${message}`;

  if (!phone) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TSSGL on WhatsApp"
      className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-[1.02] hover:bg-green-700"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2.5A9.53 9.53 0 0 0 2.51 12.03c0 1.67.44 3.3 1.27 4.73L2.5 21.5l4.88-1.28a9.54 9.54 0 0 0 4.66 1.2h.01a9.53 9.53 0 0 0 9.53-9.52A9.53 9.53 0 0 0 12.04 2.5Zm5.03 13.14c-.22.62-.98 1.13-1.63 1.28-.42.08-.95.15-2.73-.58-2.31-.89-3.81-3.09-3.93-3.24-.12-.14-.95-1.27-.95-2.42 0-1.15.6-1.72.81-1.95.22-.23.58-.33.92-.33h.02c.15 0 .29.01.41.03.14.02.26.06.37.15.12.1.46.45.52.89.06.44.2 1.01.18 1.08-.02.07-.03.14-.12.22-.1.08-.18.14-.36.23-.18.1-.38.2-.54.34-.16.14-.32.28-.46.42-.15.15-.31.32-.13.62.18.3.81 1.34 1.74 2.16.95.82 2.16 1.34 2.46 1.49.3.16.47.13.64-.08.17-.22.73-.86.93-1.15.2-.29.4-.24.67-.14.27.1 1.71.81 2.01.95.3.14.5.21.57.33.07.12.07.69-.15 1.31Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
