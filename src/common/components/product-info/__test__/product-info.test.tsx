import { render, fireEvent } from '@testing-library/react';
import { ProductInfo } from '../product-info';
import { Parts } from '../parts';
import { Badge, BadgeProps } from '../../badge';
import QuickViewSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';
import { Button } from '@sima-land/ui-nucleons/button';
import { Stepper } from '@sima-land/ui-nucleons/stepper';

const normalizePrice = (s: string): string => s.replace(/\s+/g, '').replace(',', '.');

const badges: BadgeProps[] = [
  { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
  { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
  { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
  { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
];

const data = {
  name: 'Some product',
  url: 'https://www.products.com/some-product',
  imageSrc: 'https://www.images.com/some-product/1',
  price: 23476.23,
  oldPrice: 25000,
  currencyGrapheme: '$',
  trademark: { name: 'Test Trademark', url: 'https://www.test-trademark.ru/' },
  badges,
  cart: {
    stepInfo: 'По 7 шт',
    markupInfo: 'Комплектация + 50 ₽ при покупке до 20 шт',
  },
} as const;

describe('ProductInfo', () => {
  describe('regular content', () => {
    const spies = {
      imageClick: jest.fn(),
      quickViewClick: jest.fn(),
      badgeClick: jest.fn(),
      titleClick: jest.fn(),
      trademarkClick: jest.fn(),
    };

    const template = (
      <ProductInfo>
        <Parts.Image href={data.url} src={data.imageSrc} onClick={spies.imageClick}>
          <Parts.ImageButton
            icon={QuickViewSVG}
            onClick={spies.quickViewClick}
            data-testid='test-favorite-button'
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={QuickViewSVG}
            onClick={spies.quickViewClick}
            data-testid='quick-view-button'
          />
        </Parts.Image>

        <Parts.Badges>
          {data.badges.map((badge, index) => (
            <Badge key={index} {...badge} onClick={() => spies.badgeClick(badge)} />
          ))}
        </Parts.Badges>

        <Parts.Prices
          price={data.price}
          oldPrice={data.oldPrice}
          currencyGrapheme={data.currencyGrapheme}
        />

        <Parts.Title href={data.url} onClick={spies.titleClick}>
          {data.name}
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 123456</Parts.SecondaryInfo>

        <Parts.TrademarkLink href={data.trademark.url} onClick={spies.trademarkClick}>
          {data.trademark.name}
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.8} reviewCount={943} />

        <Parts.Footer>
          <Parts.CartControl stepText={data.cart.stepInfo} markupText={data.cart.markupInfo}>
            <Button size='s' data-testid='test-add-to-cart-button'>
              В корзину
            </Button>
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>
    );

    it('should match snapshot', () => {
      const { container } = render(template);

      expect(container).toMatchSnapshot();

      expect(spies.imageClick).toHaveBeenCalledTimes(0);
      expect(spies.quickViewClick).toHaveBeenCalledTimes(0);
      expect(spies.badgeClick).toHaveBeenCalledTimes(0);
      expect(spies.titleClick).toHaveBeenCalledTimes(0);
      expect(spies.trademarkClick).toHaveBeenCalledTimes(0);
    });

    it('image-link click', () => {
      const { getByTestId } = render(template);

      expect(getByTestId('product-info:image-link').getAttribute('href')).toBe(data.url);
      expect(spies.imageClick).toHaveBeenCalledTimes(0);
      fireEvent.click(getByTestId('product-info:image-link'));
      expect(spies.imageClick).toHaveBeenCalledTimes(1);
    });

    it('image icon-button click', () => {
      const { getByTestId } = render(template);

      expect(spies.quickViewClick).toHaveBeenCalledTimes(0);
      fireEvent.click(getByTestId('quick-view-button'));
      expect(spies.quickViewClick).toHaveBeenCalledTimes(1);
    });

    it('positioned image icon-buttons', () => {
      const { container } = render(
        <ProductInfo>
          <Parts.Image href={data.url} src={data.imageSrc} onClick={spies.imageClick}>
            <Parts.ImageButton
              icon={QuickViewSVG}
              position={{ x: 'left', y: 'top' }}
              onClick={spies.quickViewClick}
              data-testid='test-favorite-button'
              hint='Добавить в избранное'
            />
            <Parts.ImageButton
              icon={QuickViewSVG}
              position={{ x: 'right', y: 'bottom' }}
              onClick={spies.quickViewClick}
              data-testid='quick-view-button'
            />
          </Parts.Image>

          <Parts.Prices
            price={data.price}
            oldPrice={data.oldPrice}
            currencyGrapheme={data.currencyGrapheme}
          />

          <Parts.Title href={data.url} onClick={spies.titleClick}>
            {data.name}
          </Parts.Title>
        </ProductInfo>,
      );

      expect(container).toMatchSnapshot();
    });

    it('image icon-button hint', async () => {
      const { getByTestId, findByTestId, container } = render(template);

      fireEvent.mouseEnter(getByTestId('test-favorite-button'));
      expect((await findByTestId('hint')).textContent).toContain('Добавить в избранное');

      fireEvent.mouseLeave(getByTestId('test-favorite-button'));
      expect(container.querySelectorAll('[data-testid="hint"]')).toHaveLength(0);
    });

    it('image src', () => {
      const { getByTestId } = render(template);

      expect(getByTestId('product-info:image').getAttribute('src')).toBe(data.imageSrc);
    });

    it('badges', () => {
      const { getAllByTestId } = render(template);

      expect(data.badges).toHaveLength(4);
      expect(getAllByTestId('badge')).toHaveLength(data.badges.length);
    });

    it('badges click', () => {
      const { getAllByTestId } = render(template);

      expect(spies.badgeClick).toHaveBeenCalledTimes(0);
      fireEvent.click(getAllByTestId('badge')[data.badges.length - 1]);
      expect(spies.badgeClick).toHaveBeenCalledTimes(1);
      expect(spies.badgeClick).toHaveBeenCalledWith(data.badges[data.badges.length - 1]);
    });

    it('prices', () => {
      const { getByTestId } = render(template);

      const price = normalizePrice(getByTestId('product-info:price').textContent || '');
      const oldPrice = normalizePrice(getByTestId('product-info:old-price').textContent || '');

      expect(price).toContain(String(data.price));
      expect(price).toContain(data.currencyGrapheme);

      expect(oldPrice).toContain(String(data.oldPrice));
      expect(oldPrice).toContain(data.currencyGrapheme);
    });

    it('title', () => {
      const { getByTestId } = render(template);

      expect(getByTestId('product-info:name-link').textContent).toContain(data.name);
      expect(getByTestId('product-info:name-link').getAttribute('href')).toBe(data.url);
      expect(spies.titleClick).toHaveBeenCalledTimes(0);
      fireEvent.click(getByTestId('product-info:name-link'));
      expect(spies.titleClick).toHaveBeenCalledTimes(1);
    });

    it('trademark', () => {
      const { getByTestId } = render(template);

      expect(getByTestId('product-info:trademark-link').textContent).toContain(data.trademark.name);
      expect(spies.trademarkClick).toHaveBeenCalledTimes(0);
      fireEvent.click(getByTestId('product-info:trademark-link'));
      expect(spies.trademarkClick).toHaveBeenCalledTimes(1);
    });

    it('cart control in footer', () => {
      const { getAllByTestId, getByTestId } = render(template);

      expect(getAllByTestId('test-add-to-cart-button')).toHaveLength(1);
      expect(getByTestId('product-info:cart-step').textContent).toContain(data.cart.stepInfo);
      expect(getByTestId('product-info:cart-info').textContent).toContain(data.cart.markupInfo);
    });
  });

  describe('adult content', () => {
    const spies = {
      adultConfirm: jest.fn(),
    };

    const template = (
      <ProductInfo restriction='adult'>
        <Parts.Image src={data.imageSrc} href={data.url}>
          <Parts.ImageButton icon={QuickViewSVG} data-testid='quick-view-button' />
        </Parts.Image>

        <Parts.Badges>
          {data.badges.map((badge, index) => (
            <Badge key={index} {...badge} />
          ))}
        </Parts.Badges>

        <Parts.Prices
          price={data.price}
          oldPrice={data.oldPrice}
          currencyGrapheme={data.currencyGrapheme}
        />

        <Parts.Title href={data.url}>{data.name}</Parts.Title>

        <Parts.TrademarkLink href={data.trademark.url}>{data.trademark.name}</Parts.TrademarkLink>

        <Parts.Footer>
          <Parts.AdultConfirmButton onClick={spies.adultConfirm} />
        </Parts.Footer>
      </ProductInfo>
    );

    it('should match snapshot', () => {
      const { container } = render(template);

      expect(container).toMatchSnapshot();
    });

    it('should not render image-link', () => {
      const { container } = render(template);

      expect(container.querySelectorAll('[data-testid="product-info:image-link"]')).toHaveLength(0);
    });

    it('should render adult image', () => {
      const { getByTestId } = render(template);

      expect(getByTestId('product-info:adult-image').getAttribute('src')).toBe(data.imageSrc);
    });

    it('should hide image icon-button', () => {
      const { container } = render(template);

      expect(container.querySelectorAll('[data-testid="quick-view-button"]')).toHaveLength(0);
    });

    it('should not render badges', () => {
      const { container } = render(template);

      expect(container.querySelectorAll('[data-testid="badge"]')).toHaveLength(0);
    });

    it('should render only actual price but not old price', () => {
      const { container, getByTestId } = render(template);

      const price = normalizePrice(getByTestId('product-info:price').textContent || '');

      expect(price).toContain(String(data.price));
      expect(price).toContain(data.currencyGrapheme);

      expect(container.querySelectorAll('[data-testid="product-info:old-price"]')).toHaveLength(0);
    });

    it('should replace title by adult warning', () => {
      const { container, getByTestId } = render(template);

      expect(container.querySelectorAll('[data-testid="product-info:name-link"]')).toHaveLength(0);
      expect(getByTestId('product-info:adult-warning').textContent).toContain(
        'Подтвердите, что вы старше 18 лет, чтобы посмотреть товар.',
      );
    });

    it('should not render trademark', () => {
      const { container } = render(template);

      expect(
        container.querySelectorAll('[data-testid="product-info:trademark-link"]'),
      ).toHaveLength(0);
    });

    it('should render adult confirm button', () => {
      const { getByTestId } = render(template);

      expect(getByTestId('product-info:adult-confirm-button').textContent).toBe('Подтвердить');
      expect(spies.adultConfirm).toHaveBeenCalledTimes(0);
      fireEvent.click(getByTestId('product-info:adult-confirm-button'));
      expect(spies.adultConfirm).toHaveBeenCalledTimes(1);
    });
  });

  describe('unavailable content', () => {
    const spies = {
      addToWaitList: jest.fn(),
      waitListLinkClick: jest.fn(),
    };

    const template = (
      <ProductInfo restriction='unavailable'>
        <Parts.Image src={data.imageSrc} href={data.url} opacity={0.72}>
          <Parts.ImageButton icon={QuickViewSVG} data-testid='quick-view-button' />
        </Parts.Image>

        <Parts.Badges>
          {data.badges.map((badge, index) => (
            <Badge key={index} {...badge} />
          ))}
        </Parts.Badges>

        <Parts.Prices
          price={data.price}
          oldPrice={data.oldPrice}
          currencyGrapheme={data.currencyGrapheme}
          unavailableReason='Test reason'
        />

        <Parts.Title href={data.url}>{data.name}</Parts.Title>

        <Parts.TrademarkLink href={data.trademark.url}>{data.trademark.name}</Parts.TrademarkLink>

        <Parts.Footer>
          <Parts.WaitListAddButton onClick={spies.addToWaitList} />
          <Parts.WaitListAddedLink href='https://www.wait.com/' onClick={spies.waitListLinkClick} />
        </Parts.Footer>
      </ProductInfo>
    );

    it('should handle image opacity', () => {
      const { getByTestId } = render(template);

      expect(getByTestId('product-info:image').style.opacity).toBe('0.72');
    });

    it('badges', () => {
      const { getAllByTestId } = render(template);

      expect(data.badges).toHaveLength(4);
      expect(getAllByTestId('badge')).toHaveLength(data.badges.length);
    });

    it('should not render prices but unavailable reason', () => {
      const { container, getByTestId } = render(template);

      expect(container.querySelectorAll('[data-testid="product-info:price"]')).toHaveLength(0);
      expect(container.querySelectorAll('[data-testid="product-info:old-price"]')).toHaveLength(0);
      expect(getByTestId('product-info:prices').textContent).toContain('Test reason');
    });
  });

  it('should render stub for broken image', () => {
    const { container, getByTestId } = render(
      <ProductInfo>
        <Parts.Image src={data.imageSrc} href={data.url} opacity={0.72}>
          <Parts.ImageButton icon={QuickViewSVG} data-testid='quick-view-button' />
        </Parts.Image>

        <Parts.Prices
          price={data.price}
          oldPrice={data.oldPrice}
          currencyGrapheme={data.currencyGrapheme}
          unavailableReason='Test reason'
        />

        <Parts.Title href={data.url}>{data.name}</Parts.Title>
      </ProductInfo>,
    );

    expect(container.querySelectorAll('.broken-icon')).toHaveLength(0);
    fireEvent.error(getByTestId('product-info:image'));
    expect(container.querySelectorAll('.broken-icon')).toHaveLength(1);
  });

  it('should render stub for broken adult image', () => {
    const { container, getByTestId } = render(
      <ProductInfo restriction='adult'>
        <Parts.Image src={data.imageSrc} href={data.url} opacity={0.72}>
          <Parts.ImageButton icon={QuickViewSVG} data-testid='quick-view-button' />
        </Parts.Image>

        <Parts.Prices
          price={data.price}
          oldPrice={data.oldPrice}
          currencyGrapheme={data.currencyGrapheme}
          unavailableReason='Test reason'
        />

        <Parts.Title href={data.url}>{data.name}</Parts.Title>
      </ProductInfo>,
    );

    expect(container.querySelectorAll('.broken-icon')).toHaveLength(0);
    fireEvent.error(getByTestId('product-info:adult-image'));
    expect(container.querySelectorAll('.broken-icon')).toHaveLength(0);
    expect(getByTestId('product-info:adult-image').classList.contains('broken')).toBe(true);
  });

  it('should allow place random children when strict is false', () => {
    const { container } = render(
      <ProductInfo strict={false}>
        <Parts.Title href='https://my-site.com'>My product!</Parts.Title>
        <Parts.Image src='https://my-site.com/images/1' href='https://my-site.com' />
        <div>My custom child element!</div>
      </ProductInfo>,
    );

    expect(container.textContent).toBe('My product!My custom child element!');
  });

  it('should render loading cart control', () => {
    const { container, rerender } = render(
      <ProductInfo strict={false}>
        <Parts.Image src='https://my-site.com/images/1' href='https://my-site.com' />
        <Parts.Title href='https://my-site.com'>My product!</Parts.Title>
        <Parts.Footer>
          <Parts.CartControl
            loading
            stepText='По 5 шт'
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            <Stepper defaultValue={5} size='s' />
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(container.textContent).toBe('My product!');

    rerender(
      <ProductInfo strict={false}>
        <Parts.Image src='https://my-site.com/images/1' href='https://my-site.com' />
        <Parts.Title href='https://my-site.com'>My product!</Parts.Title>
        <Parts.Footer>
          <Parts.CartControl
            loading={false}
            stepText='По 5 шт'
            markupText='Комплектация + 50 ₽ при покупке до 20 шт'
          >
            <Stepper defaultValue={5} size='s' />
          </Parts.CartControl>
        </Parts.Footer>
      </ProductInfo>,
    );

    expect(container.textContent).toBe(
      'My product!По 5 штКомплектация + 50 ₽ при покупке до 20 шт',
    );
  });
});
