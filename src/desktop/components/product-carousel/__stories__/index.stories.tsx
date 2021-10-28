import React from 'react';
import { action } from '@storybook/addon-actions';
import { ProductCarousel } from '..';
import { items } from '../__test__/test-items';
import { Button } from '@sima-land/ui-nucleons/button';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { DesktopLayout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'desktop/ProductCarousel',
  component: ProductCarousel,
  parameters: {
    layout: 'padded',
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

const DemoBlock = ({ children }: { children: React.ReactNode }) => (
  <DesktopLayout>
    <Placeholder />
    {children}
    <Placeholder />
  </DesktopLayout>
);

export const Primary = () => (
  <DemoBlock>
    <ProductCarousel withHoverCard>
      {items.map((item, index) => (
        <ProductCarousel.Item
          key={index}
          data={item}
          onQuickViewClick={action('click:quick-view')}
          renderCartControl={Slot => (
            <Slot stepText='По 5 шт.' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>
              <Button size='s' style={{ width: '122px' }}>
                В корзину
              </Button>
            </Slot>
          )}
        />
      ))}
    </ProductCarousel>
  </DemoBlock>
);

export const CartLoading = () => (
  <DemoBlock>
    <ProductCarousel withHoverCard>
      {items.map((item, index) => (
        <ProductCarousel.Item
          key={index}
          data={item}
          onQuickViewClick={action('click:quick-view')}
          renderCartControl={Slot => (
            <Slot
              loading
              stepText='По 5 шт.'
              markupText='Комплектация + 50 ₽ при покупке до 20 шт'
            />
          )}
        />
      ))}
    </ProductCarousel>
  </DemoBlock>
);

export const NoHoverCard = () => (
  <DemoBlock>
    <ProductCarousel>
      {items.map((item, index) => (
        <ProductCarousel.Item
          key={index}
          data={item}
          onQuickViewClick={action('click:quick-view')}
        />
      ))}
    </ProductCarousel>
  </DemoBlock>
);

export const LinkClickHandle = () => (
  <DemoBlock>
    <ProductCarousel withHoverCard>
      {[...items].reverse().map((item, index) => (
        <ProductCarousel.Item
          key={index}
          data={item}
          onLinkClick={event => {
            event.preventDefault();
            action('click:link')(item.name);
          }}
          onQuickViewClick={action('click:quick-view')}
          renderCartControl={Slot => (
            <Slot stepText='По 5 шт.' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>
              <Stepper size='s' value='99' />
            </Slot>
          )}
        />
      ))}
    </ProductCarousel>
  </DemoBlock>
);

export const LinkClickHandleNoHover = () => (
  <DemoBlock>
    <ProductCarousel>
      {[...items].reverse().map((item, index) => (
        <ProductCarousel.Item
          key={index}
          data={item}
          onLinkClick={event => {
            event.preventDefault();
            action('click:link')(item.name);
          }}
          onQuickViewClick={action('click:quick-view')}
          renderCartControl={Slot => (
            <Slot stepText='По 5 шт.' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>
              <Button size='s' style={{ width: '122px' }}>
                В корзину
              </Button>
            </Slot>
          )}
        />
      ))}
    </ProductCarousel>
  </DemoBlock>
);
