import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

class GroupedButtons extends React.Component {
  state = { counter: 1 };

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        {
          <Button
            onClick={this.handleDecrement}
            disabled={this.state.counter === 1}
          >
            -
          </Button>
        }
        {displayCounter && <Button disabled>{this.state.counter}</Button>}
        <Button onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
