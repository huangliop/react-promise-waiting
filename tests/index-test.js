import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from 'src/'

describe('Promise Waiting', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a button', () => {
    render(<Component>
      <button >click me</button>
    </Component>, node, () => {
      expect(node.innerHTML).toContain('<button>click me</button>');

    })
  })
  it('displays a disabled  button', () => {
    render(<Component >
      <button disabled={true}>click me</button>
    </Component>, node, () => {
      expect(node.innerHTML).toContain('<button disabled="">click me</button>');

    })
  })
})
