import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";

class Statistics extends React.Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  goodIncr = () => {
    this.setState((pState) => ({ goodValue: pState.goodValue + 1 }));
  };

  neutralIncr = () => {
    this.setState((pState) => ({ neutralValue: pState.neutralValue + 1 }));
  };

  badIncr = () => {
    this.setState((pState) => ({ badValue: pState.badValue + 1 }));
  };

  render() {
    return (
      <div>
        <Button name="Good" callback={this.goodIncr} />
        <Button name="Neutral" callback={this.neutralIncr} />
        <Button name="Bud" callback={this.badIncr} />

        <Title text="Statistics" />
        <p>Good: {this.state.goodValue}</p>
        <p>Neutral: {this.state.neutralValue}</p>
        <p>Bad: {this.state.badValue}</p>
      </div>
    );
  }
}

export default Statistics;
