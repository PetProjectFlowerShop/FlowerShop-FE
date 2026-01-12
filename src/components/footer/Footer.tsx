import {Box, Container} from '@mui/material';
import {Menu} from "../header/Menu";
import {SocialLinks} from "./SocialLinks";
import {ContactInfo} from "./ContactInfo";
import {LegalLink} from "./LegalLink";
import {Logo} from "../common/Logo";

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'common.black',

            }}
        >
            <Container maxWidth="lg"
                       sx={{
                           p: '60px 72px 40px',
                           display: 'flex',
                           flexDirection: 'column',
                           gap: '127px'
                       }}>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                    <Box
                        sx={{
                            height: '152px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                        <Logo variant="white"/>
                        <SocialLinks/>
                    </Box>

                    <Menu direction={"column"} color={"light"}/>
                    <ContactInfo></ContactInfo>
                </Box>

                <LegalLink></LegalLink>
            </Container>
        </Box>
    );
}
