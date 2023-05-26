import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 30px;
  color: black;

  :hover {
    color: blue;
  }

  &.active {
    color: orange;
  }
`;
