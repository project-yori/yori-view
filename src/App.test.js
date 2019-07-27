import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

// TODO: Need to figure out how to test connected component.
// Simply following https://redux.js.org/recipes/writing-tests#connected-components
// doens't work.
it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
