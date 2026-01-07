import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { LoginForm } from "../components/login/LoginForm"
import AppDrawer from "../components/common/AppDrawer";

type Props = {
  children: ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppDrawer>
        <LoginForm/>
      </AppDrawer>
      <Header />

      <Box flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
