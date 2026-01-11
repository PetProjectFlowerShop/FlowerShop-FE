import {legalsLinks} from "./data/legal.data"
import {Box, Link as MuiLink} from "@mui/material";
import {Link as RouterLink} from "react-router-dom"

export function LegalLink() {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '40px',
                justifyContent: 'center',
                color: 'common.white'
            }}
        >
            {legalsLinks.map((link) => (
                <MuiLink
                    key={link.path}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                        color: 'common.white',
                        fontSize: '16px',
                        textDecoration: 'none'
                    }}
                >
                    {link.label}

                </MuiLink>
            ))}

        </Box>
    )
}