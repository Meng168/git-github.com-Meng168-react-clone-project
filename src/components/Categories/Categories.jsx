import { Container } from 'react-bootstrap'
import React from 'react'
import './Categories.css'
import { categoriesData } from './categoriesData'
import { Link } from 'react-router-dom'
import Flip from 'react-reveal/Flip';

const Categories = () => {
    return (
        <Container fluid={true} className='categories-bg'>
            <Container className='custom-container'>
                <div className="title__bar">
                    <Flip bottom>
                        <h2>Browse More Categories</h2>
                    </Flip>
                </div>
                <div className='categories cards'>
                    {
                        categoriesData.map((item, index) => (
                            <div key={index} className="categories__box card" style={{ background: `${item.color}` }}>
                                <figure>
                                    <Link to={`/${item.id}/product-category/${item.name}`}>
                                        <img 
                                            src={item.img} 
                                            alt="" 
                                        />
                                    </Link>
                                    <figcaption>
                                        <h6 className="box-title">{item.name}</h6>
                                    </figcaption>
                                </figure>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </Container>
    )
}

export default Categories
