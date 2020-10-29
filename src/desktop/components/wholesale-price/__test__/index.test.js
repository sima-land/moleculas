import React from 'react';
import { mount } from 'enzyme';
import { WholesalePrice } from '../index';

describe('<WholesalePrice />', () => {
  it('should render without props', () => {
    const wrapper = mount(<WholesalePrice />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should render with props', () => {
    const wrapper = mount(
      <WholesalePrice
        price={222222}
        description='<b>lorem</b>'
        text='Опт Детские товары'
        unitWholesalePrice={520}
        measure='шт.'
      />
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ direction: 'column' });
    expect(wrapper).toMatchSnapshot();
  });
});
