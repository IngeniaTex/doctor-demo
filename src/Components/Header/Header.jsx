import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Header = ({ brand, contact, nav }) => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const headerHeight = document.querySelector('.st-sticky-header').offsetHeight + 100;
    const handleScroll = () => {
      const windowTop = window.scrollY || document.documentElement.scrollTop;
      setIsSticky(windowTop >= headerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`st-site-header st-style1 st-sticky-header ${isSticky ? 'st-sticky-active' : ''}`}>
      <div className="st-top-header">
        <div className="container">
          <div className="st-top-header-in">
            <ul className="st-top-header-list">
              <li>
                <Icon icon="fa6-regular:envelope" />
                <a href={`mailto:${contact.email}`}> {contact.email} </a>
              </li>
              <li>
                <Icon icon="fa6-solid:phone" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}> {contact.phone} </a>
              </li>
            </ul>
            <ScrollLink className="st-top-header-btn st-smooth-move" to="appointment" spy={true} duration={500}>
              Agendar cita
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <ScrollLink to="home" className="st-site-branding" duration={500} style={{ cursor: 'pointer' }}>
                <img src={brand.logo} alt={brand.name} />
              </ScrollLink>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className={`st-nav-list st-onepage-nav ${mobileToggle ? 'd-block' : 'none'}`}>
                  {nav.map((item, index) => (
                    <li key={index}>
                      <ScrollLink to={item.to} spy={true} duration={500} onClick={() => setMobileToggle(false)}>
                        {item.label}
                      </ScrollLink>
                    </li>
                  ))}
                  <li className="st-nav-cta d-lg-none">
                    <WhatsAppButton contact={contact} label="Agendar por WhatsApp" onClick={() => setMobileToggle(false)} />
                  </li>
                </ul>
                <WhatsAppButton contact={contact} label="Agendar"className="st-nav-whatsapp d-none d-lg-inline-flex" />
                <div
                  className={`st-munu-toggle ${mobileToggle ? 'st-toggle-active' : ''}`}
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
