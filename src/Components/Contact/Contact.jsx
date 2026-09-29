import React from 'react';
import { Icon } from '@iconify/react';
import SectionHeading from '../SectionHeading/SectionHeading';
import WhatsAppButton, { getWhatsAppUrl } from '../WhatsAppButton/WhatsAppButton';

const Contact = ({ contact, schedule }) => {
  const telUrl = `tel:${contact.phone.replace(/\s/g, '')}`;

  const items = [
    { icon: 'fa6-solid:location-dot', title: 'Dirección', text: contact.address, bg: 'purple' },
    { icon: 'fa6-solid:phone', title: 'Teléfono', text: contact.phone, href: telUrl, bg: 'green' },
    { icon: 'ic:baseline-whatsapp', title: 'WhatsApp', text: 'Escríbenos por WhatsApp', href: getWhatsAppUrl(contact), bg: 'whatsapp' },
    { icon: 'fa6-regular:envelope', title: 'Correo', text: contact.email, href: `mailto:${contact.email}`, bg: 'dip-blue' },
  ];

  return (
    <section id="contact">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Contacto"
        subTitle={`Estamos para ayudarte. Horario de atención: ${schedule[0].hours} de lunes a jueves, <br /> ${schedule[4].hours} viernes y ${schedule[5].hours} sábados.`}
      />
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="st-iconbox st-style1">
                <div className={`st-iconbox-icon st-${item.bg}-box`}>
                  <Icon icon={item.icon} />
                </div>
                <h2 className="st-iconbox-title">{item.title}</h2>
                <div className="st-iconbox-text">
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </div>
              </div>
              <div className="st-height-b30 st-height-lg-b30" />
            </div>
          ))}
        </div>
        <div className="st-contact-cta">
          <h3 className="st-contact-cta-title">¿Listo para empezar?</h3>
          <p className="st-contact-cta-text">Escríbenos y recibe tu cotización hoy mismo.</p>
          <div className="st-contact-cta-btns">
            <WhatsAppButton contact={contact} label="Agendar por WhatsApp" className="st-size-lg" />
            <a href={telUrl} className="st-call-btn st-size-lg">
              <Icon icon="fa6-solid:phone" />
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>
      </div>
      <div className="st-height-b90 st-height-lg-b50" />
    </section>
  );
};

export default Contact;
