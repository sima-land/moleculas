import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { SelectScreen, SelectScreenLayout, SelectScreenOption } from '..';
import { Screen } from '@sima-land/ui-nucleons/screen';
import { fireEvent, render } from '@testing-library/react';

describe('<SelectScreen />', () => {
  it('should render without props', () => {
    const wrapper = mount(<SelectScreen />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <SelectScreen
        title='Районы'
        items={[
          'Верх-Исетский',
          'Чкаловский',
          'Железнодорожный',
          'Кировский',
          'Орджоникидзевский',
          'Октябрьский',
          'Ленинский',
        ]}
        getItemName={String}
        onItemClick={spy}
        isItemSelected={item => item === 'Кировский'}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('button.item').at(2).prop('onClick')();
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith('Железнодорожный');
  });

  it('should handle "displayItem" prop', () => {
    const wrapper = mount(
      <SelectScreen
        title='Валюта'
        items={[
          { shortName: 'RUB', name: 'Российский рубль' },
          { shortName: 'USD', name: 'Американский доллар' },
          { shortName: 'EUR', name: 'Единая европейская валюта' },
          { shortName: 'BYN', name: 'Белорусский рубль' },
          { shortName: 'UAH', name: 'Украинская гривна' },
          { shortName: 'KZT', name: 'Казахстанский тенге' },
        ]}
        isItemSelected={item => item.shortName === 'RUB'}
        displayItem={(item, { isSelected }) => (
          <div className={isSelected ? 'item is-selected' : 'item'}>
            {item.name} ({item.shortName})
          </div>
        )}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle miss "getItemName" prop', () => {
    const wrapper = mount(
      <SelectScreen
        title='Валюта'
        items={[
          { name: 'Российский рубль' },
          { name: 'Американский доллар' },
          { name: 'Единая европейская валюта' },
          { name: 'Белорусский рубль' },
          { name: 'Украинская гривна' },
          { name: 'Казахстанский тенге' },
        ]}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onClose" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <SelectScreen
        title='Валюта'
        items={[
          { name: 'Российский рубль' },
          { name: 'Американский доллар' },
          { name: 'Единая европейская валюта' },
          { name: 'Белорусский рубль' },
          { name: 'Украинская гривна' },
          { name: 'Казахстанский тенге' },
        ]}
        onClose={spy}
      />,
    );

    expect(spy).toBeCalledTimes(0);
    act(() => {
      wrapper.find('button[data-testid="screen:close"]').simulate('click');
    });
    wrapper.update();
    expect(spy).toBeCalledTimes(1);
  });
});

describe('select screen parts', () => {
  it('should works properly', () => {
    const items = ['Foo', 'Bar', 'Baz'];
    const spy = jest.fn();

    const { container, getAllByTestId } = render(
      <Screen>
        <Screen.Body>
          <SelectScreenLayout style={{ padding: '16px 0' }}>
            {items.map((item, id) => (
              <SelectScreenOption key={id} selected={item === 'Bar'} onClick={spy}>
                {item}
              </SelectScreenOption>
            ))}
          </SelectScreenLayout>
        </Screen.Body>
      </Screen>,
    );

    expect(container).toMatchSnapshot();
    expect(getAllByTestId('select-screen:option')).toHaveLength(3);

    expect(spy).toBeCalledTimes(0);
    fireEvent.click(getAllByTestId('select-screen:option')[0]);
    expect(spy).toBeCalledTimes(1);
  });
});
