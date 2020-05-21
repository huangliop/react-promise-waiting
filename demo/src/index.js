import React, {Component} from 'react'
import {render} from 'react-dom'

import PromiseWaiting from '../../src'

class Demo extends Component {
  constructor(props){
    super(props)
    this.state={
      dis:true,
    }
  }

  render() {
    return <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <h1>promise-waiting Demo</h1>
      <p>No PromiseWaiting</p>
      <button onClick={this.handlOnClick2.bind(this)}>Click Me</button>
      <p>PromiseWaiting</p>
      <PromiseWaiting >
        <button onClick={this.handlOnClick.bind(this)} disabled={this.state.dis}>Click Me</button>
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
  handlOnClick2(){
    this.setState({dis:!this.state.dis})
  }
}

render(<Demo/>, document.querySelector('#demo'))
