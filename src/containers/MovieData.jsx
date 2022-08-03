import { Box, Card, CardContent, Button, CardMedia, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";

const MovieData = () => {
    const param = useParams();
    const [resep, setMovie] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipe/' + param.key );
            setMovie(result.data.results);

        })();
    });

    return (
        <Fragment>
            <Body>
                <Header />
                <Main>
                    <Section>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={4}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="600"
                                        image={`${resep.thumb}`}
                                        alt="resep backdrop"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Card sx={{ bgcolor: '#222831' }}>
                                    <CardContent>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Box>
                                                <Typography color= "yellow" variant="h5" component="h1"><b>{resep.title}</b></Typography>
                                                <Typography variant="body1">Waktu Pengerjaan : <b>{resep.times}</b></Typography>
                                                <Typography variant="body1">Jumlah Porsi : <b>{resep.servings}</b></Typography>
                                                <Typography variant="body1">Proses :  <b>{resep.dificulty}</b></Typography>
                                            </Box>
                                            
                                        </Box>
                                        <Divider sx={{ my: 2 }} />
                                        <Box my={3}>
                                            <Typography variant="body1"><b>Bumbu :</b></Typography>
                                            <Typography color= "yellow" variant="body2">{resep.ingredient}</Typography>
                                            <Divider sx={{ marginY: 0.3 }} />
                                            
                                        </Box>
                                        <Box my={3}>
                                            <Typography
                                                variant="body1"><b>Proses Pembuatan :</b></Typography>
                                            <Typography color= "yellow" variant="body2">{resep.step}                           
                                            </Typography>
                                        </Box>

                                        <Box my={3}>
                                            <Typography
                                                variant="body1"><b>Deskripsi Masakan :</b></Typography>
                                            <Typography color= "yellow" variant="body2">{resep.desc}                           
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <Button color="warning" variant="contained" fullWidth type="submit" onClick={() => navigate('/home')}> Kembali </Button>
                                </Card>
                            </Grid>
                        </Grid>
                    </Section>
                </Main>
                <Footer />
            </Body>
        </Fragment>
    )
}

export default MovieData;