import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';

export const meta = {
  category: 'common/PaginationControls',
  title: 'Тест: варианты данных',
  parameters: {
    layout: 'padded',
  },
};

export default function TestRanges() {
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
