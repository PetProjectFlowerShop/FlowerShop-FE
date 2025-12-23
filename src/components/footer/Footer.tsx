import { Box, Container, Typography } from '@mui/material';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: theme => `1px solid ${theme.palette.divider}`,
        py: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          © {new Date().getFullYear()} FlowerShop. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
