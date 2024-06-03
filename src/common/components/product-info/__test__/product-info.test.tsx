import { fireEvent, render } from '@testing-library/react';
import { ProductInfo } from '../product-info';
import { Parts } from '../parts';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import MagnifierPlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';
import { Badge } from '../../badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';

describe('ProductInfo', () => {
  it('should render all parts', () => {
    const { container, queryAllByTestId } = render(
      <ProductInfo>
        <Parts.Image src='/public/test.png' href='https://sima-land.ru/product'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />

        <Parts.Title href='https://sima-land.ru/product'>
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://sima-land.ru/trademark'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.CartControl
            stepText='По 1 шт'
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(queryAllByTestId('product-image')).toHaveLength(1);
    expect(queryAllByTestId('badge')).toHaveLength(4);
    expect(queryAllByTestId('product-info:price')).toHaveLength(1);
    expect(queryAllByTestId('product-info:old-price')).toHaveLength(1);
    expect(queryAllByTestId('product-info:name-link')).toHaveLength(1);
    expect(queryAllByTestId('product-info:trademark-link')).toHaveLength(1);
    expect(queryAllByTestId('rating-counter')).toHaveLength(1);
    expect(queryAllByTestId('stepper')).toHaveLength(1);
    expect(queryAllByTestId('product-info:cart-step')).toHaveLength(1);
    expect(queryAllByTestId('product-info:cart-info')).toHaveLength(1);

    expect(container.textContent).toContain('-56%');
    expect(container.textContent).toContain('3 по цене 2');
    expect(container.textContent).toContain('Товар месяца');
    expect(container.textContent).toContain('Акция');
    expect(container.textContent).toContain('Земляника садовая Сан Андреас');
    expect(container.textContent).toContain('Арт. 9073174');
    expect(container.textContent).toContain('Торговая марка Сима-ленд');
    expect(container.textContent).toContain('По 1 шт');
    expect(container.textContent).toContain('Комплектация + 50 ₽ при покупке до 20 шт');
  });

  it('should hide parts for unavailable product', () => {
    const { queryAllByTestId } = render(
      <ProductInfo restriction='unavailable'>
        <Parts.Image src='/public/test.png' href='https://sima-land.ru/product'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />

        <Parts.Title href='https://sima-land.ru/product'>
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://sima-land.ru/trademark'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.CartControl
            stepText='По 1 шт'
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(queryAllByTestId('product-image')).toHaveLength(1);
    expect(queryAllByTestId('badge')).toHaveLength(4);
    expect(queryAllByTestId('product-info:price')).toHaveLength(0);
    expect(queryAllByTestId('product-info:old-price')).toHaveLength(0);
    expect(queryAllByTestId('product-info:name-link')).toHaveLength(1);
    expect(queryAllByTestId('product-info:trademark-link')).toHaveLength(0);
    expect(queryAllByTestId('rating-counter')).toHaveLength(1);
    expect(queryAllByTestId('stepper')).toHaveLength(1);
    expect(queryAllByTestId('product-info:cart-step')).toHaveLength(1);
    expect(queryAllByTestId('product-info:cart-info')).toHaveLength(1);
  });

  it('should hide parts for adult product', () => {
    const { queryAllByTestId } = render(
      <ProductInfo restriction='adult'>
        <Parts.Image src='/public/test.png' href='https://sima-land.ru/product'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />

        <Parts.Title href='https://sima-land.ru/product'>
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://sima-land.ru/trademark'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.CartControl
            stepText='По 1 шт'
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(queryAllByTestId('product-image')).toHaveLength(1);
    expect(queryAllByTestId('badge')).toHaveLength(0);
    expect(queryAllByTestId('product-info:price')).toHaveLength(1);
    expect(queryAllByTestId('product-info:old-price')).toHaveLength(0);
    expect(queryAllByTestId('product-info:name-link')).toHaveLength(0);
    expect(queryAllByTestId('product-info:trademark-link')).toHaveLength(0);
    expect(queryAllByTestId('rating-counter')).toHaveLength(0);
    expect(queryAllByTestId('stepper')).toHaveLength(1);
    expect(queryAllByTestId('product-info:cart-step')).toHaveLength(1);
    expect(queryAllByTestId('product-info:cart-info')).toHaveLength(1);
  });

  it('should pass any children when "strict" is false', () => {
    const { container } = render(
      <ProductInfo strict={false}>
        <Parts.Title href='https://my-site.com'>My product!</Parts.Title>
        <Parts.Image src='https://my-site.com/images/1' href='https://my-site.com' />
        <div>My custom child element!</div>
      </ProductInfo>,
    );

    expect(container.textContent).toBe('My product!My custom child element!');
  });

  it('should render add to waiting list button', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <ProductInfo restriction='unavailable'>
        <Parts.Image src='/public/test.jpg' href='https://www.sima-land.ru'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices
          price={250.48}
          oldPrice={320.96}
          currencyGrapheme='₽'
          unavailableReason='Товара нет в наличии'
        />

        <Parts.Title href='https://www.sima-land.ru'>
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://www.sima-land.ru'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.WaitListAddButton onClick={spy} />
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('product-info:wait-list-add-button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render link to waiting list', () => {
    const { getByTestId } = render(
      <ProductInfo restriction='unavailable'>
        <Parts.Image src='/public/test.jpg' href='https://www.sima-land.ru'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices
          price={250.48}
          oldPrice={320.96}
          currencyGrapheme='₽'
          unavailableReason='Товара нет в наличии'
        />

        <Parts.Title href='https://www.sima-land.ru'>
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://www.sima-land.ru'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.WaitListAddedLink href='https://wait-list.com' />
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(getByTestId('product-info:wait-list-added-link').getAttribute('href')).toBe(
      'https://wait-list.com',
    );
  });

  it('should render adult confirm button', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <ProductInfo restriction='adult'>
        <Parts.Image src='/images/product.png' href='https://www.sima-land.ru'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices
          price={250.48}
          oldPrice={320.96}
          currencyGrapheme='₽'
          unavailableReason='Товар доступен только для юридических лиц'
        />

        <Parts.Title href='https://www.sima-land.ru'>
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://www.sima-land.ru'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.AdultConfirmButton onClick={spy} />
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('product-info:adult-confirm-button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render hover slider when src is an array', () => {
    const { queryAllByTestId } = render(
      <ProductInfo>
        <Parts.Image src={['/foo.png', '/bar.png', '/baz.png']} href='https://www.sima-land.ru'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />

        <Parts.Title href='https://www.sima-land.ru'>
          Ягоды садовые МИКС свежий урожай сезон, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://www.sima-land.ru'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.CartControl
            stepText='По 1 шт'
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(queryAllByTestId('hover-slider')).toHaveLength(1);
  });

  it('should render cart control loading', () => {
    const { container, queryAllByTestId } = render(
      <ProductInfo>
        <Parts.Image src='/foobar.png' href='https://www.sima-land.ru'>
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />

        <Parts.Title href='https://www.sima-land.ru'>
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://www.sima-land.ru'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.CartControl
            loading
            stepText='По 1 шт'
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(queryAllByTestId('stepper')).toHaveLength(0);
    expect(container.textContent).not.toContain('По 1 шт');
    expect(container.textContent).not.toContain('Комплектация + 50 ₽ при покупке до 20 шт');
  });
});
