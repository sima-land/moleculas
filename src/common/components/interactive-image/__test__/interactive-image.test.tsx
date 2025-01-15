import { createRef } from 'react';
import { render } from '@testing-library/react';
import { InteractiveImage, Parts } from '../interactive-image';

describe('InteractiveImage', () => {
  it('Должен корректно обработать свойства и нарисовать компонент', () => {
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

  it('Должен взять ссылку', () => {
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

  it('Должен корректно обработать свойство "dotSize"', () => {
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

  it('Должен корректно нарисовать Parts.ImageAnchor', () => {
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

  it('Должна выдавать ошибку, когда и ImageAnchor, и Image находятся в дочерних элементах', () => {
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

  it('Должен корректно нарисовать точки в обертке', () => {
    const { queryAllByTestId } = render(
      <InteractiveImage>
        <Parts.Image src='https://www.images.com/123' />
        <div data-testid='wrapper'>
          <Parts.Point role='button' x={1} y={2} />
        </div>
      </InteractiveImage>,
    );

    expect(queryAllByTestId('interactive-image:image')).toHaveLength(1);
    expect(queryAllByTestId('wrapper')).toHaveLength(1);
    expect(queryAllByTestId('interactive-image:point')).toHaveLength(1);
  });
});
