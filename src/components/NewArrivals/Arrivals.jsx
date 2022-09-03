import React, { useEffect, Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import './Arrivals.css'
import Products from './Products'
import { productData } from './productData'
import Tooltip from '../Tooltip/Tooltip'
import HeaderTitle from '../HeaderTitle/HeaderTitle'

const Arrivals = ({shop, tabs, popular, titleHead, titleUrl}) => {
    const [category, setCategory] = useState('All')
    const [allProducts, setAllProducts] = useState(productData)

    useEffect(() => {
        if(category === "All"){
            setAllProducts(productData)
        }
        if(category === "Vegetables"){
            const filteredProducts = productData.filter((item) => item.category === "Vegetables")
            setAllProducts(filteredProducts)
        }
        if(category === "Meats"){
            const filteredProducts = productData.filter((item) => item.category === "Meats")
            //console.log('Meats: ', filteredProducts);
            setAllProducts(filteredProducts)
        }
    }, [category]);
    return (
        <Fragment>
            <Container className='custom-container'>
                {
                    shop && (
                        <>
                            <Tooltip title={titleHead}/>
                            <HeaderTitle title={titleHead}/>
                        </>
                    )
                }
                
                {
                    tabs && (
                        <div className="tabs">
                            <div className={`tabs__items ${category === "All" ? 'active': ''}`} onClick={()=>setCategory('All')}>All</div>
                            <div className={`tabs__items ${category === "Meats" ? 'active': ''}`} onClick={()=>setCategory('Meats')}>Meats</div>
                            <div className={`tabs__items ${category === "Vegetables" ? 'active': ''}`} onClick={()=>setCategory('Vegetables')}>Vegetables</div>
                        </div>
                    )
                }
            </Container>
            <Products 
                popular={popular}
                productData={allProducts}
                titleUrl={titleUrl}
            />
        </Fragment>
    )
}

export default Arrivals
