import { Box, Divider, Typography } from "@mui/material";
import { Fragment } from "react";
import Body from "../components/Body";
import MovieCarousel from "../components/carousel/MovieCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";

const Home = () => {
    return (
        <Fragment>
            <Body>
                <Header />
                <Main>
                    <Section>
                        <Box mb={5}>
                            <Typography variant="h6" component="h1"><b>RESEP DESSERT</b></Typography>
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel type="resep-dessert" />
                        </Box>
                        <Box mb={5}>
                            <Typography variant="h6" component="h1">RESEP SEAFOOD</Typography>
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel type="resep-seafood" />
                        </Box>
                        <Box mb={5}>
                            <Typography variant="h6" component="h1">RESEP MASAKAN TRADISIONAL</Typography>
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel type="masakan-tradisional" />
                        </Box>
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    )
}

export default Home;