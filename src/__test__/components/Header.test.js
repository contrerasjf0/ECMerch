import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header'
import { it } from '@jest/globals';

describe('<Header />', () => {
  

  it('Render Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header/>
      </ProviderMock>
    )
    expect(header.length).toEqual(1)
  })

  it('Render Title', () =>  {
    const header = mount(
      <ProviderMock> 
        <Header/>
      </ProviderMock>
    )


    expect(header.find('.Header-title a').text()).toEqual('EC Merch')
  })

})