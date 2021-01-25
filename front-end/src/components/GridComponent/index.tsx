import React, { useState } from 'react';
import useSortColumn from '../../hooks/useSortColumn';
import { ColumnGridType } from '../../types/ColumnGridType';
import { ReportTypes } from '../../types/ReportTypes';
import { SortType } from '../../types/SortType';
import BodyGridComponent from '../BodyGridComponent';
import HeaderGridComponent from '../HeaderGridComponent';
import LoadComponent from '../LoadComponent';

import { Container, Table } from './styles';

interface GridProps {
  reportData: ReportTypes;
  reportColumns: ColumnGridType[];
  loading: boolean;
}

const GridComponent: React.FC<GridProps> = ({
  reportData,
  reportColumns,
  loading,
}: GridProps) => {
  const [sortModel, setSortModel] = useState<SortType>();
  const { data: sortedData } = useSortColumn(sortModel, reportData);

  const onChangeSortModel = (sortColumn: string) => {
    if (sortModel?.sortColumn === sortColumn) {
      return setSortModel({
        ...sortModel,
        ...{ direction: !sortModel?.direction },
      });
    }
    return setSortModel({ sortColumn, direction: true });
  };

  return (
    <Container>
      <Table>
        <HeaderGridComponent
          columns={reportColumns}
          sortModel={sortModel}
          onChangeSortModel={onChangeSortModel}
        />
        {loading ? (
          <LoadComponent />
        ) : (
          <BodyGridComponent reportData={sortedData} columns={reportColumns} />
        )}
      </Table>
    </Container>
  );
};

export default GridComponent;
