import React from 'react';
import { Icon } from '@iconify/react';

export const getWhatsAppUrl = (contact) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

const WhatsAppButton = ({ contact, label = 'WhatsApp', className = '', onClick }) => (
  <a
    href={getWhatsAppUrl(contact)}
    target="_blank"
    rel="noopener noreferrer"
    className={`st-whatsapp-btn ${className}`}
    aria-label={`${label} (se abre en una nueva pestaña)`}
    onClick={onClick}
  >
    <Icon icon="ic:baseline-whatsapp" className="st-whatsapp-btn-icon" />
    <span>{label}</span>
  </a>
);

export default WhatsAppButton;
