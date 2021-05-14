import React from 'react';
import { mount } from 'enzyme';
import WholesaleText from '../wholesale-text';
import { cutTextContent } from '../../helpers/cut-text-content';
import debounce from 'lodash/debounce';
import { act } from 'react-dom/test-utils';

jest.mock('lodash/debounce', () => jest.fn(fn => fn));

jest.mock('../../helpers/cut-text-content', () => {
  const original = jest.requireActual('../../helpers/cut-text-content');

  return {
    ...original,
    __esModule: true,
    cutTextContent: jest.fn(original.cutTextContent),
  };
});

describe('<WholesaleText />', () => {
  it('should render without props', () => {
    const wrapper = mount(<WholesaleText />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render with props and cutTextContent calls correctly', () => {
    const wrapper = mount(
      <WholesaleText
        text='Крупный опт «Галантерея и швейная галантерея»'
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(cutTextContent).toHaveBeenCalled();

    cutTextContent.mockClear();
    expect(cutTextContent).toHaveBeenCalledTimes(0);

    act(() => {
      window.dispatchEvent(new UIEvent('resize'));
    });
    wrapper.update();

    expect(debounce).toHaveBeenCalled();
    expect(cutTextContent).toHaveBeenCalledTimes(1);
  });
});
