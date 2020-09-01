import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import React from 'react';
import Dropdown, { defaultRenderItem } from '../';
import { shallow } from 'enzyme';

const testItems = [
  { id: 1, name: 'test-1' },
  { id: 2, name: 'test-2' },
];

describe('<Dropdown />', () => {
  it('renders correctly with title', () => {
    const component = shallow(
      <Dropdown
        title='test title'
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('should hook executes properly', () => {
    // eslint-disable-next-line require-jsdoc
    const click = () => new MouseEvent('click', { bubbles: true });
    const spy = jest.fn();
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <Dropdown
          title='test title'
          items={testItems}
          onSelect={spy}
        />,
        container
      );
      document.querySelector('.trigger').dispatchEvent(click());
    });
    expect(document.querySelector('.popup')).toBeInstanceOf(HTMLElement);
    act(() => {
      document.querySelector('.list-item').dispatchEvent(click());
    });
    act(() => {
      document.dispatchEvent(click());
    });
    expect(document.querySelector('.popup')).not.toBeInstanceOf(HTMLElement);
  });
  it('renders correctly with items', () => {
    const onSelect = jest.fn();
    const component = shallow(
      <Dropdown
        title='test title'
        items={testItems}
        onSelect={onSelect}
      />
    );
    expect(component).toMatchSnapshot();
    component.find('.trigger').simulate('click');
    expect(component).toMatchSnapshot();
    component.find('.list-item').at(0).simulate('click');
    expect(onSelect).toHaveBeenCalledWith(testItems[0]);
  });
  it('should render correctly with dropdownHead prop', () => {
    const component = shallow(
      <Dropdown
        renderDropdownHead={() => '<div>Test dropdownHead</div>'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render correctly with additional classes prop', () => {
    const component = shallow(
      <Dropdown
        popupClasses='popup-class'
        wrapperClass='wrapper-class'
      />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('defaultRenderItem', () => {
  it('return list item correctly', () => {
    const component = shallow(defaultRenderItem(testItems[0], 0, jest.fn()));
    expect(component).toMatchSnapshot();
  });
});
