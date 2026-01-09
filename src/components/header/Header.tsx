import {AppBar, Toolbar, Box, Container} from '@mui/material';
import {Logo} from "../common/Logo";
import {Menu} from './Menu'
import {SearchFlowers} from "./SearchFlowers";
import {UserActions} from "./UserActions";

export function Header() {
    return (
        <AppBar
            component="header"
            position="static"
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                p: '15px 15px'
            }}>
            <Container maxWidth='lg'>
                <Toolbar
                    disableGutters
                    sx={{
                        justifyContent: 'space-between',
                    }}>
                    <Logo variant="black"/>
                    <Menu/>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <SearchFlowers/>
                        <UserActions/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
