import { createRef } from 'react';
import { render } from '@testing-library/react';
import { InteractiveImage, Parts } from '../interactive-image';

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

  it('should handle Parts.ImageAnchor as a child', () => {
    const { queryAllByTestId, getByTestId } = render(
      <InteractiveImage>
        <Parts.ImageAnchor href='https://www.site.com' className='my-class'>
          <Parts.Image src='https://www.images.com/123' />
        </Parts.ImageAnchor>
        <Parts.Point role='button' x={1} y={2} />
        <Parts.Point role='button' x={2} y={3} />
        <Parts.Point role='button' x={3} y={4} />
      </InteractiveImage>,
    );

    expect(queryAllByTestId('interactive-image:image-anchor')).toHaveLength(1);
    expect(queryAllByTestId('interactive-image:image')).toHaveLength(1);
    expect(queryAllByTestId('interactive-image:point')).toHaveLength(3);

    const imageAnchor = getByTestId('interactive-image:image-anchor') as HTMLAnchorElement;
    expect(imageAnchor.href).toBe('https://www.site.com/');
    expect(imageAnchor.classList.contains('image-anchor')).toBe(true);
    expect(imageAnchor.classList.contains('my-class')).toBe(true);
  });

  it('should throw error when both ImageAnchor and Image are in children', () => {
    expect(() => {
      render(
        <InteractiveImage>
          <Parts.ImageAnchor href='https://www.site.com' className='my-class'>
            <Parts.Image src='https://www.images.com/123' />
          </Parts.ImageAnchor>
          <Parts.Image src='https://www.images.com/123' />
        </InteractiveImage>,
      );
    }).toThrow();
  });
});
