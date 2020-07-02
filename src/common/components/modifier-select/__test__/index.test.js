import React from 'react';
import { shallow } from 'enzyme';
import ModifierSelect, { cx } from '../index';

describe('<ModifierSelect />', () => {
  const name = 'Название модификатора';
  const className = 'test-class';
  const color = 'red';
  const img = 'https://sima-land.ru/test-img.png';
  let onShowModal;

  beforeEach(() => {
    onShowModal = jest.fn();
  });

  it('should match a snapshot', () => {
    const wrapper = shallow(
      <ModifierSelect
        name={name}
        className={className}
        color={color}
        img={img}
        onClick={onShowModal}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a name', () => {
    const wrapper = shallow(<ModifierSelect name={name} />);

    expect(wrapper.find(`.${cx('name')}`).text()).toBe(name);
  });

  it('should pass prop the className to wrapper', () => {
    const wrapper = shallow(<ModifierSelect name={name} className={className} />);

    expect(wrapper.find(`.${cx('wrap')}`).prop('className')).toContain(className);
  });

  it('should handle click to a component', () => {
    const wrapper = shallow(
      <ModifierSelect name={name} onClick={onShowModal} />
    );

    expect(onShowModal).toBeCalledTimes(0);

    wrapper.find(`.${cx('wrap')}`).simulate('click');
    expect(onShowModal).toBeCalledTimes(1);
  });

  it('should handle press enter', () => {
    const wrapper = shallow(
      <ModifierSelect name={name} onClick={onShowModal} />
    );

    expect(onShowModal).toBeCalledTimes(0);

    wrapper.find(`.${cx('wrap')}`).simulate('keydown', { keyCode: 13 });
    expect(onShowModal).toBeCalledTimes(1);

    wrapper.find(`.${cx('wrap')}`).simulate('keydown', {});
    expect(onShowModal).toBeCalledTimes(1);
  });

  it('shouldn`t render an adornment if a component doesn`t contain a color or an img', () => {
    const wrapper = shallow(
      <ModifierSelect name={name} />
    );

    expect(wrapper.find(`.${cx('adornment')}`)).toHaveLength(0);
  });

  it('should render a color', () => {
    const wrapper = shallow(
      <ModifierSelect name={name} color={color} />
    );

    expect(wrapper.find(`.${cx('color')}`).prop('style')).toEqual({
      backgroundColor: 'red',
    });
  });

  it('should render an img', () => {
    const wrapper = shallow(
      <ModifierSelect name={name} img={img} />
    );

    expect(wrapper.find(`.${cx('adornment')} img`).props()).toStrictEqual({
      src: img,
      width: 32,
      height: 32,
      alt: '',
    });
  });

  it('should render only a color when a component contains a color and an img', () => {
    const wrapper = shallow(
      <ModifierSelect name={name} color={color} img={img} />
    );

    expect(wrapper.find(`.${cx('color')}`)).toHaveLength(1);
    expect(wrapper.find(`.${cx('adornment')} img`)).toHaveLength(0);
  });
});
