import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { LoginForm } from "../components/login/LoginForm";
import AppDrawer from "../components/common/AppDrawer";
import { useDrawer } from "../hooks/useDrawer.ts";
import { RouteErrorBoundary } from "../components/error/RouteErrorBoundary";


export function MainLayout() {
  const { drawerView } = useDrawer();
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppDrawer>
        {drawerView === "auth" && <LoginForm />}
        {drawerView === "favorite" && <div>favorite</div>}
        {drawerView === "cart" && <div>cart</div>}
      </AppDrawer>
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
