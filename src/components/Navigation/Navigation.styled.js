import styled from 'styled-components';
import { NavLink as RouteLink } from 'react-router-dom';

export const Nav = styled.nav`
  box-sizing: border-box;
  padding: 20px 100px;
  width: 100%;
  /* background-color: #fff; */
  border-bottom: 1px solid #ddd;
  background-image: repeating-linear-gradient(
    to bottom,
    #fff,
    #fff 5px,
    #fafafa 5px,
    #fafafa 6px
  );
`;

export const NavLink = styled(RouteLink)`
  font-size: 28px;
  font-weight: 500;
  text-decoration: none;
  color: #999999;
  margin-right: 20px;

  &:hover,
  &:focus,
  &.active {
    color: #0082ab;
  }
`;
