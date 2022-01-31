import styled from 'styled-components';
import { NavLink as RouteLink } from 'react-router-dom';

export const MovieDetailContainer = styled.div`
  height: 100vh;
  padding: 0 0 30px;
  background-color: #fff;
`;

export const Poster = styled.div`
  display: flex;
  padding: 0 0 20px;
`;

export const Thumb = styled.div`
  width: 300px;
  margin-left: 100px;
`;

export const Description = styled.div`
  width: 500px;
  margin-left: 50px;
  padding-right: 100px;
`;

export const GoBackButton = styled.button`
  margin: 10px 100px;
`;

export const MovieDetailList = styled.ul`
  padding: 0 100px 20px;
  font-size: 20px;
  font-weight: 500;
  list-style: inside;
`;

export const MovieDetailItem = styled.li`
  padding: 0;
`;

export const NavLink = styled(RouteLink)`
  color: #999;
  text-decoration: none;
  font-size: 18px;
  line-height: 1;

  &:hover,
  &:focus,
  &.active {
    color: #0082ab;
  }
`;
