import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import Social from '../Social/Social';

const Footer = ({ brand, contact, social, footer, services }) => {
  const currentYear = new Date().getFullYear();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="st-site-footer st-sticky-footer st-dynamic-bg"
      style={{ backgroundImage: `url(${footer.bgImg})` }}
    >
      <div className="st-main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="st-footer-widget">
                <div className="st-text-field">
                  <img src={brand.logoWhite} alt={brand.name} className="st-footer-logo" />
                  <div className="st-height-b25 st-height-lg-b25" />
                  <div className="st-footer-text">{brand.tagline}</div>
                  <div className="st-height-b25 st-height-lg-b25" />
                  <Social data={social} />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="st-footer-widget">
                <h2 className="st-footer-widget-title">Enlaces</h2>
                <ul className="st-footer-widget-nav st-mp0">
                  {footer.quickLinks.map((link, index) => (
                    <li key={index}>
                      <ScrollLink to={link.to} duration={500} style={{ cursor: 'pointer' }}>
                        <Icon icon="fa:angle-right" />
                        {link.label}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="st-footer-widget">
                <h2 className="st-footer-widget-title">Servicios</h2>
                <ul className="st-footer-widget-nav st-mp0">
                  {services.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <ScrollLink to="services" duration={500} style={{ cursor: 'pointer' }}>
                        <Icon icon="fa:angle-right" />
                        {service.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="st-footer-widget">
                <h2 className="st-footer-widget-title">Contacto</h2>
                <ul className="st-footer-contact-list st-mp0">
                  <li>
                    <span className="st-footer-contact-title">Dirección:</span> {contact.address}
                  </li>
                  <li>
                    <span className="st-footer-contact-title">Email:</span> {contact.email}
                  </li>
                  <li>
                    <span className="st-footer-contact-title">Teléfono:</span> {contact.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-copyright-wrap">
        <div className="container">
          <div className="st-copyright-in">
            <div className="st-left-copyright">
              <div className="st-copyright-text">
                © {currentYear} {brand.name}. Todos los derechos reservados. Diseño por{' '}
                <a href={footer.creditUrl} target="_blank" rel="noopener noreferrer" className="st-footer-credit-link">
                  {footer.credit}
                </a>
              </div>
            </div>
            <div className="st-right-copyright">
              <div id="st-backtotop" style={{ scale: `${scrollPosition >= 100 ? '1' : '0'}` }} onClick={scrollToTop}>
                <Icon icon="fa6-solid:angle-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
