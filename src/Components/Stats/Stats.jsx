import React from 'react';
import { Icon } from '@iconify/react';
import VideoBlock from '../VideoBlock/VideoBlock';

const Stats = ({ data, video }) => {
  const videoBlockData = {
    videoThumb: video.thumb,
    videoSrc: video.src,
    myVideoKey: 'statsVideo',
  };

  return (
    <section className="st-gray-bg st-shape-wrap">
      <div className="st-shape4">
        <img src="/shape/section_shape.png" alt="" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              {data.map((item, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="st-funfact st-style1 st-visable-element">
                    <div className={`st-funfact-icon st-${item.bg}-box`}>
                      <Icon icon={item.icon} />
                    </div>
                    <h2 className="st-funfact-number">{item.number}</h2>
                    <div className="st-funfact-title">{item.title}</div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b30" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-6">
            <VideoBlock data={videoBlockData} />
          </div>
        </div>
      </div>
      <div className="st-height-b90 st-height-lg-b50" />
    </section>
  );
};

export default Stats;
