import TypeTable from "./components/TypeTable";
import GenSelector from "./components/GenSelector";
import React from "react";
import "./App.css";

import gen6 from "./data/gen6.json";
import gen2 from "./data/gen2.json";
import gen1 from "./data/gen1.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGen: gen6,
    };
  }

  handleGenChange = (newGen) => {
    this.setState({ currentGen: newGen });
  };

  render() {
    return (
      <>
        <div className="toolbar-container">
          <GenSelector
            currentGen={this.state.currentGen}
            gen6={gen6}
            gen2={gen2}
            gen1={gen1}
            onGenChange={this.handleGenChange}
          />
        </div>
        <div className="table-container">
          <TypeTable currentGen={this.state.currentGen} />
        </div>
      </>
    );
  }
}

export default App;
