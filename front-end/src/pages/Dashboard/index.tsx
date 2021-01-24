import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Title,
} from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const goToSongsReport = () => {
    history.push('songsReport');
  };

  return (
    <Container>
      <Title>Music Lab</Title>
      <ButtonContainer>
        <Button onClick={goToSongsReport}>
          <ButtonText>Songs Report</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Dashboard;
