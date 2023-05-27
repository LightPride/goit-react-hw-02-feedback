import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {() => total(good, neutral, bad)}</li>
      <li>Positive feedback: {() => positivePercentage(good, neutral, bad)}</li>
    </ul>
  );
};
