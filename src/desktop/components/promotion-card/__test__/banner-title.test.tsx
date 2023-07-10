import { mount } from 'enzyme';
import { BannerTitle, BannerTitleProps } from '../banner-title';
import { addDays } from 'date-fns';

describe('<BannerTitle />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2021-01-01T09:00:00'));
  });

  it('should renders correctly', () => {
    const variants: BannerTitleProps[] = [
      // 3 by 2
      {
        promotionType: '3-by-2',
      },

      // special
      {
        promotionType: 'special',
        dueDate: undefined,
      },
      {
        promotionType: 'special',
        dueDate: addDays(new Date(), 9),
      },

      // discount
      {
        promotionType: 'volume-discount',
        volumeDiscount: undefined,
      },
      {
        promotionType: 'volume-discount',
        volumeDiscount: 45,
      },
    ];

    variants.forEach(variant => {
      const wrapper = mount(<BannerTitle {...variant} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
