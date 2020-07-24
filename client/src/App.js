import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  callServer = () => {
    fetch("http://localhost:9000/test")
      .then((res) => res.text())
      .then((res) => this.setState({ data: res }));
  };

  componentDidMount() {
    this.callServer();
  }
  render() {
    const { data } = this.state;
    return <div>{data}</div>;
  }
}

export default App;
