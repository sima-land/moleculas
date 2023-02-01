import React from 'react';
import { mount } from 'enzyme';
import { PromotionCard } from '..';

describe('<PromotionCard />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
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
    expect(wrapper.find('[data-testid="promotion-card"]')).toHaveLength(1);
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
    expect(wrapper.find('[data-testid="promotion-card:postfix"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="promotion-card:banner-discount"]')).toHaveLength(1);
  });

  it('should have placeholder component property', () => {
    const wrapper = mount(<PromotionCard.Placeholder />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('[data-testid="promotion-card:placeholder"]')).toHaveLength(1);
  });
});
