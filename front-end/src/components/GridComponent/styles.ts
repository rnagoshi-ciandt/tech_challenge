import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 36px;
`;

export const ReportTitle = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 600;
  text-align: center;
`;

export const Table = styled.table`
  border: 1px solid black;
  border-radius: 4px;
  /* border-spacing: 0.5rem; */
  border-collapse: collapse;
  margin-top: 30px;
  display: block;
  max-width: 100%;
  overflow-x: auto;
`;
