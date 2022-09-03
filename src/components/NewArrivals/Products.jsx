import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './products.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice'
import { addToFavorite } from '../../redux/features/favoriteSlice';
import ViewModal from '../ViewModal/ViewModal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Products = ({productData, popular, titleUrl}) => {
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [des, setDes] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [item, setItem] = useState([]);
    const [img, setImg] = useState([]);

    const dispatch = useDispatch()
    const products = popular ? productData.filter((item) => item.popular === popular) : productData
    const titleFromUrl = productData.filter((item) => item.category === titleUrl)
    const tempData = titleUrl ? titleFromUrl : products

    const handleOpen = (item) => {
        setId(item.id)
        setTitle(item.title)
        setPrice(item.price)
        setStock(item.stock)
        setDes(item.description)
        setCategory(item.category)
        setRating(item.rating)
        setImg(item.src)
        setItem(item)
        setModalShow(true)
    };

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }

    const handleAddToFavorite = (item) =>{
        dispatch(addToFavorite(item))
    }

    return (
        <Container className='custom-container'>
            <Row>
                {   
                    tempData.length > 0
                    ? (
                        tempData.map((item, index) => {
                            return(
                                <Col key={index} xxl={3} xl={3} lg={3} md={3} sm={4} xs={6}>
                                    <div className='products'>
                                        <figure>
                                            <Link  
                                                // to={location => ({ ...location, pathname: `details/${item.id}/${item.category}` })}
                                                to={`/details/${item.id}/${item.category}`}
                                            >
                                                <LazyLoadImage
                                                    className='items'
                                                    alt={item.img}
                                                    effect="blur"
                                                    src={item.img}
                                                />
                                                {/* <img 
                                                    className='items'
                                                    src={item.img} 
                                                    alt={item.title} 
                                                /> */}
                                            </Link>
                                            <div className='products__box'>
                                                <figcaption className='product__add-to-cart'>
                                                    <button
                                                        onClick={()=>handleAddToCart(item)}
                                                    ><ShoppingBagIcon /> &nbsp;&nbsp;Add to cart</button>
                                                </figcaption>
                                                <figcaption className='product__title'>{item.title}</figcaption>
                                                <figcaption className='product__star'>
                                                    {
                                                        Array(item.rating).fill().map((_, i) => (
                                                            <StarIcon key={i} className='product__star-highlight'/>
                                                        ))
                                                    }
                                                </figcaption>
                                                <figcaption className='product__price'>${item.price}</figcaption>
                                            </div>
                                        </figure>
                                        <div className='products__content'>
                                            <div className="product__heart product__icon"
                                                onClick={()=>handleAddToFavorite(item)}
                                            >
                                                {
                                                    item.isFavorite
                                                    ? <FavoriteBorderIcon />
                                                    : <FavoriteIcon 
                                                        className='isFavorite'
                                                    />
                                                }
                                            </div>
                                            <div className="product__view product__icon"
                                                onClick={()=>handleOpen(item)}
                                            >
                                                <RemoveRedEyeIcon />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    ) : (
                        <h4 className='text-center'>No Data!</h4>
                    )
                }
            </Row>
            <ViewModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
                title={title}
                price={price}
                stock={stock}
                des={des}
                rating={rating}
                item={item}
                img={img}
                category={category}
            />
        </Container>
    )
}

export default Products
