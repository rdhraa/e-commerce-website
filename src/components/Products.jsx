import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Button,Spinner } from 'react-bootstrap'
import '../index.css';
function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://products-api-4-e3wr.onrender.com/products')
      .then((response) => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError('Error fetching products')
        setLoading(false)
      })
  }, [])


  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="warning" />
      </div>
    )
  }

  if (error) {
    return <div>{error}</div>
  }

  return (<div>

      {/* Product Listing */}
      <Container className='mt-4'>
        <Row>
          {products.map((product) => (
            <Col  xs={12} sm={6} md={4} key={product._id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.url} alt={product.name} style={{height:300}}/>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="warning">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;

