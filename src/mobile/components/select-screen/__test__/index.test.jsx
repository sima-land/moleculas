import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import SelectScreen from '../index';

describe('<SelectScreen />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <SelectScreen />
    );

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
      />
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
      />
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
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
