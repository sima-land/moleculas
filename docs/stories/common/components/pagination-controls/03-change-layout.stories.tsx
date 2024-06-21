import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';

export default {
  title: 'common/PaginationControls',
  component: PaginationControls,
  parameters: {
    layout: 'padded',
  },
};

export function ChangeLayout() {
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

ChangeLayout.storyName = 'Смена раскладки по breakpoint';
