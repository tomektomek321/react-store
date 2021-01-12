import React from 'react'
import { shallow } from 'enzyme'
import Product from '../Product'
import { expect } from 'chai'
import sinon from 'sinon'

import { render } from '@testing-library/react'



it('renders without crashing', () => {
    const app = shallow(<Product key={1} product={{
        id: 7,
        title: "Xiaomi POCO X3 NFC",
        img: "img/product-7.png",
        price: 530,
        company: "apple",
        info:
            "Lorem",
        inCart: false,
        guaranty: true,
        count: 0,
        total: 0
    }} />);

    expect(app.containsMatchingElement(<div className="head" />)).contain("Xiaomi POCO X3 NFC")
});



/*
describe('<Product />', () => {
    const toDoProps = {
      id: 1,
      text: 'Lorem ipsum'
    }

    it('renders text', () => {
      const wrapper = shallow(<Product />)
      expect(wrapper.find('.head').text()).toBeString();
    })
})

*/