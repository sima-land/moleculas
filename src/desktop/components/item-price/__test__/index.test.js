import React from 'react';
import { mount } from 'enzyme';
import { ItemPrice } from '../index';

describe('<ItemPrice />', () => {
  it('should render without props', () => {
    const wrapper = mount(<ItemPrice />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with props', () => {
    const wrapper = mount(
      <ItemPrice
        priceLayout='column'
        discountBadge={[
          {
            type: 'b-discount',
            link: '/sale/?is_label=1',
            definitions: {
              discountPercent: {
                type: 'text',
                value: '-50%',
              },
            },
          },
        ]}
        price={15}
        priceOld={20}
        wholesaleProps={{
          price: 14,
        }}
        unitPrice={421}
        measure='Р / пог. м'
        showWholesalePrice
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
