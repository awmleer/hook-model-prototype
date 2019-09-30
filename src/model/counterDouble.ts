import {useModel} from '../library'
import {useCounter} from './counter'

export function useCounterDouble() {
  const counter = useModel<ReturnType<typeof useCounter>>('counter')
  return {
    ...counter,
    count: counter.count * 2,
  }
}
