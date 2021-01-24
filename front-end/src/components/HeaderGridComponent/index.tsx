import React from 'react';
import { ColumnGridType } from '../../types/ColumnGridType';

import { ContainerRow, ColumnHeader } from './styles';

interface HeaderGridProps {
  columns: ColumnGridType[];
}
const HeaderGridComponent: React.FC<HeaderGridProps> = ({
  columns,
}: HeaderGridProps) => {
  return (
    <ContainerRow>
      {columns.map((column, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ColumnHeader width={column.width ?? 100} key={index}>
          {column.label ?? column.fieldName}
        </ColumnHeader>
      ))}
    </ContainerRow>
  );
};

export default HeaderGridComponent;
