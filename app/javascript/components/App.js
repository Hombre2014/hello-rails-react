import React from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

import configureStore from '../redux/configureStore';
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<Home />} />
            <Route path="/hello" element={<Greeting greetingMessage = 'Friend' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
