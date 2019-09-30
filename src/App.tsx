import React from 'react'
import {useModel} from './library'
import {useCounterDouble} from './model/counterDouble'
import {SelectModelDemo} from './SelectModelDemo'
import WithModelDemo from './WithModelDemo'

const App: React.FC = () => {
  const counter = useModel<ReturnType<typeof useCounterDouble>>('counterDouble')
  return (
    <div className="App">
      <h1>
        {counter.count}
      </h1>
      <button onClick={counter.increment}>increment</button>
      <button onClick={counter.decrement}>increment</button>
      <hr/>
      <SelectModelDemo/>
      <hr/>
      <WithModelDemo/>
    </div>
  );
}

export default App;
