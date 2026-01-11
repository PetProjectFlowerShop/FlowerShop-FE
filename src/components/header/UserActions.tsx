import {Box, IconButton} from "@mui/material";
import {userActions} from "./data/actions.data";

export function UserActions() {
    return (
        <Box sx={{ml: 2}}>
            {userActions.map((action) => (
                <IconButton
                    key={action.label}
                    aria-label={action.label}
                    sx={{color: 'text.primary'}}
                >
                    <Box
                        component="img"
                        src={action.icon}
                        alt=""
                        sx={{
                            width: action.width,
                            height: action.height
                        }}
                    >
                    </Box>
                </IconButton>
            ))}
        </Box>
    );
}