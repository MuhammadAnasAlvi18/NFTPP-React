import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import logo from "../Assets/Images/Component 4 – 1.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-section">
                    <Container>
                        <Row>
                            <Col lg={5} md={4}>
                                <div className="footer-logo">
                                    <Link to='/'><img src={logo} alt="logo" className='img-fluid'></img></Link>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officia quas optio
                                        aspernatur eius quaerat officiis. Eaque impedit sequi omnis, veniam maxime, iste aut at
                                        eligendi provident suscipit nemo voluptatibus!</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4}>
                                <div className="footer-links">
                                    <h6>quick links</h6>
                                    <ul>
                                        <li><Link to='/faq'><a href="#">faq</a></Link></li>
                                        <li><Link to='/publicprofile'><a href="#">nftpp nfts</a></Link></li>
                                        <li><Link to='/editprofile'><a href="#">validations</a></Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className="footer-contact">
                                    <h6>get in touch</h6>
                                    <p>121 king st, melbourne <br />
                                        vic 3000, australia</p>
                                    <p>info@example.com</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="footer-last">
                <h3>&copy; 2021 nftpp.digital</h3>
            </div>
        </>
    )
}

export default Footer;