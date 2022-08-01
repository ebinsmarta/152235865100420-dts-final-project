import MainComponent from "../components/Main";
import { Fragment, useEffect, useRef } from "react"
import Body from "../components/Body"
import Header from "../components/Header"
import Section from "../components/Section"
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-web";

const Main = () => {
    const navigate = useNavigate();

    const container = useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../asset/animation/45732-cinema-animation.json')
        });
    }, []);

    return (
        <Fragment>
            <Body>
                <Header />
                <MainComponent>
                    <Section>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} md={4}>
                                <Card sx={{ bgcolor: '#222831' }}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography align="center" variant="h6" component="h6"> Selamat Datang di</Typography>
                                        <Typography align="center" variant="h4" component="h1"> Resep MasakanKU</Typography>
                                        <Typography align="center" variant="body1"> Informasi Lengkap Resep Masakan enak dan terupdate hanya ada disini </Typography>
    
                                        <Box mt={10}>
                                            <Button fullWidth variant="contained" color="success" onClick={() => { navigate('/login') }}> Login </Button>
                                            <Divider sx={{ marginY: 1, color: 'white' }}> <Typography color="GrayText"></Typography> </Divider>
                                            <Button fullWidth variant="contained" color="warning" onClick={() => { navigate('/registration') }}> registrasi </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Section>
                </MainComponent>
            </Body>
        </Fragment >
    )
}

export default Main;