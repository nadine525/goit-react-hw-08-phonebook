import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  align-items: baseline;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #212121;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #c75124;
  }
`;
