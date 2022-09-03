import React from 'react';
import './Details.css'
import DetailsThumb from './DetailsThumb';
import Tooltip from '../Tooltip/Tooltip';
import { Container } from 'react-bootstrap';
import { productData } from '../NewArrivals/productData';
import AddToCart from './AddToCart';

class Details extends React.Component{
  state = {
    products: [
      {
        "_id": "1",
        "title": "Heinz Tomato Ketchup",
        "src": [
            "https://i0.wp.com/demo4.drfuri.com/razzi10/wp-content/uploads/sites/29/2020/12/fo401.jpg?fit=1000%2C1200&ssl=1",
            "https://i0.wp.com/demo4.drfuri.com/razzi10/wp-content/uploads/sites/29/2020/12/fo402.jpg?resize=768%2C922&ssl=1",
            "https://i0.wp.com/demo4.drfuri.com/razzi10/wp-content/uploads/sites/29/2020/12/fo403.jpg?resize=768%2C922&ssl=1",
            "https://i0.wp.com/demo4.drfuri.com/razzi10/wp-content/uploads/sites/29/2020/12/fo404.jpg?resize=768%2C922&ssl=1"
          ],
        "description": "In stock",
        "content": "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.",
        "price": 3.99,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render(){
    const {products, index} = this.state;
    const { categoryId } = this.props
    
    const productItem = productData.filter((item) => item.id === Number(categoryId))
    //console.log('productItem: ', productItem[0].title);
    return(
      <Container className='custom-container'>
          <Tooltip title={this.state.products[0].title}/>
              <div className="app">
                {
                  productItem.map(item =>(
                    <div key={item.id} className="details">
                      <div className="big-img">
                        <img src={item.src[index]} alt=""/>
                      </div>

                      <div className="box">
                        <div className="row">
                          <h2>{item.title}</h2>
                          <span>${item.price}</span>
                        </div>
                        {/* <Colors colors={item.colors} /> */}
                        <p>{item.content}</p>
                        <p>({item.description})</p>
                        <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                        <AddToCart item={item}/>
                      </div>
                    </div>
                  ))
                }
              </div>
      </Container>
    );
  };
}

export default Details;