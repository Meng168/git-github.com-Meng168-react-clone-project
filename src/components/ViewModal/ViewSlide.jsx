import Carousel from 'react-bootstrap/Carousel';

function ViewSlide({img}) {
    return (
        <Carousel>
            {
                img.map((img, index) =>(
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default ViewSlide;