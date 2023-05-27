import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };
  countTotalStatistics = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };
  countPositiveStatistics = ({ good, neutral, bad }) => {
    return Math.round((good * 100) / this.countTotalStatistics(this.state));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics ">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalStatistics}
            positivePercentage={this.countPositiveStatistics}
          />
        </Section>
      </>
    );
  }
}
export default App;
