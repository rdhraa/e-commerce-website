import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const MyComponent = () => {
  return (
    <Button variant="primary" className="btn-icon">
      <FontAwesomeIcon icon={faShoppingCart} /> Shop Now
    </Button>
  );
};
const Home = () => {
  return (
    <div>
      
      <Carousel id="carouselExampleCaptions" interval={3000}>
        <Carousel.Item>
          <img
            src="/smartphones.webp"
            className="d-block w-100 carousel-image"
            alt="smat phones"
          />
          <Carousel.Caption>
            <h3>Latest Smartphones</h3>
            <p>Explore the best smartphones with cutting-edge features!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/gaming.jpg"
            className="d-block w-100 carousel-image"
            alt="gaming-gadgets"
          />
          <Carousel.Caption>
            <h3>Gaming Gadgets</h3>
            <p>Get the latest in gaming technology.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/smart-home-devices.jpg"
            className="d-block w-100 carousel-image"
            alt="smart-home"
          />
          <Carousel.Caption>
            <h3>Smart Home Devices</h3>
            <p>Transform your home with smart technology.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
      <Container className="my-5">
        <h2 className="text-center">Shop by Categories</h2>
        <Row>
          {/* Category 1 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="sp-2.webp" alt="Category 1" className='card-img'/>
              <Card.Body className="text-center">
                <Card.Title>Smartphones</Card.Title>
                <Card.Text>
                  Browse the latest smartphones from top brands.
                </Card.Text>
                <Link to="/products">
                <Button variant="primary" className="btn-icon">
                <FontAwesomeIcon icon={faShoppingCart} /> Shop Now
                </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Category 2 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="laptops.webp" alt="Category 2" className='card-img'/>
              <Card.Body className="text-center">
                <Card.Title>Laptops & PCs</Card.Title>
                <Card.Text>
                  Get the latest laptops and desktop computers.
                </Card.Text>
                <Link to="/products">
                <Button variant="primary" className="btn-icon">
                <FontAwesomeIcon icon={faShoppingCart} /> Shop Now
                </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Category 3 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="accessories.png" alt="Category 3" className='card-img'/>
              <Card.Body className="text-center">
                <Card.Title>Accessories</Card.Title>
                <Card.Text>
                  Discover accessories for your gadgets!
                </Card.Text>
                <Link to="/products">
                <Button variant="primary" className="btn-icon">
                <FontAwesomeIcon icon={faShoppingCart} /> Shop Now
                </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
