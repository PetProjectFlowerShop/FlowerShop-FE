import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { RouteErrorBoundary } from "../components/error/RouteErrorBoundary";

export function MainLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />

      <Box flexGrow={1}>
        <RouteErrorBoundary>
          <Outlet />
        </RouteErrorBoundary>
      </Box>

      <Footer />
    </Box>
  );
}
