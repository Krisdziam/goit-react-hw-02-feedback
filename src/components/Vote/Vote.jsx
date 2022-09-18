import React, { Component } from 'react';
import Buttons from './Buttons';

class Vote extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotal() {
    const { good, neutral,bad } = this.state;
    return good + neutral + bad ;
}
countPositivvePercentage() {
    const total = this.countTotal();
    if (!total) {
        return 0;
    }
   
    const result = (this.state.good / total) * 100;
    console.log(result)
    return Number(result.toFixed(2));
}
  leaveVote = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal()
    const positiveFeedback = this.countPositivvePercentage()
    return (
      <>
        <h1>Please, leave feedback</h1>
        <Buttons leaveVote={this.leaveVote} />
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positiveFeedback}%</li>
        </ul>
      </>
    );
  }
}

export default Vote;
