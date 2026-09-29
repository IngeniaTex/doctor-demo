import { Icon } from '@iconify/react';
import React from 'react';

const Social = ({ data }) => {
  return (
    <ul className="st-social-btn st-style1 st-mp0">
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
