import styled from "styled-components";

export const CardShape = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;

  > div {
    > p {
      margin-bottom: 8px;
    }
  }
`;

export const Avatar = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.pink};
  color: white;
  font-weight: bolder;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyText = styled.p`
  > span {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;
