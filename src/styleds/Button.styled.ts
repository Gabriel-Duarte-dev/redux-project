import styled, { keyframes } from "styled-components";
import { BUTTON_VARIANTS } from "../variants/button_variants";

const checkAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-20deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

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
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  ${({ theme, $variant = "primary" }) => BUTTON_VARIANTS[$variant](theme)}

  .check {
    font-size: 18px;
    opacity: 0;
    transition: opacity 0.3s;
    animation: ${checkAnimation} 0.4s ease forwards;
  }
`;
