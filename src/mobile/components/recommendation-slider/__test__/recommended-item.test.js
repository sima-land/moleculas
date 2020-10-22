import React from 'react';
import { mount, shallow } from 'enzyme';
import debounce from 'lodash/debounce';
import RecommendedItem from '../recommended-item';
import Link from '@dev-dep/ui-nucleons/link';
import Price from '@dev-dep/ui-nucleons/price';
import cutTextContent from '@dev-dep/ui-nucleons/helpers/cut-text-content';

jest.mock('@dev-dep/ui-nucleons/helpers/cut-text-content', () => {
  const original = jest.requireActual('@dev-dep/ui-nucleons/helpers/cut-text-content');

  return {
    ...original,
    __esModule: true,
    default: jest.fn(original.default),
  };
});

jest.mock('lodash/debounce', () => jest.fn(fn => fn));

describe('<RecommendedItem />', () => {
  const addGlobalListener = jest.fn();
  const props = {
    name: 'Милая картина из шерсти Schrodinger cat, А5',
    url: 'https://www.sima-land.ru/3266880/nabor-dlya-tvorchestva-topiariy-xyezhnost-d-shara-6-cm/',
    imageSrc: 'https://cdn2.static1-sima-land.com/items/3592229/4/140.jpg?v=1549604912',
    imageAlt: 'alt text',
    price: 135.4,
    currencyGrapheme: '$',
    addGlobalListener,
  };
  describe('render with props', () => {
    const allProps = {
      ...props,
      oldPrice: 234.9,
    };
    it('onItemClick calls correctly', () => {
      const onItemFn = jest.fn();
      debounce.mockClear();

      const component = mount(<RecommendedItem {...allProps} onItemClick={onItemFn} />);
      expect(cutTextContent).toHaveBeenCalledTimes(1);
      expect(onItemFn).not.toHaveBeenCalled();

      const link = component.find(Link);
      link.simulate('click');

      expect(onItemFn).toHaveBeenCalledTimes(1);

      cutTextContent.mockClear();

      expect(cutTextContent).toHaveBeenCalledTimes(0);

      // dispatch window event resize
      const resizeEvent = document.createEvent('Event');
      resizeEvent.initEvent('resize', true, true);
      window.dispatchEvent(resizeEvent);

      // wait for debounce
      expect(debounce).toHaveBeenCalledTimes(1);

      expect(cutTextContent).toHaveBeenCalledTimes(1);
    });
    it('should correct render with all props', () => {
      const component = mount(<RecommendedItem {...allProps} />);
      expect(component.find(Link)).toHaveLength(1);
      expect(component.find(Price)).toHaveLength(2);
      expect(component.find('img')).toHaveLength(1);
      expect(component).toMatchSnapshot();
    });
    it('should correct render without oldPrice', () => {
      const component = mount(<RecommendedItem {...props} />);
      expect(component.find(Link)).toHaveLength(1);
      expect(component.find(Price)).toHaveLength(1);
      expect(component.find('img')).toHaveLength(1);
      expect(component).toMatchSnapshot();
    });
  });
  describe('without props', () => {
    it('should check render without props', () => {
      const component = mount(<RecommendedItem />);
      expect(component.find(Link)).toHaveLength(1);
      expect(component.find(Price)).toHaveLength(0);
      expect(component.find('img')).toHaveLength(0);
      expect(component.find('button')).toHaveLength(0);
    });
    it('should match snapshot', () => {
      const component = shallow(<RecommendedItem />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('should correct render image', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('if props needLoadImage and canLoadImage have not been passed', () => {
      const component = mount(<RecommendedItem {...props} />);
      expect(component.find('img')).toHaveLength(1);
    });

    it('if body width margin more that left side item', () => {
      jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ left: 600 });
      jest.spyOn(document.body, 'clientWidth', 'get').mockReturnValue(500);

      const component = mount(<RecommendedItem {...props} needLoadImage={false} canLoadImage />);
      expect(component.find('img')).toHaveLength(1);

      component.setProps({ ...props, needLoadImage: false, canLoadImage: false });
      expect(component.find('img')).toHaveLength(0);

      component.setProps({ ...props, needLoadImage: true, canLoadImage: false });
      expect(component.find('img')).toHaveLength(1);
    });

    it('if body width margin less that left side item', () => {
      jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ left: 700 });
      jest.spyOn(document.body, 'clientWidth', 'get').mockReturnValue(320);

      const component = mount(<RecommendedItem {...props} needLoadImage={false} canLoadImage />);
      expect(component.find('img')).toHaveLength(0);

      component.setProps({ ...props, needLoadImage: false, canLoadImage: false });
      expect(component.find('img')).toHaveLength(0);

      component.setProps({ ...props, needLoadImage: true, canLoadImage: false });
      expect(component.find('img')).toHaveLength(1);
    });

    it('if getBoundingClientRect returns null', () => {
      jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(null);
      jest.spyOn(document.body, 'clientWidth', 'get').mockReturnValue(320);

      const component = mount(<RecommendedItem {...props} needLoadImage={false} canLoadImage />);
      expect(component.find('img')).toHaveLength(0);
    });
  });
});