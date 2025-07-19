import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 16px 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;

  > form {
    align-self: flex-start;
    margin-left: 17.5px;

    input {
      margin-right: 4px;
    }

    label {
      margin-right: 12px;
    }
  }
`;
