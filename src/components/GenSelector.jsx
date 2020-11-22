import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import React from "react";

const GenSelector = (props) => {
  return (
    <ButtonGroup>
      <Button
        onClick={() => props.onGenChange(props.gen6)}
        active={props.currentGen === props.gen6}
      >
        Gen 6 +
      </Button>
      <Button
        onClick={() => props.onGenChange(props.gen2)}
        active={props.currentGen === props.gen2}
      >
        Gen 2-5
      </Button>
      <Button
        onClick={() => props.onGenChange(props.gen1)}
        active={props.currentGen === props.gen1}
      >
        Gen 1
      </Button>
    </ButtonGroup>
  );
};

export default GenSelector;
