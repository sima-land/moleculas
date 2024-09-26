import { Badge } from '@sima-land/moleculas/common/components/badge';
import { useState } from 'react';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';

export const meta = {
  category: 'common/Badge',
  title: 'С хинтом',
  parameters: {
    layout: 'padded',
  },
};

export default function HintsView() {
  const [open, setOpen] = useState(false);
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <>
      <Badge
        rootRef={refs.setReference}
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
