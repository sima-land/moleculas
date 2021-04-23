import { TrackNumber } from '../';
import React from 'react';
import { mount } from 'enzyme';

it('should render and handle click correctly', async () => {
  const onCopy = jest.fn();
  const spyWriteText = jest.fn();
  const originalNavigator = window.navigator;

  Object.defineProperty(window.navigator, 'clipboard', {
    writable: true,
    value: {
      writeText: spyWriteText,
    },
  });

  const wrapper = mount(
    <TrackNumber
      item={{
        title: 'title',
        text: '123456',
      }}
      onCopy={onCopy}
    />
  );

  await wrapper.find('.track-number').simulate('click');

  expect(onCopy).toBeCalled();
  expect(spyWriteText).toBeCalled();

  Object.defineProperty(window.navigator, 'clipboard', {
    value: {
      writeText: originalNavigator,
    },
  });
});
