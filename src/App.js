import React, { Component } from 'react';
import styled from "styled-components";
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

const Header = styled.div`
  padding: 2vh;
`;

const Root = () => {
  return (
    <p>This is Root page!</p>
  );
}

const About = () => {
  return (
    <p>This is About page!</p>
  );
}

const Contents = (props) => {
    return (
      <div className="content">
        <Switch>
          {[
            {
              path: '/',
              component: Root,
            },
            {
              path: '/about',
              component: About,
            },
          ].map((v,i) => {
            return <Route key={i} exact path={v.path} component={v.component} />;
          })}
        </Switch>
        <button onClick={props.onClickButton}>get starting!</button>
      </div>
    );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleState: 'not start yet',
    };
  }

  reactStart = value => {
    this.setState({ sampleState: 'started!' });
  };
  render() {
    return (
      <div className="App">
        <Header className="App-header">

          <h1 className="App-title">React Starter</h1>
          <h2>{this.state.sampleState}</h2>
        </Header>
        <Contents onClickButton={this.reactStart} />
      </div>
    );
  }
}

export default App;
