import { Box, Divider,Button } from "@mui/material";
import { Fragment } from "react";
import Body from "../components/Body";
import MovieCarousel from "../components/carousel/MovieCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";
import logo from '../asset/image/logo.png';

const Home = () => {
    return (
        <Fragment>
            <Body>
                <Header/>
                <Main>
                    <Section>
                        <Box mb={5}>
                        <Button color="warning" variant="contained" fullWidth > <img src={logo} height="50" alt="Logo"/> &nbsp;&nbsp;&nbsp;&nbsp; RESEP DESSERT &nbsp;&nbsp;&nbsp;&nbsp;<img src={logo} height="50" alt="Logo"/> </Button>
                            {/* <Typography variant="h6" component="h1"><b>RESEP DESSERT</b></Typography> */}
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel kategori ="resep-dessert" />
                        </Box>
                        <Box mb={5}>
                        <Button color="warning" variant="contained" fullWidth > <img src={logo} height="50" alt="Logo"/> &nbsp;&nbsp;&nbsp;&nbsp; RESEP MASAKAN SEAFOOD &nbsp;&nbsp;&nbsp;&nbsp;<img src={logo} height="50" alt="Logo"/> </Button>
                        
                            {/* <Typography variant="h6" component="h1"><b>RESEP SEAFOOD</b></Typography> */}
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel kategori ="resep-seafood" />
                        </Box>
                        <Box mb={5}><Button color="warning" variant="contained" fullWidth > <img src={logo} height="50" alt="Logo"/> &nbsp;&nbsp;&nbsp;&nbsp; RESEP MASAKAN TRADISIONAL &nbsp;&nbsp;&nbsp;&nbsp;<img src={logo} height="50" alt="Logo"/> </Button>
                        
                            {/* <Typography variant="h6" component="h1"><b>RESEP MASAKAN TRADISIONAL</b></Typography> */}
                            <Divider sx={{ my: 1 }} />
                            <MovieCarousel kategori ="masakan-tradisional" />
                        </Box>
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    )
}

export default Home;