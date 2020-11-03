import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { useControlTooltip } from '../helpers';

describe('useControlTooltip()', () => {
  let Component = () => {
    const {
      tooltipRef,
      onHoverQuickViewButton,
      onLeaveQuickViewButton,
    } = useControlTooltip();

    return (
      <>
        <div
          className='button'
          onMouseEnter={onHoverQuickViewButton}
          onMouseLeave={onLeaveQuickViewButton}
        />
        <div ref={tooltipRef} className='tooltip' />
      </>
    );
  };

  it('onHoverQuickViewButton and onLeaveQuickViewButton set correct styles for tooltip', () => {
    const component = mount(<Component />);
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('');
    expect(component.find('.tooltip').getDOMNode().style.top).toEqual('');
    expect(component.find('.tooltip').getDOMNode().style.right).toEqual('');

    const button = component.find('.button');
    Object.defineProperty(global.window, 'scrollY', { value: 50 });

    button.prop('onMouseEnter')({
      currentTarget: {
        getBoundingClientRect: () => ({ top: 55, left: 88 }),
      },
    });
    component.update();
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('1');
    expect(component.find('.tooltip').getDOMNode().style.top).toEqual('117px');

    button.prop('onMouseLeave')();
    component.update();
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('0');
  });

  it('mousedown and mouseup listeners should work properly', () => {
    const component = mount(<Component />);
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('');

    const button = component.find('.button');

    act(() => {
      button.simulate('mouseenter');
    });
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('1');

    // Проверяем скрытие тултипа при mousedown и невозможности его показать при наведении.
    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown'));
    });
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('0');

    act(() => {
      button.simulate('mouseenter');
    });
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('0');

    // Проверяем возможность показать тултип при наведении после mouseup.
    act(() => {
      document.dispatchEvent(new MouseEvent('mouseup'));
    });
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('0');

    act(() => {
      button.simulate('mouseenter');
    });
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('1');
  });

  it('without tooltipRef', () => {
    Component = () => {
      const {
        onHoverQuickViewButton,
        onLeaveQuickViewButton,
      } = useControlTooltip();
      return (
        <>
          <div
            className='button'
            onMouseEnter={onHoverQuickViewButton}
            onMouseLeave={onLeaveQuickViewButton}
          />
          <div className='tooltip' />
        </>
      );
    };
    const component = mount(<Component />);
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('');
    const button = component.find('.button');

    act(() => {
      button.simulate('mouseenter');
    });
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('');

    act(() => {
      button.simulate('mouseleave');
    });
    expect(component.find('.tooltip').getDOMNode().style.opacity).toEqual('');
  });
});
