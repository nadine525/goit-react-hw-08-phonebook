import styled from 'styled-components';

export const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #c75124;
`;

export const Paragraf = styled.p`
  margin-top: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;
