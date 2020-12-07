import React, { useState } from 'react';
import { SearchBar } from '..';
import noop from 'lodash/noop';

const Template = args => {
  const [val, setVal] = useState('Плюшевый миш');
  return (
    <SearchBar
      {...args}
      searchQuery={val}
      onSearchChange={e => setVal(e.target.value)}
      onClear={() => setVal('')}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  withClearButton: false,
  onSearchClick: noop,
  onSearchKeyDown: noop,
  onFocus: noop,
  onBlur: noop,
  onClear: noop,
  buttonText: 'Отмена',
  onButtonClick: noop,
};
