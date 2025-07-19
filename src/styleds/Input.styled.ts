import styled from "styled-components";

export const Input = styled.input`
  width: 90%;
  height: 40px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  outline: none;
  padding: 0 16px;
  color: white;
  font-size: 16px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.bgHover};
  }
`;
