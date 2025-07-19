import { css, type DefaultTheme } from "styled-components";

export const BUTTON_VARIANTS = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    &:hover {
      background: ${theme.colors.primaryHover};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    &:hover {
      background: ${theme.colors.secondaryHover};
    }
  `,
  alert: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
    &:hover {
      background: ${theme.colors.redHover};
    }
  `,
};
