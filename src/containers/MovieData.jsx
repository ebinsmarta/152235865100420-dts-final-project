import { Box, Card, CardContent, CardMedia, Divider, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";
import { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";

import 'swiper/css';
import 'swiper/css/autoplay';

const MovieData = () => {
    const param = useParams();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://masak-apa-tomorisakura.vercel.app/api/recipe/' + param.key);

            setMovie(result.data.result);

        })();
    }, []);

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
                                        image={`${movie.thumb}`}
                                        alt="movie backdrop"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Card sx={{ bgcolor: '#222831' }}>
                                    <CardContent>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Box>
                                                <Typography variant="h5" component="h1">{movie.title}</Typography>
                                                <Typography variant="body1">{movie.servings}</Typography>
                                                <Typography variant="caption" color="GrayText">PORSI {movie.times}</Typography>
                                            </Box>
                                            
                                        </Box>
                                        <Divider sx={{ my: 2 }} />
                                        <Box my={3}>
                                            <Typography variant="body2">Rilis pada tanggal : {movie.datePublished}</Typography>
                                            <Divider sx={{ marginY: 0.3 }} />
                                            <Typography variant="body1">{movie.Mudah}</Typography>
                                        </Box>
                                        <Box my={3}>
                                            <Typography
                                                variant="body2">
                                                Budget&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={movie.desc}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            </Typography>
                                            <Typography
                                                variant="body2">
                                                Pendapatan&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={movie.desc}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Box my={3}>
                                                <Typography variant="h6" component="h6">Triler</Typography>
                                            </Box>
                                            <Box>
                                                <iframe
                                                    width="100%"
                                                    height="480"
                                                    src={`#`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded youtube"
                                                />
                                            </Box>
                                        </Box>
                                        <Box my={3}>
                                            <Typography variant="h6" component="h6">Bumbu Masakan</Typography>
                                            <Typography variant="body2">Berikut daftar rumah produksi film ini</Typography>
                                        </Box>
                                        <Box mt={2}>
                                            <Swiper
                                                modules={[Autoplay]}
                                                autoplay
                                                spaceBetween={10}
                                                slidesPerView={5}
                                                onSlideChange={() => { }}
                                                onSwiper={(swiper) => { }}
                                                style={{ width: '100%' }}
                                                breakpoints={{
                                                    // when window width is >= 640px
                                                    0: {
                                                        // width: 640,
                                                        slidesPerView: 1,
                                                    },
                                                    520: {
                                                        // width: 768,
                                                        slidesPerView: 2,
                                                    },
                                                    720: {
                                                        // width: 768,
                                                        slidesPerView: 3,
                                                    },
                                                    1080: {
                                                        // width: 768,
                                                        slidesPerView: 4,
                                                    },
                                                }}
                                            >
                                                {movie.map((value, index) => (
                                                    <SwiperSlide key={index}>
                                                        <Card>
                                                            <CardContent>
                                                                <Box sx={{ minHeight: 230 }}>
                                                                    <Box minHeight={100} display="flex" alignItems="center" justifyContent="center" flexGrow={1} sx={{ minHeight: 180 }}>
                                                                        {value.thumb ?
                                                                            <CardMedia
                                                                                component="img"
                                                                                image={`${value.thumb}`}
                                                                                alt="movie backdrop"
                                                                            />
                                                                            :
                                                                            <CardMedia
                                                                                component="img"
                                                                                image={`${value.thumb}`}
                                                                                alt="movie backdrop"
                                                                            />
                                                                        }
                                                                    </Box>
                                                                    <Typography variant="body2" align="center" color="black">{value.name}</Typography>
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </Box>
                                    </CardContent>
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