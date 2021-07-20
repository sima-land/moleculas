import React from 'react';
import { mount } from 'enzyme';
import { ProductActionsAlert } from '..';
import { noop } from 'lodash';
import StatementSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/statement';

describe('ProductActionsContent', () => {
  it('renders properly', () => {
    const wrapper = mount(
      <ProductActionsAlert
        buttons={[
          { text: 'text', href: 'href', onClick: noop, icon: <StatementSVG /> },
          { text: 'text', href: 'href' },
          { text: 'text' },
        ]}
        alertProps={{
          title: 'title',
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('handlers should works properly', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <ProductActionsAlert
        buttons={[
          { text: 'text', href: 'href', onClick: noop, icon: <StatementSVG /> },
          { text: 'text', href: 'href' },
          { text: 'text' },
        ]}
        onClose={onClose}
      />
    );
    expect(onClose).not.toHaveBeenCalled();
    wrapper.find('CleanButton').at(0).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
