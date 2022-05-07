import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }))
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback()) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  }
  
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onBtnClick}
            />
          </Section>
          <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                percentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
    );
  }
}


export default App;