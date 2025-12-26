import {Box, IconButton} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function UserActions() {
    return (
        <Box>
            <IconButton sx={{color: 'text.primary'}}>
                <AccountCircleIcon/>
            </IconButton>
            <IconButton sx={{color: 'text.primary'}}>
                <FavoriteBorderIcon/>
            </IconButton>
            <IconButton sx={{color: 'text.primary'}}>
                <ShoppingCartIcon/>
            </IconButton>
        </Box>
    )
}