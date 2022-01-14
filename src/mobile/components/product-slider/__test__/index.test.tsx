import React from 'react';
import { render } from '@testing-library/react';
import { ProductSlider } from '..';
import { ProductInfo, Parts } from '../../../../common/components/product-info';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/favorite';
import QuickView2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/quick-view-2';
import { items } from './test-items';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { Badge } from '../../../../common/components/badge';

describe('<ProductSlider />', () => {
  it('should renders correctly', () => {
    const spies = {
      imageClick: jest.fn(),
      favoriteClick: jest.fn(),
      quickViewClick: jest.fn(),
      badgeClick: jest.fn(),
      titleClick: jest.fn(),
      trademarkClick: jest.fn(),
    };

    const { container } = render(
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
  });
});
