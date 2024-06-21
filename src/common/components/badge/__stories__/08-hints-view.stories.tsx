import { Badge } from '@sima-land/moleculas/common/components/badge';
import { useState } from 'react';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';

export default {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
};

export function HintsView() {
  const [open, setOpen] = useState(false);
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <>
      <Badge
        ref={refs.setReference}
        color='#607d8b'
        href='https://sima-land.ru'
        fields={[{ type: 'text', value: 'Уценённый товар' }]}
        {...getReferenceProps()}
      />
      <Hint open={open} hintRef={refs.setFloating} arrowRef={refs.setArrow} {...getFloatingProps()}>
        Привет, это очень простой хинт
      </Hint>
    </>
  );
}

HintsView.storyName = 'С хинтом';
