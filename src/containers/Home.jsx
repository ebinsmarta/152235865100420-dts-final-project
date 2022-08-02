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
                            <Typography variant="h6" component="h1">RESEP TERBARU</Typography>
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel type="now_playing" />
                        </Box>
                        <Box mb={5}>
                            <Typography variant="h6" component="h1">KATEGORI RESEP MASAKAN</Typography>
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel type="top_rated" />
                        </Box>
                        <Box mb={5}>
                            <Typography variant="h6" component="h1">RESEP TERFAVORIT</Typography>
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel type="upcoming" />
                        </Box>
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    )
}

export default Home;