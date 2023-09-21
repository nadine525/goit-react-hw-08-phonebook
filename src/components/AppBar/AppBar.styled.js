import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: baseline;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.theme.colors.main};
  border-bottom: 1px solid ${props => props.theme.borders.borderColorMain};
  box-shadow: 0px 4px 36px -21px rgba(0, 0, 0, 0.75);
`;

export const Division = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`;

export const ToggleIcon = styled.button`
  padding-top: 6px;
  margin-left: auto;
  margin-right: 15px;
  background-color: transparent;
  border: none;

  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.fills.main};
  }
`;
