import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';
import { Reports } from '../../utils/reports';

import {
  ReportContainer,
  Container,
  ReportTitle,
  ReportListContainer,
  ReportText,
} from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const goToReport = (path: string) => {
    history.push(path);
  };

  return (
    <Container>
      <HeaderComponent title="Music Lab" />
      <ReportContainer>
        <ReportTitle>Reports:</ReportTitle>
        <ReportListContainer>
          {Reports.map(report => (
            <ReportText onClick={() => goToReport(report.path)}>
              {report.label}
            </ReportText>
          ))}
        </ReportListContainer>
      </ReportContainer>
    </Container>
  );
};

export default Dashboard;
