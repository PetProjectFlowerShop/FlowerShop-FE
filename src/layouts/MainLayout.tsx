import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

type Props = {
  children: ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />

      <Box flexGrow={1}>
          {children}
      </Box>

      <Footer />
    </Box>
  );
}
