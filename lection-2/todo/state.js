import React from 'react'
import { render } from 'react-dom'

class App = () => (
  <div>
    <h2>{props.count}</h2>
  </div>
)

render(<App />, document.getElementById('root'))
