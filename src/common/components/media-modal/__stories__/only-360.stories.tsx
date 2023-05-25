import React, { useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { MediaLayout, MediaMain, MediaContent } from '..';
import { data } from '../__mocks__';

export default {
  title: 'common/MediaLayout',
  component: MediaLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Only360() {
  const [targetIndex, setTargetIndex] = useState(0);

  return (
    <Modal size='fullscreen' footerStub={false} withScrollDisable>
      <Modal.Header onClose={() => void 0} />
      <Modal.Body>
        <MediaLayout>
          <MediaMain>
            <MediaContent
              items={data.media.filter(item => item.type === '360')}
              targetIndex={targetIndex}
              onChangeTargetIndex={setTargetIndex}
            />
          </MediaMain>
        </MediaLayout>
      </Modal.Body>
    </Modal>
  );
}

Only360.storyName = 'Только 360';
