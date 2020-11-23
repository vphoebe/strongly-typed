import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

const GenSelector = (props) => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Generation</InputGroup.Text>
      </InputGroup.Prepend>
      <InputGroup.Append>
        <Button
          active={props.currentGen === 6}
          onClick={() => props.onGenChange(props.gen6, 6)}
        >
          6+
        </Button>
        <Button
          active={props.currentGen === 5}
          onClick={() => props.onGenChange(props.gen2, 5)}
        >
          5
        </Button>
        <Button
          active={props.currentGen === 3}
          onClick={() => props.onGenChange(props.gen2, 3)}
        >
          3-4
        </Button>
        <Button
          active={props.currentGen === 2}
          onClick={() => props.onGenChange(props.gen2, 2)}
        >
          2
        </Button>
        <Button
          active={props.currentGen === 1}
          onClick={() => props.onGenChange(props.gen1, 1)}
        >
          1
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default GenSelector;
