import React from 'react';
import { render } from 'react-dom';
import { mount } from 'enzyme';
import { SearchBar, cx } from '../index';
import Link from '@dev-dep/ui-nucleons/link/deprecated';
import { act } from 'react-dom/test-utils';

describe('SearchBar', () => {
  it('should render correctly without props', () => {
    const component = mount(<SearchBar />);

    expect(component.find('input').prop('placeholder')).toEqual('Найдите нужное');
    expect(component.find('input').prop('value')).toEqual('');
    expect(component.find(Link)).toHaveLength(0);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = mount(
      <SearchBar
        searchQuery='Тестовый запрос'
        placeholder='Найти'
        withClearButton
      />
    );

    expect(component.find('input').prop('placeholder')).toEqual('Найдите нужное');
    expect(component.find('input').prop('value')).toEqual('Тестовый запрос');
    expect(component.find(Link).first().prop('aria-label')).toEqual('Очистить');
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with hasFindButton', () => {
    const onFocus = jest.fn();
    const onButtonClick = jest.fn();
    const component = mount(
      <SearchBar
        searchQuery='Тестовый запрос'
        placeholder='Найти'
        withClearButton
        hasFindButton
        onFocus={onFocus}
        onButtonClick={onButtonClick}
        buttonText='Отмена'
      />
    );
    expect(component).toMatchSnapshot();
    expect(onFocus).not.toHaveBeenCalled();

    component.find('input').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);

    expect(onButtonClick).not.toHaveBeenCalled();

    component.find('.button').prop('onClick')();
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should handle events correctly', () => {
    const handlers = {
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      onClear: jest.fn(),
      onSearchChange: jest.fn(),
      onSearchClick: jest.fn(),
      onSearchKeyDown: jest.fn(),
      onButtonClick: jest.fn(),
    };
    const component = mount(
      <SearchBar
        searchQuery='Тестовый запрос'
        placeholder='Найти'
        withClearButton
        buttonText='Отмена'
        {...handlers}
      />
    );

    for (const handler of Object.values(handlers)) {
      expect(handler).not.toBeCalled();
    }

    const searchField = component.find('input');
    searchField.simulate('click');
    expect(handlers.onSearchClick).toBeCalledTimes(1);
    searchField.simulate('change');
    expect(handlers.onSearchChange).toBeCalledTimes(1);
    searchField.simulate('focus');
    expect(handlers.onFocus).toBeCalledTimes(1);
    searchField.simulate('blur');
    expect(handlers.onBlur).toBeCalledTimes(1);
    searchField.simulate('keydown');
    expect(handlers.onSearchKeyDown).toBeCalledTimes(1);

    component.find(Link).first().simulate('click');
    expect(handlers.onClear).toBeCalledTimes(1);
  });

  it('should hide cancel button after outside click', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const WrapperComponent = () => (
      <div>
        <div className='outside' />
        <SearchBar onCancel={jest.fn()} />
      </div>
    );
    act(() => {
      render(<WrapperComponent />, container);
    });

    expect(container.querySelector(`.${cx('search-cancel')}`)).toBeDefined();
    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });
    expect(container.querySelector(`.${cx('search-cancel')}`)).toBeNull();

    document.body.removeChild(container);
  });
});
