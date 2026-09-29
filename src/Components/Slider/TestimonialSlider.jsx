import React from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Testimonial from '../Testimonial/Testimonial';

const TestimonialSlider = ({ data }) => {
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
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2, dots: true } },
      { breakpoint: 767, settings: { slidesToShow: 1, dots: true } },
    ],
  };

  return (
    <section id="testimonials">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title={data.heading} subTitle={data.headingSub} />
      <div className="container">
        <Slider {...settings} className="st-slider-style2">
          {data.items.map((item, index) => (
            <Testimonial {...item} key={index} />
          ))}
        </Slider>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default TestimonialSlider;
