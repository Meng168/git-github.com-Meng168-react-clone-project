import React, { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap'
import './Blog.css'
import BlogItems from './BlogItems'
import { blogData } from './blogData'
import BtnMore from '../Button/BtnMore'
import Tooltip from '../Tooltip/Tooltip'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Zoom from 'react-reveal/Zoom';

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import useDebounce from "./useDebounce";

const url = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Blog = () => {
    const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("Queen");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const fetchMovies = async () => {
        setLoading(true);
        let url = "";
        const urlPage = `&page=${page}`;
        const urlQuery = `&s=${query}`;
        url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
        console.log(url);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            if (data.Response === "True") {
                setMovies((oldMovies) => {
                    if (query && page === 1) {
                        return data.Search;
                    } else if (query) {
                        return [...oldMovies, ...data.Search];
                    } else {
                        return [...oldMovies, ...data];
                    }
                });
                // setMovies(data.Search || data);

                setError({
                    show: false,
                    msg: ""
                });
            } else {
                setError({
                    show: true,
                    msg: data.Error
                });
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const [val, setVal] = useState(query);
    const debouncedVal = useDebounce(val, 1000);

    useEffect(() => {
        if (debouncedVal) {
            setPage(1);
            setQuery(debouncedVal);
        }
    }, [debouncedVal]);

    useEffect(() => {
        fetchMovies();
    }, [page, query]);

    const loadMore = () => {
        setPage((oldPage) => {
            return oldPage + 1;
        });
    };
    return (
        <Container className='custom-container'>
            <Tooltip title="Blog"/>
            <HeaderTitle title='Blog'/>
            <Row>
                {movies &&
                    movies.map((movie) => {
                        const {
                            imdbID: id,
                            Poster: poster,
                            Title: title,
                            Year: year
                        } = movie;
                        return (
                            <BlogItems 
                                key={id}
                                title={title}
                                poster={poster}
                                year={year}
                            />
                        );
                    })
                }
            </Row>
            <div className='btn__more'
                onClick={loadMore}
            >
                <Zoom>
                    <BtnMore 
                        text={loading ? 'Loading...' : 'Load More'}/>
                </Zoom>
            </div>
        </Container>
    )
}

export default Blog
