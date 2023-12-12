import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'
import axios from '../components/axios'
import { useState, useEffect } from "react"
const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const req = await axios.get('/api/products');
            setProducts(req.data);
            // console.log(req.data)
        }
        fetchProducts();
    }, []);
    return (<>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => {
                return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            })}
        </Row>
    </>
    )
}

export default HomeScreen