import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
