import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Error.stackTraceLimit = 1000;
configure({ adapter: new Adapter() });

if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
    };
  };

  window.requestAnimationFrame = window.requestAnimationFrame
    || (callback => void setTimeout(callback, 0));
}
