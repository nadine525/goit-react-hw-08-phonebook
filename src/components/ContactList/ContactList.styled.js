import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  padding: 8px;
  border: 1px solid ${props => props.theme.borders.borderColorMain};
  border-radius: 5px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Paragraf = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 0;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

export const ContactListDivision = styled.div`
  display: flex;
  flex-direction: column;
`;
