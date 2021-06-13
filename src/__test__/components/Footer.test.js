//import 'jsdom-global/register';
import React from 'react'
import { mount } from 'enzyme'
import Footer from '../../components/Footer'

describe('Test Footer component', () => {
  const footer = mount(<Footer/>)
  
  it('Component Footer is rendered', () => {
    
    expect(footer.length).toEqual(1)
  })

  it('Render title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('EC Merch')
  })
})
