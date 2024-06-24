import { ProductSlider } from '@sima-land/moleculas/mobile/components/product-slider';
import { ReactNode } from 'react';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import { items } from './fixture';

export const meta = {
  category: 'mobile/ProductSlider',
  title: 'Недоступные товары',
  parameters: {
    layout: 'fullscreen',
  },
};

const Placeholder = () => (
  <div
    style={{
      height: '40px',
      borderRadius: '4px',
      background: '#eee',
      marginTop: '20px',
      marginBottom: '20px',
    }}
  />
);

const Bootstrap = ({ children }: { children?: ReactNode }) => (
  <>
    <MobileLayout>
      <Placeholder />
    </MobileLayout>
    {children}
    <MobileLayout>
      <Placeholder />
    </MobileLayout>
  </>
);

export default function Unavailable() {
  return (
    <Bootstrap>
      <ProductSlider>
        {items.map((item, index) => (
          <ProductInfo key={index} restriction='unavailable'>
            <Parts.Image src={item.imageSrc} href={item.url} />

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
              unavailableReason='Товара нет в наличии'
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.WaitListAddButton
                onClick={() => alert('Представим добавление в лист ожидания...')}
              />
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductSlider>
    </Bootstrap>
  );
}
