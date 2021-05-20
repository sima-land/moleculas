import React from 'react';
import { mount } from 'enzyme';
import WholesaleText from '../wholesale-text';

describe('<WholesaleText />', () => {
  it('should render with props and cutTextContent calls correctly', () => {
    const wrapper = mount(
      <WholesaleText
        text='Крупный опт «Галантерея и швейная галантерея»'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
