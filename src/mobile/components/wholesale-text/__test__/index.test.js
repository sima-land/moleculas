import React from 'react';
import { mount } from 'enzyme';
import { WholesaleText } from '../wholesale-text';
import { cutTextContent } from '../../helpers/cut-text-content';
import debounce from 'lodash/debounce';

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
  const addGlobalListener = jest.fn();
  beforeEach(() => {
    addGlobalListener.mockClear();
  });

  it('should render without props', () => {
    const wrapper = mount(<WholesaleText addGlobalListener={addGlobalListener} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should render with props and cutTextContent calls correctly', () => {
    const wrapper = mount(
      <WholesaleText
        text='Крупный опт «Галантерея и швейная галантерея»'
        addGlobalListener={addGlobalListener}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(cutTextContent).toHaveBeenCalled();

    cutTextContent.mockClear();
    expect(cutTextContent).toHaveBeenCalledTimes(0);

    expect(debounce).toHaveBeenCalled();
    expect(addGlobalListener).toHaveBeenCalledTimes(1);
    expect(addGlobalListener.mock.calls[0][0]).toEqual('resize');
    const callback = addGlobalListener.mock.calls[0][1];
    callback();

    expect(cutTextContent).toHaveBeenCalledTimes(1);
  });
});
