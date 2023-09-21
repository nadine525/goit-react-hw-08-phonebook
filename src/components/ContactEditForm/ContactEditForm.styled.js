import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  text-align: left;
`;

export const Input = styled.input`
  width: 300px;
  height: 24px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid black;
  &:hover,
  &:focus {
    color: #c75124;
    border: 1px solid #c75124;
  }
`;

export const Button = styled.button`
  margin-right: 10px;
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
  }
`;

export const ContactFormDivision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
