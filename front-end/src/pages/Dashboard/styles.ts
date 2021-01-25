import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 34px;
  padding: 20px;
`;

export const ReportContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px;
`;

export const ReportTitle = styled.h2`
  font-size: 36px;
`;

export const ReportListContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding-left: 15px;
`;

export const ReportText = styled.span`
  font-size: 26px;
  text-decoration: underline;
  cursor: pointer;
`;
