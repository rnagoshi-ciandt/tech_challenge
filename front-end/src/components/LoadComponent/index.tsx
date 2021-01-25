import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

const LoadComponent: React.FC = () => {
  return (
    <Container>
      <ReactLoading type="cylon" color="#000" height={667} width={375} />
    </Container>
  );
};

export default LoadComponent;
