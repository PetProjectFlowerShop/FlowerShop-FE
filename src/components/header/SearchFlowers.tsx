import {Box, InputAdornment, InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function SearchFlowers() {
    return (
        <Box
            sx={{
                ml: 'auto',
                width: 217,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                px: 1,
            }}
        >
            <InputBase
                placeholder="Search Flowers"
                sx={{
                    flex: 1,
                    px: 2,
                    '& input::placeholder': {
                        color: 'text.secondary',
                    },
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon fontSize="small"/>
                    </InputAdornment>
                }
            />
        </Box>
    )
}