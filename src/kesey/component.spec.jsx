import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'
import Kesey from './component'

chai.use(chaiEnzyme())

describe('Kesey component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Kesey />)
  })
  it('should exist', () => {
    expect(wrapper).to.have.length(1)
  })
})
