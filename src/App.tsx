import React, {memo} from 'react'
import {selectModel, setModel, useModel} from './library'
import {useCounter} from './model/counter'
import {useCounterDouble} from './model/counterDouble'

setModel('counter', useCounter)
setModel('counterDouble', useCounterDouble)

const SelectModelDemo = memo(() => {
  const counter = selectModel('counterDouble') as any // FIXME: 基于字符串的model获取很难做ts的类型推断
  return (
    <div>
      value retrieved by `selectModel`: {counter.count}
    </div>
  )
})

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
    </div>
  );
}

export default App;
