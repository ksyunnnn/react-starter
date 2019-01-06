import React, { Component } from 'react';

class HogeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({data: [1,2]});
  }
  render() {
    return (
      <div>
        {data.map((v,i)=>(<li key={i}>{v}</li>))}
      </div>
    );
  }
}

export default App;
