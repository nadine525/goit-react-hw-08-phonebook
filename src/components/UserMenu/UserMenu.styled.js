import styled from 'styled-components';

export const UserMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  align-items: center;
`;

export const Paragraf = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 20px;
  color: #c75124;
`;

export const Button = styled.button`
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 32px;
  padding: 0 10px;
  text-align: center;
  background-color: lightblue;

  &:hover {
    color: #c75124;
    border: 1px solid #c75124;
  }
`;
