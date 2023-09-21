import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 180px;
  max-width: 440px;
  width: 100%;
  padding: 18px;
  background-color: rgb(214, 235, 248);
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: left;
  justify-content: left;
  border-radius: 50%;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  padding: 0;
  background-color: lightblue;

  &:hover {
    color: #c75124;
    border: 1px solid #c75124;
    svg {
      fill: #c75124;
    }
  }
`;
