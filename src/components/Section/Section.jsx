import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
