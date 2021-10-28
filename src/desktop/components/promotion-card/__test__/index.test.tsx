import React from 'react';
import { mount } from 'enzyme';
import { PromotionCard } from '..';

describe('<PromotionCard />', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should renders correctly', () => {
    const wrapper = mount(
      <PromotionCard
        title='Hello, world!'
        subtitle='Foo, bar, baz...'
        imageSrc='https://www.images.com/123'
        dueDate={new Date()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "promotionType" prop', () => {
    const wrapper = mount(
      <PromotionCard
        title='Hello, world!'
        subtitle='Foo, bar, baz...'
        imageSrc='https://www.images.com/123'
        dueDate={new Date()}
        promotionType='volume-discount'
        volumeDiscount={23}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have placeholder component property', () => {
    const wrapper = mount(<PromotionCard.Placeholder />);

    expect(wrapper).toMatchSnapshot();
  });
});
