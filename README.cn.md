# promise-waiting

[![Build Status](https://travis-ci.org/huangliop/promise-waiting.svg?branch=master)](https://travis-ci.org/huangliop/promise-waiting)
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[Demo](https://huangliop.github.io/promise-waiting/)

这个组件主要是用于防止点击事件被触发多次。它主要利用Promise，所以onClick的监听函数必须返回一个Promise对象。


## Install


`npm i promise-waiting`


## Usage


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

`receiveState` : 子组件用于接收状态的props名称。这个特性主要是为了实现某些组件有自己的loading状态的功能，比如下面这个组件[Button Component](https://ice.work/component/button) 就有一个loading状态。

for example
```
<PromiseWaiting receiveState='loading'>
    <Button  onClick={this.handlOnClick.bind(this)}>Click Me</Button>
</PromiseWaiting>
```
上面的代码中，在运行时Button会收到一个多余的prop，比如这样 `<Button loading={true/flase} ...props />`

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/promise-waiting

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
