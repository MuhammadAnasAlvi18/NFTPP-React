import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import NftImage1 from "../Assets/Images/unnamed (1).png"
import NftImage2 from "../Assets/Images/image.png"
import btnTopImg from "../Assets/Images/Path 1303.png";
import btnBottomImg from "../Assets/Images/Path 1305.png";

const SectionTwo = () => {
  return (
    <div className="section-two">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <h1>Top 10 Most Viewed NFTs</h1>
          <div className="section-two-cards">
            <div className="cards" data-aos="fade-up"><img src={NftImage1}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage1}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage2}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage2}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage1}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage1}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage1}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage2}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage2}
              className="img-fluid"></img></div>
            <div className="cards" data-aos="fade-up"><img src={NftImage1}
              className="img-fluid"></img></div>
          </div>

        </div>
      </Container>
      <div className="btnDiv"><a href="#" className="loginBTNCustom"><img src={btnBottomImg}
        className="bottomIMG"></img><img src={btnTopImg} className="topIMG"></img></a></div>
    </div>
  )
}

export default SectionTwo;