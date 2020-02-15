import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import RecommendationCarousel, {
  RecommendationCarousel as PureRecommendationCarousel,
} from '../';
import RecommendedItem from '../recommended-item';
import Carousel from '@dev-dep/ui-nucleons/carousel/carousel';
import CarouselButton from '../recommendation-carousel-button';

describe('<RecommendationCarousel />', () => {
  const items = [
    { name: 'first item' },
    { name: 'second item' },
  ];
  const title = 'Test title';
  const className = 'test-class';
  const containerProps = { className };
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
      const carousel = shallow(
        <PureRecommendationCarousel
          onRequest={onRequest}
          addObserveWithMargin={addObserveWithMargin}
        />
      );
      expect(carousel).toMatchSnapshot();
    });

    it('with items', () => {
      const carousel = shallow(
        <PureRecommendationCarousel
          items={items}
          title={title}
          onInViewport={onInViewport}
          addObserve={addObserve}
          onItemClick={onItemClick}
        />
      );
      expect(carousel).toMatchSnapshot();
    });
  });

  it('should contain addObserve and addObserveWithMargin', () => {
    const carousel = mount(<RecommendationCarousel />);
    const pureCarousel = carousel.find(PureRecommendationCarousel);

    expect(pureCarousel.prop('addObserve')).toBeInstanceOf(Function);
    expect(pureCarousel.prop('addObserveWithMargin')).toBeInstanceOf(Function);
  });

  it('should render a section', () => {
    const carousel = shallow(
      <PureRecommendationCarousel
        items={items}
        title={title}
        containerProps={containerProps}
      />
    );

    expect(carousel.find('section')).toHaveLength(1);
  });

  it('should render a carousel', () => {
    const carousel = shallow(
      <PureRecommendationCarousel
        items={items}
        title={title}
      />
    );

    expect(carousel.find(Carousel).props()).toEqual(expect.objectContaining({
      items,
      renderControl: CarouselButton,
    }));
  });

  it('should render slides', () => {
    const carousel = mount(
      <PureRecommendationCarousel
        items={items}
        title={title}
        onItemClick={onItemClick}
      />
    );

    const slides = carousel.find(RecommendedItem);

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
    const carousel = shallow(<PureRecommendationCarousel />);

    expect(carousel.html()).toBe('<div></div>');
  });

  it('should call onInViewport when a component in viewport', () => {
    const carousel = (
      <PureRecommendationCarousel
        items={items}
        onInViewport={onInViewport}
        addObserve={addObserve}
      />
    );

    act(() => {
      render(carousel, container);
    });

    expect(onInViewport).toBeCalledTimes(0);

    act(() => {
      intersectionObserverMock.trigger();
    });

    expect(onInViewport).toBeCalledTimes(1);
  });

  it('should call onRequest when a component in viewport', () => {
    const carousel = (
      <PureRecommendationCarousel
        items={null}
        onRequest={onRequest}
        addObserveWithMargin={addObserveWithMargin}
      />
    );

    act(() => {
      render(carousel, container);
    });

    expect(onRequest).toBeCalledTimes(0);

    act(() => {
      intersectionObserverMock.trigger();
    });

    expect(onRequest).toBeCalledTimes(1);
  });
});
