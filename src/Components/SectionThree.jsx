import React from 'react'
import Slider from "react-slick";
import CardImage from '../Assets/Images/3.png'
import CardImage2 from '../Assets/Images/Ellipse -1.png'
import CardImage3 from '../Assets/Images/Ellipse -2.png'
import CardImage4 from '../Assets/Images/Ellipse -3.png'
import btnTopImg from "../Assets/Images/Path 1303.png";
import btnBottomImg from "../Assets/Images/Path 1305.png";
import bottomImg from "../Assets/Images/Path -1.png"
import topImg from "../Assets/Images/Path -2.png"
import whaleNFTimage from "../Assets/Images/weird-whale-nft-gID_-1.png"
import { Link } from 'react-router-dom';


const SectionThree = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="section-three">
            <div className="middle-background">
            </div>
            <div className="sectionthreecarousal">
                <h1>Top 10 Most Viewed USERS</h1>
                <div className="carousal">
                    <Slider {...settings}>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage} className="img-fluid treyImage"></img>
                                </div>
                                <h2>Trey pezzetti</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img
                                        src={btnTopImg} className="topIMG"></img></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage2} className="img-fluid treyImage1"></img>
                                </div>
                                <h2>Abdul</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img
                                        src={btnTopImg} className="topIMG"></img></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage3} className="img-fluid treyImage1"></img>
                                </div>
                                <h2>Tobi</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img
                                        src={btnTopImg} className="topIMG"></img></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage4} className="img-fluid treyImage1"></img>
                                </div>
                                <h2>Kyle</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img src={btnTopImg}
                                        className="topIMG"></img></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage} className="img-fluid treyImage"></img>
                                </div>
                                <h2>Trey pezzetti</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img
                                        src={btnTopImg} className="topIMG"></img></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage2} className="img-fluid treyImage1"></img>
                                </div>
                                <h2>Abdul</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img
                                        src={btnTopImg} className="topIMG"></img></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage3} className="img-fluid treyImage1"></img>
                                </div>
                                <h2>Tobi</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img
                                        src={btnTopImg} className="topIMG"></img></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="members">
                                <div className="imgDiv">
                                    <img src={CardImage4} className="img-fluid treyImage1"></img>
                                </div>
                                <h2>Kyle</h2>
                                <div className="membersbtnDiv"><a href="#" className="loginBTNCustom"><img
                                    src={btnBottomImg} className="bottomIMG"></img><img src={btnTopImg}
                                        className="topIMG"></img></a></div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="section">
                    <div className="sectionBackground">
                        <h2>Want to see more interesting <br /> NFTS?</h2>
                        <Link to='/signup' className='sectionThreeBTNLink'><a href="#" className="sectionThreeBTN">Sign up for a Profile<img src={bottomImg}
                            className="imgBottom"></img><img src={topImg} className="imgTop"></img></a></Link>
                        <img src={whaleNFTimage} className="imgWhale"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;