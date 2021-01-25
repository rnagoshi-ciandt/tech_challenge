import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { ColumnGridType } from '../../types/ColumnGridType';

import {
  ContainerRow,
  ColumnHeader,
  ColumnText,
  ContainerIcons,
  ContainerColumn,
} from './styles';
import { SortType } from '../../types/SortType';

interface HeaderGridProps {
  columns: ColumnGridType[];
  sortModel: SortType | undefined;
  onChangeSortModel: { (sortColumn: string): void };
}
const HeaderGridComponent: React.FC<HeaderGridProps> = ({
  columns,
  sortModel,
  onChangeSortModel,
}: HeaderGridProps) => {
  return (
    <ContainerRow>
      {columns.map((column, index) => (
        <ColumnHeader
          width={column.width ?? 100}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() => onChangeSortModel(column.fieldName)}
        >
          <ContainerColumn>
            <ColumnText>{column.label ?? column.fieldName}</ColumnText>
            {sortModel?.sortColumn === column.fieldName && (
              <ContainerIcons>
                <FontAwesomeIcon
                  icon={sortModel?.direction ? faSortUp : faSortDown}
                />
              </ContainerIcons>
            )}
          </ContainerColumn>
        </ColumnHeader>
      ))}
    </ContainerRow>
  );
};

export default HeaderGridComponent;
