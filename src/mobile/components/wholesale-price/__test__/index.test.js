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
        text='Крупный опт «Галантерея и швейная галантерея»'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should onDetailsClick calls on click', () => {
    const wrapper = mount(
      <WholesalePrice
        price={222222}
        description='lorem'
        onDetailsClick={jest.fn()}
        itemId={123456}
        text='Детские товары'
      />
    );
    wrapper.find('[role="button"]').simulate('click');
    expect(wrapper.props().onDetailsClick).toHaveBeenCalledTimes(1);
    expect(wrapper.props().onDetailsClick).toHaveBeenCalledWith(123456);
  });
});
