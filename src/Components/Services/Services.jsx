import React from 'react';
import { Icon } from '@iconify/react';
import SectionHeading from '../SectionHeading/SectionHeading';

const Services = ({ data }) => {
  return (
    <section id="services" className="st-gray-bg">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title={data.heading} subTitle={data.headingSub} />
      <div className="container">
        <div className="row">
          {data.items.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="st-iconbox st-style1">
                <div className={`st-iconbox-icon st-${item.bg}-box`}>
                  <Icon icon={item.icon} />
                </div>
                <h2 className="st-iconbox-title">{item.title}</h2>
                <div className="st-iconbox-text">{item.text}</div>
              </div>
              <div className="st-height-b30 st-height-lg-b30" />
            </div>
          ))}
        </div>
      </div>
      <div className="st-height-b90 st-height-lg-b50" />
    </section>
  );
};

export default Services;
