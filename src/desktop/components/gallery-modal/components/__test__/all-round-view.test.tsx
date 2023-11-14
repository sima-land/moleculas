import { AllRoundView } from '../all-round-view';
import { useImagesLoad } from '../../utils';
import { act, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../../utils', () => {
  const original = jest.requireActual('../../utils');

  return {
    ...original,
    __esModule: true,
    useImagesLoad: jest.fn(() => 'done'),
  };
});

describe('AllRoundView', () => {
  afterEach(() => {
    jest.useRealTimers();
  });
  const testPhotos = [
    'https://img.com/0',
    'https://img.com/1',
    'https://img.com/2',
    'https://img.com/3',
    'https://img.com/4',
    'https://img.com/5',
    'https://img.com/6',
    'https://img.com/7',
    'https://img.com/8',
    'https://img.com/9',
  ];

  it('should render stub for failed img set', () => {
    (useImagesLoad as jest.Mock).mockReturnValue('fail');

    const { queryAllByTestId } = render(<AllRoundView photos={['broken-url']} />);

    expect(queryAllByTestId('gallery-modal:360-current-photo')).toHaveLength(0);

    (useImagesLoad as jest.Mock).mockReturnValue('done');
  });

  it('should renders correctly default state', () => {
    const { container, getByTestId } = render(<AllRoundView photos={testPhotos} />);

    fireEvent.click(getByTestId('gallery-modal:toggle-autoplay-button'));

    expect(container).toMatchSnapshot();
  });

  it('should change image src every 1000 / 30 ms', () => {
    jest.useFakeTimers();

    const { getByTestId } = render(<AllRoundView photos={testPhotos} />);

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[0],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[1],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[2],
    );

    // stop autoplay
    fireEvent.click(getByTestId('gallery-modal:toggle-autoplay-button'));

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[2],
    );
  });

  it('should handle pointer down on turn left button', () => {
    jest.useFakeTimers();

    const { getByTestId } = render(<AllRoundView photos={testPhotos} />);

    fireEvent.pointerDown(getByTestId('gallery-modal:360-turn-left-button'));

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[0],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[9],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[8],
    );
  });

  it('should handle pointer down on turn right button', () => {
    jest.useFakeTimers();

    const { getByTestId } = render(<AllRoundView photos={testPhotos} />);

    fireEvent.pointerDown(getByTestId('gallery-modal:360-turn-right-button'));

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[0],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[1],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[2],
    );
  });

  it('should handle autoplay button click', () => {
    jest.useFakeTimers();

    const { getByTestId } = render(<AllRoundView photos={testPhotos} />);

    fireEvent.pointerDown(getByTestId('gallery-modal:360-turn-right-button'));

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[0],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[1],
    );

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[2],
    );

    // autoplay button click
    fireEvent.click(getByTestId('gallery-modal:toggle-autoplay-button'));

    act(() => {
      jest.advanceTimersByTime(1000 / 30 + 10);
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[3],
    );
  });

  it('should show/hide hint', () => {
    const { getByTestId, queryAllByTestId } = render(<AllRoundView photos={testPhotos} />);

    expect(queryAllByTestId('hint')).toHaveLength(0);

    fireEvent.mouseEnter(getByTestId('gallery-modal:toggle-autoplay-button'));

    expect(queryAllByTestId('hint')).toHaveLength(1);

    fireEvent.mouseLeave(getByTestId('gallery-modal:toggle-autoplay-button'));

    expect(queryAllByTestId('hint')).toHaveLength(0);
  });

  it('should handle image pointerdown, window pointerup', () => {
    const { getByTestId } = render(<AllRoundView photos={testPhotos} />);

    act(() => {
      getByTestId('gallery-modal:360-current-photo').dispatchEvent(
        new Event('pointerdown', { clientX: 10 } as any),
      );
    });

    expect(getByTestId('gallery-modal:360-current-photo').style.touchAction).toBe('none');

    act(() => {
      window.dispatchEvent(new Event('pointerup'));
    });

    expect(getByTestId('gallery-modal:360-current-photo').style.touchAction).toBe('');
  });

  it('should handle window pointerup', () => {
    jest.useFakeTimers();

    jest.spyOn(HTMLImageElement.prototype, 'clientWidth', 'get').mockImplementation(() => 100);
    jest.spyOn(HTMLImageElement.prototype, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          left: 0,
        } as any),
    );

    const { getByTestId } = render(<AllRoundView photos={testPhotos} />);

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[0],
    );

    // move without pointer down
    act(() => {
      window.dispatchEvent(new MouseEvent('pointermove', { clientX: 20 } as any));
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[0],
    );

    // pointer down
    act(() => {
      getByTestId('gallery-modal:360-current-photo').dispatchEvent(
        new MouseEvent('pointerdown', { clientX: 2 }),
      );
    });

    // move
    act(() => {
      window.dispatchEvent(new MouseEvent('pointermove', { clientX: 93 } as any));
    });

    expect(getByTestId('gallery-modal:360-current-photo').getAttribute('src')).toEqual(
      testPhotos[9],
    );
  });

  it('should blur active element on pointer down', async () => {
    const { getByTestId } = render(
      <>
        <input type='text' data-testid='test-input' />
        <AllRoundView
          photos={[
            'http://images.com/1',
            'http://images.com/2',
            'http://images.com/3',
            'http://images.com/4',
            'http://images.com/5',
          ]}
        />
      </>,
    );

    await userEvent.click(getByTestId('test-input'));

    expect(document.activeElement === getByTestId('test-input')).toBe(true);

    fireEvent.pointerDown(getByTestId('gallery-modal:360-current-photo'));

    expect(document.activeElement === document.body).toBe(true);
  });

  it('should not throw on pointerdown when document.activeElement is null', () => {
    const { getByTestId } = render(
      <>
        <AllRoundView
          photos={[
            'http://images.com/1',
            'http://images.com/2',
            'http://images.com/3',
            'http://images.com/4',
            'http://images.com/5',
          ]}
        />
      </>,
    );

    const descriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'activeElement');

    if (!descriptor) {
      throw Error('No descriptor for Document.prototype.activeElement');
    }

    Object.defineProperty(document, 'activeElement', { value: null });
    expect(document.activeElement === null).toBe(true);

    expect(() => {
      fireEvent.pointerDown(getByTestId('gallery-modal:360-current-photo'));
    }).not.toThrow();

    Object.defineProperty(Document.prototype, 'activeElement', descriptor);
  });
});
