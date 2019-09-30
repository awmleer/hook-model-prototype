import React, {memo, useRef} from 'react'
import {useModel} from './library'
import {useCounter} from './model/counter'

export const DepsDemo = memo(() => {
  const counter = useModel<ReturnType<typeof useCounter>>('counter', (counter) => [Math.floor(counter.count / 10)])
  const updateCountRef = useRef(0)
  updateCountRef.current++
  return (
    <div>
      This component has been rendered {updateCountRef.current} times.
      <br/>
      Counter model: {counter.count}
    </div>
  )
})
