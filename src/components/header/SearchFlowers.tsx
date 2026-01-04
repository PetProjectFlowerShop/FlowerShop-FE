import {Box, InputAdornment, InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function SearchFlowers() {
    return (
        <Box
            sx={{
                width: 217,
                height: 45,
                border: '1px solid',
                borderColor: 'text.primary',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
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
                        <SearchIcon
                            fontSize="small"
                            sx={{
                                color: 'text.primary',

                            }}/>
                    </InputAdornment>
                }
            />
        </Box>
    )
}