import React from 'react';
import { mount, shallow } from 'enzyme';
import RecommendedItem from '../recommended-item';
import Link from '@dev-dep/ui-nucleons/link';
import Price from '@dev-dep/ui-nucleons/price';
import { cutTextContent } from '../../../../common/helpers/dom';

import debounce from 'lodash/debounce';

jest.mock('lodash/debounce', () => jest.fn(fn => fn));

jest.mock('../../../../common/helpers/dom', () => {
  const original = jest.requireActual('../../../../common/helpers/dom');

  return {
    ...original,
    __esModule: true,
    cutTextContent: jest.fn(original.cutTextContent),
  };
});

describe('<RecommendedItem />', () => {
  describe('render with props', () => {
    const onItemFn = jest.fn();
    const onQuickViewFn = jest.fn();
    const onHoverQuickViewButtonFn = jest.fn();
    const onLeaveQuickViewButtonFn = jest.fn();
    const addGlobalListener = jest.fn();
    const props = {
      name: 'Милая картина из шерсти Schrodinger cat, А5',
      url: 'https://www.sima-land.ru/3266880/nabor-dlya-tvorchestva-topiariy-xyezhnost-d-shara-6-cm/',
      imageSrc: 'https://cdn2.static1-sima-land.com/items/3592229/4/140.jpg?v=1549604912',
      price: 135.4,
      currencyGrapheme: '$',
      onItemClick: onItemFn,
      onHoverQuickViewButton: onHoverQuickViewButtonFn,
      onLeaveQuickViewButton: onLeaveQuickViewButtonFn,
      addGlobalListener,
    };
    const allProps = {
      ...props,
      oldPrice: 234.9,
      onQuickViewClick: onQuickViewFn,
    };

    beforeEach(() => {
      onItemFn.mockClear();
      onQuickViewFn.mockClear();
      addGlobalListener.mockClear();
    });

    it('onItemClick and onQuickViewClick calls correctly', () => {
      jest.useFakeTimers();

      const component = mount(<RecommendedItem {...allProps} />);
      expect(cutTextContent).toHaveBeenCalledTimes(1);
      expect(onItemFn).not.toHaveBeenCalled();
      expect(onQuickViewFn).not.toHaveBeenCalled();

      component.find(Link).simulate('click');
      expect(onItemFn).toHaveBeenCalledTimes(1);
      expect(onQuickViewFn).not.toHaveBeenCalled();

      component.find('.quick-view-button').simulate('click');
      expect(onItemFn).toHaveBeenCalledTimes(1);
      expect(onQuickViewFn).toHaveBeenCalledTimes(1);

      cutTextContent.mockClear();
      expect(cutTextContent).toHaveBeenCalledTimes(0);

      // dispatch window event resize
      const resizeEvent = document.createEvent('Event');
      resizeEvent.initEvent('resize', true, true);
      window.dispatchEvent(resizeEvent);

      expect(debounce).toHaveBeenCalledTimes(1);
    });

    it('should correct render with all props', () => {
      const component = mount(<RecommendedItem {...allProps} />);
      expect(component.find(Link)).toHaveLength(1);
      expect(component.find(Price)).toHaveLength(2);
      expect(component.find('img')).toHaveLength(1);
      expect(component.find('.quick-view-button')).toHaveLength(1);
      expect(component.find('.quick-view-button').props().onClick).toEqual(onQuickViewFn);
      expect(component.find('.quick-view-button').props().onMouseEnter)
        .toEqual(onHoverQuickViewButtonFn);
      expect(component.find('.quick-view-button').props().onMouseLeave)
        .toEqual(onLeaveQuickViewButtonFn);
      expect(component).toMatchSnapshot();
    });

    it('should correct render without oldPrice and onQuickViewClick', () => {
      const component = mount(<RecommendedItem {...props} />);
      expect(component.find(Link)).toHaveLength(1);
      expect(component.find(Price)).toHaveLength(1);
      expect(component.find('img')).toHaveLength(1);
      expect(component.find('.quick-view-button')).toHaveLength(1);
      expect(component.find('.quick-view-button').props().onClick).toBe(undefined);
      expect(component).toMatchSnapshot();
    });

    it('onItemClick and calls correctly', () => {
      onItemFn.mockClear();
      const component = mount(<RecommendedItem {...allProps} />);
      expect(onItemFn).not.toHaveBeenCalled();

      component.find(Link).simulate('click');
      expect(onItemFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('without props', () => {
    it('should check render without props', () => {
      const component = mount(<RecommendedItem />);
      expect(component.find(Link)).toHaveLength(1);
      expect(component.find(Price)).toHaveLength(0);
      expect(component.find('img')).toHaveLength(0);
      expect(component.find('.quick-view-button')).toHaveLength(0);
    });
    it('should match snapshot', () => {
      const component = shallow(<RecommendedItem />);
      expect(component).toMatchSnapshot();
    });
  });
});
