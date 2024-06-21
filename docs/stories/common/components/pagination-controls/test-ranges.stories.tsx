import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';

export default {
  title: 'common/PaginationControls',
  component: PaginationControls,
  parameters: {
    layout: 'padded',
  },
};

export function TestRanges() {
  const MyPagination = ({ total }: { total: number }) => {
    const [page, setPage] = useState(1);

    return <PaginationControls current={page} total={total} onPageChange={setPage} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {Array(16)
        .fill(0)
        .map((zero, index) => index)
        .slice(5)
        .concat(99, 999, 9999)
        .map(count => (
          <div key={count}>
            <h5>Total: {count}</h5>
            <MyPagination total={count} />
          </div>
        ))}
    </div>
  );
}

TestRanges.storyName = 'Тест: варианты данных';
