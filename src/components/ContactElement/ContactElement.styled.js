import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`;

export const Person = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.text};

  svg {
    display: block;
    margin-right: 12px;
    fill: #c75124;
  }
`;

export const ButtonDelete = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 24px;
  font-size: 14px;
  padding: 0 10px;
  text-align: center;
  background-color: lightblue;

  &:hover {
    color: #c75124;
    border: 1px solid #c75124;

    svg {
      fill: #c75124;
    }
  }
`;

export const ButtonEdit = styled.button`
  margin-right: 14px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 24px;
  font-size: 14px;
  padding: 0 10px;
  text-align: center;
  background-color: lightblue;

  &:hover {
    color: #c75124;
    border: 1px solid #c75124;

    svg {
      fill: #c75124;
    }
  }
`;
