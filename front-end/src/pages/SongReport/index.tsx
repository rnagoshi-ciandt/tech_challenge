import React from 'react';
import useApi from '../../hooks/useApi';
import { SongReportType } from './utils/SongReportTypes';

import { Container } from './styles';
import GridComponent from '../../components/GridComponent';
import { SongReportColumns } from './utils/SongReportConstants';

const url = '/getSongs';
const SongReport: React.FC = () => {
  const { data: reportData, isLoading } = useApi<SongReportType[]>(url, {
    method: 'GET',
  });

  return (
    <Container>
      <GridComponent
        reportData={reportData}
        reportColumns={SongReportColumns}
      />
    </Container>
  );
};

export default SongReport;
