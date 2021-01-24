import styled from 'styled-components';

interface ColumnHeaderProps {
  width: number;
}
export const ContainerRow = styled.tr``;

export const ColumnHeader = styled.th`
  border: 1px solid black;
  padding: 4px 24px;
  min-width: ${(props: ColumnHeaderProps) => `${props.width}px`};
`;
