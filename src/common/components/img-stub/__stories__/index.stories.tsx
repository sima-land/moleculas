import { ImgStub } from '@sima-land/moleculas/common/components/img-stub';

export default {
  title: 'common/ImgStub',
  component: ImgStub,

  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <ImgStub style={{ '--img-stub-size': '320px' }} />
    </>
  );
}

Primary.storyName = 'Простой пример';
