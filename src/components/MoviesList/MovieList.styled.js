import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  padding: 10px 100px 0;
`;

export const MovieItem = styled.li`
  padding: 2px 0;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #555;

  &:hover,
  &:focus {
    color: #0082ab;
  }
`;
