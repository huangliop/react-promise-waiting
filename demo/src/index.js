import React, {Component} from 'react'
import {render} from 'react-dom'

import PromiseWaiting from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>promise-waiting Demo</h1>
      <PromiseWaiting >
        <button onClick={this.handlOnClick.bind(this)}>Click Me</button>
      </PromiseWaiting>
    </div>
  }
  handlOnClick(){ 
     return new Promise((resolve)=>{
       setTimeout(() => {
         resolve();
       }, 2000);
     })
  }
}

render(<Demo/>, document.querySelector('#demo'))
