import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Top from './Top';
import Create from './Create';
import PhotoList from './PhotoList';
import '../style/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/'><PhotoList /></Route>
      </div>
    </Router>
  );
}

export default App;
