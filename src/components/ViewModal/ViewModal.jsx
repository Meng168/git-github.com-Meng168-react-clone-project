import Modal from 'react-bootstrap/Modal';
import './ViewModal.css'
import ErrorIcon from '@mui/icons-material/Error';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Col, Row } from 'react-bootstrap';
import ViewSlide from './ViewSlide';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice'
import { addToFavorite } from '../../redux/features/favoriteSlice';

function ViewModal(props) {
    const dispatch = useDispatch()

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }
    const handleAddToFavorite = (item) =>{
        dispatch(addToFavorite(item))
    }
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            //style={style}
            dialogClassName="custom-dialog"
        >
        <Modal.Header closeButton className='modal__header'></Modal.Header>
            <Modal.Body>
                <div className='modal__main'>
                    <Row>
                        <Col xxl={5} xl={5} sm={12}>
                            <div className='modal-left'>
                                <div className='modal-left__slide-img'>
                                    {/* <img 
                                        src="https://i0.wp.com/demo4.drfuri.com/razzi10/wp-content/uploads/sites/29/2020/12/fo401.jpg?resize=768%2C922&ssl=1" 
                                        alt="" 
                                    /> */}
                                    <ViewSlide img={props.img}/>
                                </div>
                                <Link  
                                    to={`/details/${props.id}/${props.category}`}
                                >
                                    <div className='modal-left__button'>
                                        <button>More Product Info <ErrorIcon /></button>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                        <Col xxl={7} xl={7} sm={12}>
                            <div className='modal-right'>
                                <div className="woocommerce-product">
                                    <div className='woocommerce-product-rating'>
                                        {
                                            Array(props.rating).fill().map((_, i) => (
                                                <StarIcon key={i} className='product__star-highlight'/>
                                            ))
                                        }
                                    </div>
                                    <div className='woocommerce-product-review'>
                                        <h5>Review <span>(1)</span></h5>
                                    </div>
                                </div>
                                <h1 className='woocommerce-product-title'>{props.title}</h1>
                                <h3 className='woocommerce-product-price'>${parseFloat(props.price).toFixed(2)} <span>({props.stock})</span></h3>
                                <p>
                                    {props.des}
                                </p>
                                <button 
                                    className='btn btn-frm woocommerce-product-cart'
                                    onClick={()=>handleAddToCart(props.item)}
                                >Add To Cart</button>
                                <button 
                                    className='btn btn-frm woocommerce-product-wishlist'
                                    onClick={()=>handleAddToFavorite(props.item)}
                                >Wishlist <FavoriteBorderIcon /></button>
                                <div className="product_meta">
                                    <div className="sku_wrapper"><span className="label">SKU:</span><span className="sku">{Math.random().toString()}</span></div>
                                    <div className="posted_in"><span className="label">Categories:</span><a href="https://demo4.drfuri.com/razzi10/product-category/bakery/" rel="tag">{props.category}</a></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ViewModal