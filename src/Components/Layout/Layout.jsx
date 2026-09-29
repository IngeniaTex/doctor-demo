import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import site from '../../data/site';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <>
      <Header brand={site.brand} contact={site.contact} nav={site.nav} />
      <Outlet />
      <Footer
        brand={site.brand}
        contact={site.contact}
        social={site.social}
        footer={site.footer}
        services={site.services.items}
      />
    </>
  );
};

export default Layout;
