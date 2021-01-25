import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { BackIcon, Container, Title } from './styles';

interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  hasBackButton,
}: HeaderProps) => {
  const history = useHistory();
  const goToDashboard = () => {
    history.push('/');
  };
  return (
    <Container>
      {hasBackButton && (
        <BackIcon icon={faArrowAltCircleLeft} onClick={goToDashboard} />
      )}
      <Title>{title}</Title>
    </Container>
  );
};

HeaderComponent.defaultProps = {
  hasBackButton: false,
};

export default HeaderComponent;
