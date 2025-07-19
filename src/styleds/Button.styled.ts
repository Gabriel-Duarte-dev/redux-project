import styled from "styled-components";
import { BUTTON_VARIANTS } from "../variants";

export const Button = styled.button<{
  $variant?: "primary" | "secondary" | "alert";
  $width?: string;
  $height?: string;
}>`
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "40px"};
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 16px;
  border-radius: 6px;
  border: none;
  outline: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme, $variant = "primary" }) => BUTTON_VARIANTS[$variant](theme)}
`;
