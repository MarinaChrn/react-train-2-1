import { Component } from "react";
import "./App.css";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  getTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  getPositivePercentage = () => {
    return this.state.good
      ? ((100 * this.state.good) / this.getTotal()).toFixed(2)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title=" ">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.getTotal() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.getTotal()}
            positivePercentage={Number(this.getPositivePercentage())}
          />
        ) : (
          <Notification />
        )}
      </Section>
    );
  }
}

export default App;
