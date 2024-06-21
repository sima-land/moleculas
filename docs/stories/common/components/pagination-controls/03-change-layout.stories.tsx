import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';

export const meta = {
  category: 'common/PaginationControls',
  title: 'Смена раскладки по breakpoint',
  parameters: {
    layout: 'padded',
  },
};

export default function ChangeLayout() {
  const [page, setPage] = useState(1);
  const desktop = useBreakpoint('xs+');

  return (
    <Layout>
      <PaginationControls
        current={page}
        total={99}
        onPageChange={setPage}
        flow={desktop ? 'horizontal' : 'vertical'}
      />
    </Layout>
  );
}
