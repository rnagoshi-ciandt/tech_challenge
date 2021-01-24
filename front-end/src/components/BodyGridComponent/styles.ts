import styled from 'styled-components';

export const ContainerBodyGrid = styled.div``;

export const ContainerRow = styled.tr`
  border: 1px solid black;
  height: 60px;
  max-height: 60px;
`;

export const ContainerCell = styled.td`
  text-align: center;
  padding: 4px;
  border-left: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
