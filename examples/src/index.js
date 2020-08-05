import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/styles/main.scss';
import * as Examples from './components';

const App = () => {
  return (
    <>
      <h1>Craft UI Components</h1>
      <hr />
      <Examples.Modal />
      <Examples.SnackBar />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
