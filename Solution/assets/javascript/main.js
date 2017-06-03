import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import Container from './container/container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bucketItems from './reducer';

const store = createStore(bucketItems);

const Main = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Container />
        </div>
      </Provider>
    );
  }
});

ReactDOM.render(<Main />,  document.getElementById("main"));
