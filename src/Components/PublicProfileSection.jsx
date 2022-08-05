import React from 'react'
import bottomImg from "../Assets/Images/Path -1.png"
import topImg from "../Assets/Images/Path -2.png"
import whaleNFTimage from "../Assets/Images/weird-whale-nft-gID_-1.png"
import TreyImage from '../Assets/Images/3.png'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import CardImage1 from '../Assets/Images/image (1).png'
import CardImage2 from '../Assets/Images/unnamed (1).png'
import CardImage3 from '../Assets/Images/image.png'
import { Link } from 'react-router-dom'

const PublicProfileSection = () => {
    return (
        <>
            <div className="profileSection">
                <div className="profileImg" data-aos="fade-right">
                    <img src={TreyImage} />
                </div>
                <div className="profileText" data-aos="fade-right">
                    <h3>Treypezzettti</h3>
                    <h4>nftpp.digital/username</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas enim quasi quidem tenetur ad dignissimos? Dolore perspiciatis ut facilis animi eos assumenda esse temporibus labore, rerum quos, nisi pariatur?</p>
                </div>
            </div>
            <div className="faqSection">
                <Container>
                    <Row>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage2} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1000">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1200">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1200">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1200">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1200">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1300">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1300">
                            <img src={CardImage2} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1300">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1300">
                            <img src={CardImage1} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1400">
                            <img src={CardImage3} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1400">
                            <img src={CardImage3} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1400">
                            <img src={CardImage3} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1400">
                            <img src={CardImage3} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1500">
                            <img src={CardImage3} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1500">
                            <img src={CardImage2} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1500">
                            <img src={CardImage3} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='profileCards' data-aos="fade-up" data-aos-duration="1500">
                            <img src={CardImage3} alt="card-NFTs-Images" className='img-fluid mx-auto d-flex' />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section2">
                <div className="sectionBackground2">
                    <h2>Want to see more interesting <br /> NFTS?</h2>
                    <Link to='/signup' className='sectionThreeBTNLink'><a href="#" className="sectionThreeBTN">Sign up for a Profile<img src={bottomImg}
                            className="imgBottom"></img><img src={topImg} className="imgTop"></img></a></Link>
                    <img src={whaleNFTimage} className="imgWhale"></img>
                </div>
            </div>
        </>
    )
}

export default PublicProfileSection;