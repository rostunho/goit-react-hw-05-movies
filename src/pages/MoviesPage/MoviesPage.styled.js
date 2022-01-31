import styled from 'styled-components';

export const SearchContainer = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 20px 100px;
  border-bottom: 1px solid #ddd;
`;

export const SearchInput = styled.input`
  height: 32px;
  width: 340px;
  margin-right: 10px;
  padding-left: 10px;

  font-size: 24px;
  color: #555;

  border: 1px solid #999;
  border-radius: 5px;
  outline: none;
`;

export const SearchButton = styled.button`
  height: 35px;
  padding: 0 20px;

  color: #fff;
  font-size: 20px;

  cursor: pointer;
  border: none;
  background-color: #0082ab;
  border-radius: 5px;

  &:hover,
  &focus {
    background-color: #00b0e8;
  }
`;
