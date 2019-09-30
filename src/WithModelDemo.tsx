import React, {Component} from 'react'
import {withModel, WithModelProps} from './library'
import {useCounter} from './model/counter'

interface Props extends WithModelProps {
  model: {
    counter: ReturnType<typeof useCounter>
  }
}

class WithModelDemo extends Component<Props> {
  render() {
    return (
      <div>
        <h2>With Model</h2>
        {this.props.model.counter.count}
      </div>
    )
  }
}

export default withModel('counter')(WithModelDemo)
