import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsLi } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatisticsLi>Good: {good}</StatisticsLi>
      <StatisticsLi>Neutral: {neutral}</StatisticsLi>
      <StatisticsLi>Bad: {bad}</StatisticsLi>
      <StatisticsLi>Total: {total}</StatisticsLi>
      <StatisticsLi>Positive feedback: {positivePercentage}%</StatisticsLi>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
