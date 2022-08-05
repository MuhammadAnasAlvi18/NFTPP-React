import React from 'react'
import { useEffect } from 'react';
import { Accordion } from "react-bootstrap";

const AccordionItems = ({nftppFaqs}) => {

    return (
        <>
        {
            nftppFaqs.map((faq, index) => {
                return (
                    <Accordion.Item key={index+1} eventKey={index} data-aos="fade-right">
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>
                            {faq.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })
        }
        </>
    )
}

export default AccordionItems;