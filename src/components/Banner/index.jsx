import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from "react-router-dom";
// import Spinner from '../_children/Spinner';
// import Error from '../_children/Error'
import Author from '../_children/Author';
// Import Swiper styles
import 'swiper/css';

const banners = {
    banner: [
        {
            id: 1,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img: "/images/img1.jpg",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 3,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation: "CEO and Founder"
            }
        },
        {
            id: 2,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img: "/images/img1.jpg",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 5,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation: "CEO and Founder"
            }
        },
        {
            id: 3,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img: "/images/img1.png",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 7,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation: "CEO and Founder"
            }
        },
        {
            id: 4,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img: "/images/img1.png",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 10,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation: "CEO and Founder"
            }
        },
        {
            id: 5,
            title: "Your most unhappy customers are your greatest source of learning",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            category: "Business, Travel",
            img: "/images/img1.png",
            description: `
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            `,
            published: "Jun 14,  2022",
            author: {
                name: "Flying High",
                img: "/images/author/author1.jpg",
                designation: "CEO and Founder"
            }
        }
    ]
}

export default function Banner() {
    const [data] = useState(banners.banner);
    // const [item, isLoading, isError] = item;
    // if (isLoading) return <Spinner />
    // if (isError) return <Error />

    SwiperCore.use([Autoplay])

    const bg = {
        backgroundImage: `url("/images/banner.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right'
    }
    return (
        <section className="py-16" style={bg} >
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                >
                    {
                        data.map((value) => (
                            <SwiperSlide key={value.id}><Slide data={value}></Slide></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

function Slide({ data }) {
    const { title, category, img, published, description, author } = data;
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link to={'#!'}>
                    <img src={img || "/"} width={600} height={600} alt="ANH 1" />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link to={'#!'}><span className="text-orange-600 hover:text-orange-700">{category || "Unknown"}</span></Link>
                    <Link to={'#!'}><span className="text-gray-800 hover:text-gray-600"> - {published || "Unknown"}</span></Link>
                </div>
                <div className="title">
                    <Link to={'#!'}><span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</span></Link>
                </div>
                <p className="text-gray-500 py-3">{description || "Unknown"}</p>
                {author ? <Author {...author} /> : <></>}
            </div>
        </div>
    )
}
