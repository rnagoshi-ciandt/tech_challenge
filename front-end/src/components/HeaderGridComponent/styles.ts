import styled from 'styled-components';

interface ColumnHeaderProps {
  width: number;
}
export const ContainerRow = styled.tr``;

export const ColumnHeader = styled.th`
  border: 5px solid #f0ece2;
  padding: 4px 24px;
  min-width: ${(props: ColumnHeaderProps) => `${props.width}px`};
  cursor: pointer;
`;

export const ContainerColumn = styled.div`
  display: flex;
  justify-content: center;
`;
export const ColumnText = styled.span`
  font-size: 20px;
`;

export const ContainerIcons = styled.div`
  margin-left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
