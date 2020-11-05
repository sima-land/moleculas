import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import PseudoInput from '../';

describe('<PseudoInput />', () => {
  it('should render without props', () => {
    const component = shallow(<PseudoInput />);

    expect(component).toMatchSnapshot();
  });

  it('should handle onClick prop', () => {
    const onClick = jest.fn();
    const component = shallow(<PseudoInput onClick={onClick} />);

    expect(onClick).toBeCalledTimes(0);
    act(() => {
      component.find('.input').prop('onClick')();
    });
    expect(onClick).toBeCalledTimes(1);
  });
});
