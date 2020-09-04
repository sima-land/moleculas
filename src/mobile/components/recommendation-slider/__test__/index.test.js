import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import RecommendationSlider, {
  RecommendationSlider as PureRecommendationSlider,
} from '../';
import { act } from 'react-dom/test-utils';

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
  let intersectionObserverMock;

  beforeEach(() => {
    onInViewport = jest.fn();
    onRequest = jest.fn();
    onItemClick = jest.fn();
    addObserve = (el, fn) => intersectionObserverMock.addObserve(fn);

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
          addObserve={addObserve}
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

  it('should contain addObserve', () => {
    const slider = mount(<RecommendationSlider />);
    const pureSlider = slider.find(PureRecommendationSlider);

    expect(pureSlider.prop('addObserve')).toBeInstanceOf(Function);
  });

  it('should call onRequest when a component in viewport', () => {
    const slider = (
      <RecommendationSlider
        items={null}
        onRequest={onRequest}
        addObserve={addObserve}
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

  it('should render empty div when component doesn`t contain items', () => {
    const slider = shallow(<PureRecommendationSlider />);

    expect(slider.html()).toBe('<div></div>');
  });
});
