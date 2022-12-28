import React, { createRef } from 'react';
import { render } from '@testing-library/react';
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

  it('should take ref', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <InteractiveImage ref={ref} data-testid='test-root'>
        <Parts.Image src='https://www.images.com/123' />
        <Parts.Point role='button' x={1} y={2} />
        <Parts.Point role='button' x={2} y={3} />
        <Parts.Point role='button' x={3} y={4} />
        <Parts.Point role='button' x={4} y={5} />
      </InteractiveImage>,
    );

    expect(ref.current).toBe(getByTestId('test-root'));
  });

  it('should handle "dotSize" prop', () => {
    const { getByTestId } = render(
      <InteractiveImage dotSize='unset' data-testid='interactive-image'>
        <Parts.Image src='https://www.images.com/123' />
        <Parts.Point role='button' x={1} y={2} />
        <Parts.Point role='button' x={2} y={3} />
        <Parts.Point role='button' x={3} y={4} />
        <Parts.Point role='button' x={4} y={5} />
      </InteractiveImage>,
    );

    expect(getByTestId('interactive-image').classList.contains('dot-size-unset')).toBe(true);
  });
});
