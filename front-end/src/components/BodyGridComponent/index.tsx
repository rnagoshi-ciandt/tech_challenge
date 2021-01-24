import React from 'react';
import { ColumnGridType } from '../../types/ColumnGridType';
import { ReportTypes } from '../../types/ReportTypes';

import { ContainerRow, ContainerCell, ContainerBodyGrid } from './styles';

interface BodyGridProps {
  reportData: ReportTypes;
  columns: ColumnGridType[];
}
const BodyGridComponent: React.FC<BodyGridProps> = ({
  reportData,
  columns,
}: BodyGridProps) => {
  return (
    <>
      {reportData?.map((rowData, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ContainerRow key={index}>
          {columns.map(column => (
            <ContainerCell key={column.fieldName}>
              {rowData[column.fieldName as keyof ReportTypes]}
            </ContainerCell>
          ))}
        </ContainerRow>
      ))}
    </>
  );
};

export default BodyGridComponent;
