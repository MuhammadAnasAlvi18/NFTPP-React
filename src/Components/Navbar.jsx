import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import logo from "../Assets/Images/Component 4 – 1.png";
import btnTopImg from "../Assets/Images/Path 1303.png";
import btnBottomImg from "../Assets/Images/Path 1305.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UsernameIcon from '../Assets/Images/Group 634.png'
import EmailIcon2 from '../Assets/Images/Group 656.png';
import LogoutIcon from '../Assets/Images/Group -5.png'

const Navbar = () => {

    const [activeClass, setactiveClass] = useState("not-acive");
    const [opacityState, setopacityState] = useState("0")
    const [classState , setclassState] = useState("profileAvatarMenus none")
    const [isTrue, setisTrue] = useState(false);
    const [isTrue2, setisTrue2] = useState(false);
    const location = useLocation();
    const pageLocation = location.pathname;
    const [justifyContentStyle , setjustifyContentStyle] = useState("space-between");
    useEffect(()=>{
        pageLocation == '/editprofile' ? setjustifyContentStyle("space-evenly") : setjustifyContentStyle("space-between");
    },[])
    
    const showNavbaar = ()=>{
        if (!isTrue) {
            setactiveClass("active");
            setisTrue(true)
        }
        else if (isTrue) {
            setactiveClass("not-active");
            setisTrue(false);
        }
    };

    const ShowprofileMenus = ()=>{
        if(!isTrue2){
            setopacityState("1");
            setclassState("profileAvatarMenus active");
            setisTrue2(true)
        }
        else if(isTrue2){
            setopacityState("0");
            setclassState("profileAvatarMenus none");
            setisTrue2(false)
        }
    };


    return (
        <nav>
            <Container>
                <div className="navbaar" style={{justifyContent:justifyContentStyle}}>
                    <Link to='/'><img src={logo} alt="nftpp-logo" /></Link>
                    <ul className={activeClass}>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/publicprofile'>NFTPP NFTs</Link></li>
                        <li><Link to='/editprofile'>Validations</Link></li>
                    {
                    pageLocation == '/editprofile'? 
                    <li>
                    <div className='toggleProfileMenus' onClick={ShowprofileMenus}></div>
                    <div className="profileAvatar1"><div className={classState} style={{opacity:opacityState}}>
                    <span><img src={UsernameIcon} alt="profile" /> Profile</span>
                    <span><img src={EmailIcon2} alt="message" /> Messages</span>
                    <span><img src={LogoutIcon} alt="logout" /> Logout</span>
                    </div>
                    </div></li> 
                    : 
                    <li><Link to='/signin'><a href="#" className='loginBTNCustom'><img src={btnBottomImg} alt="btn-bottom-image" className='bottomIMG' />
                        <img src={btnTopImg} alt="btn-top-image" className='topIMG' />
                    </a>
                    </Link></li> 
                    }
                    </ul>
                    <FontAwesomeIcon icon={faBars} className='faBars' onClick={showNavbaar}></FontAwesomeIcon>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;