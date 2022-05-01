import React from 'react';
import BackwardCounter from './components/counter/BackwardCounter';
import ForwardCounter from './components/counter/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
