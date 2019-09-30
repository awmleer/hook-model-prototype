import * as ReactDOM from "react-dom"
import * as React from "react"
import {ComponentType, FC, useEffect, useState} from 'react'

type ModelHook<T> = () => T

const modelMap = new Map<string, Container>()

type Subscriber<T> = (data: T) => void

class Container<T = unknown> {
  subscribers = new Set<Subscriber<T>>()
  data!: T

  notify() {
    console.log('notify', this.data)
    for (const subscriber of this.subscribers) {
      subscriber(this.data)
    }
  }
}

function Executor<T>(props: {
  hook: ModelHook<T>
  onUpdate: (data: T) => void
}) {
  const data = props.hook()
  props.onUpdate(data)
  return null
}

export function setModel<T>(key: string, model: ModelHook<T>) {
  const element = document.createElement("div")
  const container = new Container()
  modelMap.set(key, container)
  ReactDOM.render(
    <Executor onUpdate={(val) => {
      container.data = val
      container.notify()
    }} hook={model} />,
    element
  )
}

export function useModel<T = unknown>(key: string) {
  const container = modelMap.get(key) as Container<T>
  const [state, setState] = useState<T | undefined>(() => container ? container.data as T : undefined)
  useEffect(() => {
    if (!container) return
    function subscriber(val: T) {
      setState(val)
    }
    container.subscribers.add(subscriber)
    return () => {
      container.subscribers.delete(subscriber)
    }
  }, [container])
  return state!
}

export function selectModel<T = unknown>(key: string) {
  const container = modelMap.get(key) as Container<T>
  return container ? container.data as T : undefined
}

export interface WithModelProps {
  model: {
    [key: string]: unknown
  }
}

export function withModel<T = unknown>(key: string) {
  return function<P extends WithModelProps>(C: ComponentType<P>) {
    const Wrapper: FC<Omit<P, 'model'>> = function(props) {
      const componentProps: P = {
        ...props,
        model: {
          [key]: useModel(key)
        }
      } as unknown as P
      return (
        <C {...componentProps}/>
      )
    }
    Wrapper.displayName = `${C.displayName}Wrapper`
    return Wrapper
  }
}
