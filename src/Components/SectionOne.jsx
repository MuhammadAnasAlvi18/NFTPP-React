import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PunkVarietyImage from '../Assets/Images/punk-variety-2x.png'

const SectionOne = () => {

    return (
        <div className="section-one" data-aos="fade-up">
            <Container>
                <div className="section-one-txt">
                    <h1>Discover the top NFT</h1>
                    <h3>NFT Collections</h3>
                    <p>We believe you have unique taste, build your NFT public</p>
                    <p>Profile to show it off</p>
                    <div className="section-one-input">
                        <input type="text" placeholder='Search For A Username' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='faMagnifyingGlass'></FontAwesomeIcon>
                    </div>
                </div>
            </Container>
            <div className="d-flex justify-content-center">
                <img src={PunkVarietyImage} className="img-fluid"></img>
            </div>
        </div>
    )
}

export default SectionOne;