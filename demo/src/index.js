import React, {Component} from 'react'
import {render} from 'react-dom'

import PromiseWaiting from '../../src'

class Demo extends Component {

  render() {
    return <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <h1>promise-waiting Demo</h1>
      <p>No PromiseWaiting</p>
      <button onClick={this.handlOnClick.bind(this)}>Click Me</button>
      <p>PromiseWaiting</p>
      <PromiseWaiting >
        <button onClick={this.handlOnClick.bind(this)}>Click Me</button>
      </PromiseWaiting>
    </div>
  }
  handlOnClick(){ 
    console.log('click')
     return new Promise((resolve)=>{
       setTimeout(() => {
         resolve();
       }, 2000);
     })
  }
}

render(<Demo/>, document.querySelector('#demo'))
