import { useState, useEffect } from 'react';
import { orderBy } from 'lodash';
import { SortType } from '../../types/SortType';
import { ReportTypes } from '../../types/ReportTypes';

export interface UseSortColumn {
  data?: ReportTypes;
}

const useSortColumn = (
  sortModel: SortType | undefined,
  reportData: ReportTypes,
): UseSortColumn => {
  const [data, setData] = useState<ReportTypes>([]);
  const onSortChange = (): ReportTypes => {
    if (reportData && reportData?.length > 0) {
      return orderBy(
        reportData,
        [sortModel?.sortColumn],
        [sortModel?.direction ? 'asc' : 'desc'],
      ) as ReportTypes;
    }
    return [];
  };

  useEffect(() => {
    const sortedData = onSortChange();
    setData(sortedData);
  }, [reportData, sortModel]);

  return {
    data,
  };
};

export default useSortColumn;
