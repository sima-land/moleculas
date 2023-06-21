import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import { createEvent, fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { SearchBar } from '../index';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

describe('SearchBar', () => {
  it('should renders properly with minimal props', () => {
    const onChange = jest.fn();
    const component = mount(<SearchBar onChange={onChange} />);
    expect(component).toMatchSnapshot();
    expect(component.find('.search-icon')).toHaveLength(1);
  });

  it('should renders properly with all props', () => {
    const onChange = jest.fn();
    const onBackClick = jest.fn();
    const onSearchClick = jest.fn();
    const onClearClick = jest.fn();
    const onCancelClick = jest.fn();
    const component = mount(
      <SearchBar
        value='Очень длинный запрос в поисковой строке'
        onChange={onChange}
        startButtons={[{ text: 'Назад', icon: ArrowLeftSVG, onClick: onBackClick }]}
        endButtons={[
          { text: 'Поиск', onClick: onSearchClick },
          { text: 'Отмена', onClick: onCancelClick },
        ]}
        withSearchIcon={false}
        inputMode='tel'
        onClear={onClearClick}
        description='150 324 предложений'
        placeholder='Найти'
      />,
    );
    expect(component).toMatchSnapshot();

    expect(component.find('.search-icon')).toHaveLength(0);
    expect(component.find('.search-field').prop('inputMode')).toBe('tel');
    expect(component.find('.search-field').prop('placeholder')).toBe('Найти');

    act(() => {
      component.find('.search-field').prop('onChange')({ target: { value: '123' } });
    });
    expect(onChange).toHaveBeenCalledTimes(1);

    act(() => {
      component.find('.clear-button').prop('onClick')();
      component.find('.before-field .button').prop('onClick')();
      component.find('.after-field .button').at(0).prop('onClick')();
      component.find('.after-field .button').at(1).prop('onClick')();
    });
    expect(onClearClick).toHaveBeenCalledTimes(1);
    expect(onBackClick).toHaveBeenCalledTimes(1);
    expect(onSearchClick).toHaveBeenCalledTimes(1);
    expect(onCancelClick).toHaveBeenCalledTimes(1);
  });

  it('should open and close dropdown on buttons handlers', () => {
    const onChange = jest.fn();
    const onCancelClick = jest.fn();
    const onSearchClick = jest.fn();
    const testEvent = jest.fn();
    const component = mount(
      <SearchBar
        value='Очень длинный запрос в поисковой строке'
        onChange={onChange}
        endButtons={[
          { text: 'Отмена', onClick: onCancelClick },
          { text: 'Поиск', onClick: onSearchClick },
        ]}
      />,
    );
    expect(component.find('.dropdown-container')).toHaveLength(0);

    act(() => {
      component.find('.narrow-screen .button').prop('onClick')();
    });
    component.update();

    expect(component.find('.dropdown-container')).toHaveLength(1);

    act(() => {
      component.find(DropdownItem).at(0).prop('onClick')(testEvent);
    });
    component.update();

    expect(onCancelClick).toHaveBeenCalledWith(testEvent);
    expect(component.find('.dropdown-container')).toHaveLength(0);
  });

  it('should close dropdown when resize window', () => {
    const onChange = jest.fn();
    const onCancelClick = jest.fn();
    const onSearchClick = jest.fn();
    const component = mount(
      <SearchBar
        value='Очень длинный запрос в поисковой строке'
        onChange={onChange}
        endButtons={[
          { text: 'Отмена', onClick: onCancelClick },
          { text: 'Поиск', onClick: onSearchClick },
        ]}
      />,
    );
    expect(component.find('.dropdown-container')).toHaveLength(0);

    act(() => {
      component.find('.narrow-screen .button').prop('onClick')();
    });
    component.update();
    expect(component.find('.dropdown-container')).toHaveLength(1);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    component.update();
    expect(component.find('.dropdown-container')).toHaveLength(0);
  });

  it('should close dropdown when outside click', () => {
    const onChange = jest.fn();
    const onCancelClick = jest.fn();
    const onSearchClick = jest.fn();

    const container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(
        <SearchBar
          value='Очень длинный запрос в поисковой строке'
          onChange={onChange}
          endButtons={[
            { text: 'Отмена', onClick: onCancelClick },
            { text: 'Поиск', onClick: onSearchClick },
          ]}
        />,
        container,
      );
    });
    expect(container.querySelectorAll('.dropdown-container')).toHaveLength(0);
    act(() => {
      container.querySelector('.narrow-screen .button').click();
    });
    expect(container.querySelectorAll('.dropdown-container')).toHaveLength(1);
    act(() => {
      container.querySelector('.search-field').click();
    });
    expect(container.querySelectorAll('.dropdown-container')).toHaveLength(0);

    ReactDOM.unmountComponentAtNode(container);
  });

  it('should handle "inputRef" prop', () => {
    const ref = createRef();

    mount(<SearchBar inputRef={ref} value='Запрос в поисковой строке' onChange={jest.fn()} />);

    expect(ref.current instanceof HTMLInputElement).toBe(true);
  });

  it('should prevent input blur by prevent input wrapper mouse down', () => {
    const { getByTestId } = render(
      <SearchBar value='Hello!' onChange={jest.fn()} onClear={jest.fn()} />,
    );

    fireEvent.focus(getByTestId('search-bar-input'));

    const event = createEvent.mouseDown(getByTestId('search-bar:input-wrapper'));

    expect(event.defaultPrevented).toBe(false);
    fireEvent(getByTestId('search-bar:input-wrapper'), event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('should NOT prevent input blur when its', () => {
    const { getByTestId } = render(
      <SearchBar value='Hello!' onChange={jest.fn()} onClear={jest.fn()} />,
    );

    const event = createEvent.mouseDown(getByTestId('search-bar:input-wrapper'));
    Object.defineProperty(event, 'target', {
      value: getByTestId('search-bar-input'),
    });
    fireEvent(getByTestId('search-bar:input-wrapper'), event);

    expect(event.defaultPrevented).toBe(false);
  });
});
