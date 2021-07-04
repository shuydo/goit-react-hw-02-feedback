import React from "react";
import Controls from "./Controls/Controls";

class Counter extends React.Component {
  static defaultProps = {
    initValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initValue,
  };

  handlerIncr = () => {
    this.setState((pState) => ({ value: pState.value + 1 }));
  };

  handlerDecr = () => {
    this.setState((pState) => ({ value: pState.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls onIncr={this.handlerIncr} onDecr={this.handlerDecr} />
      </div>
    );
  }
}

export default Counter;
