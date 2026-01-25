// AppProviders is a single place to configure all application-level providers.
// This keeps main.tsx clean and makes it easy to add new global providers
// (e.g. auth, data fetching, feature flags) in one place.

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../theme";
import DrawerProvider from "../providers/DrawerProvider";
import { LoadingProvider } from "./loading/LoadingProvider";
import { ErrorProvider } from "./error/ErrorProvider";

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <DrawerProvider>
          <LoadingProvider>
            <ErrorProvider>{children}</ErrorProvider>
          </LoadingProvider>
        </DrawerProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
