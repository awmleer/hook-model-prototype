import React from 'react'
import {useModel} from './library'
import {SelectModelDemo} from './SelectModelDemo'
import WithModelDemo from './WithModelDemo'
import {DepsDemo} from './DepsDemo'
import {useCounter} from './model/counter'

const App: React.FC = () => {
  const counter = useModel<ReturnType<typeof useCounter>>('counter')
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
      <hr/>
      <DepsDemo/>
    </div>
  );
}

export default App;
