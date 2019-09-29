import React from 'react';
import {setModel, useModel} from './library'
import {useCounter} from './model/counter'

setModel('counter', useCounter)

const App: React.FC = () => {
  const counter = useModel('counter')
  return (
    <div className="App">
      <h1>
        {counter.count}
      </h1>
      <button onClick={counter.increment}>increment</button>
      <button onClick={counter.decrement}>increment</button>
    </div>
  );
}

export default App;
