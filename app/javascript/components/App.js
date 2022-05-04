import React from 'react';
// import PropTypes from 'prop-types';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={<Home />} />
          <Route path="/hello" element={<Greeting greetingMessage = 'Friend' />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
