import { fireEvent, render } from '@testing-library/react';
import { ProductImage } from '..';
import { createRef } from 'react';

describe('ProductImage', () => {
  it('should render img', () => {
    const { container } = render(<ProductImage src='/public/test.jpeg' alt='Test Image' />);
    const img = container.querySelector<HTMLImageElement>('.root.overlay img')!;

    expect(img instanceof HTMLImageElement).toBe(true);
    expect(img.src).toBe('http://localhost/public/test.jpeg');
    expect(img.alt).toBe('Test Image');
  });

  it('should pass style and className to root element', () => {
    const { getByTestId } = render(
      <ProductImage src='/public/test.jpeg' style={{ marginTop: '20px' }} className='my-image' />,
    );

    expect(getByTestId('product-image').style.marginTop).toBe('20px');
    expect(getByTestId('product-image').classList.contains('my-image')).toBe(true);
  });

  it('should handle "rootRef" and "imageRef"', () => {
    const rootRef = createRef<HTMLDivElement>();
    const imageRef = createRef<HTMLImageElement>();

    const { getByTestId } = render(
      <ProductImage src='/public/test.jpeg' rootRef={rootRef} imageRef={imageRef} />,
    );

    expect(rootRef.current === getByTestId('product-image')).toBe(true);
    expect(rootRef.current instanceof HTMLDivElement).toBe(true);
    expect(imageRef.current instanceof HTMLImageElement).toBe(true);
  });

  it('should handle "imageProps"', () => {
    const spy = jest.fn();

    const { container } = render(
      <ProductImage
        src='/public/test.jpeg'
        imageProps={{
          id: 'the-image',
          className: 'class0 class1',
          style: { objectFit: 'contain' },
          onError: spy,
        }}
      />,
    );

    const img = container.querySelector<HTMLImageElement>('.root.overlay img')!;

    expect(img.id).toBe('the-image');
    expect(img.classList.contains('class0')).toBe(true);
    expect(img.classList.contains('class1')).toBe(true);
    expect(img.style.objectFit).toBe('contain');
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.error(img);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "adult"', () => {
    const { container } = render(<ProductImage adult src='/public/test.jpeg' />);

    const img = container.querySelector<HTMLImageElement>('.root.overlay img')!;

    expect(img.classList.contains('adult')).toBe(true);
    expect(container.querySelectorAll('svg.adult-icon')).toHaveLength(1);
  });

  it('should handle "adultContent"', () => {
    const { container } = render(
      <ProductImage
        adult
        adultContent={<div className='adult-content'>This is mature content!</div>}
        src='/public/test.jpeg'
      />,
    );

    const img = container.querySelector<HTMLImageElement>('.root.overlay img')!;

    expect(img.classList.contains('adult')).toBe(true);
    expect(container.querySelectorAll('svg.adult-icon')).toHaveLength(0);
    expect(container.querySelectorAll('.adult-content')).toHaveLength(1);
    expect(container.textContent).toBe('This is mature content!');
  });

  it('should render stub for failed images', () => {
    const { container, rerender } = render(<ProductImage src='/public/test.jpeg' />);

    const img = container.querySelector<HTMLImageElement>('.root.overlay img')!;
    expect(container.querySelectorAll('.broken-stub')).toHaveLength(0);

    fireEvent.error(img);
    expect(container.querySelectorAll('.broken-stub')).toHaveLength(1);

    rerender(<ProductImage src='/public/test2.jpeg' />);
    expect(container.querySelectorAll('.broken-stub')).toHaveLength(0);
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(
      <ProductImage src='/public/test.jpeg' data-testid='foobar' />,
    );

    expect(queryAllByTestId('product-image')).toHaveLength(0);
    expect(queryAllByTestId('foobar')).toHaveLength(1);
  });
});
