import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import CameraIcon from "../Assets/Images/photo_camera_black_24dp.png";
import TreyImage from '../Assets/Images/3.png'
import EmailIcon from '../Assets/Images/Group 638.png';
import EmailIcon2 from '../Assets/Images/Group 656.png';
import BioIcon from '../Assets/Images/Group 729.png';
import ProfileIcon from '../Assets/Images/Group 657.png';
import MyNFTIcon from '../Assets/Images/Group 637.png';
import WalletIcon from '../Assets/Images/Group 635.png';
import EditIcon from '../Assets/Images/Group 660.png';
import MsgIcon from "../Assets/Images/Group 638.png";
import UsernameIcon from '../Assets/Images/Group 634.png'
import PasswordIcon from '../Assets/Images/pixels.png'
import JessicaImage from '../Assets/Images/Ellipse 40.png';
import AmieImage from '../Assets/Images/Ellipse -4.png';
import DeboraImage from '../Assets/Images/Ellipse -5.png';
import FeleciaImage from '../Assets/Images/Ellipse -6.png';
import btnTopImg from "../Assets/Images/Path 1303.png";
import btnBottomImg from "../Assets/Images/Path 1305.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';


const EditProfileSection = () => {

    const [heightState, setheightState] = useState("300px");
    const [heightState2, setheightState2] = useState("73px");
    const [viewAllText, setviewAllText] = useState("View All")
    const [backgroundSizer,setbackgroundSizer] = useState("200px")
    const [imageUrl , setimageUrl] = useState(TreyImage);
    const [isTrue, setisTrue] = useState(true);
    const msgDetails = {
        images : [JessicaImage,AmieImage,DeboraImage,FeleciaImage,JessicaImage,AmieImage,DeboraImage,FeleciaImage],
        name : ["jessica Jones","Amie Anderson","Debora Stone","Felecia Hardy","jessica Jones","Amie Anderson","Debora Stone","Felecia Hardy"],
        message : ["Hello How are you doing today","Me: When will you be available?","Yes, It is.","Sorry,I wont be available.","Hello How are you doing today","Me: When will you be available?","Yes, It is.","Sorry,I wont be available."]
    };
    useEffect(()=>{
        console.log(imageUrl)
        if(imageUrl){
            setbackgroundSizer("cover")
        }
    },[imageUrl])

    const styleObject = {
        background:`center / ${backgroundSizer} no-repeat url(${imageUrl})`,
    }

    return (
        <>
            <div className="editProfileSection">
                <Container>
                    <Row>
                        <Col lg={4} md={12}>
                            <div className="editProfileSection1">
                                <div className="editProfileSection1-1">
                                    <div className="profileAvatar" style={styleObject}>
                                    <div className="cameraIMG">
                                    <input type="file" name="file"
                                    onChange={(event)=>{
                                    const img = event.target.files[0];
                                    setimageUrl(URL.createObjectURL(img))
                                    }}
                                    />
                                    <img src={CameraIcon} className="img-fluid"></img></div>
                                    </div>
                                    <h3>Trey Pezzetti</h3>
                                    <h6>Founder NFTPP</h6>
                                    <div className="emailDiv"><img src={EmailIcon}></img><span> reypezzeti@gmail.com</span></div>
                                </div>
                                <div className="editProfileSection1-2">
                                    <div className="profileDiv"><img src={ProfileIcon}></img><span> Profile</span></div>
                                    <div className="myNfts"><img src={MyNFTIcon}></img><span> My NFTs</span></div>
                                    <div className="walletDiv"><img src={WalletIcon}></img><span> Wallet</span></div>
                                </div>
                                <div className="editProfileSection1-3">
                                    <div className="msgDiv">
                                        <img src={MsgIcon}></img><span>Messages</span>
                                        <span className="lastSpan" onClick={() => {
                                            if (isTrue) {
                                                setheightState("650px")
                                                setheightState2("73px")
                                                setisTrue(false)
                                                setviewAllText("View Less")
                                            }
                                            else if (!isTrue) {
                                                setheightState("300px")
                                                setheightState2("73px")
                                                setisTrue(true)
                                                setviewAllText("View All")
                                            }
                                        }}>{viewAllText}</span>
                                    </div>
                                    <div className="msgSections" style={{ height: heightState }}>
                                        <div className="messagesDiv">
                                            {
                                                msgDetails.images.map((imagess,index)=>{
                                                    return(
                                                        <div className="msg" style={{ height: heightState2 }}>
                                                        <img src={imagess} className="img-fluid"></img>
                                                        <div className="msgTxt">
                                                            <h6>{msgDetails.name[index]}</h6>
                                                            <span>{msgDetails.message[index]}</span>
                                                        </div>
                                                        <FontAwesomeIcon icon={faStar} className="faStar"></FontAwesomeIcon>
                                                    </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
                            <div className="editProfileSection2">
                                <div className="editProfileTop">
                                    <span>Profile</span>
                                </div>
                                <div className="editProfileInput">
                                    <form>
                                        <Row>
                                            <Col lg={6} md={6}>
                                                <div className="editProfileInputFields">
                                                    <img src={UsernameIcon}></img>
                                                    <input type="text" placeholder="USERNAME" />
                                                    <img src={EditIcon}></img>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div className="editProfileInputFields">
                                                    <img src={PasswordIcon}></img>
                                                    <input type="password" placeholder="***************" />
                                                    <img src={EditIcon}></img>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div className="editProfileInputFields editProfileFirstNameInput">
                                                    <input type="text" placeholder="First Name" />
                                                    <img src={EditIcon}></img>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div className="editProfileInputFields editProfileFirstNameInput">
                                                    <input type="text" placeholder="Last Name" />
                                                    <img src={EditIcon}></img>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div className="editProfileInputFields">
                                                    <img src={EmailIcon2}></img>
                                                    <input type="email" placeholder="reypezzet@gmail.com" />
                                                    <img src={EditIcon}></img>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div className="editProfileInputFields">
                                                    <img src={BioIcon}></img>
                                                    <input type="text" placeholder="BIO" />
                                                    <img src={EditIcon}></img>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                    <div className="EditProfileBTNDiv"><a href="#" className="loginBTNCustom"><img src={btnBottomImg}
                                        className="bottomIMG"></img><img src={btnTopImg} className="topIMG"></img></a></div>
                                </div>
                                <h3>Do you want to delete your account ?</h3>
                                <div className="EditProfileDeleteBTNDiv"><a href="#" className="loginBTNCustom"><img src={btnBottomImg}
                                    className="bottomIMG"></img><img src={btnTopImg} className="topIMG"></img></a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default EditProfileSection;