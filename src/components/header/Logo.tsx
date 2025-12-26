import {Box, Typography} from "@mui/material";

export function Logo() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
            <Box
                component="img"
                src="/images/logo.svg"
                alt="logo"
                sx={{
                    width: 40,
                    height: 40
                }}/>

            <Typography
                sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'text.primary',
                    ml: 1
                }}>
                Logoipsum
            </Typography>
        </Box>
    )
}
