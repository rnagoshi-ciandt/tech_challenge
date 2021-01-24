import React from 'react';
import { ColumnGridType } from '../../types/ColumnGridType';
import { ReportTypes } from '../../types/ReportTypes';
import BodyGridComponent from '../BodyGridComponent';
import HeaderGridComponent from '../HeaderGridComponent';

import { Container, ReportTitle, Table } from './styles';

interface GridProps {
  reportData: ReportTypes;
  reportColumns: ColumnGridType[];
}

const GridComponent: React.FC<GridProps> = ({
  reportData,
  reportColumns,
}: GridProps) => {
  return (
    <Container>
      <ReportTitle>Song Report</ReportTitle>
      <Table>
        <HeaderGridComponent columns={reportColumns} />
        <BodyGridComponent reportData={reportData} columns={reportColumns} />
      </Table>
    </Container>
  );
};

export default GridComponent;
