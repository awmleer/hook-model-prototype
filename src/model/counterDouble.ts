import {useModel} from '../library'

export function useCounterDouble() {
  const counter = useModel('counter')
  return {
    ...counter,
    count: counter.count * 2,
  }
}
