import React, {memo, useState} from 'react'
import {selectModel} from '../library'

export const SelectModelDemo = memo(() => {
  const counter = selectModel('counterDouble') as any // FIXME: 基于字符串的model获取很难做ts的类型推断

  const [, setState] = useState({})

  return (
    <div>
      <h2>Select Model</h2>
      value retrieved by `selectModel`: {counter.count}
      <button onClick={() => {setState({})}}>Update</button>
    </div>
  )
})
