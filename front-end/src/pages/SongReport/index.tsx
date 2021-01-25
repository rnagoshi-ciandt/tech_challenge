import React from 'react';
import useApi from '../../hooks/useApi';
import { SongReportResponse } from './utils/SongReportTypes';

import { Container } from './styles';
import GridComponent from '../../components/GridComponent';
import { SongReportColumns } from './utils/SongReportConstants';

const url = '/songs-report';
const SongReport: React.FC = () => {
  const { data: reportData, isLoading } = useApi<SongReportResponse>(url, {
    method: 'GET',
  });

  return (
    <Container>
      <GridComponent
        loading={isLoading}
        reportData={reportData?.data ?? []}
        reportColumns={SongReportColumns}
      />
    </Container>
  );
};

export default SongReport;
