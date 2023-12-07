import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
const Footer = () => {
    const d = new Date();
    let currentYear = d.getFullYear();
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <p>ProShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer