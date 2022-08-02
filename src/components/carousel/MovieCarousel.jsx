import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item";

import 'swiper/css';
import 'swiper/css/autoplay';

const MovieCarousel = ({ kategori }) => {

    const [movieNowPlaying, setMovieNowPlaying] = useState([]);

    useEffect(() => {
        (async () => {

            const result = await axios.get('https://masak-apa-tomorisakura.vercel.app/api/category/recipes/' + kategori);

            setMovieNowPlaying(result.data.results);

        })();
    });

    return (
        <Fragment>
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
                {movieNowPlaying.map((value, index) => (
                    <SwiperSlide key={index}>
                        <Item data={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
}

export default MovieCarousel;