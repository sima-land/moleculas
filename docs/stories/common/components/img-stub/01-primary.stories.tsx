import { ImgStub } from '@sima-land/moleculas/common/components/img-stub';

export const meta = {
  category: 'common/ImgStub',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <>
      <ImgStub style={{ '--img-stub-size': '320px' }} />
    </>
  );
}
