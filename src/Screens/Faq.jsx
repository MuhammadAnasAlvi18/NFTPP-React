import React , {useEffect} from 'react'
import FaqSection from '../Components/FaqSection';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Faq = () => {

  useEffect(() => {
    document.title = "NFTPP - FAQ"
 }, []);

  return (
    <>
    <Navbar />
    <FaqSection/>
    <Footer />
    </>
  )
}

export default Faq;