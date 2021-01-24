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

export const ButtonContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 60px;
  padding: 10px;
  border: 1px solid black;
`;

export const ButtonText = styled.span`
  font-size: 18px;
  color: black;
`;
