import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  height: 120px;
  width: 100%;
  background-color: #282936;
  border-bottom: 1px solid #f0ece2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;

export const BackIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 50px;
  font-size: 36px;
  cursor: pointer;
`;
