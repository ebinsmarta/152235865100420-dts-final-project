import { Box, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <Box p={1} sx={{ bgcolor: '#222831' }}>
                <Container>
                    <Box>
                        <Typography align="center" variant="body2" color="white"> FINAL PROJECT  REA2 PRO DTS 2022 </Typography>
                        <Typography align="center" variant="body1" color="yellow"> <b>HERBINTON BAKTIAR SIMARMATA - 152235865100420</b></Typography>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    );
}

export default Footer;