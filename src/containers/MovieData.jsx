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

    const [movie, setMovie] = useState({ production_companies: [] });
    const [movieVideo, setmovieVideo] = useState({ production_companies: [] });

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://api.themoviedb.org/3/movie/' + param.id, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                }
            });

            const resultVideo = await axios.get('https://api.themoviedb.org/3/movie/' + param.id + '/videos', {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                }
            });

            setMovie(result.data);
            setmovieVideo(resultVideo.data);

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
                                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
                                                <Typography variant="body1">{movie.tagline}</Typography>
                                                <Typography variant="caption" color="GrayText">IMDB ID : {movie.imdb_id}</Typography>
                                            </Box>
                                            <Box>
                                                <Rating name="read-only" value={5 * movie.vote_average / 10} readOnly />
                                            </Box>
                                        </Box>
                                        <Divider sx={{ my: 2 }} />
                                        <Box my={3}>
                                            <Typography variant="body2">Rilis pada tanggal : {movie.release_date}</Typography>
                                            <Divider sx={{ marginY: 0.3 }} />
                                            <Typography variant="body1">{movie.overview}</Typography>
                                        </Box>
                                        <Box my={3}>
                                            <Typography
                                                variant="body2">
                                                Budget&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={movie.budget}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                />
                                            </Typography>
                                            <Typography
                                                variant="body2">
                                                Pendapatan&nbsp;:&nbsp;
                                                <NumberFormat
                                                    value={movie.revenue}
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
                                                    src={`https://www.youtube.com/embed/${movieVideo.key}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded youtube"
                                                />
                                            </Box>
                                        </Box>
                                        <Box my={3}>
                                            <Typography variant="h6" component="h6">Perusahaan Produksi Film</Typography>
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
                                                {movie.production_companies.map((value, index) => (
                                                    <SwiperSlide key={index}>
                                                        <Card>
                                                            <CardContent>
                                                                <Box sx={{ minHeight: 230 }}>
                                                                    <Box minHeight={100} display="flex" alignItems="center" justifyContent="center" flexGrow={1} sx={{ minHeight: 180 }}>
                                                                        {value.logo_path ?
                                                                            <CardMedia
                                                                                component="img"
                                                                                image={`https://image.tmdb.org/t/p/w500/${value.logo_path}`}
                                                                                alt="movie backdrop"
                                                                            />
                                                                            :
                                                                            <CardMedia
                                                                                component="img"
                                                                                image={`https://www.google.com/search?q=image+placeholder+png+transparent&tbm=isch&ved=2ahUKEwiMkL374Yf5AhUX_zgGHQHdBYgQ2-cCegQIABAA&oq=image+placeholder+png+&gs_lcp=CgNpbWcQARgAMgQIABATMgYIABAeEBMyCAgAEB4QBRATMggIABAeEAUQEzIICAAQHhAFEBMyCAgAEB4QBRATMggIABAeEAUQEzIICAAQHhAIEBMyCAgAEB4QCBATMggIABAeEAgQEzoECCMQJzoGCAAQHhAHOgYIABAeEAhQzQFYzQFg7QtoAHAAeACAAVOIAaUBkgEBMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=7hzYYozhApf-4-EPgbqXwAg#imgrc=4lebkfTV2hZWBM}`}
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