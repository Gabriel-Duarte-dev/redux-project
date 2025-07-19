import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000080;
`;

export const Modal = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 4px;

    a {
      color: white;
    }
  }

  button {
    margin-top: 20px;
  }
`;
