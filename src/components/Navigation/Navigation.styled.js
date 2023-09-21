import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const NavigDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 30px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.text};

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #c75124;
  }
`;
