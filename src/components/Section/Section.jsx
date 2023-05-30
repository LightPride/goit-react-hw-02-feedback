import React from 'react';
import PropTypes from 'prop-types';
import { SectionH } from './Section.styled';
import { SectionContainer } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <SectionH>{title}</SectionH>}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
