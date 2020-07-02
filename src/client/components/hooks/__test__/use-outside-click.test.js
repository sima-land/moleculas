import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useOutsideClick } from '../use-outside-click';
import { mount } from 'enzyme';

describe('hooks testing', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should useOutsideClick() works properly', () => {
    // eslint-disable-next-line require-jsdoc
    const Test = ({ spy }) => {
      const ref = useOutsideClick(spy);
      return (
        <div>
          <div className='out-of-ref'>out of ref</div>
          <div className='refed' ref={ref}>
            refed
            <span className='in-ref'>in ref</span>
          </div>
        </div>
      );
    };
    const spy = jest.fn();
    // eslint-disable-next-line require-jsdoc
    const mouseClick = () => new MouseEvent('click', { bubbles: true });

    act(() => {
      render(<Test spy={spy} />, container);
    });

    expect(spy).toHaveBeenCalledTimes(0);
    act(() => {
      container.querySelector('.out-of-ref').dispatchEvent(mouseClick());
    });
    expect(spy).toHaveBeenCalledTimes(1);
    act(() => {
      container.querySelector('.refed').dispatchEvent(mouseClick());
    });
    expect(spy).toHaveBeenCalledTimes(1);
    act(() => {
      container.querySelector('.in-ref').dispatchEvent(mouseClick());
    });
    expect(spy).toHaveBeenCalledTimes(1);

    jest.spyOn(document, 'removeEventListener');
    const wrapper = mount(<Test spy={spy} />);
    wrapper.unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
