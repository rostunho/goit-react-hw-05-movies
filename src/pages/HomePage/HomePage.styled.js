import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export const HomeTitle = styled.h2`
  padding: 10px 100px;
  font-size: 24px;
`;

export const HomeList = styled.ul`
  padding: 0 100px;
`;

export const HomeItem = styled.li`
  padding: 2px 0;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #555;

  &:hover,
  &:focus {
    color: #0082ab;
  }
`;
