import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import RecommendationSlider, {
  RecommendationSlider as PureRecommendationSlider,
} from '../';
import RecommendedItem from '../recommended-item';
import Text from '@dev-dep/ui-nucleons/text';
import TouchSlider from '@dev-dep/ui-nucleons/touch-slider';
import isFunction from 'lodash/isFunction';

describe('<RecommendationSlider />', () => {
  const items = [
    { name: 'first item' },
    { name: 'second item' },
  ];
  const title = 'Test title';
  let onInViewport;
  let container;
  let onRequest;
  let addObserve;
  let onItemClick;
  let addObserveWithMargin;
  let intersectionObserverMock;

  beforeEach(() => {
    onInViewport = jest.fn();
    onRequest = jest.fn();
    onItemClick = jest.fn();
    addObserve = (el, fn) => intersectionObserverMock.addObserve(fn);
    addObserveWithMargin = (el, fn) => intersectionObserverMock.addObserve(fn);

    container = document.createElement('div');
    document.body.appendChild(container);
    intersectionObserverMock = {
      /**
       * Функция подписки на Intersection Observer.
       * @param {Function} fn Функция, которая будет вызвана,
       * когда элемент окажется в зоне видимости.
       */
      addObserve (fn) {
        this.fn = fn;
      },

      /**
       * Иммитирует поялвение элемента в зоне видимости.
       */
      trigger () {
        this.fn();
      },
    };
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('should match a snapshot', () => {
    it('without items', () => {
      const slider = mount(
        <PureRecommendationSlider
          onRequest={onRequest}
          addObserveWithMargin={addObserveWithMargin}
        />
      );
      expect(slider).toMatchSnapshot();
    });

    it('with items', () => {
      const slider = mount(
        <PureRecommendationSlider
          items={items}
          title={title}
          onInViewport={onInViewport}
          addObserve={addObserve}
          onItemClick={onItemClick}
        />
      );
      expect(slider).toMatchSnapshot();
    });
  });

  it('should contain addObserve and addObserveWithMargin', () => {
    const slider = mount(<RecommendationSlider />);
    const pureSlider = slider.find(PureRecommendationSlider);

    expect(pureSlider.prop('addObserve')).toBeInstanceOf(Function);
    expect(pureSlider.prop('addObserveWithMargin')).toBeInstanceOf(Function);
  });

  it('should render a title', () => {
    const slider = shallow(
      <PureRecommendationSlider
        items={items}
        title={title}
      />
    );

    expect(slider.find(Text).props()).toEqual(expect.objectContaining({
      children: title,
    }));
  });

  it('should render a slider', () => {
    const slider = shallow(
      <PureRecommendationSlider
        items={items}
        title={title}
      />
    );

    expect(slider.find(TouchSlider)).toHaveLength(1);
  });

  it('should render slides', () => {
    const slider = mount(
      <PureRecommendationSlider
        items={items}
        title={title}
        onItemClick={onItemClick}
      />
    );

    const slides = slider.find(RecommendedItem);

    slides.forEach((currentSlide, index) => {
      const currentItem = items[index];

      expect(currentSlide.props()).toEqual(expect.objectContaining({
        ...currentItem,
      }));
      expect(onItemClick).toBeCalledTimes(index);

      currentSlide.prop('onItemClick')();
      expect(onItemClick).toBeCalledTimes(index + 1);
      expect(onItemClick).toHaveBeenLastCalledWith(currentItem);
    });
  });

  it('should render empty div when component doesn`t contain items', () => {
    const slider = shallow(<PureRecommendationSlider />);

    expect(slider.html()).toBe('<div></div>');
  });

  it('should call onInViewport when a component in viewport', () => {
    const slider = (
      <PureRecommendationSlider
        items={items}
        onInViewport={onInViewport}
        addObserve={addObserve}
      />
    );

    act(() => {
      render(slider, container);
    });

    expect(onInViewport).toBeCalledTimes(0);

    act(() => {
      intersectionObserverMock.trigger();
    });

    expect(onInViewport).toBeCalledTimes(1);
  });

  it('should call onRequest when a component in viewport', () => {
    const slider = (
      <PureRecommendationSlider
        items={null}
        onRequest={onRequest}
        addObserveWithMargin={addObserveWithMargin}
      />
    );

    act(() => {
      render(slider, container);
    });

    expect(onRequest).toBeCalledTimes(0);

    act(() => {
      intersectionObserverMock.trigger();
    });

    expect(onRequest).toBeCalledTimes(1);
  });

  it('should set correct canLoadImage to RecommendedItem', () => {
    const observeFn = jest.fn();
    const slider = mount(
      <PureRecommendationSlider
        items={items}
        addObserveWithMargin={observeFn}
      />
    );
    expect(slider.find(RecommendedItem).map(item => item.prop('canLoadImage'))).toEqual([false, false]);

    expect(observeFn).toHaveBeenCalledTimes(1);
    expect(observeFn.mock.calls[0][0]).toEqual(slider.getDOMNode());
    expect(isFunction(observeFn.mock.calls[0][1])).toBeTruthy();

    act(() => {
      observeFn.mock.calls[0][1]();
    });
    slider.update();
    expect(slider.find(RecommendedItem).map(item => item.prop('canLoadImage'))).toEqual([true, true]);
  });

  it('should set correct needLoadImage to RecommendedItem', () => {
    const slider = mount(<PureRecommendationSlider items={items} />);
    expect(slider.find(RecommendedItem).map(item => item.prop('needLoadImage'))).toEqual([false, false]);

    slider.find(TouchSlider).find('.layout').simulate('touchstart');
    expect(slider.find(RecommendedItem).map(item => item.prop('needLoadImage'))).toEqual([true, true]);
  });
});
