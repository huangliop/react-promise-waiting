# promise-waiting

[![Build Status](https://travis-ci.org/huangliop/promise-waiting.svg?branch=master)](https://travis-ci.org/huangliop/promise-waiting)
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[Demo](https://huangliop.github.io/promise-waiting/)


[中文文档](https://github.com/huangliop/promise-waiting/blob/master/README.cn.md)

This component prevents children's click events from being triggered continuously.This uses Promise . So children's click event must return a Promise.


When the button is clicked, the button's disabled is set to true. Only the Promise function returns and then disabled to false.


## Install


`npm i promise-waiting`


## Usage

*Only one children is supported*

```import React, {Component} from 'react'
import {render} from 'react-dom'

import PromiseWaiting from 'promise-waiting'

class Demo extends Component {
  render() {
    return <div >
      <h1>promise-waiting Demo</h1>
      <p>Normal</p>
      <PromiseWaiting >
        <button onClick={this.handlOnClick.bind(this)}>Click Me</button>
      </PromiseWaiting>
      <p>Use receiveState</p>
      <PromiseWaiting receiveState='loading'>
        <button type='primary' onClick={this.handlOnClick.bind(this)}>Click Me</button>
      </PromiseWaiting>
    </div>
  }
  handlOnClick(){ 
      //must return a Promise object
     return new Promise((resolve)=>{
       setTimeout(() => {
         resolve();
       }, 2000);
     })
  }
}
render(<Demo/>, document.querySelector('#demo'))
```

## Props

`receiveState` : past a true/false to children's props .This feature is used for those stateful button components,like this [Button Component](https://ice.work/component/button) has a loading state.

for example
```
<PromiseWaiting receiveState='loading'>
    <Button  onClick={this.handlOnClick.bind(this)}>Click Me</Button>
</PromiseWaiting>
```
The Button component can receive a props,like this `<Button loading={true/flase} ...props />`

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/promise-waiting

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
