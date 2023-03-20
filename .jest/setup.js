import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

Error.stackTraceLimit = 1000;

if (typeof window !== 'undefined') {
  window.matchMedia =
    window.matchMedia ||
    function (query) {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
      };
    };

  window.IntersectionObserver =
    window.IntersectionObserver ||
    jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

  window.ResizeObserver =
    window.ResizeObserver ||
    class ResizeObserver {
      constructor(callback) {
        this.callback = callback;
        window.addEventListener('[fake]resize', event => {
          this.callback(
            [
              {
                target: event.detail.target,

                // not implemented
                borderBoxSize: [],
                contentBoxSize: [],
                contentRect: null,
                devicePixelContentBoxSize: [],
              },
            ],
            this,
          );
        });
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    };

  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    function (callback) {
      setTimeout(callback, 0);
    };
}
