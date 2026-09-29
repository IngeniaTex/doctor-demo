import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';

const Hero = ({ data }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className={'slick-arrow-left slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')} aria-hidden="true">
      <Icon icon="fa-solid:angle-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div {...props} className={'slick-arrow-right slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')} aria-hidden="true">
      <Icon icon="fa-solid:angle-right" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <Slider {...settings} className="st-slider-style1 st-slider-animation1">
      {data.map((slide, index) => (
        <div className="st-hero st-style1 st-size1" key={index} id="home">
          <div className="st-hero-bg st-dynamic-bg st-bg" style={{ backgroundImage: `url(${slide.bgImg})` }} />
          <div className="container">
            <div className="st-hero-text">
              <h1 className="st-hero-title">{parser(slide.title)}</h1>
              <div className="st-hero-subtitle">{parser(slide.subTitle)}</div>
              <div className="st-hero-btn-group">
                <ScrollLink to="appointment" className="st-btn st-style1 st-size-medium st-color1 st-smooth-move">
                  Agendar cita
                </ScrollLink>
                <ScrollLink to="about" className="st-btn st-style1 st-size-medium st-color3 st-smooth-move">
                  Conóceme
                </ScrollLink>
              </div>
              <div className="st-height-b15 st-height-lg-b15" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
