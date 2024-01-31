import { render } from '@testing-library/react';
import { ProductSlider } from '../product-slider';
import { ProductInfo, Parts } from '../../../../common/components/product-info';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import QuickView2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/QuickView2';
import { items } from './test-items';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { Badge } from '../../../../common/components/badge';
import { IntersectionMock } from '@sima-land/ui-nucleons/hooks/use-intersection/test-utils';

describe('ProductSlider', () => {
  it('should renders correctly', () => {
    const spies = {
      imageClick: jest.fn(),
      favoriteClick: jest.fn(),
      quickViewClick: jest.fn(),
      badgeClick: jest.fn(),
      titleClick: jest.fn(),
      trademarkClick: jest.fn(),
    };

    const { container, queryAllByTestId } = render(
      <ProductSlider>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} onClick={spies.imageClick}>
              <Parts.ImageButton
                icon={FavoriteSVG}
                hint='Добавить в избранное'
                onClick={spies.favoriteClick}
                data-testid='favorite-button'
              />
              <Parts.ImageButton
                icon={QuickView2SVG}
                hint='Быстрый просмотр'
                onClick={spies.quickViewClick}
                data-testid='quick-view-button'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} onClick={spies.badgeClick} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url} onClick={spies.titleClick}>
              {item.name}
            </Parts.Title>

            {item.trademark && (
              <Parts.TrademarkLink href={item.trademark.url} onClick={spies.trademarkClick}>
                {item.trademark.name}
              </Parts.TrademarkLink>
            )}

            <Parts.Footer>
              <Parts.CartControl
                stepText='По 5 шт'
                markupText='Комплектация + 50 ₽ при покупке до 20 шт'
              >
                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
              </Parts.CartControl>
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductSlider>,
    );

    expect(container).toMatchSnapshot();
    expect(queryAllByTestId('product-slider:item')).toMatchSnapshot();
  });
});

describe('intersections', () => {
  const intersectionMock = new IntersectionMock();

  beforeAll(() => {
    intersectionMock.apply();
  });

  afterAll(() => {
    intersectionMock.restore();
  });

  it('should call "onNeedRequest" prop', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <ProductSlider onNeedRequest={spy}>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>
          </ProductInfo>
        ))}
      </ProductSlider>,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    intersectionMock.changeElementState({
      target: getByTestId('product-slider:root'),
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call "onInViewport" prop', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <ProductSlider onInViewport={spy}>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url} />

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>
          </ProductInfo>
        ))}
      </ProductSlider>,
    );

    expect(spy).toHaveBeenCalledTimes(0);

    intersectionMock.changeElementState({
      target: getByTestId('product-slider:root'),
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
