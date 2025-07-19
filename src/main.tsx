import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./stores/index.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { GlobalStyles } from "./styleds/Global.ts";
import Router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
