import { render } from '@testing-library/react';
import React from 'react';
import { InteractiveImage, Parts } from '..';

describe('InteractiveImage', () => {
  it('should handle props', () => {
    const { asFragment, queryAllByTestId } = render(
      <InteractiveImage>
        <Parts.Image src='https://www.images.com/123' />
        <Parts.Point role='button' x={1} y={2} />
        <Parts.Point role='button' x={2} y={3} />
        <Parts.Point role='button' x={3} y={4} />
        <Parts.Point role='button' x={4} y={5} />
      </InteractiveImage>,
    );

    expect(asFragment()).toMatchSnapshot();

    expect(queryAllByTestId('interactive-image:image')).toHaveLength(1);
    expect(queryAllByTestId('interactive-image:point')).toHaveLength(4);
  });
});
