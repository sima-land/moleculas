import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'common/PaginationControls',
  component: PaginationControls,
  parameters: {
    layout: 'padded',
  },
};
export function WithoutForm() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls withForm={false} current={page} total={6} onPageChange={setPage} />
    </Layout>
  );
}

WithoutForm.storyName = 'Без формы';
