import {Box} from "@mui/material";

export function Logo() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}>

            <Box
                component="img"
                src="/images/logo-name.svg"
                alt="nameLogo"
                sx={{
                    width: 191,
                    height: 60,
                }}
            />
        </Box>
    )
}
