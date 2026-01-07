import {Box, IconButton} from "@mui/material";
import { useDrawer } from '../../hooks/useDrawer.ts'


export function UserActions() {
    const { toggleDrawer } = useDrawer()

    return (
        <Box sx={{ ml: 2 }}>
            <IconButton sx={{color: 'text.primary'}} onClick={toggleDrawer(true)}>
                <Box
                    component="img"
                    src="/images/my-account.svg"
                    alt="account"
                    sx={{width: 21.33, height: 21.33}}/>
            </IconButton>
            <IconButton sx={{color: 'text.primary'}}>
                <Box
                    component="img"
                    src="/images/favorite.svg"
                    alt="favorite"
                    sx={{width: 20, height: 17.16}}/>
            </IconButton>
            <IconButton sx={{color: 'text.primary'}}>
                <Box
                    component="img"
                    src="/images/shopping-cart.svg"
                    alt="shopping"
                    sx={{width: 25.92, height: 21.33}}/>
            </IconButton>
        </Box>
    )
}
