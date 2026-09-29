import React from 'react';
import parse from 'html-react-parser';
import SectionHeading from '../SectionHeading/SectionHeading';

const About = ({ data, contact }) => {
  const { heading, headingSub, title, text, avatar, schedule } = data;

  return (
    <section className="st-about-wrap" id="about">
      <div className="st-shape-bg">
        <img src="/shape/about-bg-shape.svg" alt="" />
      </div>
      <div className="st-height-b120 st-height-lg-b50" />
      <SectionHeading title={heading} subTitle={headingSub} />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className="st-text-block-title">{title}</h2>
                  <div className="st-height-b20 st-height-lg-b20" />
                  <div className="st-text-block-text">
                    <p>{parse(text)}</p>
                  </div>
                  <div className="st-height-b25 st-height-lg-b25" />
                  <div className="st-text-block-avatar">
                    <div className="st-avatar-img">
                      <img src={avatar.img} alt={avatar.name} />
                    </div>
                    <div className="st-avatar-info">
                      <h4 className="st-avatar-name">{avatar.name}</h4>
                      <div className="st-avatar-designation">{avatar.designation}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30" />
          </div>
          <div className="col-lg-5">
            <div className="st-shedule-wrap">
              <div className="st-shedule">
                <h2 className="st-shedule-title">Horario de consulta</h2>
                <ul className="st-shedule-list">
                  {schedule.map((item, index) => (
                    <li key={index}>
                      <div className="st-shedule-left">{item.day}</div>
                      <div className="st-shedule-right">{item.hours}</div>
                    </li>
                  ))}
                </ul>
                <div className="st-height-b25 st-height-lg-b25" />
                <div className="st-call st-style1">
                  <div className="st-call-icon">
                    <img src="/icons/icon4.svg" alt="" />
                  </div>
                  <div className="st-call-text">
                    <div className="st-call-title">Llama ahora</div>
                    <div className="st-call-number">
                      <a href={`tel:${contact.phone.replace(/\s/g, '')}`} style={{ color: 'inherit' }}>
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
