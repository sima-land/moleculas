import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { ReactNode, useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { Button } from '@sima-land/ui-nucleons/button';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import ComparisonAddSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ComparisonAdd';
import { items } from '../__test__/test-items';

export default {
  title: 'desktop/ProductCarousel',
  component: ProductCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Компонент карусели рекомендаций',
      },
    },
  },
};

const Placeholder = () => (
  <div style={{ borderRadius: 4, background: '#eee', height: 40, margin: '20px 0' }} />
);

const DemoBlock = ({ children }: { children: ReactNode }) => (
  <Layout>
    <Placeholder />
    {children}
    <Placeholder />
  </Layout>
);

export function Primary() {
  return (
    <DemoBlock>
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url}>
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
              <Parts.ImageButton
                icon={ComparisonAddSVG}
                position={{ x: 'right', y: 'top' }}
                hint='Добавить в сравнение'
                hintDirection='left'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.RatingCounter value={4.7} reviewCount={52} />

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
      </ProductCarousel>
    </DemoBlock>
  );
}

Primary.storyName = 'Простой пример';

export function Unavailable() {
  return (
    <DemoBlock>
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index} restriction='unavailable'>
            <Parts.Image src={item.imageSrc} href={item.url}>
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
              unavailableReason='Товара нет в наличии'
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.WaitListAddButton onClick={() => alert('Так и быть, добавим...')} />
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </DemoBlock>
  );
}

Unavailable.storyName = 'Нет в наличии';

export function Adult() {
  return (
    <DemoBlock>
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index} restriction='adult'>
            <Parts.Image src={item.imageSrc} href={item.url}>
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
            </Parts.Image>

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.AdultConfirmButton onClick={() => alert('Поверим на слово...')} />
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </DemoBlock>
  );
}

Adult.storyName = 'Товары для взрослых';

export function DeferredData() {
  const [ready, setReady] = useState<boolean>(false);

  return (
    <DemoBlock>
      <Button onClick={() => setReady(true)} size='s' style={{ marginBottom: 20 }}>
        Загрузить
      </Button>

      <ProductCarousel>
        {(ready ? items : []).map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image
              src={item.imageSrc}
              href={item.url}
              onClick={e => {
                e.preventDefault();
                console.log('Клик: ссылка на товар (изображение)');
              }}
            >
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title
              href={item.url}
              onClick={e => {
                e.preventDefault();
                console.log('Клик: ссылка на товар');
              }}
            >
              {item.name}
            </Parts.Title>

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
      </ProductCarousel>
    </DemoBlock>
  );
}

DeferredData.storyName = 'Тест: загрузка после mount';

export function FewItems() {
  return (
    <DemoBlock>
      <ProductCarousel>
        {items.slice(0, 4).map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image
              src={item.imageSrc}
              href={item.url}
              onClick={e => {
                e.preventDefault();
                console.log('Клик: ссылка на товар (изображение)');
              }}
            >
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title
              href={item.url}
              onClick={e => {
                e.preventDefault();
                console.log('Клик: ссылка на товар');
              }}
            >
              {item.name}
            </Parts.Title>

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
      </ProductCarousel>
    </DemoBlock>
  );
}

FewItems.storyName = 'Мало товаров для прокрутки';

export function CustomItemSize() {
  return (
    <div style={{ margin: '40px', width: '400px' }}>
      <ProductCarousel
        itemSize='unset'
        itemProps={{ style: { width: 'calc((400px / 2) - 16px)' } }}
      >
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image src={item.imageSrc} href={item.url}>
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.CartControl stepText='По 5 шт'>
                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
              </Parts.CartControl>
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </div>
  );
}

CustomItemSize.storyName = 'Пример: пользовательский размер элемента';
