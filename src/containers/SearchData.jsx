import { Box, Divider,Button } from "@mui/material";
import { Fragment } from "react";
import Body from "../components/Body";
import ResepCarousel from "../components/carousel/ResepCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";
import logo from '../asset/image/logo.png';

const SearchData = () => {
    return (
        <Fragment>
            <Body>
                <Header />
                <Main>
                    <Section>
                        <Box mb={5}>
                        <Button color="warning" variant="contained" fullWidth > <img src={logo} height="50" alt="Logo"/> &nbsp;&nbsp;&nbsp;&nbsp; Hasil Pencarian &nbsp;&nbsp;&nbsp;&nbsp;<img src={logo} height="50" alt="Logo"/> </Button>
                            {/* <Typography variant="h6" component="h1"><b>RESEP DESSERT</b></Typography> */}
                            <Divider sx={{ my: 1 }} />
                            <ResepCarousel kategori ="resep-dessert" />
                        </Box>
                        
                        
                        
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    )
}

export default SearchData;