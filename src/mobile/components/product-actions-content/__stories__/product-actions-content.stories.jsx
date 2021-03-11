import React from 'react';
import ProductActionsContent from '../';

import StatementSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/statement';
import ThumbsUpSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/thumbs-up';

const Template = args => (
  <div style={{ margin: '16px' }}>
    <ProductActionsContent {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  buttons: [
    {
      text: 'Оформить претензию',
      icon: <StatementSVG />,
      href: 'https://test-domain.test/create-claim-link/',
    },
    {
      text: 'Оставить отзыв',
      icon: <ThumbsUpSVG />,
      onClick: () => alert('Нажато на \'Оставить отзыв\''),
    },
  ],
  onClose: () => alert('Нажато на \'Закрыть\''),
};
