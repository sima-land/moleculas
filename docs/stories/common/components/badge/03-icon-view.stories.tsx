import { Badge } from '@sima-land/moleculas/common/components/badge';

export const meta = {
  category: 'common/Badge',
  title: 'Иконка',
  parameters: {
    layout: 'padded',
  },
};

export default function IconView() {
  return (
    <Badge
      color='#ff7200'
      href='https://sima-land.ru'
      fields={[
        {
          type: 'svg-url',
          value: 'https://static2.static1-sima-land.com/image/mobile_app/common/notice_icon.svg',
        },
      ]}
    />
  );
}
