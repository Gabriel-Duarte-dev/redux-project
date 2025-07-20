import styled from "styled-components";
import { Center } from "../../styleds/Center.styled";

export const Container = styled(Center)`
  width: 100%;
  height: 100dvh;
  padding: 0 8px;
`;

export const Card = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 16px;
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
      text-decoration: underline;
    }
  }

  button {
    margin-top: 20px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;

  li {
    margin-bottom: 4px;
    padding-left: 4px;

    &:first-child {
      padding: 0;
      margin-bottom: 8px;
    }
  }
`;
