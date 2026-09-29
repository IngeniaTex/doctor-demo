import React from 'react';
import site from '../data/site';
import Hero from '../Components/Hero/Hero';
import Iconbox from '../Components/Iconbox/Iconbox';
import About from '../Components/About/About';
import Services from '../Components/Services/Services';
import Stats from '../Components/Stats/Stats';
import Appointment from '../Components/Appointment/Appointment';
import TestimonialSlider from '../Components/Slider/TestimonialSlider';
import Accordion from '../Components/Accordion/Accordion';
import Contact from '../Components/Contact/Contact';
import LocationInMap from '../Components/Map/LocationInMap';

const Home = () => {
  return (
    <>
      <Hero data={site.hero} />
      <Iconbox data={site.highlights} />
      <About data={site.about} contact={site.contact} />
      <Services data={site.services} />
      <Stats data={site.stats} video={site.video} />
      <Appointment data={site.appointment} brand={site.brand} />
      <TestimonialSlider data={site.testimonials} />
      <Accordion
        data={{
          title: site.faq.title,
          img: site.faq.img,
          bgImg: site.faq.bgImg,
          faqItems: site.faq.items,
        }}
      />
      <Contact contact={site.contact} schedule={site.about.schedule} />
      <LocationInMap data={site.contact.mapEmbedUrl} />
    </>
  );
};

export default Home;
