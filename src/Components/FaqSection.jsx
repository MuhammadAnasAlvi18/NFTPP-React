import React , {useEffect} from 'react'
import bottomImg from "../Assets/Images/Path -1.png"
import topImg from "../Assets/Images/Path -2.png"
import whaleNFTimage from "../Assets/Images/weird-whale-nft-gID_-1.png"
import { Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AccordionItems from './AccordionItems';
import { useState } from 'react';

const FaqSection = () => {

    const [faqs , setfaqs] = useState(null)

    useEffect(() => {

        fetch("/api/faqs")
        .then((res) => res.json())
        .then((json)=> {
            setfaqs(json)
        })
      },[])

    return (
        <>
            <div className="faqSection">
                <h1>faq</h1>
                <Accordion defaultActiveKey="0">
                    {
                        faqs ? 
                        <AccordionItems nftppFaqs={faqs}/> :
                        <h1 className='loaderH1'>Loading ...</h1>
                    }
                </Accordion>
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

export default FaqSection;