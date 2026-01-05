import {Box, Button} from "@mui/material";
import {Link, useLocation} from "react-router-dom"


const menuItems = [
    {label: 'About us', path: '/about-us'},
    {label: 'Catalog', path: '/catalog'},
    {label: 'Delivery&Payment', path: '/delivery-and-payment'},
    {label: 'Blog', path: '/blog'},
    {label: 'Contacts', path: '/contacts'},
]

export function Menu() {
    const location = useLocation()

    return (
        <Box
            component="nav"
            sx={{ml: 4,}}>

            <Box
                component="ul"
                sx={{
                    display: 'flex',
                    gap: 4,
                    listStyle: 'none',
                    p: 0,
                    m: 0
                }}>
                {menuItems.map(item => (
                    <Box
                        component="li"
                        key={item.path}>

                        <Button
                            key={item.path}
                            component={Link}
                            to={item.path}
                            sx={{
                                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                                textTransform: 'none',
                                fontSize: 16,
                                padding: 0,
                                minWidth: 'auto',
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            {item.label}
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}