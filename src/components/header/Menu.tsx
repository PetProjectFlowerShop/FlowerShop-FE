import {Box, Typography} from "@mui/material";

const menuItems = [
    'About us',
    'Catalog',
    'Delivery&Payment',
    'Blog',
    'Contacts',
]

export function Menu() {
    return (
        <Box sx={{display: 'flex', gap: 4, ml: 4,}}>
            {menuItems.map(item => (
                <Typography
                    key={item}
                    sx={{
                        cursor: 'pointer',
                        fontWeight: 500
                    }}
                >
                    {item}
                </Typography>
            ))}
        </Box>
    )
}